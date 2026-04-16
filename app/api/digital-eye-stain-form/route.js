import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { firstName, lastName, phoneNumber, email } = body;

    if (!firstName || !lastName || !phoneNumber || !email) {
      return Response.json(
        { error: "All required fields must be completed" },
        { status: 400 }
      );
    }

    const fullName = `${firstName} ${lastName}`;

    const smtpHost = process.env.EMAIL_SERVER_HOST;
    const smtpPort = Number(process.env.EMAIL_SERVER_PORT || 587);
    const smtpSecure = process.env.EMAIL_SERVER_SECURE === "true";
    const smtpUser = process.env.EMAIL_SERVER_USER;
    const smtpPassword = process.env.EMAIL_SERVER_PASSWORD;
    const senderEmail = process.env.EMAIL_FROM || smtpUser;
    const recipientEmail = process.env.FOR_YORKVILLE_LOCATION || process.env.EMAIL_TO;

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPassword || !senderEmail) {
      console.error("Missing SMTP configuration for digital eye strain form", {
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

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });

    const mailOptions = {
      from: senderEmail,
      replyTo: email,
      to: recipientEmail,
      subject: "Free Digital Eye Strain Consultation",
      text: `
        Name: ${fullName}
        Email: ${email}
        Phone Number: ${phoneNumber}
      `,
    };

    await transporter.verify();
    await transporter.sendMail(mailOptions);

    return Response.json({
      success: true,
      message: "Your request has been submitted successfully",
    });
  } catch (error) {
    console.error("Error processing digital eye strain form", {
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
