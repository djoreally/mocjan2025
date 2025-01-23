"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, ChevronUp, Star } from "lucide-react"

interface Service {
  id: string
  title: string
  description: string
  price: string
  rating: number
  reviews: number
  image: string
  features: string[]
  recommendedInterval?: string
}

const services: Service[] = [
  {
    id: "synthetic-oil-change",
    title: "Full Synthetic Oil Change",
    description:
      "Premium synthetic oil change service performed right at your location. Our certified technicians use top-quality synthetic oil for superior engine protection and performance.",
    price: "$69.99",
    rating: 4.9,
    reviews: 200,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/momsoilchange_367348864_306493548455608_1284110913582803278_n.webp-rD02AGkGrLcnhV9xnF3jSA1OYi2ROj.jpeg",
    recommendedInterval: "Recommended every 7,500 miles or when your oil reminder activates",
    features: [
      "Premium synthetic oil (up to 5 quarts)",
      "New oil filter installation",
      "Comprehensive 23-point inspection",
      "Convenient mobile service at your location",
      "Certified technicians",
    ],
  },
  {
    id: "conventional-oil-change",
    title: "Conventional Oil Change",
    description:
      "Traditional oil change service that comes to you. Perfect for vehicles that don't require synthetic oil, providing reliable engine protection at an economical price.",
    price: "$39.99",
    rating: 4.8,
    reviews: 180,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/momsoilchange_278608853_1212538439551402_3652870252631577135_n.webp-P0hiJm0YIuFn9SDwtNjKaUBIW5cAHd.jpeg",
    recommendedInterval: "Recommended every 5,000 miles",
    features: [
      "Conventional oil (up to 5 quarts)",
      "Oil filter replacement",
      "Multi-point vehicle inspection",
      "Mobile service convenience",
      "Expert technicians",
    ],
  },
  {
    id: "fleet-maintenance",
    title: "Fleet Maintenance",
    description:
      "Comprehensive fleet maintenance solutions designed for businesses of all sizes. We specialize in maintaining fleet vehicles like the RAM ProMaster, which can last 200,000-250,000 miles with proper maintenance.",
    price: "Custom Pricing",
    rating: 4.9,
    reviews: 50,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/momsoilchange_278362374_926603717996609_6261952984645302827_n.webp-RQWYPak22nLJNxPvNFsYSfXcnDcdcy.jpeg",
    features: [
      "Specialized fleet vehicle expertise",
      "Customized maintenance schedules",
      "Volume pricing available",
      "On-site service for entire fleets",
      "Detailed service reporting",
    ],
  },
]

const ServicesAccordion = () => {
  const [openService, setOpenService] = useState<string | null>(null)

  const toggleService = (id: string) => {
    setOpenService(openService === id ? null : id)
  }

  return (
    <div className="space-y-4">
      {services.map((service) => (
        <div
          key={service.id}
          className="bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg"
        >
          <button className="w-full text-left p-6 focus:outline-none" onClick={() => toggleService(service.id)}>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                <div className="flex items-center mt-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(service.rating) ? "text-yellow-400" : "text-gray-300"
                        } fill-current`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {service.rating} ({service.reviews} reviews)
                  </span>
                </div>
              </div>
              {openService === service.id ? (
                <ChevronUp className="h-6 w-6 text-blue-600" />
              ) : (
                <ChevronDown className="h-6 w-6 text-blue-600" />
              )}
            </div>
          </button>
          <div
            className={`transition-all duration-300 ease-in-out ${
              openService === service.id ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            <div className="p-6 border-t border-gray-100">
              <div className="md:flex gap-6">
                <div className="md:w-1/2 mb-6 md:mb-0">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  {service.recommendedInterval && (
                    <p className="text-blue-600 font-medium mb-4">{service.recommendedInterval}</p>
                  )}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Service Includes:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <svg
                            className="h-5 w-5 text-green-500 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between mt-6">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                      {service.id !== "fleet-maintenance" && (
                        <span className="text-sm text-gray-600 ml-2">/ service</span>
                      )}
                    </div>
                    <Link
                      href={service.id === "fleet-maintenance" ? "/fleet-maintenance" : "/schedule"}
                      className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300"
                    >
                      {service.id === "fleet-maintenance" ? "Learn More" : "Schedule Now"}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ServicesAccordion

