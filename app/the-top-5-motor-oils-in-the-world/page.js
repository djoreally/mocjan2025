import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Check } from "lucide-react"

export const metadata: Metadata = {
  title: "MOMS Mobile Oil Change Membership | Convenient Oil Changes Near You",
  description:
    "Join MOMS Mobile Oil Change membership program for exclusive benefits, discounts on mobile oil change services near you, and same-day appointments. Save time and money!",
}

export default function MembershipPage() {
  const benefits = [
    "Priority scheduling for mobile oil changes near you",
    "Discounted rates on all mobile car oil change services",
    "Free tire rotations with every oil change appointment",
    "Exclusive access to seasonal promotions and same-day oil changes",
    "Annual vehicle health check at your location",
    "24/7 roadside assistance within 5 miles",
    "Personalized maintenance reminders for your vehicle",
    "Member-only events and workshops in your area",
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">MOMS Mobile Oil Change Membership Benefits</h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Experience the convenience of mobile oil change services near you with our premium membership program!
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Exclusive Membership Perks</h2>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">MOMS Mobile Oil Change Membership Tiers</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium text-blue-600">Basic Mobile Oil Change Membership</h3>
                <p className="text-gray-600">Perfect for individual vehicle owners seeking convenient oil changes</p>
                <p className="font-semibold mt-2">$9.99/month</p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-blue-600">Family Oil Change Plan</h3>
                <p className="text-gray-600">Ideal for households with multiple vehicles needing regular maintenance</p>
                <p className="font-semibold mt-2">$79.99/month</p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-blue-600">Business Fleet Maintenance</h3>
                <p className="text-gray-600">Tailored for small business fleets requiring mobile oil change services</p>
                <p className="font-semibold mt-2">Custom pricing</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <Link
            href="/schedule"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Schedule Your Mobile Oil Change Appointment Today!
          </Link>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">Why Choose MOMS Mobile Oil Change?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Convenient Oil Changes Near You</h3>
              <p>We bring our mobile oil change service directly to your location, saving you time and hassle.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Same Day Oil Change Service</h3>
              <p>Need an urgent oil change? We offer same-day appointments for our valued members.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Expert Mobile Car Oil Change</h3>
              <p>Our certified technicians provide top-quality mobile car oil change services at your convenience.</p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">MOMS Mobile Oil Change Service Areas</h2>
          <p className="text-center mb-4">
            MOMS Mobile Oil Change proudly serves [City, State] and surrounding areas, including:
          </p>
          <ul className="grid md:grid-cols-3 gap-4 text-center">
            <li>Downtown [City]</li>
            <li>[Neighborhood 1]</li>
            <li>[Neighborhood 2]</li>
            <li>[Nearby City 1]</li>
            <li>[Nearby City 2]</li>
            <li>[Nearby City 3]</li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">Our Mobile Oil Change Process</h2>
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="MOMS Mobile Oil Change Service in action"
            width={800}
            height={400}
            className="rounded-lg shadow-md mb-6"
          />
          <ol className="list-decimal list-inside space-y-2">
            <li>Schedule your mobile oil change appointment online or by phone</li>
            <li>Our fully-equipped service vehicle arrives at your location</li>
            <li>Certified technicians perform the oil change and vehicle inspection</li>
            <li>Enjoy your day while we take care of your vehicle maintenance</li>
            <li>Receive a detailed service report and maintenance recommendations</li>
          </ol>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">How do I find oil change services near me?</h3>
              <p className="text-gray-600">
                With MOMS Mobile Oil Change, you don't need to search for "oil change near me." We bring our services
                directly to your location, whether it's your home, office, or anywhere else convenient for you.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Can I get a same-day oil change appointment?</h3>
              <p className="text-gray-600">
                Yes! MOMS Mobile Oil Change offers same-day appointments for our members, subject to availability. We
                understand the importance of quick service when you need it most.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium">How often can I use my mobile oil change membership benefits?</h3>
              <p className="text-gray-600">
                You can use your membership benefits as often as you need. Some services, like free tire rotations, are
                available with each oil change appointment.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Is there a mobile oil change service near me within 5 miles?</h3>
              <p className="text-gray-600">
                MOMS Mobile Oil Change serves a wide area. Check our service area list or contact us to confirm if we
                provide mobile oil changes in your specific location.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Convenient, Professional Oil Changes?</h2>
          <Link
            href="/schedule"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Book Your MOMS Mobile Oil Change Now!
          </Link>
        </div>
      </div>
    </div>
  )
}

