import { Router, Request, Response } from 'express';
import nodemailer from 'nodemailer';
import ejs from 'ejs';
import path from 'path';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const router = Router();

import fs from 'fs';

const renderEmailHtml = async (data: ContactForm) => {
  // Check typical locations for the template
  // 1. Dev/Standard: relative to current file in src usually ../views
  // 2. Prod (dist): compiled file is in dist/routes, so we need ../../views
  let templatePath = path.join(__dirname, '..', 'views', 'contact-email.ejs');

  if (!fs.existsSync(templatePath)) {
    templatePath = path.join(__dirname, '..', '..', 'views', 'contact-email.ejs');
  }

  return ejs.renderFile(templatePath, data);
};

router.post('/', async (req: Request<{}, {}, ContactForm>, res: Response) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const html = await renderEmailHtml({ name, email, phone, subject, message });

    const mailOptions = {
      from: `"Vishwakarma Design" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER || 'vishwakarmadesigningsolutions@gmail.com',
      replyTo: email,
      subject: `New Inquiry from Website: ${subject}`,
      html,
    };

    await transporter.sendMail(mailOptions);

    res.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

export default router;
