import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      fullName,
      phone,
      email,
      lookingFor,
      preferredDate,
      preferredTime,
    } = body;

    // Validate required fields
    if (
      !fullName ||
      !email ||
      !phone ||
      !lookingFor ||
      !preferredDate ||
      !preferredTime
    ) {
      return Response.json(
        {
          error:
            "Full name, email, phone, service interest, preferred date, and preferred time are required.",
        },
        { status: 400 }
      );
    }

    const smtpHost = process.env.EMAIL_SERVER_HOST;
    const smtpPort = Number(process.env.EMAIL_SERVER_PORT || 587);
    const smtpSecure = process.env.EMAIL_SERVER_SECURE === "true";
    const smtpUser = process.env.EMAIL_SERVER_USER;
    const smtpPassword = process.env.EMAIL_SERVER_PASSWORD;
    const senderEmail = process.env.EMAIL_FROM || smtpUser;
    const recipientEmail =
      process.env.FOR_YORKVILLE_LOCATION || "yorkville@360eyecare.ca";

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPassword || !senderEmail) {
      console.error("Missing SMTP configuration for Yorkville booking form");
      return Response.json(
        { error: "Form is temporarily unavailable." },
        { status: 500 }
      );
    }

    // Create transporter
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
      subject: "New Eye Exam Booking Request - 360 Eyecare Yorkville",
      text: `
        New Eye Exam Booking Request (Yorkville)

        Full Name: ${fullName}
        Email: ${email}
        Phone: ${phone}
        What are you looking for: ${lookingFor}
        Preferred Date: ${preferredDate}
        Preferred Time: ${preferredTime}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; color: #333; border: 1px solid #e0e0e0; rounded: 8px;">
          <h2 style="color: #034D76; border-bottom: 2px solid #40BCC8; padding-bottom: 10px; margin-top: 0;">
            New Eye Exam Booking Request — Yorkville
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 8px; font-weight: bold; width: 180px; border-bottom: 1px solid #f0f0f0;">Full Name:</td>
              <td style="padding: 8px; border-bottom: 1px solid #f0f0f0;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #f0f0f0;">Email:</td>
              <td style="padding: 8px; border-bottom: 1px solid #f0f0f0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #f0f0f0;">Phone Number:</td>
              <td style="padding: 8px; border-bottom: 1px solid #f0f0f0;"><a href="tel:${phone}">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #f0f0f0;">Looking For:</td>
              <td style="padding: 8px; border-bottom: 1px solid #f0f0f0;">${lookingFor}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #f0f0f0;">Preferred Date:</td>
              <td style="padding: 8px; border-bottom: 1px solid #f0f0f0;">${preferredDate}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #f0f0f0;">Preferred Time:</td>
              <td style="padding: 8px; border-bottom: 1px solid #f0f0f0;">${preferredTime}</td>
            </tr>
          </table>
        </div>
      `,
    };

    await transporter.verify();
    await transporter.sendMail(mailOptions);

    return Response.json({
      success: true,
      message: "Booking request submitted successfully.",
    });
  } catch (error) {
    console.error("Error sending Yorkville booking email:", error);
    return Response.json(
      { error: "Failed to send booking request." },
      { status: 500 }
    );
  }
}
