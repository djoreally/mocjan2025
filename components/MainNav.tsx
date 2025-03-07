import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"

interface MainNavProps {
  onNavigate?: () => void
}

const MainNav = ({ onNavigate }: MainNavProps) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const resourcesDropdownRef = useRef<HTMLDivElement>(null)
  const resourcesButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        (dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node) &&
          buttonRef.current &&
          !buttonRef.current.contains(event.target as Node)) ||
        (resourcesDropdownRef.current &&
          !resourcesDropdownRef.current.contains(event.target as Node) &&
          resourcesButtonRef.current &&
          !resourcesButtonRef.current.contains(event.target as Node))
      ) {
        setIsServicesOpen(false)
        setIsResourcesOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleNavigate = () => {
    setIsServicesOpen(false)
    setIsResourcesOpen(false)
    onNavigate?.()
  }

  return (
    <nav className="hidden md:flex items-center space-x-6">
      <Link href="/" className="text-gray-700 hover:text-blue-600" onClick={handleNavigate}>
        Home
      </Link>
      <div className="relative">
        <button
          ref={buttonRef}
          className="text-gray-700 hover:text-blue-600 flex items-center"
          onClick={() => setIsServicesOpen(!isServicesOpen)}
          aria-expanded={isServicesOpen}
        >
          Services <ChevronDown className="w-4 h-4 ml-1" />
        </button>
        {isServicesOpen && (
          <div
            ref={dropdownRef}
            className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          >
            <div className="py-1" role="menu" aria-orientation="vertical">
              <Link
                href="/services"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                onClick={handleNavigate}
              >
                All Services
              </Link>
              <Link
                href="/services/oil-change"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                onClick={handleNavigate}
              >
                Oil Change
              </Link>
              <Link
                href="/fleet-maintenance"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                onClick={handleNavigate}
              >
                Fleet Maintenance
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className="relative">
        <button
          ref={resourcesButtonRef}
          className="text-gray-700 hover:text-blue-600 flex items-center"
          onClick={() => setIsResourcesOpen(!isResourcesOpen)}
          aria-expanded={isResourcesOpen}
        >
          Resources <ChevronDown className="w-4 h-4 ml-1" />
        </button>
        {isResourcesOpen && (
          <div
            ref={resourcesDropdownRef}
            className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          >
            <div className="py-1" role="menu" aria-orientation="vertical">
              <Link
                href="/motor-oil-lookup"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                onClick={handleNavigate}
              >
                Motor Oil Lookup Tool
              </Link>
              <Link
                href="/calculator"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                onClick={handleNavigate}
              >
                Calculator
              </Link>
            </div>
          </div>
        )}
      </div>
      <Link href="/about" className="text-gray-700 hover:text-blue-600" onClick={handleNavigate}>
        About Us
      </Link>
      <Link href="/contact" className="text-gray-700 hover:text-blue-600" onClick={handleNavigate}>
        Contact
      </Link>
      <Link href="/blog" className="text-gray-700 hover:text-blue-600" onClick={handleNavigate}>
        Blog
      </Link>
      <Link href="/faq" className="text-gray-700 hover:text-blue-600" onClick={handleNavigate}>
        FAQ
      </Link>
      <Link href="https://momsoilchange.bookyouroilchange.com/" className="text-gray-700 hover:text-blue-600" onClick={handleNavigate}>
        Schedule
      </Link>
      <Link href="https://bookyouroilchange.com/signup" className="text-gray-700 hover:text-blue-600" onClick={handleNavigate}>
        Login
      </Link>
      <Link href="/fleet-login" className="text-gray-700 hover:text-blue-600" onClick={handleNavigate}>
        Fleet Login
      </Link>
    </nav>
  )
}

export default MainNav

