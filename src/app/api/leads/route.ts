import { NextResponse } from 'next/server'
import { getResend, NAFAZ_PHONE, SENDER_EMAIL } from '@/lib/mailer'

const LEADS_EMAIL = 'staytopdev@gmail.com'

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const { name, email, phone, company, service, message } = data

    if (!name || !email || !phone) {
      return NextResponse.json({ error: 'Name, email and phone are required' }, { status: 400 })
    }

    const { error } = await getResend().emails.send({
      from: SENDER_EMAIL,
      to: LEADS_EMAIL,
      replyTo: email,
      subject: `New website lead: ${name}${service ? ` (${service})` : ''}`,
      text: `New lead from the Nafaz landing page

Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company || '-'}
Service interested in: ${service || '-'}
Message: ${message || '-'}

Nafaz contact: ${NAFAZ_PHONE}`,
    })

    if (error) throw error

    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ error: 'Failed to send your request' }, { status: 500 })
  }
}
