import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      dob,
      message,
      promoCode,
      location,
      recaptchaToken,
    } = body;
    // Validate required fields
    if (!name || !email || !phone || !location) {
      return Response.json(
        { error: "Name, email, phone, location are required" },
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

    // Determine recipient email based on location
    let recipientEmail = process.env.EMAIL_TO;

    if (location) {
      const normalizedLocation = location.toLowerCase();

      if (normalizedLocation.includes("beaches")) {
        recipientEmail = process.env.FOR_BEACHES_LOCATION;
      } else if (
        normalizedLocation.includes("yorkville") ||
        normalizedLocation.includes("rosedale")
      ) {
        recipientEmail = process.env.FOR_YORKVILLE_LOCATION;
      }
    }

    // Fallback to default if location-specific email is not configured
    if (!recipientEmail) {
      recipientEmail = process.env.EMAIL_TO;
    }

    const smtpHost = process.env.EMAIL_SERVER_HOST;
    const smtpPort = Number(process.env.EMAIL_SERVER_PORT || 587);
    const smtpSecure = process.env.EMAIL_SERVER_SECURE === "true";
    const smtpUser = process.env.EMAIL_SERVER_USER;
    const smtpPassword = process.env.EMAIL_SERVER_PASSWORD;
    const senderEmail = process.env.EMAIL_FROM || smtpUser;

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPassword || !senderEmail) {
      console.error("Missing SMTP configuration for contact form", {
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
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Date of Birth: ${dob || "Not provided"}
        Location: ${location || "Not selected"}
        Promo Code: ${promoCode || "None"}
        
        Message:
        ${message || "No message provided"}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Date of Birth:</strong> ${dob || "Not provided"}</p>
        <p><strong>Location:</strong> ${location || "Not selected"}</p>
        <p><strong>Promo Code:</strong> ${promoCode || "None"}</p>
        <p><strong>Message:</strong></p>
        <p>${message || "No message provided"}</p>
      `,
    };

    await transporter.verify();
    await transporter.sendMail(mailOptions);

    // Return success
    return Response.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Error sending contact form email", {
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
