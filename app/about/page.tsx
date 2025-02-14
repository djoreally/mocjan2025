import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { MapPin, Users, Clock, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "About MOMS Mobile Oil Change | Expert Oil Change Services Near You",
  description:
    "Learn about MOMS Mobile Oil Change, servingAmbler, PA and surrounding areas with convenient, expert mobile oil change services. Discover why we're the top choice for oil changes near you.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About MOMS Mobile Oil Change</h1>
            <p className="text-xl mb-8">
              Your Trusted Mobile Oil Change Service inAmbler, PA and Surrounding Areas
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Left Column */}
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6">Our Mission: Convenient Oil Changes Near You</h2>
              <p className="mb-6">
                At MOMS Mobile Oil Change, we believe in making vehicle maintenance as convenient and hassle-free as
                possible for the residents and businesses ofAmbler, PA, and the surrounding areas. Founded with a
                simple mission, we aim to bring quality mobile oil change services directly to you – whether you're at
                home, at work, or on the go.
              </p>
              <p className="mb-6">
                Our team of certified technicians is dedicated to providing top-notch oil change services that ensure
                your vehicle runs smoothly, using only the best products available. We understand the demands of daily
                life in the [City] area, which is why we've streamlined the oil change process to save you time without
                compromising on quality.
              </p>
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="MOMS Mobile Oil Change Service in action"
                width={500}
                height={300}
                className="rounded-lg shadow-md mb-8"
              />
              <h2 className="text-3xl font-bold mb-6">Why Choose MOMS Mobile Oil Change?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: MapPin,
                    title: "Convenient Oil Changes at Your Doorstep",
                    description:
                      "ServingAmbler, PA, and nearby communities, we bring expert oil change services directly to your location. No more waiting at a traditional shop.",
                  },
                  {
                    icon: Users,
                    title: "Expert Mobile Oil Change Technicians",
                    description:
                      "Our certified and experienced team provides professional service you can trust, whether you need a routine oil change or specialized vehicle care.",
                  },
                  {
                    icon: Clock,
                    title: "Quick and Reliable Service",
                    description:
                      "Whether you're a busy homeowner, commuter, or managing a fleet in the [City] region, we'll keep you moving with minimal disruption to your day.",
                  },
                  {
                    icon: Heart,
                    title: "Locally Trusted Mobile Oil Change",
                    description:
                      "As a local business, we take pride in serving the [City] and surrounding areas, building lasting relationships with our clients and supporting our community.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <item.icon className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="md:w-1/3">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4">Get Your Oil Change Today!</h3>
                <p className="mb-6">
                  Let us take the hassle out of your vehicle maintenance. Choose MOMS Mobile Oil Change for a
                  convenient, reliable, and affordable oil change experience inAmbler, PA, and the surrounding
                  areas.
                </p>
                <Link
                  href="/contact"
                  className="block w-full bg-blue-600 text-white text-center px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
                >
                  Contact Us for Mobile Oil Change
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for Hassle-Free Oil Changes?</h2>
            <p className="text-xl mb-8">
              From individual car owners in [City] to large fleets in [State], we're committed to keeping your vehicles
              running at their best with our mobile oil change service.
            </p>
            <Link
              href="https://moms.bookyouroilchange.com/"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-blue-700 transition duration-300"
            >
              Schedule Your Mobile Oil Change
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

