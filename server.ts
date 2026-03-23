import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import nodemailer from "nodemailer";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Contact Form
  app.post("/api/contact", async (req, res) => {
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
      await transporter.sendMail({
        from: `"${name}" <${process.env.SMTP_USER || email}>`,
        to: "info@atec-systems.ch",
        subject: `Neue Kontaktanfrage: ${interest}`,
        text: `Name: ${name}\nEmail: ${email}\nInteresse: ${interest}\n\nNachricht:\n${message}`,
        replyTo: email,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Email sending error:", error);
      // Even if email fails, we might want to log it and return success for demo purposes
      // but for a real integration, we should return an error.
      // However, without real credentials, it WILL fail.
      res.status(500).json({ error: "Failed to send email. Please check SMTP configuration." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
