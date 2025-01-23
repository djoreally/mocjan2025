"use client"

import { useEffect, useState } from "react"
import { ChevronUp } from "lucide-react"

const ReturnToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-blue-600 text-white p-2 rounded-full shadow-lg transition-opacity duration-300 hover:bg-blue-700"
          aria-label="Return to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </>
  )
}

export default ReturnToTop

