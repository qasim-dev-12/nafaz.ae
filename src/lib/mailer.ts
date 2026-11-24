import { Resend } from 'resend'

export const NAFAZ_EMAIL = 'info@nafaz.ae'
export const NAFAZ_PHONE = '+971559549922'
export const SENDER_EMAIL = 'Nafaz Website <onboarding@resend.dev>'

export function getResend() {
  return new Resend(process.env.RESEND_API_KEY)
}
