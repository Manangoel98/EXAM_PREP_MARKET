import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-lg border px-3 py-1 text-xs font-semibold transition-none focus:outline-none",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-neutral-900 text-white",
        secondary:
          "border-transparent bg-neutral-100 text-neutral-700",
        accent:
          "border-transparent bg-accent-lime/10 text-neutral-900 border-accent-lime/20",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground",
        outline: "text-neutral-700 border-neutral-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
