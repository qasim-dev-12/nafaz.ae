import nodemailer from 'nodemailer'

export const NAFAZ_EMAIL = 'info@nafaz.ae'
export const NAFAZ_PHONE = '+971559549922'

export function getTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
}
