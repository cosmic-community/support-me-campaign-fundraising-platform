import { getActiveCampaignGoals, getSupportTiers } from '@/lib/cosmic'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import CampaignProgress from '@/components/CampaignProgress'
import SupportTiers from '@/components/SupportTiers'
import Footer from '@/components/Footer'

export default async function HomePage() {
  const [goals, tiers] = await Promise.all([
    getActiveCampaignGoals(),
    getSupportTiers(),
  ])

  const activeGoal = goals[0] || null

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        {activeGoal && <CampaignProgress goal={activeGoal} />}
        <SupportTiers tiers={tiers} />
      </main>
      <Footer />
    </div>
  )
}