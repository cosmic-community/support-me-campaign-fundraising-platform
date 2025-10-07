import { Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white fill-white" />
              </div>
              <span className="text-xl font-bold">Support Me</span>
            </div>
            <p className="text-gray-400">
              Thank you for supporting our mission. Your contributions make a real difference.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#campaign" className="text-gray-400 hover:text-white transition-colors">
                  Campaign
                </a>
              </li>
              <li>
                <a href="#tiers" className="text-gray-400 hover:text-white transition-colors">
                  Support Tiers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <p className="text-gray-400 mb-2">
              Questions about supporting us?
            </p>
            <a href="mailto:support@example.com" className="text-primary hover:text-primary/90 transition-colors">
              support@example.com
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Support Me. All rights reserved.</p>
          <p className="mt-2 text-sm">Powered by Cosmic CMS & Stripe</p>
        </div>
      </div>
    </footer>
  )
}