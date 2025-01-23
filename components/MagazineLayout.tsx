import React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

interface MagazineLayoutProps {
  children: React.ReactNode
}

const MagazineLayout: React.FC<MagazineLayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/magazine" className="text-2xl font-bold text-blue-600">
            MOMS Mag
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/magazine" className="text-gray-600 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/magazine/features" className="text-gray-600 hover:text-blue-600 transition-colors">
              Features
            </Link>
            <Link href="/magazine/tips" className="text-gray-600 hover:text-blue-600 transition-colors">
              Tips & Tricks
            </Link>
            <Link href="/magazine/interviews" className="text-gray-600 hover:text-blue-600 transition-colors">
              Interviews
            </Link>
          </nav>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="/magazine" className="text-gray-600 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/magazine/features" className="text-gray-600 hover:text-blue-600 transition-colors">
              Features
            </Link>
            <Link href="/magazine/tips" className="text-gray-600 hover:text-blue-600 transition-colors">
              Tips & Tricks
            </Link>
            <Link href="/magazine/interviews" className="text-gray-600 hover:text-blue-600 transition-colors">
              Interviews
            </Link>
          </nav>
        </div>
      )}

      <main className="container mx-auto px-4 py-8">{children}</main>

      <footer className="bg-white shadow-md mt-12">
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-gray-600">© {new Date().getFullYear()} MOMS Mag. All rights reserved.</p>
          <Link href="/" className="text-blue-600 hover:underline mt-2 inline-block">
            Visit MOMS Mobile Oil Change Website
          </Link>
        </div>
      </footer>
    </div>
  )
}

export default MagazineLayout

