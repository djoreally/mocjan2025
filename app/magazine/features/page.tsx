"use client"

import Image from "next/image"
import Link from "next/link"
import MagazineLayout from "@/components/MagazineLayout"

export default function FeaturesPage() {
  return (
    <MagazineLayout>
      <h1 className="text-4xl font-bold mb-8">Featured Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
            src="/placeholder.svg?height=300&width=600"
            alt="Electric Vehicles"
            width={600}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">The Rise of Electric Vehicles</h2>
            <p className="text-gray-600 mb-4">How the shift to electric is changing the auto maintenance landscape.</p>
            <Link href="/magazine/features/rise-of-electric-vehicles" className="text-blue-600 hover:underline">
              Read More →
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
            src="/placeholder.svg?height=300&width=600"
            alt="AI in Auto Care"
            width={600}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">AI in Auto Care</h2>
            <p className="text-gray-600 mb-4">
              Exploring the role of artificial intelligence in modern vehicle diagnostics.
            </p>
            <Link href="/magazine/features/ai-in-auto-care" className="text-blue-600 hover:underline">
              Read More →
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
            src="/placeholder.svg?height=300&width=600"
            alt="Sustainable Auto Care"
            width={600}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Sustainable Auto Care Practices</h2>
            <p className="text-gray-600 mb-4">How the industry is adapting to eco-friendly maintenance solutions.</p>
            <Link href="/magazine/features/sustainable-auto-care" className="text-blue-600 hover:underline">
              Read More →
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
            src="/placeholder.svg?height=300&width=600"
            alt="Future of Mobile Services"
            width={600}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">The Future of Mobile Services</h2>
            <p className="text-gray-600 mb-4">
              From oil changes to full maintenance: the evolution of mobile auto care.
            </p>
            <Link href="/magazine/features/future-of-mobile-services" className="text-blue-600 hover:underline">
              Read More →
            </Link>
          </div>
        </div>
      </div>
    </MagazineLayout>
  )
}

