"use client"

import Link from "next/link"

import { ChevronRight } from "lucide-react"

import { buttonVariants } from "~/components/ui/button"
import { cn } from "~/lib/utils"

export const LoginLink = () => {
  return (
    <nav>
      <Link
        href="/auth"
        className={cn(
          buttonVariants({ variant: "secondary", size: "sm" }),
          "px-4",
        )}>
        Login
        <ChevronRight className="ml-2 h-4 w-4" />
      </Link>
    </nav>
  )
}
