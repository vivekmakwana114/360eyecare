import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const { name, phone, email, date } = body;

    // Validate required fields
    if (!name || !email || !phone || !date) {
      return Response.json(
        { error: "Name, email, phone, and date are required" },
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
      console.error("Missing SMTP configuration for virtual shop form", {
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

    // Email content
    const mailOptions = {
      from: senderEmail,
      replyTo: email,
      to: recipientEmail,
      subject: "New Virtual Shop Form Submission",
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Date: ${date}
      `,
      html: `
        <h2>Virtual Shopping Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Date:</strong> ${date}</p>
      `,
    };

    // Send the email
    await transporter.verify();
    await transporter.sendMail(mailOptions);

    // Return success
    return Response.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Error sending virtual shop form email", {
      message: error?.message,
      code: error?.code,
      command: error?.command,
      response: error?.response,
      responseCode: error?.responseCode,
      stack: error?.stack,
    });
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}
