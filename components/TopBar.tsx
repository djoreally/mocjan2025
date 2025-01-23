"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Phone, Mail } from "lucide-react"

const TopBar = () => {
  const [locationMessage, setLocationMessage] = useState("Serving [Key Cities or Regions]")

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/")
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        const country = data.country_name
        const city = data.city
        const region = data.region

        // This is a placeholder list. Replace with actual serviced areas.
        const servicedAreas = ["United States", "Canada", "United Kingdom"]

        if (servicedAreas.includes(country)) {
          setLocationMessage(`Serving ${city}, ${region}, ${country}`)
        } else {
          setLocationMessage(`We don't currently service ${country}. `)
        }
      } catch (error) {
        console.error("Error fetching location:", error)
        // Fallback to default message in case of error
        setLocationMessage("Serving [Key Cities or Regions]")
      }
    }

    fetchLocation()
  }, [])

  return (
    <div className="bg-gray-100 text-gray-700 py-2 px-4 text-sm hidden md:block">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="flex items-center">
            <Phone className="w-4 h-4 mr-1" />
            <a href="tel:215-767-2125" className="hover:text-blue-600">
              215-767-2125
            </a>
          </span>
          <span className="flex items-center">
            <Mail className="w-4 h-4 mr-1" />
            <a href="mailto:support@momsoilchange.com" className="hover:text-blue-600">
              support@momsoilchange.com
            </a>
          </span>
          <span>{locationMessage}</span>
          {!locationMessage.startsWith("Serving") && (
            <Link href="/contact" className="text-blue-600 hover:underline">
              Contact us for expansion requests
            </Link>
          )}
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/login" className="hover:text-blue-600">
            Login
          </Link>
          <Link href="/register" className="hover:text-blue-600">
            Register
          </Link>
          <Link href="/fleet-login" className="hover:text-blue-600">
            Fleet Login
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TopBar

