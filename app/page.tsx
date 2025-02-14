import Image from "next/image"
import Link from "next/link"
import Hero from "@/components/Hero"
import ServicesSection from "@/components/ServicesSection"
import ReviewCarousel from "@/components/ReviewCarousel"
import ServiceArea from "@/components/ServiceArea"
import FAQ from "@/components/FAQ"
import ContactFormEmbed from "@/components/ContactFormEmbed"
import CouponPopup from "@/components/CouponPopup"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "MOMS Mobile Oil Change | Convenient Oil Changes Near You",
  description:
    "Experience hassle-free mobile oil change services from MOMS. We come to you for quick, reliable, and affordable oil changes. Book your appointment today!",
}

export default function Home() {
  return (
    <>
      <Hero />

      {/* Full-width CTA Section */}
      <div className="bg-blue-900">
        <div className="relative isolate overflow-hidden">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute -top-64 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset="1" stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="w-full px-6 lg:px-8 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 bg-gradient-to-b from-blue-900 to-black">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                We’re offering a VIP discount this week – $10 off your next mobile oil change!
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
              Get your oil changed right at your home. Our mobile mechanics will change your oil right in your driveway, garage or parking lot.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href="https://moms.bookyouroilchange.com/"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Schedule Your Mobile Oil Change
                </Link>
                <Link href="/services" className="text-sm font-semibold leading-6 text-white">
                  Learn more about our services <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <ServicesSection />

      <ReviewCarousel />

      {/* Service Area Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">MOMS Mobile Oil Change Service Areas</h2>
          <p className="text-xl text-center mb-12">
            We provide mobile oil change services near you in the following areas:
          </p>
          <ServiceArea />
          <div className="text-center mt-8">
            <Link href="/service-areas" className="text-blue-600 hover:underline">
              View all service areas
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions About Mobile Oil Changes</h2>
          <FAQ />
          <div className="text-center mt-8">
            <Link href="/faq" className="text-blue-600 hover:underline">
              View all FAQs
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Schedule Your Mobile Oil Change</h2>
          <p className="text-xl text-center mb-8">
            Get in Touch with Philadelphia's Premier Mobile Oil Change Service
          </p>
          <ContactFormEmbed />
        </div>
      </div>
      <CouponPopup />
    </>
  )
}

