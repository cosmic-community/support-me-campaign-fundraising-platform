import type { CampaignGoal } from '@/types'
import { Calendar, Target, TrendingUp } from 'lucide-react'

interface CampaignProgressProps {
  goal: CampaignGoal
}

export default function CampaignProgress({ goal }: CampaignProgressProps) {
  const currentAmount = goal.metadata.current_amount || 0
  const targetAmount = goal.metadata.target_amount
  const percentage = Math.min(Math.round((currentAmount / targetAmount) * 100), 100)

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount)
  }

  // Format date
  const formatDate = (dateString?: string) => {
    if (!dateString) return null
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <section id="campaign" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            {goal.metadata.goal_title}
          </h2>
          <div
            className="text-gray-600 max-w-3xl mx-auto"
            dangerouslySetInnerHTML={{ __html: goal.metadata.description }}
          />
        </div>

        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-gray-600">Raised</span>
              </div>
              <p className="text-3xl font-bold text-gray-900">{formatCurrency(currentAmount)}</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-secondary" />
                </div>
                <span className="text-sm font-medium text-gray-600">Goal</span>
              </div>
              <p className="text-3xl font-bold text-gray-900">{formatCurrency(targetAmount)}</p>
            </div>

            {goal.metadata.end_date && (
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-gray-600">Ends</span>
                </div>
                <p className="text-lg font-bold text-gray-900">{formatDate(goal.metadata.end_date)}</p>
              </div>
            )}
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">Campaign Progress</span>
              <span className="text-sm font-bold text-primary">{percentage}%</span>
            </div>
            <div className="w-full bg-white rounded-full h-6 overflow-hidden shadow-inner">
              <div
                className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500 ease-out flex items-center justify-end pr-2"
                style={{ width: `${percentage}%` }}
              >
                {percentage > 10 && (
                  <span className="text-xs font-bold text-white">{percentage}%</span>
                )}
              </div>
            </div>
            <p className="text-sm text-gray-600 text-center">
              {formatCurrency(targetAmount - currentAmount)} remaining to reach our goal
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}