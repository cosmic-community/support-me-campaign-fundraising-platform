import Link from 'next/link'
import { Heart } from 'lucide-react'

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-white fill-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Support Me</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#campaign" className="text-gray-600 hover:text-gray-900 transition-colors">
              Campaign
            </Link>
            <Link href="#tiers" className="text-gray-600 hover:text-gray-900 transition-colors">
              Support Tiers
            </Link>
            <Link
              href="#tiers"
              className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Support Now
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}