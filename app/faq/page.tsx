"use client"

import React, { useState } from "react"
import { Search, ChevronDown, ChevronRight, X } from "lucide-react"
import Link from "next/link"

const FaqSection = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null)

  const categories = {
    general: { name: "General Questions", icon: "🔍" },
    services: { name: "Mobile Oil Change Services", icon: "🔧" },
    fleet: { name: "Fleet Maintenance", icon: "🚐" },
    locations: { name: "Service Locations", icon: "📍" },
    pricing: { name: "Pricing & Packages", icon: "💰" },
    concerns: { name: "Customer Concerns", icon: "❓" },
    environment: { name: "Environment & Safety", icon: "🌿" },
    misc: { name: "Miscellaneous", icon: "📋" },
  }

  const faqData = {
    general: [
      {
        q: "What is a mobile oil change service?",
        a: "A mobile oil change service brings our fully equipped service vehicle to your location - home, office, or anywhere convenient. Our certified technicians perform professional oil changes right at your doorstep, saving you time and hassle.",
      },
      {
        q: "How does a mobile oil change work?",
        a: "Simply book an appointment online or by phone, and our technician will arrive at your location at the scheduled time. We'll perform the oil change while you go about your day, ensuring your vehicle gets the maintenance it needs without disrupting your schedule.",
      },
      {
        q: "Are your technicians certified for mobile oil changes?",
        a: "Yes, all our technicians are certified and trained to ensure the highest quality of mobile oil change service.",
      },
      {
        q: "What equipment do you use for mobile oil changes?",
        a: "We use state-of-the-art equipment to perform oil changes and other related services, ensuring a professional job every time.",
      },
      {
        q: "Is your mobile oil change service insured?",
        a: "Yes, we carry full insurance to protect both our technicians and customers during our mobile oil change services.",
      },
    ],
    services: [
      {
        q: "Do you offer synthetic oil changes?",
        a: "Yes, we offer full synthetic, synthetic blend, and conventional oil changes. We use premium quality oils from trusted brands for all our mobile oil change services.",
      },
      {
        q: "What other services do you provide besides oil changes?",
        a: "In addition to oil changes, we offer fluid top-offs, filter replacements, tire pressure checks, and basic vehicle inspections as part of our mobile service.",
      },
      {
        q: "Can you change my air filter during a mobile oil change?",
        a: "Yes, we can replace your air filter and cabin air filter as part of our additional mobile services.",
      },
      {
        q: "Do you provide tire rotation with your mobile oil change service?",
        a: "Yes, we offer tire rotation as an additional service with our mobile oil changes. It's even free for our members!",
      },
      {
        q: "Do you offer fleet maintenance with mobile oil changes?",
        a: "Yes, we specialize in fleet maintenance services, including routine oil changes and inspections, all performed at your fleet's location.",
      },
    ],
    fleet: [
      {
        q: "What fleet sizes do you serve with mobile oil changes?",
        a: "We serve fleets of all sizes, from small businesses to large corporations, providing convenient mobile oil change services.",
      },
      {
        q: "Can you maintain specialized fleet vehicles?",
        a: "Yes, we can service most types of vehicles, including vans, trucks, and specialty vehicles, with our mobile oil change service.",
      },
      {
        q: "Do you provide on-site fleet maintenance?",
        a: "Yes, we bring our mobile service to your fleet location to minimize downtime and maximize convenience.",
      },
      {
        q: "How do you track fleet maintenance for mobile oil changes?",
        a: "We maintain detailed records of all services performed and provide reports upon request, ensuring your fleet's maintenance is always up to date.",
      },
      {
        q: "What are the benefits of fleet maintenance with mobile oil changes?",
        a: "Our mobile fleet maintenance reduces downtime, extends vehicle life, ensures safety compliance, and provides the convenience of on-site service.",
      },
    ],
    locations: [
      {
        q: "Where do you offer mobile oil change services?",
        a: "We offer our mobile oil change service throughoutAmbler, PA and surrounding areas. Contact us to check availability in your specific location.",
      },
      {
        q: "How far will you travel for a mobile oil change?",
        a: "We typically service within a [X]-mile radius of [City]. For locations outside this area, please contact us for availability.",
      },
      {
        q: "Can you perform mobile oil changes in parking garages or apartment complexes?",
        a: "Yes, we can perform oil changes in most locations, including parking garages and apartment complexes, as long as there's sufficient space and it's permitted by the property management.",
      },
      {
        q: "Do you offer mobile oil changes for businesses?",
        a: "We provide mobile oil change services for businesses, allowing your employees to get their vehicles serviced while at work.",
      },
    ],
    pricing: [
      {
        q: "What does a mobile oil change cost?",
        a: "Our pricing varies based on the type of oil and services required. Contact us for a detailed quote tailored to your vehicle's needs.",
      },
      {
        q: "Are there any additional fees for your mobile service?",
        a: "We are transparent with our pricing, and there are no hidden fees. The quoted price includes our mobile service. Additional services are optional and priced separately.",
      },
      {
        q: "Do you offer discounts for fleets?",
        a: "Yes, we offer competitive pricing and discounts for fleet customers. Contact us for a customized quote based on your fleet size and needs.",
      },
      {
        q: "What payment methods do you accept for mobile oil changes?",
        a: "We accept all major credit cards, digital payments, and cash for our mobile oil change services.",
      },
      {
        q: "Do you offer subscription packages for regular oil changes?",
        a: "Yes, we have maintenance plans that provide discounts on recurring services, including regular oil changes. These plans can be customized to your vehicle's needs and your preferred service schedule.",
      },
    ],
    concerns: [
      {
        q: "What if I am not satisfied with the mobile oil change service?",
        a: "We strive for customer satisfaction and will work to resolve any issues to your satisfaction. If you're not happy with our service, please contact us immediately, and we'll make it right.",
      },
      {
        q: "What if my vehicle has a unique issue during the oil change?",
        a: "Our technicians are trained to handle various scenarios. If we encounter a specialized issue during the oil change, we will advise you accordingly and recommend the best course of action.",
      },
      {
        q: "How do you handle vehicle damage during a mobile oil change?",
        a: "We are fully insured and take utmost care during service. In the rare case of any issues, we will promptly address and resolve them to your satisfaction.",
      },
      {
        q: "Can I cancel or reschedule my mobile oil change appointment?",
        a: "Yes, you can cancel or reschedule with at least 24 hours' notice. We understand that plans can change, and we'll do our best to accommodate your schedule.",
      },
      {
        q: "What if it rains during my scheduled mobile oil change?",
        a: "Our technicians are equipped to perform services in most weather conditions safely. However, if severe weather poses a safety risk, we'll contact you to reschedule.",
      },
    ],
    environment: [
      {
        q: "What happens to the used oil after a mobile oil change?",
        a: "We responsibly dispose of used oil by following environmental regulations and recycling where possible. Our process ensures that the oil is handled in an eco-friendly manner.",
      },
      {
        q: "Is mobile oil changing eco-friendly?",
        a: "Yes, our process minimizes waste and reduces the carbon footprint by eliminating trips to service centers. We also use environmentally friendly products and practices wherever possible.",
      },
      {
        q: "Do you use eco-friendly products in your mobile oil changes?",
        a: "We prioritize using high-quality, environmentally friendly products whenever possible in our mobile oil change services.",
      },
      {
        q: "How do you handle oil spills during a mobile oil change?",
        a: "Our technicians are trained to prevent and manage spills using specialized equipment and protocols. We take every precaution to protect the environment during our mobile services.",
      },
      {
        q: "Do you support sustainability initiatives in the auto care industry?",
        a: "Yes, we actively participate in programs that promote recycling and environmental protection within the auto care industry.",
      },
    ],
    misc: [
      {
        q: "Can I watch the mobile oil change service being performed?",
        a: "You are welcome to observe the process. Our technicians can even explain what they're doing if you're interested in learning more about your vehicle's maintenance.",
      },
      {
        q: "Do you service electric vehicles?",
        a: "While EVs don't require oil changes, we can perform inspections and other maintenance tasks. We're staying up-to-date with EV technology to serve all our customers' needs.",
      },
      {
        q: "How long does a typical mobile oil change service take?",
        a: "Most mobile oil change services take 30-45 minutes, depending on the type of service and vehicle. We respect your time and work efficiently without compromising on quality.",
      },
      {
        q: "Do you offer gift cards for mobile oil change services?",
        a: "Yes, gift cards are available for purchase for any of Our Oil Change Services. They make great gifts for car enthusiasts or anyone who values convenience.",
      },
      {
        q: "What areas do you plan to expand your mobile oil change service to?",
        a: "We are continuously growing. Check our website or contact us for the latest information on our service areas and expansion plans.",
      },
    ],
  }

  const filteredQuestions = searchTerm
    ? Object.entries(faqData).flatMap(([category, questions]) =>
        questions
          .filter(
            (q) =>
              q.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
              q.a.toLowerCase().includes(searchTerm.toLowerCase()),
          )
          .map((q) => ({ ...q, category })),
      )
    : Object.entries(faqData)
        .filter(([category]) => activeCategory === "all" || category === activeCategory)
        .flatMap(([category, questions]) => questions.map((q) => ({ ...q, category })))

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions about Mobile Oil Changes</h1>
          <p className="text-slate-600">Everything you need to know about our mobile oil change service</p>
        </div>

        <div className="relative max-w-2xl mx-auto mb-12">
          <div className="flex items-center bg-white rounded-lg shadow-sm border border-slate-200 p-2">
            <Search className="w-5 h-5 text-slate-400 ml-2" />
            <input
              type="text"
              placeholder="Search your question about mobile oil changes..."
              className="w-full px-4 py-2 focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button onClick={() => setSearchTerm("")} className="p-2 hover:bg-slate-100 rounded-full">
                <X className="w-5 h-5 text-slate-400" />
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-full transition-all ${
              activeCategory === "all" ? "bg-blue-600 text-white" : "bg-white text-slate-600 hover:bg-slate-100"
            }`}
          >
            All Questions
          </button>
          {Object.entries(categories).map(([key, { name, icon }]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-4 py-2 rounded-full transition-all flex items-center space-x-2 ${
                activeCategory === key ? "bg-blue-600 text-white" : "bg-white text-slate-600 hover:bg-slate-100"
              }`}
            >
              <span>{icon}</span>
              <span>{name}</span>
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filteredQuestions.map((question, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
              <button
                onClick={() => setExpandedQuestion(expandedQuestion === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50"
              >
                <span className="font-semibold text-slate-800">{question.q}</span>
                {expandedQuestion === index ? (
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-slate-400" />
                )}
              </button>
              {expandedQuestion === index && (
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
                  <p className="text-slate-600">{question.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready for a Convenient Mobile Oil Change?</h2>
          <p className="mb-6">Experience the ease of our mobile oil change service. We come to you!</p>
          <Link
            href="https://momsoilchange.bookyouroilchange.com/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
          >
            Schedule Your Mobile Oil Change
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FaqSection

