"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@clerk/nextjs"
import { useClerk } from "@clerk/clerk-react"
import { loadStripe } from "@stripe/stripe-js"

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "");


export default function ProSubscription() {
  const [isLoading, setIsLoading] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { isSignedIn, userId } = useAuth()
  const { openSignIn } = useClerk()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubscribe = async () => {
    if (!isSignedIn) {
      openSignIn()
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: userId,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to create checkout session')
      }

      const { sessionId } = await response.json()
      const stripe = await stripePromise

      if (stripe) {
        const { error } = await stripe.redirectToCheckout({ sessionId })

        if (error) {
          throw new Error(error.message)
        }
      } else {
        throw new Error("Stripe not initialized")
      }
    } catch (error) {
      console.error("Subscription error:", error)
      alert("Subscription failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (!mounted) {
    return null; // or a loading placeholder
  }

  return (
    <div className="fixed bottom-4 right-4">
      <Button
        onClick={handleSubscribe}
        disabled={isLoading}
        className="bg-vercel-green hover:bg-aqua text-vercel-black"
      >
        {isLoading ? "Processing..." : "Upgrade to Pro"}
      </Button>
    </div>
  )
}