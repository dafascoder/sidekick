"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { PanelLeft } from "lucide-react"

import Image from "next/image"
import { imagePaths, sidebarConfig } from "~/config/constants.config"
import { cn } from "~/lib/utils"
import { Button } from "~/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "~/ui/sheet"

export function DashboardMobileNav() {
  const path = usePathname()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="sm:hidden">
          <PanelLeft className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="sm:max-w-xs">
        <nav className="grid gap-6 text-lg font-medium">
          <Link
            href="#"
            className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold text-primary-foreground md:text-base"
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
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "flex items-center gap-4 px-2.5 transition-colors",
                  path === item.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {Icon ? (
                  <>
                    <Icon className="h-5 w-5" />
                    <span className="sr-only text-secondary">{item.title}</span>
                  </>
                ) : (
                  <span className="sr-only text-primary-foreground">
                    {item.title}
                  </span>
                )}
              </Link>
            )
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
