'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Home, RefreshCw } from 'lucide-react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {

  useEffect(() => {
    console.error('Global error:', error)
  }, [error])

  const ErrorContent = () => (
    <div className="flex flex-col items-center justify-center h-full text-center text-blackout">
      <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
      <p className="mb-6">
        An unexpected error occurred. Please try again or return to the homepage.
      </p>
      <div className="flex space-x-4">
        <Button onClick={() => window.location.href = '/'} className="bg-palatinate-blue text-white-blue">Go to Homepage</Button>
        <Button variant="outline" onClick={() => reset()} className="bg-transparent text-palatinate-blue border-palatinate-blue">
          Try Again
        </Button>
      </div>
    </div>
  );

  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-white-blue">
          <div className="p-8 rounded-lg">
            <ErrorContent />
          </div>
        </div>
      </body>
    </html>
  )
}