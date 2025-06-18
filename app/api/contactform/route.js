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
    if (!name || !email || !phone) {
      return Response.json(
        { error: "Name, email, and phone are required" },
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

    // Verify reCAPTCHA token with Google
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      { method: "POST" }
    );

    const recaptchaData = await recaptchaResponse.json();

    // If reCAPTCHA verification fails
    if (!recaptchaData.success) {
      return Response.json(
        { error: "reCAPTCHA verification failed" },
        { status: 400 }
      );
    }

    // Determine recipient email based on location
    let recipientEmail = process.env.NEXT_PUBLIC_EMAIL_TO;

    if (location) {
      if (location.toLowerCase().includes("beaches")) {
        recipientEmail = process.env.NEXT_FOR_BEACHES_LOCATION;
      } else if (location.toLowerCase().includes("rosedale")) {
        recipientEmail = process.env.NEXT_FOR_YORKVILLE_LOCATION;
      }
    }

    // Fallback to default if location-specific email is not configured
    if (!recipientEmail) {
      recipientEmail = process.env.NEXT_PUBLIC_EMAIL_TO;
    }

    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: process.env.EMAIL_SERVER_PORT,
      secure: process.env.EMAIL_SERVER_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: email,
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

    await transporter.sendMail(mailOptions);

    // Return success
    return Response.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}
