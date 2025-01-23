"use client"

import { Poppins } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CouponPopup from "@/components/CouponPopup"
import CookieConsent from "@/components/CookieConsent"
import "./globals.css"
import "../styles/critical.css"
import "../styles/contact-form.css"
import { useEffect } from "react"
import ReturnToTop from "@/components/ReturnToTop"
import { Analytics } from "@vercel/analytics/react"

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
      <head>
        <title>MOMS Mobile Oil Change and Fleet Maintenance</title>
        <meta name="description" content="Professional mobile oil change and fleet maintenance services" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${poppins.className} flex flex-col min-h-screen w-full`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <div id="optedInFormWrapper"></div>
        <script src="https://esvcs.enginemailer.com/Scripts/viewform.js?id=G7H0sxuE5nmLCIZB7nTyCA%3D%3D&sc=87axo7c90AlrgsICi1BN8Q%3D%3D&type=new"></script>
        <Footer />
        <CouponPopup />
        <CookieConsent />
        <ReturnToTop />
      </body>
    </html>
  )
}

