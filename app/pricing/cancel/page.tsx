"use client"

import { Button } from "@/components/ui/button"
import { XCircle } from "lucide-react"
import Link from "next/link"
import { MarketingPageShell } from "@/components/layout/MarketingPageShell"
import { MKT } from "@/lib/marketing-ui"

// Dynamic page - personalized cancel redirect
export const dynamic = 'force-dynamic';

export default function CancelPage() {
  return (
    <MarketingPageShell>
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-20">
        <div className="w-full max-w-lg rounded-2xl border border-black/[0.08] bg-white/90 p-8 text-center shadow-sm md:p-10">
          <XCircle className="mx-auto mb-4 h-14 w-14 text-red-500/90" aria-hidden />
          <h1 className="font-heading text-3xl italic tracking-tight text-neutral-900 md:text-4xl">Payment canceled</h1>
          <p className="mt-3 font-barlow text-base font-medium text-neutral-600 md:text-lg">
            Nothing was charged. You can return to pricing and try again anytime.
          </p>
          <Link href="/pricing" className="mt-8 block">
            <Button className={`${MKT.btnPrimary} w-full`}>
              Back to pricing
            </Button>
          </Link>
        </div>
      </main>
    </MarketingPageShell>
  )
}