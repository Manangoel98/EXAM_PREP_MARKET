"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Target, RefreshCw, Home } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const router = useRouter()

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-white-blue text-blackout flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-2xl font-bold mb-4">Something went wrong!</h1>
        <p className="mb-8 leading-relaxed">
          An unexpected error occurred. Please try again or return to the homepage.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => router.push('/')}
            className="bg-palatinate-blue text-white-blue"
          >
            <Home className="mr-2 h-4 w-4" />
            Go to Homepage
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            className="bg-transparent text-palatinate-blue border-palatinate-blue"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
        </div>
      </div>
    </div>
  )
}
