import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Book Your Oil Change | MOMS Mobile Oil Change",
  description:
    "Schedule your mobile oil change service with MOMS. We come to you for convenient, professional service.",
}

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center py-12">
      <div className="text-center">
        <Image
          src="https://sjc.microlink.io/k57hW-fSZCBh9lxuPi3IXAS5kjpSveyETHhD4ZyZG6dPS7EyR2YzvIEdvnFa0WDB3B2_cR_-7eHWvXiwfjwVpg.jpeg"
          alt="MOMS Mobile Oil Change Booking"
          width={200}
          height={200}
          className="mx-auto mb-8"
        />
        <div className="text-center">
          <Link href="/services" className="text-blue-600 hover:underline">
            View Our Services
          </Link>
          <Link href="/blog" className="text-blue-600 hover:underline">
            Read Our Blog
          </Link>
          <Link
          <Link href="/services" className="text-blue-600 hover:underline">
            View Our Services
          </Link>
          <Link href="/blog" className="text-blue-600 hover:underline">
            Read Our Blog
          </Link>
          <Link href="/services" className="text-blue-600 hover:underline">
            View Our Services
          </Link>
          <Link href="/blog" className="text-blue-600 hover:underline">
            Read Our Blog
          </Link>
          <Link href="/services" className="text-blue-600 hover:underline">
            View Our Services
          </Link>
          <Link href="/blog" className="text-blue-600 hover:underline">
            Read Our Blog
          </Link>
          <Link href="/services" className="text-blue-600 hover:underline">
            View Our Services
          </Link>
          <Link href="/blog" className="text-blue-600 hover:underline">
            Read Our Blog
          </Link>
          <Link href="/services" className="text-blue-600 hover:underline">
            View Our Services
          </Link>
          <Link href="/blog" className="text-blue-600 hover:underline">
            Read Our Blog
          </Link>
          <Link href="/services" className="text-blue-600 hover:underline">
            View Our Services
          </Link>
          <Link href="/blog" className="text-blue-600 hover:underline">
            Read Our Blog
          </Link>
          <Link href="/services" className="text-blue-600 hover:underline">
            View Our Services
          </Link>
          <Link href="/blog" className="text-blue-600 hover:underline">
            Read Our Blog
          </Link>
          <Link href="/services" className="text-blue-600 hover:underline">
            View Our Services
          </Link>
          <Link href="/blog" className="text-blue-600 hover:underline">
            Read Our Blog
          </Link>
          href="https://momsoilchange.bookyouroilchange.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Book Now
        </Link>
      </div>
    </div>
  )
}
