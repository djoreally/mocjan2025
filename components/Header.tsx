"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, Menu } from "lucide-react"
import TopBar from "./TopBar"
import MainNav from "./MainNav"

const Header = () => {
  const [isSticky, setIsSticky] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0)
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`w-full bg-white ${isSticky ? "sticky top-0 shadow-md" : ""} transition-all duration-300 z-50`}>
      <TopBar />
      <div className="w-full px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex-shrink-0" aria-label="MOMS Mobile Oil Change Home">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PNG-2j7N2sLeub121j3obUNSBFHf6YfUq7.png"
              alt="MOMS Mobile Oil Change"
              width={200}
              height={80}
              className="h-16 w-auto"
              priority
            />
          </Link>
          <MainNav onNavigate={closeMobileMenu} />
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:1-215-767-2125" className="flex items-center text-primary-700 hover:text-primary-800">
              <Phone className="w-5 h-5 mr-1" />
              <span>Call us at 1-215-767-2125</span>
            </a>
            <Link
              href="https://momsoilchange.bookyouroilchange.com/"
              className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition duration-300"
            >
              Book Now
            </Link>
          </div>
          <button
            ref={buttonRef}
            className="md:hidden text-primary-700 hover:text-primary-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div ref={mobileMenuRef} className="md:hidden bg-white shadow-md">
          <nav className="w-full px-4 py-4">
            <Link href="/" className="block py-2 text-primary-700 hover:text-primary-800" onClick={closeMobileMenu}>
              Home
            </Link>
            <Link
              href="/services"
              className="block py-2 text-primary-700 hover:text-primary-800"
              onClick={closeMobileMenu}
            >
              Services
            </Link>
            <Link
              href="/fleet-maintenance"
              className="block py-2 text-primary-700 hover:text-primary-800"
              onClick={closeMobileMenu}
            >
              Fleet Maintenance
            </Link>
            <Link
              href="/about"
              className="block py-2 text-primary-700 hover:text-primary-800"
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
            <Link
              href="/franchise"
              className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={closeMobileMenu}
            >
              Franchise
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-primary-700 hover:text-primary-800"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
            <Link href="/blog" className="block py-2 text-primary-700 hover:text-primary-800" onClick={closeMobileMenu}>
              Blog
            </Link>
            <Link href="/faq" className="block py-2 text-primary-700 hover:text-primary-800" onClick={closeMobileMenu}>
              FAQ
            </Link>
            <Link href="https://momsoilchange.bookyouroilchange.com/" className="block py-2 text-primary-600 font-semibold" onClick={closeMobileMenu}>
              Book Now
            </Link>
            <Link
              href="https://bookyouroilchange.com/signup"
              className="block py-2 text-primary-700 hover:text-primary-800"
              onClick={closeMobileMenu}
            >
              Login
            </Link>
            <Link
              href="/fleet-login"
              className="block py-2 text-primary-700 hover:text-primary-800"
              onClick={closeMobileMenu}
            >
              Fleet Login
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header

