"use client"

import { Poppins } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import "./globals.css"
import "../styles/critical.css"
import "../styles/contact-form.css"
import { useEffect } from "react"
import ReturnToTop from "@/components/ReturnToTop"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0)
    }
  }, [])

  return (
    <html lang="en">
      <body className={`${poppins.className} flex flex-col min-h-screen w-full`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <ReturnToTop />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}