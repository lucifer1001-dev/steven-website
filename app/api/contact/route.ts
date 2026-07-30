import { NextResponse } from 'next/server'

type ContactPayload = {
  name?: string
  email?: string
  message?: string
  company?: string
}

type DeliveryPayload = Required<Pick<ContactPayload, 'name' | 'email' | 'message'>>

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function sanitize(value: string): string {
  return value.trim().replace(/\s+/g, ' ')
}

async function sendWithResend(payload: DeliveryPayload): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  const from = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev'

  if (!apiKey || !to) {
    throw new Error('RESEND_NOT_CONFIGURED')
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: payload.email,
      subject: `Portfolio contact from ${payload.name}`,
      text: `Name: ${payload.name}\nEmail: ${payload.email}\n\nMessage:\n${payload.message}`,
    }),
  })

  if (!response.ok) {
    const details = await response.text()
    throw new Error(`RESEND_ERROR:${details}`)
  }
}

async function sendWithWebhook(payload: DeliveryPayload): Promise<void> {
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL
  if (!webhookUrl) {
    throw new Error('WEBHOOK_NOT_CONFIGURED')
  }

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    const details = await response.text()
    throw new Error(`WEBHOOK_ERROR:${details}`)
  }
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get('content-length') || 0)
  if (contentLength > 12_000) {
    return NextResponse.json({ error: 'Request is too large.' }, { status: 413 })
  }

  let body: ContactPayload

  try {
    body = (await request.json()) as ContactPayload
  } catch {
    return NextResponse.json({ error: 'Invalid JSON payload.' }, { status: 400 })
  }

  const name = sanitize(body.name || '')
  const email = sanitize(body.email || '')
  const message = (body.message || '').trim()

  // Honeypot field: bots commonly fill every available input.
  if (body.company) {
    return NextResponse.json({ ok: true })
  }

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 })
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }

  if (name.length > 100 || email.length > 254) {
    return NextResponse.json({ error: 'Name or email is too long.' }, { status: 400 })
  }

  if (message.length < 10) {
    return NextResponse.json({ error: 'Message should be at least 10 characters.' }, { status: 400 })
  }

  if (message.length > 5000) {
    return NextResponse.json({ error: 'Message is too long.' }, { status: 400 })
  }

  const payload = { name, email, message }

  try {
    if (process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL) {
      await sendWithResend(payload)
      return NextResponse.json({ ok: true })
    }

    if (process.env.CONTACT_WEBHOOK_URL) {
      await sendWithWebhook(payload)
      return NextResponse.json({ ok: true })
    }

    return NextResponse.json(
      {
        error:
          'Contact delivery is temporarily unavailable. Please email me directly.',
      },
      { status: 503 }
    )
  } catch {
    return NextResponse.json(
      { error: 'Unable to send message right now. Please email me directly at chenstevens890@gmail.com.' },
      { status: 500 }
    )
  }
}
