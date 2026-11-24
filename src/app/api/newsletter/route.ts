import { NextResponse } from 'next/server'
import { getResend, NAFAZ_EMAIL, NAFAZ_PHONE, SENDER_EMAIL } from '@/lib/mailer'

const NEWSLETTER_NOTIFY_EMAIL = 'staytopdev@gmail.com'

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const { error } = await getResend().emails.send({
      from: SENDER_EMAIL,
      to: NEWSLETTER_NOTIFY_EMAIL,
      replyTo: email,
      subject: 'New newsletter subscriber',
      text: `New subscriber: ${email}

Nafaz contact: ${NAFAZ_EMAIL} | ${NAFAZ_PHONE}`,
    })

    if (error) throw error

    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 })
  }
}
