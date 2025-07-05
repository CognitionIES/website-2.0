// app/api/send-email/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      interestedIn,
      requirements,
      consent,
    } = await req.json();

    // Basic server-side validation
    if (!firstName || !lastName || !email || !phone || !company || !interestedIn || !requirements || !consent) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // Or your preferred email service
      auth: {
        user: process.env.EMAIL_USER, // Sender email from .env
        pass: process.env.EMAIL_PASS, // Sender app-specific password from .env
      },
    });

    // Email content
    const htmlContent = `
      <h2>New Contact Form Submission</h2>
      <table style="width: 100%; border-collapse: collapse; font-family: Arial, sans-serif;">
        <tr style="background-color: #f2f2f2;">
          <th style="padding: 8px; border: 1px solid #ddd;">Field</th>
          <th style="padding: 8px; border: 1px solid #ddd;">Value</th>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;">First Name</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${firstName}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;">Last Name</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${lastName}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;">Email</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;">Phone</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${phone}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;">Company</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${company}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;">Interested In</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${interestedIn}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;">Requirements</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${requirements}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;">Consent</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${consent ? "Yes" : "No"}</td>
        </tr>
      </table>
      <p style="margin-top: 20px; font-size: 12px; color: #666;">
        Sent from your website contact form on ${new Date().toLocaleString()}
      </p>
    `;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL, // Recipient email from .env
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send email", details: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}