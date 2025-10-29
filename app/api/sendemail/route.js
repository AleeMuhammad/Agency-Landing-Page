import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    // Create transporter for Outlook / custom SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: Number(process.env.EMAIL_PORT) === 465, // true for SSL
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 🔍 Optional: verify connection (good for debugging)
    await transporter.verify();

    // 📩 Email to company owner
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `📬 New Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; background:#f8f9fa; padding:20px; border-radius:10px;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong></p>
          <blockquote style="border-left:4px solid #007bff; padding-left:10px; color:#555;">
            ${message}
          </blockquote>
        </div>
      `,
    });

    // 📧 Confirmation email to sender
    await transporter.sendMail({
      from: `"Embrace Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "✅ We received your message!",
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; background:#f8f9fa; padding:20px; border-radius:10px;">
          <h2>Thank you, ${name}!</h2>
          <p>We’ve received your message and our team will get back to you shortly.</p>
          <hr style="margin:20px 0;" />
          <p><strong>Your Message:</strong></p>
          <blockquote style="border-left:4px solid #007bff; padding-left:10px; color:#555;">
            ${message}
          </blockquote>
          <p>Best regards,<br><strong>Embrace Team</strong></p>
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("❌ Email sending error:", error);
    return new Response(JSON.stringify({ error: "Failed to send email." }), { status: 500 });
  }
}
