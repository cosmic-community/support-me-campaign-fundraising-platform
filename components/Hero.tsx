import { Heart, Users, Target } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Help Us Make a Difference
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your support enables us to continue creating quality content and providing valuable services to our community. Every contribution makes an impact.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="#tiers"
              className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors shadow-lg"
            >
              Become a Supporter
            </a>
            <a
              href="#campaign"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors border-2 border-gray-200"
            >
              Learn More
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Make an Impact</h3>
              <p className="text-gray-600 text-sm">Your support directly funds our mission and goals</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Join the Community</h3>
              <p className="text-gray-600 text-sm">Get exclusive access and connect with supporters</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Track Progress</h3>
              <p className="text-gray-600 text-sm">See exactly how your contribution helps us grow</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}