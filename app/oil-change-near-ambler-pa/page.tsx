import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { CheckCircle, DollarSign, TrendingUp, Megaphone } from "lucide-react"

// Metadata for the page
export const metadata: Metadata = {
  title: "Oil Change Near Ambler, PA | Fast & Convenient Service",
  description:
    "Find reliable and convenient oil change services near Ambler, PA. Discover why local drivers trust us for top-quality automotive care.",
}

// React Functional Component
const OilChangePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Oil Change Near Ambler, PA</h1>
          <p className="text-lg mb-8">
            Get the best oil change services near Ambler, PA. Schedule your appointment today!
          </p>
          <Link
            href="/contact?subject=Oil%20Change%20Request"
            className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition duration-300"
          >
            Schedule Now
          </Link>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-lg mb-8">
            We offer a range of oil change services to keep your vehicle running smoothly.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Reliable & Affordable Service</h3>
              <p className="text-gray-600 mb-4">
                Our professional oil change services are designed to keep your vehicle running smoothly, without breaking
                the bank. Trust our experienced team to deliver top-quality care every time.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" />
                  <span>Quick and hassle-free process</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" />
                  <span>Certified automotive professionals</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" />
                  <span>High-quality oil and filters</span>
                </li>
              </ul>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Oil Change Near Ambler, PA"
                width={400}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Pricing */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Affordable Pricing</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <DollarSign className="text-blue-600 mr-2" />
                Transparent Pricing
              </h3>
              <p className="text-xl mb-4">Starting at just $99.99</p>
              <p className="text-gray-600">
                Our pricing includes premium oil, expert service, and a thorough inspection to ensure your vehicle is in
                great shape.
              </p>
            </div>
            <h3 className="text-2xl font-semibold mb-4">What’s Included:</h3>
            <ul className="space-y-4">
              <li>
                <span className="font-semibold">Full Synthetic Motor Oil:</span> High-performance oil for optimal engine health
              </li>
              <li>
                <span className="font-semibold">New Oil Filter:</span> Premium filters to protect your engine
              </li>
              <li>
                <span className="font-semibold">Free Vehicle Inspection:</span> Check of fluid levels, tire pressure, and
                more
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for an Oil Change Near Ambler, PA?</h2>
          <p className="text-xl mb-8">
            Schedule your oil change today and experience fast, affordable, and reliable service.
          </p>
          <Link
            href="/contact?subject=Oil%20Change%20Request"
            className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition duration-300"
          >
            Schedule Now
          </Link>
        </div>
      </section>
    </div>
  )
}

// Default export as a functional component
export default OilChangePage
