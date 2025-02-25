import { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'
import { buffer } from 'micro'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2023-10-16',
})

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).end('Method Not Allowed')
  }

  try {
    const buf = await buffer(req)
    const sig = req.headers['stripe-signature'] as string

    let event: Stripe.Event
    event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET as string)

    // Handle different webhook events
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object as Stripe.Checkout.Session
        console.log('✅ Subscription successful:', session)
        // TODO: Update user's subscription status in your database
        break

      case 'invoice.payment_succeeded':
        const invoiceSuccess = event.data.object as Stripe.Invoice
        console.log('✅ Invoice payment succeeded:', invoiceSuccess)
        // TODO: Mark invoice as paid in your database
        break

      case 'invoice.payment_failed':
        const invoiceFailed = event.data.object as Stripe.Invoice
        console.log('❌ Invoice payment failed:', invoiceFailed)
        // TODO: Notify user about failed payment & retry logic
        break

      case 'customer.subscription.created':
        const newSubscription = event.data.object as Stripe.Subscription
        console.log('📌 New Subscription Created:', newSubscription)
        // TODO: Store subscription details in your database
        break

      case 'customer.subscription.updated':
        const updatedSubscription = event.data.object as Stripe.Subscription
        console.log('🔄 Subscription Updated:', updatedSubscription)
        // TODO: Handle changes to subscription (upgrades/downgrades)
        break

      case 'customer.subscription.deleted':
        const canceledSubscription = event.data.object as Stripe.Subscription
        console.log('⚠️ Subscription Canceled:', canceledSubscription)
        // TODO: Remove user's premium access in your database
        break

      default:
        console.log(`⚠️ Unhandled event type: ${event.type}`)
    }

    res.json({ received: true })
  } catch (err: any) {
    console.error('Webhook error:', err.message)
    res.status(400).send(`Webhook Error: ${err.message}`)
  }
}
