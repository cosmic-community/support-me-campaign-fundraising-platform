import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center py-16 px-4">
        <div className="max-w-md w-full text-center">
          <div className="mb-6 flex justify-center">
            <CheckCircle2 className="w-20 h-20 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Thank You for Your Support!</h1>
          <p className="text-gray-600 mb-8">
            Your contribution has been received successfully. We truly appreciate your support in helping us reach our goals.
          </p>
          <p className="text-sm text-gray-500 mb-8">
            You will receive a confirmation email shortly with your payment details.
          </p>
          <Link
            href="/"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}