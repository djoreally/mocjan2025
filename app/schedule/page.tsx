import BookingSystem from "@/components/BookingSystem"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Schedule Your Mobile Oil Change | MOMS Oil Change Near You",
  description:
    "Book your mobile oil change service with MOMS. We come to you for convenient, professional oil changes at your home or office inAmbler, PA and surrounding areas.",
}

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Schedule Your Mobile Oil Change Service</h1>
        <p className="text-xl text-center mb-8">
          Experience the convenience of our mobile oil change service. We bring the oil change to you!
        </p>
        <BookingSystem />
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Why Choose MOMS Mobile Oil Change?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Convenient oil changes at your location - home, office, or anywhere</li>
            <li>Professional, certified technicians</li>
            <li>High-quality oil and filters</li>
            <li>Comprehensive service includes a multi-point inspection</li>
            <li>Save time - no waiting rooms, no travel to a shop</li>
            <li>Flexible scheduling, including evenings and weekends</li>
            <li>Competitive pricing with traditional oil change shops</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

