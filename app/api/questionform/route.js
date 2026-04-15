import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const { fullName, phone, email, dateOfBirth, message, recaptchaToken } =
      body;

    // Validate required fields
    if (!fullName || !email || !phone || !dateOfBirth || !message) {
      return Response.json(
        {
          error: "Name, email, phone, date of birth, and message are required",
        },
        { status: 400 }
      );
    }
    // Validate reCAPTCHA token
    if (!recaptchaToken) {
      return Response.json(
        { error: "reCAPTCHA verification failed" },
        { status: 400 }
      );
    }

    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;

    if (!recaptchaSecret) {
      console.error("Missing RECAPTCHA_SECRET_KEY configuration");
      return Response.json(
        { error: "Form is temporarily unavailable" },
        { status: 500 }
      );
    }

    // Verify reCAPTCHA token with Google
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptchaToken}`,
      { method: "POST" }
    );

    if (!recaptchaResponse.ok) {
      console.error("reCAPTCHA verification request failed", {
        status: recaptchaResponse.status,
        statusText: recaptchaResponse.statusText,
      });
      return Response.json(
        { error: "reCAPTCHA verification failed" },
        { status: 400 }
      );
    }

    const recaptchaData = await recaptchaResponse.json();

    // If reCAPTCHA verification fails
    if (!recaptchaData.success) {
      console.error("reCAPTCHA verification unsuccessful", {
        errorCodes: recaptchaData["error-codes"] || [],
        hostname: recaptchaData.hostname,
        action: recaptchaData.action,
      });
      return Response.json(
        { error: "reCAPTCHA verification failed" },
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
      console.error("Missing SMTP configuration for question form", {
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
      subject: "New Contact Form Submission",
      text: `
        Name: ${fullName}
        Email: ${email}
        Phone: ${phone}
        Date of Birth: ${dateOfBirth}
        
        Message:
        ${message || "No message provided"}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Date of Birth:</strong> ${dateOfBirth}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
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
    console.error("Error sending question form email", {
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
