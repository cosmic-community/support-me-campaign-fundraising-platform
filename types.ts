// Base Cosmic object interface
export interface CosmicObject {
  id: string
  slug: string
  title: string
  content?: string
  metadata: Record<string, any>
  type: string
  created_at: string
  modified_at: string
}

// Campaign Goal type
export interface CampaignGoal extends CosmicObject {
  type: 'campaign-goals'
  metadata: {
    goal_title: string
    target_amount: number
    current_amount?: number
    description: string
    end_date?: string
    active: boolean
  }
}

// Support Tier type
export interface SupportTier extends CosmicObject {
  type: 'support-tiers'
  metadata: {
    tier_name: string
    amount: number
    currency: {
      key: string
      value: string
    }
    description: string
    benefits?: string
    featured: boolean
    tier_image?: {
      url: string
      imgix_url: string
    }
  }
}

// Stripe checkout session data
export interface CheckoutSessionData {
  tierId: string
  tierName: string
  amount: number
  currency: string
}