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
      <div className="text-center max-w-2xl mx-auto px-4">
        <Image
          src="https://sjc.microlink.io/k57hW-fSZCBh9lxuPi3IXAS5kjpSveyETHhD4ZyZG6dPS7EyR2YzvIEdvnFa0WDB3B2_cR_-7eHWvXiwfjwVpg.jpeg"
          alt="Book your oil change"
          width={400}
          height={300}
          className="mb-8 rounded-lg shadow-lg"
        />
        <h1 className="text-4xl font-bold mb-4">Book Your Oil Change</h1>
        <p className="text-lg text-gray-600 mb-8">
          Schedule your convenient mobile oil change service today
        </p>
        <Link 
          href="https://momsoilchange.bookyouroilchange.com/"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-blue-700 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Schedule Now
        </Link>
      </div>
    </div>
  )
}
