import { NextRequest, NextResponse } from 'next/server'
import { getStripe } from '@/lib/stripe'
import { getSupportTierById } from '@/lib/cosmic'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { tierId } = body

    if (!tierId) {
      return NextResponse.json(
        { error: 'Tier ID is required' },
        { status: 400 }
      )
    }

    // Fetch tier details from Cosmic
    const tier = await getSupportTierById(tierId)

    if (!tier) {
      return NextResponse.json(
        { error: 'Support tier not found' },
        { status: 404 }
      )
    }

    // Get Stripe instance (lazy initialization)
    const stripe = getStripe()

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: tier.metadata.currency.value.toLowerCase(),
            product_data: {
              name: tier.metadata.tier_name,
              description: tier.metadata.description,
              images: tier.metadata.tier_image
                ? [`${tier.metadata.tier_image.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`]
                : [],
            },
            unit_amount: tier.metadata.amount * 100, // Convert to cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${request.nextUrl.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.nextUrl.origin}/?canceled=true`,
      metadata: {
        tierId: tier.id,
        tierName: tier.metadata.tier_name,
      },
    })

    return NextResponse.json({ sessionId: session.id, url: session.url })
  } catch (error) {
    console.error('Error creating checkout session:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}