"use client"

import Image from "next/image"
import Link from "next/link"
import MagazineLayout from "@/components/MagazineLayout"

export default function TipsPage() {
  return (
    <MagazineLayout>
      <h1 className="text-4xl font-bold mb-8">Tips & Tricks</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
            src="/placeholder.svg?height=200&width=400"
            alt="Oil Change Tips"
            width={400}
            height={200}
            className="w-full h-40 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">5 Oil Change Myths Debunked</h2>
            <p className="text-gray-600 mb-4">Separating fact from fiction in vehicle maintenance.</p>
            <Link href="/magazine/tips/oil-change-myths" className="text-blue-600 hover:underline">
              Read More →
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
            src="/placeholder.svg?height=200&width=400"
            alt="Tire Care"
            width={400}
            height={200}
            className="w-full h-40 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">The Ultimate Tire Care Guide</h2>
            <p className="text-gray-600 mb-4">Maximize your tire life with these expert tips.</p>
            <Link href="/magazine/tips/tire-care-guide" className="text-blue-600 hover:underline">
              Read More →
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
            src="/placeholder.svg?height=200&width=400"
            alt="DIY Maintenance"
            width={400}
            height={200}
            className="w-full h-40 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">DIY Car Maintenance Basics</h2>
            <p className="text-gray-600 mb-4">Simple tasks you can do to keep your car in top shape.</p>
            <Link href="/magazine/tips/diy-maintenance" className="text-blue-600 hover:underline">
              Read More →
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
            src="/placeholder.svg?height=200&width=400"
            alt="Fuel Efficiency"
            width={400}
            height={200}
            className="w-full h-40 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">10 Ways to Improve Fuel Efficiency</h2>
            <p className="text-gray-600 mb-4">Save money and reduce your carbon footprint.</p>
            <Link href="/magazine/tips/improve-fuel-efficiency" className="text-blue-600 hover:underline">
              Read More →
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
            src="/placeholder.svg?height=200&width=400"
            alt="Winter Car Care"
            width={400}
            height={200}
            className="w-full h-40 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">Winter Car Care Essentials</h2>
            <p className="text-gray-600 mb-4">Prepare your vehicle for the cold months ahead.</p>
            <Link href="/magazine/tips/winter-car-care" className="text-blue-600 hover:underline">
              Read More →
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
            src="/placeholder.svg?height=200&width=400"
            alt="Dashboard Lights"
            width={400}
            height={200}
            className="w-full h-40 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">Decoding Dashboard Warning Lights</h2>
            <p className="text-gray-600 mb-4">Understanding what your car is trying to tell you.</p>
            <Link href="/magazine/tips/dashboard-lights" className="text-blue-600 hover:underline">
              Read More →
            </Link>
          </div>
        </div>
      </div>
    </MagazineLayout>
  )
}

