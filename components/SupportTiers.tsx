import type { SupportTier } from '@/types'
import TierCard from '@/components/TierCard'

interface SupportTiersProps {
  tiers: SupportTier[]
}

export default function SupportTiers({ tiers }: SupportTiersProps) {
  if (tiers.length === 0) {
    return (
      <section id="tiers" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Support Tiers</h2>
          <p className="text-gray-600">No support tiers available at this time.</p>
        </div>
      </section>
    )
  }

  return (
    <section id="tiers" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Choose Your Support Level</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select the tier that works best for you. Every level comes with unique benefits and helps us achieve our mission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <TierCard key={tier.id} tier={tier} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            All payments are securely processed through Stripe
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
            <span>🔒 Secure Payment</span>
            <span>•</span>
            <span>💳 All Major Cards</span>
            <span>•</span>
            <span>✅ Instant Processing</span>
          </div>
        </div>
      </div>
    </section>
  )
}