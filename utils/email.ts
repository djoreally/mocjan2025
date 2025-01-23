import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

interface EmailData {
  to: string
  subject: string
  html: string
  from?: string
  cc?: string | string[]
  bcc?: string | string[]
  reply_to?: string | string[]
}

export async function sendEmail({
  to,
  subject,
  html,
  from = process.env.EMAIL_FROM || "MOMS Mobile Oil Change <contact@mobileoilchangenetwork.com>",
  cc,
  bcc,
  reply_to,
}: EmailData) {
  try {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not set")
    }

    const { data, error } = await resend.emails.send({
      from,
      to,
      subject,
      html,
      cc,
      bcc,
      reply_to,
    })

    if (error) {
      console.error("Error sending email:", error)
      return { success: false, error: error.message }
    }

    if (!data || !data.id) {
      throw new Error("No data returned from Resend API")
    }

    console.log("Email sent:", data)
    return { success: true, messageId: data.id }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" }
  }
}

