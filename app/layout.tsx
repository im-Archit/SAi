import type React from "react"
import type { Metadata } from "next"
import { ClerkProvider } from '@clerk/nextjs'
import Navbar from "../components/navbar"
import "../styles/globals.css"
import dynamic from "next/dynamic";


const Footer = dynamic(() => import("@/components/footer"),  { ssr: false });

export const metadata: Metadata = {
  title: "Enterprise Data Cleaning | AI-Powered Solutions",
  icons: "/logo.ico",
  description: "AI-driven data cleaning for enterprises. Improve data accuracy, remove inconsistencies, and automate cleaning processes.",
  openGraph: {
    title: "Enterprise Data Cleaning | AI-Powered Solutions",
    description: "We provide enterprise-level AI-powered data cleaning solutions.",
    type: "website",
    url: "https://squeakyai.com",
    images: [{ url: "/logo.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Data Cleaning | AI-Powered Solutions",
    description: "Automated data cleaning for businesses using AI technology.",
    images: ["/SqueakyLogo.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en" style={{ scrollBehavior: 'smooth' }}>
        <body>
          <Navbar />
          {children}
          <Footer/>
        </body>
      </html>
    </ClerkProvider>
  )
}