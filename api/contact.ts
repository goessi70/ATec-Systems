import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS setup for preflight requests (if needed)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, interest, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const smtpSecure = process.env.SMTP_SECURE === 'true' || process.env.SMTP_SECURE === '465';
  
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'mail.hostpoint.ch',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: smtpSecure,
    auth: {
      user: process.env.SMTP_USER || 'info@atec-systems.ch',
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    const recipient = process.env.CONTACT_TO_EMAIL || 'info@atec-systems.ch';
    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER || email}>`,
      to: recipient,
      subject: `Neue Kontaktanfrage: ${interest}`,
      text: `Name: ${name}\nEmail: ${email}\nInteresse: ${interest}\n\nNachricht:\n${message}`,
      replyTo: email,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({ error: 'Failed to send email. Please check SMTP configuration.' });
  }
}
