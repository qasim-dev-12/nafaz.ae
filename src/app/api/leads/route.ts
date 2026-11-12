import { NextResponse } from 'next/server'
import { getTransporter, NAFAZ_EMAIL, NAFAZ_PHONE } from '@/lib/mailer'

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const { name, email, phone, company, service, message } = data

    if (!name || !email || !phone) {
      return NextResponse.json({ error: 'Name, email and phone are required' }, { status: 400 })
    }

    await getTransporter().sendMail({
      from: process.env.SMTP_USER,
      to: NAFAZ_EMAIL,
      replyTo: email,
      subject: `New website lead: ${name}${service ? ` (${service})` : ''}`,
      text: `New lead from the Nafaz landing page

Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company || '-'}
Service interested in: ${service || '-'}
Message: ${message || '-'}

Nafaz contact: ${NAFAZ_EMAIL} | ${NAFAZ_PHONE}`,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ error: 'Failed to send your request' }, { status: 500 })
  }
}
