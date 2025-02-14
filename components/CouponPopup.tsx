"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

const CouponPopup = () => {
  const [isVisible, setIsVisible] = useState(false)
  //const [email, setEmail] = useState("")
  //const [isLoading, setIsLoading] = useState(false)
  //const [error, setError] = useState("")
  //const [success, setSuccess] = useState(false)

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenWelcomeOffer")
    if (!hasSeenPopup) {
      const timer = setTimeout(() => setIsVisible(true), 5000)
      return () => clearTimeout(timer)
    }
  }, [])

  //const handleSubmit = async (e: React.FormEvent) => {
  //  e.preventDefault()
  //  setIsLoading(true)
  //  setError("")

  //  try {
  //    const response = await fetch("https://api.resend.com/v1/emails", {
  //      method: "POST",
  //      headers: {
  //        "Content-Type": "application/json",
  //        Authorization: "Bearer re_P71jRVuv_E2KfLBscU1RSrBtbykF5yirj",
  //      },
  //      body: JSON.stringify({
  //        from: "onboarding@resend.dev",
  //        to: email,
  //        subject: "Your $10 Instant Coupon from MOMS Mobile Oil Change",
  //        html: "<p>Thank you for subscribing! Here's your $10 instant coupon code: MOMS10OFF</p>",
  //      }),
  //    })

  //    if (response.ok) {
  //      setSuccess(true)
  //      localStorage.setItem("hasSeenCouponPopup", "true")
  //      localStorage.setItem("couponCode", "MOMS10OFF")
  //    } else {
  //      throw new Error("Failed to send email")
  //    }
  //  } catch (err) {
  //    setError("An error occurred. Please try again.")
  //  } finally {
  //    setIsLoading(false)
  //  }
  //}

  const handleClose = () => {
    setIsVisible(false)
    localStorage.setItem("hasSeenWelcomeOffer", "true")
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
        <button onClick={handleClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">First-Time Customer Special</h2>
        <p className="mb-4 text-center">Enjoy $10 off your first oil change!</p>
        <div className="text-center mb-4">
          <p className="font-semibold">Promo Code:</p>
          <p className="text-3xl font-bold text-blue-600">WELCOME20</p>
        </div>
        <button
          onClick={handleClose}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Got it!
        </button>
      </div>
    </div>
  )
}

export default CouponPopup

