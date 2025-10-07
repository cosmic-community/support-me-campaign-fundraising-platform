'use client'

import { useState } from 'react'
import type { SupportTier } from '@/types'
import ReactMarkdown from 'react-markdown'
import { Star, Loader2 } from 'lucide-react'

interface TierCardProps {
  tier: SupportTier
}

export default function TierCard({ tier }: TierCardProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleSupport = async () => {
    setIsLoading(true)

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tierId: tier.id,
        }),
      })

      const data = await response.json()

      if (data.url) {
        window.location.href = data.url
      } else {
        throw new Error('No checkout URL returned')
      }
    } catch (error) {
      console.error('Error creating checkout session:', error)
      alert('Failed to create checkout session. Please try again.')
      setIsLoading(false)
    }
  }

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(amount)
  }

  return (
    <div
      className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105 ${
        tier.metadata.featured ? 'ring-4 ring-primary' : ''
      }`}
    >
      {tier.metadata.featured && (
        <div className="absolute top-4 right-4 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg">
          <Star className="w-4 h-4 fill-white" />
          Most Popular
        </div>
      )}

      {tier.metadata.tier_image && (
        <div className="h-48 overflow-hidden">
          <img
            src={`${tier.metadata.tier_image.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
            alt={tier.metadata.tier_name}
            width="300"
            height="200"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="p-8">
        <h3 className="text-2xl font-bold mb-2 text-gray-900">
          {tier.metadata.tier_name}
        </h3>
        <p className="text-gray-600 mb-6">{tier.metadata.description}</p>

        <div className="mb-6">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-4xl font-bold text-gray-900">
              {formatCurrency(tier.metadata.amount, tier.metadata.currency.value)}
            </span>
            <span className="text-gray-600">/month</span>
          </div>
        </div>

        {tier.metadata.benefits && (
          <div className="mb-8">
            <h4 className="font-semibold mb-3 text-gray-900">What you get:</h4>
            <div className="prose prose-sm max-w-none text-gray-600">
              <ReactMarkdown>{tier.metadata.benefits}</ReactMarkdown>
            </div>
          </div>
        )}

        <button
          onClick={handleSupport}
          disabled={isLoading}
          className={`w-full py-4 rounded-lg font-semibold text-lg transition-colors ${
            tier.metadata.featured
              ? 'bg-primary text-white hover:bg-primary/90'
              : 'bg-gray-900 text-white hover:bg-gray-800'
          } disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2`}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Processing...
            </>
          ) : (
            'Support Now'
          )}
        </button>
      </div>
    </div>
  )
}