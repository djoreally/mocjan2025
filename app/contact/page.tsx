import type { Metadata } from "next"
import ContactFormEmbed from "@/components/ContactFormEmbed"

export const metadata: Metadata = {
  title: "Contact MOMS Mobile Oil Change | Schedule Your Oil Change Near You",
  description:
    "Get in touch with MOMS Mobile Oil Change for all your mobile oil change needs. Schedule an appointment or inquire about our services inAmbler, PA and surrounding areas.",
}

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contact MOMS Mobile Oil Change</h1>
      <div className="max-w-2xl mx-auto">
        <p className="mb-8">
          Need to schedule a mobile oil change or have questions about our services? Fill out the form below, and we'll
          get back to you as soon as possible. Our team is ready to bring convenient oil changes right to your location!
        </p>
        <ContactFormEmbed />
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Our Service Areas</h2>
          <p className="mb-4">
            MOMS Mobile Oil Change proudly serves Ambler, PA and the following surrounding areas:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Ambler</li>
            <li>Horsham</li>
            <li>Main Line</li>
            <li>Warminster</li>
          </ul>
          <p>
            Not sure if we service your area? Contact us, and we'll let you know if we can bring our mobile oil change
            service to you!
          </p>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Why Choose MOMS Mobile Oil Change?</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Convenient oil changes at your location</li>
            <li>Professional, certified technicians</li>
            <li>High-quality oil and filters</li>
            <li>Competitive pricing</li>
            <li>Flexible scheduling, including weekends</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

