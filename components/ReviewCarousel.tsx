"use client"

import type React from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import { Star } from "lucide-react"

interface Review {
  source: string
  rating: number
  text: string
  author: string
  link: string
  logo: string
}

const reviews: Review[] = [
  {
    source: "Yelp",
    rating: 5,
    text: "Tyreese was a very nice guy, fast and professional. I called and he met me within an hour for an oil change. Recommended!",
    author: "Yelp User",
    link: "https://www.yelp.com",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yelplogo-CIXdcHHsWJEZIJd68X9ebNtY0nb0vo.png",
  },
  {
    source: "Facebook",
    rating: 4.6,
    text: "92% recommend (18 Reviews). MOMS Mobile Oil Change And Fleet Maintenance Services is at My Oil Change Due.",
    author: "Facebook User",
    link: "https://www.facebook.com",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/facebooklogo-6ZMMqubyYjrBnoM0LsSHnHV9aExzVs.png",
  },
  {
    source: "MapQuest",
    rating: 5,
    text: "Very responsive and great service! He came out to where I was and was quick and efficient.",
    author: "Amanda",
    link: "https://www.mapquest.com",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mapquestlogo-1gEFvo1SJAaWMPsqCbrcErZCvAiBnt.png",
  },
  {
    source: "Booksy",
    rating: 5,
    text: "Check out MOMS MOBILE OIL CHANGE in Ambler, PA - explore pricing, reviews, and open appointments online 24/7!",
    author: "Booksy User",
    link: "https://booksy.com",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/booksylogo-QnXZvAAbxCBF1LG6sgSVcUW74gDA3x.png",
  },
  {
    source: "BirdEye",
    rating: 5,
    text: "I've been using Moms for over a year now and my only regret is not finding them earlier! Very responsive, professional, and their price cannot be beat.",
    author: "BirdEye User",
    link: "https://reviews.birdeye.com",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/birdseyelogo-rfsXfZVf5LDyE1Mw3fZcJCh6UukLlt.png",
  },
  {
    source: "Google",
    rating: 5,
    text: "Excellent service! They came to my location and provided fast, professional service. Highly recommended for anyone looking for convenient oil changes.",
    author: "Google Reviewer",
    link: "https://www.google.com/maps",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/google-ONR7m9s9qoSPryzmjFGNfiZL1Y2rcz.png",
  },
]

const ReviewCarousel: React.FC = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="review-swiper"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <Image
                      src={review.logo || "/placeholder.svg"}
                      alt={`${review.source} Logo`}
                      width={24}
                      height={24}
                      className="mr-2"
                    />
                    <span className="font-semibold">{review.source}</span>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < Math.floor(review.rating) ? "text-yellow-400" : "text-gray-300"}`}
                        fill="currentColor"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 flex-grow">{review.text}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">- {review.author}</span>
                  {review.source === "Yelp" && (
                    <a
                      href={review.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      Read full review on Yelp
                    </a>
                  )}
                  {review.source === "Facebook" && (
                    <a
                      href={review.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      View more reviews on Facebook
                    </a>
                  )}
                  {review.source === "MapQuest" && (
                    <a
                      href={review.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      See MapQuest listing
                    </a>
                  )}
                  {review.source === "Booksy" && (
                    <a
                      href={review.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      Check availability on Booksy
                    </a>
                  )}
                  {review.source === "BirdEye" && (
                    <a
                      href={review.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      Read more reviews on BirdEye
                    </a>
                  )}
                  {review.source === "Google" && (
                    <a
                      href={review.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      See our Google reviews
                    </a>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default ReviewCarousel

