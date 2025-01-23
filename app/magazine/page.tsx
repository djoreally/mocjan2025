"use client"

import Image from "next/image"
import Link from "next/link"
import MagazineLayout from "@/components/MagazineLayout"

export default function MagazinePage() {
  return (
    <MagazineLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="col-span-1 md:col-span-2">
          <h1 className="text-4xl font-bold mb-4">Welcome to MOMS Mag</h1>
          <p className="text-xl text-gray-600 mb-8">
            Your digital destination for all things auto care and maintenance
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
            src="/placeholder.svg?height=300&width=600"
            alt="Featured Article"
            width={600}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">The Future of Mobile Oil Changes</h2>
            <p className="text-gray-600 mb-4">
              Discover how technology is revolutionizing the way we maintain our vehicles.
            </p>
            <Link href="/magazine/features/future-of-mobile-oil-changes" className="text-blue-600 hover:underline">
              Read More →
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
            src="/placeholder.svg?height=300&width=600"
            alt="Tips & Tricks"
            width={600}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">5 Essential Maintenance Tips</h2>
            <p className="text-gray-600 mb-4">
              Keep your vehicle running smoothly with these expert-approved maintenance tips.
            </p>
            <Link href="/magazine/tips/5-essential-maintenance-tips" className="text-blue-600 hover:underline">
              Read More →
            </Link>
          </div>
        </div>

        <div className="col-span-1 md:col-span-2 bg-blue-100 rounded-lg p-8 mt-8">
          <h2 className="text-3xl font-bold mb-4">Featured Interview</h2>
          <p className="text-xl mb-4">
            "The key to longevity in the auto industry is adaptability and customer focus." - John Doe, MOMS Founder
          </p>
          <Link href="/magazine/interviews/john-doe" className="text-blue-600 hover:underline">
            Read the full interview →
          </Link>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-600">
        Scroll down to see the footer with the link to the main website.
      </div>
    </MagazineLayout>
  )
}

