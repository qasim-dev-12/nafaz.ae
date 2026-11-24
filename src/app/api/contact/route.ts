import { NextResponse } from 'next/server'
import { getResend, NAFAZ_EMAIL, NAFAZ_PHONE, SENDER_EMAIL } from '@/lib/mailer'

const CONTACT_EMAIL = 'staytopdev@gmail.com'

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const { firstName, lastName, email, specialist, date, time } = data

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const { error } = await getResend().emails.send({
      from: SENDER_EMAIL,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `New consultation request from ${firstName ?? ''} ${lastName ?? ''}`.trim(),
      text: `Name: ${firstName ?? ''} ${lastName ?? ''}
Email: ${email}
Specialist: ${specialist ?? '-'}
Date: ${date ?? '-'}
Time: ${time ?? '-'}

Nafaz contact: ${NAFAZ_EMAIL} | ${NAFAZ_PHONE}`,
    })

    if (error) throw error

    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
