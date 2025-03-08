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
          alt="Booking Image"
          width={600}
          height={400}
          className="rounded-lg shadow-lg mb-8"
        />
        <h1 className="text-3xl font-bold mb-4">Book Your Session</h1>
        <p className="text-gray-600 mb-8">
          Choose your preferred time and date for your session.
        </p>
        <Link
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
