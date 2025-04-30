"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(true)

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent")
    if (!consent) {
      setShowConsent(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true")
    setShowConsent(false)
    if (window.analytics) {
      window.analytics.track("Cookie Consent Accepted")
    }
  }

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "false")
    setShowConsent(false)
    if (window.analytics) {
      window.analytics.track("Cookie Consent Declined")
    }
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="mb-4 md:mb-0 text-sm">
          We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.{" "}
          <Link href="/privacy" className="underline">
            Learn more
          </Link>
        </p>
        <div className="flex space-x-4">
          <button
            onClick={handleAccept}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm"
          >
            Accept
          </button>
          <button
            onClick={handleDecline}
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded text-sm"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent

