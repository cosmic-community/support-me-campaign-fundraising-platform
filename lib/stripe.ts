import Stripe from 'stripe'

let stripeInstance: Stripe | null = null

export function getStripe(): Stripe {
  if (!stripeInstance) {
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error('STRIPE_SECRET_KEY is not set')
    }
    
    stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2023-10-16',
      typescript: true,
    })
  }
  
  return stripeInstance
}

// For backward compatibility, export a getter that throws a helpful error
export const stripe = new Proxy({} as Stripe, {
  get: () => {
    throw new Error('Use getStripe() function instead of importing stripe directly')
  }
})