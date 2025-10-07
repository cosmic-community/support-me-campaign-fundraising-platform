import { createBucketClient } from '@cosmicjs/sdk'
import type { CampaignGoal, SupportTier } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

// Helper function for error handling
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error
}

// Fetch active campaign goals
export async function getActiveCampaignGoals(): Promise<CampaignGoal[]> {
  try {
    const response = await cosmic.objects
      .find({
        type: 'campaign-goals',
        'metadata.active': true,
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)

    return response.objects as CampaignGoal[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch campaign goals')
  }
}

// Fetch all support tiers sorted by amount
export async function getSupportTiers(): Promise<SupportTier[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'support-tiers' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)

    // Sort by amount (ascending)
    const tiers = response.objects as SupportTier[]
    return tiers.sort((a, b) => a.metadata.amount - b.metadata.amount)
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch support tiers')
  }
}

// Fetch single support tier by ID
export async function getSupportTierById(id: string): Promise<SupportTier | null> {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'support-tiers',
        id,
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)

    return response.object as SupportTier
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch support tier')
  }
}