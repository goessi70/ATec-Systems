import { Router } from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const router = Router();

router.post("/", async (req, res) => {
  console.log("Received contact request:", req.body);
  const { name, email, interest, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // SMTP Configuration
  const smtpSecure = process.env.SMTP_SECURE === "true" || process.env.SMTP_SECURE === "465";
  
  console.log("Initializing SMTP with:", {
    host: process.env.SMTP_HOST || "mail.hostpoint.ch",
    port: process.env.SMTP_PORT || "587",
    secure: smtpSecure,
    user: process.env.SMTP_USER || "info@atec-systems.ch"
  });

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "mail.hostpoint.ch",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: smtpSecure,
    auth: {
      user: process.env.SMTP_USER || "info@atec-systems.ch",
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    const recipient = process.env.CONTACT_TO_EMAIL || "info@atec-systems.ch";
    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER || email}>`,
      to: recipient,
      subject: `Neue Kontaktanfrage: ${interest}`,
      text: `Name: ${name}\nEmail: ${email}\nInteresse: ${interest}\n\nNachricht:\n${message}`,
      replyTo: email,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({ error: "Failed to send email. Please check SMTP configuration." });
  }
});

export default router;
