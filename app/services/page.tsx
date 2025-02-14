"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Check, X, ChevronDown, ChevronUp, Wrench, SprayCanIcon as Spray, Disc, RotateCcw } from "lucide-react"

const services = [
  {
    id: "full-synthetic",
    name: "Full Synthetic Oil Change",
    description: "Premium synthetic oil change for superior engine protection and performance.",
    price: 99.00,
    features: ["Up to 5 quarts of full synthetic oil", "New oil filter", "23-point inspection", "Fluid top-off"],
    recommended: ["High-performance vehicles", "Newer models", "Extreme driving conditions"],
  },
  {
    id: "synthetic-blend",
    name: "Synthetic Blend Oil Change",
    description: "A mix of synthetic and conventional oils for improved protection and value.",
    price: 89.00,
    features: ["Up to 5 quarts of synthetic blend oil", "New oil filter", "23-point inspection", "Fluid top-off"],
    recommended: ["Moderate driving conditions", "Slightly older vehicles"],
  },
  {
    id: "high-mileage",
    name: "High Mileage Oil Change",
    description: "Specially formulated for vehicles with over 75,000 miles.",
    price: 110,
    features: ["Up to 5 quarts of high mileage oil", "New oil filter", "23-point inspection", "Fluid top-off"],
    recommended: ["Vehicles over 75,000 miles", "Older models"],
  },
  {
    id: "conventional",
    name: "Conventional Oil Change",
    description: "Standard oil change service for basic engine protection.",
    price: 79.999,
    features: ["Up to 5 quarts of conventional oil", "New oil filter", "23-point inspection", "Fluid top-off"],
    recommended: ["Older vehicles", "Basic driving conditions"],
  },
]

const addOns = [
  {
    id: "tire-rotation",
    name: "Tire Rotation",
    description: "Extend tire life and improve vehicle handling.",
    price: 79.99,
    icon: RotateCcw,
  },
  {
    id: "air-filter",
    name: "Air Filter Replacement",
    description: "Ensure clean air flow to your engine for optimal performance.",
    price: 59.99,
    icon: Wrench,
  },
  {
    id: "wiper-blades",
    name: "Wiper Blade Replacement",
    description: "Improve visibility in adverse weather conditions.",
    price: 39.99,
    icon: Spray,
  },
  {
    id: "brake-inspection",
    name: "Brake Inspection",
    description: "Comprehensive check of your vehicle's brake system.",
    price: 79.99,
    icon: Disc,
  },
]

const ServiceCard = ({ service, isOpen, toggleOpen }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold">{service.name}</h3>
          <span className="text-2xl font-bold text-blue-600">${service.price.toFixed(2)}</span>
        </div>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <button onClick={toggleOpen} className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
          {isOpen ? "Hide Details" : "Show Details"}
          {isOpen ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
        </button>
      </div>
      {isOpen && (
        <div className="px-6 pb-6">
          <h4 className="font-semibold mb-2">Service Includes:</h4>
          <ul className="list-disc list-inside mb-4">
            {service.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <h4 className="font-semibold mb-2">Recommended For:</h4>
          <ul className="list-disc list-inside">
            {service.recommended.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

const AddOnCard = ({ addOn }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <addOn.icon className="w-8 h-8 text-blue-600 mr-4" />
        <h3 className="text-xl font-semibold">{addOn.name}</h3>
      </div>
      <p className="text-gray-600 mb-4">{addOn.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-blue-600">${addOn.price.toFixed(2)}</span>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
          Add to Service
        </button>
      </div>
    </div>
  )
}

const RecommendationTool = () => {
  const [mileage, setMileage] = useState("")
  const [vehicleAge, setVehicleAge] = useState("")
  const [drivingConditions, setDrivingConditions] = useState("")
  const [recommendation, setRecommendation] = useState(null)

  const getRecommendation = () => {
    if (Number.parseInt(mileage) > 75000) {
      setRecommendation(services.find((s) => s.id === "high-mileage"))
    } else if (Number.parseInt(vehicleAge) <= 5 || drivingConditions === "extreme") {
      setRecommendation(services.find((s) => s.id === "full-synthetic"))
    } else if (Number.parseInt(vehicleAge) <= 10 || drivingConditions === "moderate") {
      setRecommendation(services.find((s) => s.id === "synthetic-blend"))
    } else {
      setRecommendation(services.find((s) => s.id === "conventional"))
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Service Recommendation Tool</h2>
      <div className="space-y-4 mb-6">
        <div>
          <label htmlFor="mileage" className="block mb-1">
            Vehicle Mileage:
          </label>
          <input
            type="number"
            id="mileage"
            value={mileage}
            onChange={(e) => setMileage(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter mileage"
          />
        </div>
        <div>
          <label htmlFor="vehicleAge" className="block mb-1">
            Vehicle Age (years):
          </label>
          <input
            type="number"
            id="vehicleAge"
            value={vehicleAge}
            onChange={(e) => setVehicleAge(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter vehicle age"
          />
        </div>
        <div>
          <label htmlFor="drivingConditions" className="block mb-1">
            Driving Conditions:
          </label>
          <select
            id="drivingConditions"
            value={drivingConditions}
            onChange={(e) => setDrivingConditions(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Select conditions</option>
            <option value="normal">Normal</option>
            <option value="moderate">Moderate</option>
            <option value="extreme">Extreme</option>
          </select>
        </div>
      </div>
      <button
        onClick={getRecommendation}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
      >
        Get Recommendation
      </button>
      {recommendation && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Recommended Service:</h3>
          <p className="text-lg text-blue-600">{recommendation.name}</p>
          <p className="text-gray-600">{recommendation.description}</p>
        </div>
      )}
    </div>
  )
}

export default function ServicesPage() {
  const [openService, setOpenService] = useState(null)

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="bg-blue-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">MOMS Mobile Oil Change Services</h1>
          <p className="text-xl md:text-2xl mb-8">Quality mobile oil change service at everyday low prices</p>
          <Link
            href="https://moms.bookyouroilchange.com/"
            className="bg-white text-blue-600 px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Schedule Your Service Now
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isOpen={openService === service.id}
              toggleOpen={() => setOpenService(openService === service.id ? null : service.id)}
            />
          ))}
        </div>

        <h2 className="text-3xl font-bold text-center mb-8">Add-On Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {addOns.map((addOn) => (
            <AddOnCard key={addOn.id} addOn={addOn} />
          ))}
        </div>

        <div className="mb-12">
          <RecommendationTool />
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <h2 className="text-2xl font-bold mb-4">Why Choose MOMS Mobile Oil Change?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Convenience</h3>
              <p>We come to you, saving you time and hassle.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Quality Service</h3>
              <p>Our certified technicians use top-grade materials and equipment.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Competitive Pricing</h3>
              <p>Get dealership-quality service at affordable prices.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
              <p>We properly dispose of used oil and recycle where possible.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="https://moms.bookyouroilchange.com/"
            className="bg-blue-600 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Book Your Oil Change
          </Link>
        </div>
      </div>
    </div>
  )
}

