import ContactForm from "@/components/ContactForm"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | MOMS Mobile Oil Change",
  description: "Get in touch with MOMS Mobile Oil Change for any questions or concerns about our mobile oil change service.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Have questions? We'd love to hear from you.
          </p>
        </div>
        <div className="mt-12 flex justify-center">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

