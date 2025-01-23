"use client";

import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Top 5 Motor Oils in the World | Ultimate Performance & Protection",
  description: "Discover the best motor oils that offer superior engine protection, performance, and longevity for your vehicle. Expert-rated top 5 motor oils compared.",
};

export default function TopMotorOilsPage() {
  const topMotorOils = [
    {
      name: "Mobil 1 Extended Performance",
      rating: 9.8,
      description: "Full synthetic oil offering exceptional engine protection and extended drain intervals",
      keyBenefits: [
        "Designed for high-performance and high-mileage vehicles",
        "Provides outstanding wear protection",
        "Helps maintain fuel economy",
        "Excellent low-temperature capabilities"
      ],
      price: "$54.99 per 5-quart container"
    },
    {
      name: "Castrol EDGE Advanced Full Synthetic",
      rating: 9.3,
      description: "Ultra-tough synthetic oil with Fluid Titanium Technology",
      keyBenefits: [
        "Strongest oil under pressure",
        "Reduces metal-to-metal contact",
        "Excellent for turbocharged and high-performance engines",
        "Enhanced engine protection in extreme conditions"
      ],
      price: "$47.99 per 5-quart container"
    },
    {
      name: "Valvoline Advanced Full Synthetic",
      rating: 9.2,
      description: "Premium synthetic oil with enhanced protection and performance",
      keyBenefits: [
        "Excellent wear protection",
        "Keeps engine clean",
        "High temperature protection",
        "Great for high mileage vehicles"
      ],
      price: "$36.99 per 5-quart container"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Top 5 Motor Oils in the World</h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Comprehensive guide to the most exceptional motor oils for ultimate engine protection and performance
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Ranking Methodology</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span>Performance under extreme conditions</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span>Engine protection and wear reduction</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span>Viscosity stability</span>
              </li>
              <li className="flex items-start"></li>
                <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span>Performance additives</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span>Price-to-performance ratio</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Oil Selection Guide</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium text-blue-600">High-Performance Vehicles</h3>
                <p className="text-gray-600">Recommended: Royal Purple HPS or Mobil 1 Extended Performance</p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-blue-600">Daily Drivers</h3>
                <p className="text-gray-600">Best options: Pennzoil Platinum or Valvoline Advanced Full Synthetic</p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-blue-600">Budget-Conscious</h3>
                <p className="text-gray-600">Great value: Valvoline Advanced Full Synthetic</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">Detailed Motor Oil Rankings</h2>
          <div className="space-y-8">
            {topMotorOils.map((oil, index) => (
              <div key={oil.name} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-semibold">{index + 1}. {oil.name}</h3>
                  <span className="text-xl font-bold text-blue-600">Rating: {oil.rating}/10</span>
                </div>
                <p className="text-gray-600 mb-4">{oil.description}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {oil.keyBenefits.map((benefit) => (
                        <li key={benefit} className="flex items-center">
                          <Check className="w-4 h-4 text-green-500 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-lg font-bold">Price: {oil.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">How often should I change my motor oil?</h3>
              <p className="text-gray-600">
                Typically every 5,000-7,500 miles for conventional oil, and up to 15,000 miles for full synthetic oils. Always check your vehicle manufacturer's recommendations.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium">What's the difference between synthetic and conventional oil?</h3>
              <p className="text-gray-600">
                Synthetic oils offer superior protection, better performance in extreme temperatures, and longer change intervals compared to conventional oils.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Can I mix different brands of motor oil?</h3>
              <p className="text-gray-600">
                While it's possible, it's recommended to stick to one brand and type of oil to maintain optimal engine performance.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Do expensive motor oils really make a difference?</h3>
              <p className="text-gray-600">
                Premium synthetic oils provide better engine protection, improved performance, and can potentially extend your engine's life, making them a worthwhile investment.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Find Your Perfect Motor Oil Today!</h2>
          <Link
            href="/motor-oil-finder"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Explore Motor Oil Recommendations
          </Link>
        </div>
      </div>
    </div>
  )
}