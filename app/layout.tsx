import type React from "react"
import type { Metadata } from "next"
import { ClerkProvider } from '@clerk/nextjs'
import Navbar from "../components/navbar"
import "../styles/globals.css"
import dynamic from "next/dynamic";


const Footer = dynamic(() => import("@/components/footer"),  { ssr: false });

export const metadata: Metadata = {
  title: "SqueakyAI",
  description: "AI-powered data cleaning solution",
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