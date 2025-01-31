"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react"
import { useState } from "react"

const Footer = () => {
  const [showPopup, setShowPopup] = useState(false)

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Add newsletter subscription logic here
    console.log("Newsletter subscription submitted")
    // You can add more complex logic or API calls here
  }

  const handleGetDirections = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setShowPopup(true)
  }

  return (
    <footer className="bg-gradient-to-b from-blue-900 to-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Information */}
          <div className="space-y-4">
            <Link href="/" className="block" aria-label="MOMS Mobile Oil Change Home">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PNG-1-tEff3NghELRpMRjfVlFzZwYgPwdmUq.png"
                alt="MOMS Mobile Oil Change"
                width={200}
                height={80}
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-gray-300">Keeping Your Fleet and Family on the Move!</p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-6 h-6 text-gray-300 hover:text-white transition-colors" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-6 h-6 text-gray-300 hover:text-white transition-colors" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-6 h-6 text-gray-300 hover:text-white transition-colors" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-gray-300 hover:text-white transition-colors" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/fleet-maintenance" className="text-gray-300 hover:text-white transition-colors">
                  Fleet Maintenance
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/franchise" className="text-gray-300 hover:text-white transition-colors">
                  Franchise Opportunities
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/magazine" className="text-gray-300 hover:text-white transition-colors">
                  Magazine
                </Link>
              </li>
              <li>
                <Link href="https://momsoilchange.bookyouroilchange.com/" className="text-gray-300 hover:text-white transition-colors">
                  Book Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-gray-300" />
                <a href="tel:215-767-2125" className="text-gray-300 hover:text-white transition-colors">
                  215-767-2125
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-gray-300" />
                <a href="mailto:support@momsoilchange.com" className="text-gray-300 hover:text-white transition-colors">
                  support@momsoilchange.com
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-gray-300" />
                <span className="text-gray-300">Serving Philadelphia and surrounding areas</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">Stay updated with our latest offers and tips!</p>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-blue-800 border border-blue-600 focus:border-blue-400 focus:outline-none text-white"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-blue-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-500">|</span>
              <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
            <div className="text-gray-400">
              © {new Date().getFullYear()} MOMS Mobile Oil Change. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

