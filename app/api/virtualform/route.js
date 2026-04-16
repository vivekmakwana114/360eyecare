import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    // Extract only the fields that exist in the form
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      dateOfBirth,
      preferredDate,
      preferredTime,
      reasonForVisit,
      consentAgreed,
    } = body;

    // Validate required fields
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phoneNumber ||
      !preferredDate ||
      !preferredTime ||
      !reasonForVisit
    ) {
      return Response.json(
        { error: "All required fields must be completed" },
        { status: 400 }
      );
    }

    // Validate consent agreement
    if (!consentAgreed) {
      return Response.json(
        { error: "You must agree to the Virtual Consult Consent Form" },
        { status: 400 }
      );
    }

    const smtpHost = process.env.EMAIL_SERVER_HOST;
    const smtpPort = Number(process.env.EMAIL_SERVER_PORT || 587);
    const smtpSecure = process.env.EMAIL_SERVER_SECURE === "true";
    const smtpUser = process.env.EMAIL_SERVER_USER;
    const smtpPassword = process.env.EMAIL_SERVER_PASSWORD;
    const senderEmail = process.env.EMAIL_FROM || smtpUser;
    const recipientEmail = process.env.FOR_BEACHES_LOCATION || process.env.EMAIL_TO;

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPassword || !senderEmail) {
      console.error("Missing SMTP configuration for virtual form", {
        hasHost: Boolean(smtpHost),
        hasPort: Boolean(smtpPort),
        hasUser: Boolean(smtpUser),
        hasPassword: Boolean(smtpPassword),
        hasSenderEmail: Boolean(senderEmail),
        hasRecipientEmail: Boolean(recipientEmail),
      });
      return Response.json(
        { error: "Form is temporarily unavailable" },
        { status: 500 }
      );
    }

    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });

    const fullName = `${firstName} ${lastName}`;

    // Email content
    const mailOptions = {
      from: senderEmail,
      replyTo: email,
      to: recipientEmail,
      subject: "New Virtual Consultation Request",
      text: `
        Virtual Consultation Request
        
        Name: ${fullName}
        Email: ${email}
        Phone: ${phoneNumber}
        Date of Birth: ${dateOfBirth || "Not provided"}
        Preferred Date: ${preferredDate}
        Preferred Time: ${preferredTime}
        
        Reason for Visit:
        ${reasonForVisit}
        
        Consent Form Agreed: Yes
      `,
      html: `
        <h2>Virtual Consultation Request</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phoneNumber}</p>
        <p><strong>Date of Birth:</strong> ${dateOfBirth || "Not provided"}</p>
        <p><strong>Preferred Date:</strong> ${preferredDate}</p>
        <p><strong>Preferred Time:</strong> ${preferredTime}</p>
        <p><strong>Reason for Visit:</strong></p>
        <p>${reasonForVisit.replace(/\n/g, "<br>")}</p>
        <p><strong>Consent Form Agreed:</strong> Yes</p>
      `,
    };

    // Send the email
    await transporter.verify();
    await transporter.sendMail(mailOptions);

    // Return success
    return Response.json({
      success: true,
      message:
        "Your virtual consultation request has been submitted successfully",
    });
  } catch (error) {
    console.error("Error processing virtual consultation request", {
      message: error?.message,
      code: error?.code,
      command: error?.command,
      response: error?.response,
      responseCode: error?.responseCode,
      stack: error?.stack,
    });
    return Response.json(
      { error: "Failed to process your request" },
      { status: 500 }
    );
  }
}
