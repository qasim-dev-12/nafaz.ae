import { NextResponse } from 'next/server'
import { getTransporter, NAFAZ_EMAIL, NAFAZ_PHONE } from '@/lib/mailer'

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    await getTransporter().sendMail({
      from: process.env.SMTP_USER,
      to: NAFAZ_EMAIL,
      replyTo: email,
      subject: 'New newsletter subscriber',
      text: `New subscriber: ${email}

Nafaz contact: ${NAFAZ_EMAIL} | ${NAFAZ_PHONE}`,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 })
  }
}
