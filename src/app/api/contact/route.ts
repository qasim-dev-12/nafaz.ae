import { NextResponse } from 'next/server'
import { getTransporter, NAFAZ_EMAIL, NAFAZ_PHONE } from '@/lib/mailer'

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const { firstName, lastName, email, specialist, date, time } = data

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    await getTransporter().sendMail({
      from: process.env.SMTP_USER,
      to: NAFAZ_EMAIL,
      replyTo: email,
      subject: `New consultation request from ${firstName ?? ''} ${lastName ?? ''}`.trim(),
      text: `Name: ${firstName ?? ''} ${lastName ?? ''}
Email: ${email}
Specialist: ${specialist ?? '-'}
Date: ${date ?? '-'}
Time: ${time ?? '-'}

Nafaz contact: ${NAFAZ_EMAIL} | ${NAFAZ_PHONE}`,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
