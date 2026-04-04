import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // 🔒 validacija
    if (!name || !email || !message) {
      return Response.json(
        { success: false, error: "Nedostaju podaci" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.verify();
    console.log("SMTP OK");

    // 📩 1. EMAIL TEBI (admin mail)
    await transporter.sendMail({
      from: `"Terram Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,

      replyTo: email, // 🔥 klik reply → ide korisniku

      subject: `Nova poruka od ${name} (${email})`,

      html: `
        <div style="font-family: Arial, sans-serif; padding: 10px;">
          <h2>Nova poruka sa sajta 🌿</h2>

          <p><strong>Ime:</strong> ${name}</p>
          <p><strong>Email:</strong> 
            <a href="mailto:${email}">${email}</a>
          </p>

          <hr style="margin: 15px 0;" />

          <p><strong>Poruka:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    // 📬 2. AUTO-REPLY KORISNIKU 🔥
    await transporter.sendMail({
      from: `"Terram" <${process.env.EMAIL_USER}>`,
      to: email,

      subject: "Hvala na poruci 🌿",
      text: `
            Zdravo ${name},

            Hvala vam što ste nas kontaktirali.
            Vaša poruka je uspešno primljena i odgovorićemo vam u najkraćem roku. 

            Terram tim🌿
            `,
      html: `
  <div style="font-family: Arial, sans-serif; padding: 20px; text-align: center;">

    <h2>Zdravo ${name},</h2>

    <p>Hvala vam što ste nas kontaktirali.</p>

    <p>
      Vaša poruka je uspešno primljena i odgovorićemo vam u najkraćem roku.
    </p>

    <br/>

    <p>Pozdrav,</p>
    <p><strong>Terram tim 🌿</strong></p>

    <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;" />

    <img 
      src="https://terramnext.vercel.app/logo.png" 
      alt="Terram logo"
      width="100"
      style="margin-top: 10px; opacity: 0.9;"
    />

  </div>
`,
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error("FULL ERROR:", error);
    return Response.json({ success: false }, { status: 500 });
  }
}