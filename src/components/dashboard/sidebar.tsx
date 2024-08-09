"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { imagePaths, sidebarConfig } from "~/config/constants.config"
import { cn } from "~/lib/utils"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/ui/tooltip"

export function Sidebar() {
  const path = usePathname()

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r-emerald-50 bg-background sm:flex">
      <TooltipProvider>
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
          <Link
            href="/"
            className="group flex h-18 w-18 2shr12n2k-012i2tem12-2cen12e2r j12s2tif12-2cen12e2r g12p2-2 12o2und12d2-fu12l2 te12t2-lg12f2ont12s2emi12o2ld 12e2xt-12r2ima12y2-fo12e2gro12n2d m12:h-8 md:w-8 md:text-base"
          >
            <Image
              src={imagePaths.logo["3x"]}
              alt="logo"
              width={128}
              height={128}
              layout="fixed"
            />
            <span className="sr-only">Robin</span>
          </Link>
          {sidebarConfig.sidebarNav.map((item, index) => {
            const Icon = item.icon
            return (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8",
                      path === item.href
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground",
                    )}
                  >
                    {Icon ? (
                      <>
                        <Icon className="h-5 w-5" />
                        <span className="sr-only">{item.title}</span>
                      </>
                    ) : (
                      <span className="sr-only">{item.title}</span>
                    )}
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">{item.title}</TooltipContent>
              </Tooltip>
            )
          })}
        </nav>
      </TooltipProvider>
    </aside>
  )
}
