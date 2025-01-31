import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { CheckCircle, DollarSign, TrendingUp, Megaphone } from "lucide-react"

export const metadata: Metadata = {
  title: "Own a MOMS Mobile Oil Change Franchise | Lucrative Business Opportunity",
  description:
    "Discover the benefits of owning a MOMS Mobile Oil Change franchise. Learn about startup costs, financial projections, and comprehensive marketing support.",
}

export default function FranchisePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Own a MOMS Mobile Oil Change Franchise</h1>
            <p className="text-xl mb-8">
              Join the revolution in mobile automotive services and build a lucrative business with industry-leading
              support.
            </p>
            <Link
              href="#contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition duration-300"
            >
              Request Franchise Information
            </Link>
          </div>
        </div>
      </section>

      {/* Franchise Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose a MOMS Franchise?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Proven Business Model</h3>
              <p className="text-gray-600 mb-4">
                Our mobile oil change service has revolutionized the automotive maintenance industry. With a MOMS
                franchise, you'll benefit from our established brand and proven operational systems.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" />
                  <span>Low overhead costs compared to traditional auto shops</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" />
                  <span>Flexible scheduling and service areas</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" />
                  <span>Growing demand for convenient automotive services</span>
                </li>
              </ul>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="MOMS Mobile Oil Change Service"
                width={400}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Franchise Costs */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Investment and Costs</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <DollarSign className="text-blue-600 mr-2" />
                Estimated Initial Investment
              </h3>
              <p className="text-xl mb-4">$75,000 - $125,000</p>
              <p className="text-gray-600">
                This range includes the franchise fee, initial equipment, inventory, and working capital. Actual costs
                may vary based on your location and specific circumstances.
              </p>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Breakdown of Costs:</h3>
            <ul className="space-y-4">
              <li>
                <span className="font-semibold">Franchise Fee:</span> $30,000 - $50,000
              </li>
              <li>
                <span className="font-semibold">Equipment and Vehicle:</span> $25,000 - $40,000
              </li>
              <li>
                <span className="font-semibold">Initial Inventory:</span> $5,000 - $10,000
              </li>
              <li>
                <span className="font-semibold">Marketing and Advertising:</span> $5,000 - $10,000
              </li>
              <li>
                <span className="font-semibold">Working Capital:</span> $10,000 - $15,000
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Financial Projections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Financial Projections</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <TrendingUp className="text-green-600 mr-2" />
                Potential Annual Revenue
              </h3>
              <p className="text-xl mb-4">$200,000 - $500,000+</p>
              <p className="text-gray-600">
                These projections are based on average performance of existing franchises. Individual results may vary
                based on location, market conditions, and franchisee performance.
              </p>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Key Financial Metrics:</h3>
            <ul className="space-y-4">
              <li>
                <span className="font-semibold">Average Ticket Price:</span> $80 - $120
              </li>
              <li>
                <span className="font-semibold">Services Per Day:</span> 8 - 15
              </li>
              <li>
                <span className="font-semibold">Gross Profit Margin:</span> 50% - 60%
              </li>
              <li>
                <span className="font-semibold">Break-Even Point:</span> Typically within 12-18 months
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Marketing Support */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Marketing Support</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <Megaphone className="text-purple-600 mr-2" />
                Marketing Assistance Included
              </h3>
              <p className="text-gray-600">
                As a MOMS franchisee, you'll benefit from our comprehensive marketing support to help you launch and
                grow your business effectively.
              </p>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Marketing Support Includes:</h3>
            <ul className="space-y-4">
              <li>
                <span className="font-semibold">Brand Development:</span> Access to our established brand assets and
                guidelines
              </li>
              <li>
                <span className="font-semibold">Local SEO and Online Presence:</span> Assistance in setting up and
                optimizing your local online presence
              </li>
              <li>
                <span className="font-semibold">Social Media Marketing:</span> Training and support for effective social
                media campaigns
              </li>
              <li>
                <span className="font-semibold">Print and Digital Advertising:</span> Templates and guidance for local
                advertising efforts
              </li>
              <li>
                <span className="font-semibold">Customer Relationship Management:</span> Access to our CRM system for
                customer retention and referral programs
              </li>
              <li>
                <span className="font-semibold">Grand Opening Support:</span> Comprehensive marketing plan for your
                franchise launch
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your MOMS Franchise Journey?</h2>
          <p className="text-xl mb-8">
            Contact us today to receive detailed franchise information and begin your path to business ownership.
          </p>
          <Link
            href="/contact?subject=Franchise%20Information%20Request"
            className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition duration-300"
          >
            Request Franchise Information
          </Link>
        </div>
      </section>
    </div>
  )
}

