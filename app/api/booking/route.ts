import { NextResponse } from "next/server"
import { sendEmail } from "@/utils/email"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, service, date, time, vehicleInfo, address, city, zipcode, instructions } = body

    // Validate required fields
    if (!name || !email || !phone || !service || !date || !time || !vehicleInfo || !address || !city || !zipcode) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 })
    }

    // Send email to the business
    const businessEmailResult = await sendEmail({
      to: "contact@mobileoilchangenetwork.com",
      subject: "New Booking Request",
      html: `
        <h1>New Booking Request</h1>
        <h2>Customer Information</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h2>Service Details</h2>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <h2>Vehicle Information</h2>
        <p><strong>Vehicle:</strong> ${vehicleInfo}</p>
        <h2>Service Location</h2>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>ZIP Code:</strong> ${zipcode}</p>
        <p><strong>Special Instructions:</strong> ${instructions || "None provided"}</p>
      `,
    })

    if (!businessEmailResult.success) {
      throw new Error(businessEmailResult.error || "Failed to send email to business")
    }

    // Send confirmation email to the customer
    const customerEmailResult = await sendEmail({
      to: email,
      subject: "Booking Confirmation - MOMS Mobile Oil Change",
      html: `
        <h1>Booking Confirmation</h1>
        <p>Dear ${name},</p>
        <p>Thank you for booking a service with MOMS Mobile Oil Change. Here are your booking details:</p>
        <h2>Service Details</h2>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <h2>Vehicle Information</h2>
        <p><strong>Vehicle:</strong> ${vehicleInfo}</p>
        <h2>Service Location</h2>
        <p><strong>Address:</strong> ${address}, ${city}, ${zipcode}</p>
        <p><strong>Special Instructions:</strong> ${instructions || "None provided"}</p>
        <p>If you need to make any changes to your appointment, please contact us as soon as possible.</p>
        <p>We look forward to servicing your vehicle!</p>
        <p>Best regards,<br>MOMS Mobile Oil Change Team</p>
      `,
    })

    if (!customerEmailResult.success) {
      throw new Error(customerEmailResult.error || "Failed to send confirmation email to customer")
    }

    return NextResponse.json({ success: true, message: "Booking confirmed" })
  } catch (error) {
    console.error("Booking error:", error)
    return NextResponse.json(
      { success: false, message: error instanceof Error ? error.message : "Booking failed" },
      { status: 500 },
    )
  }
}

