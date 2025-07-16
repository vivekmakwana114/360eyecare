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

    const transporter = nodemailer.createTransport({
      host: process.env.NEXT_PUBLIC_EMAIL_SERVER_HOST,
      port: process.env.NEXT_PUBLIC_EMAIL_SERVER_PORT,
      secure: process.env.NEXT_PUBLIC_EMAIL_SERVER_SECURE === "true",
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_SERVER_USER,
        pass: process.env.NEXT_PUBLIC_EMAIL_SERVER_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.NEXT_PUBLIC_EMAIL_FROM || email,
      to: process.env.NEXT_FOR_YORKVILLE_LOCATION,
      subject: "Free Digital Eye Strain Consultation",
      text: `
        Name: ${fullName}
        Email: ${email}
        Phone Number: ${phoneNumber}
      `,
    };

    await transporter.sendMail(mailOptions);

    return Response.json({
      success: true,
      message: "Your request has been submitted successfully",
    });
  } catch (error) {
    return Response.json(
      { error: "Failed to process your request" },
      { status: 500 }
    );
  }
}
