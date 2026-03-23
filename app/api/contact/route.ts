import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    console.log("API /api/contact reached");

    const body = await req.json();
    console.log("Request body keys:", Object.keys(body || {}));

    const { name, email, message } = body ?? {};

    if (!name || !email || !message) {
      console.error("Missing fields", { name: !!name, email: !!email, message: !!message });
      return Response.json({ error: "Fehlende Felder" }, { status: 400 });
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 587);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.CONTACT_TO_EMAIL;

    console.log("Env check", {
      hasHost: !!host,
      port,
      hasUser: !!user,
      hasPass: !!pass,
      hasTo: !!to,
    });

    if (!host || !user || !pass || !to) {
      console.error("Missing SMTP env vars");
      return Response.json({ error: "Server-Konfiguration fehlt" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: false,
      requireTLS: true,
      auth: {
        user,
        pass,
      },
      logger: true,
      debug: true,
    });

    console.log("Verifying SMTP connection...");
    await transporter.verify();
    console.log("SMTP verify OK");

    const info = await transporter.sendMail({
      from: `"Website Kontakt" <${user}>`,
      to,
      replyTo: email,
      subject: `Neue Nachricht von ${name}`,
      text: `Name: ${name}\nE-Mail: ${email}\n\n${message}`,
    });

    console.log("Mail sent", {
      messageId: info.messageId,
      accepted: info.accepted,
      rejected: info.rejected,
      response: info.response,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("MAIL ERROR FULL:", error);
    return Response.json({ error: "Mailversand fehlgeschlagen" }, { status: 500 });
  }
}
