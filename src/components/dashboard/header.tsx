"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { PanelLeft, Zap } from "lucide-react"

import { sidebarConfig } from "~/config/constants.config"
import { cn } from "~/lib/utils"
import { Button } from "~/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "~/ui/sheet"

export function Header() {
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
            className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base">
            <Zap className="h-5 w-5 transition-all group-hover:scale-110" />
            <span className="sr-only">Acme Inc</span>
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
                )}>
                {Icon ? (
                  <>
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{item.title}</span>
                  </>
                ) : (
                  <span className="sr-only">{item.title}</span>
                )}
              </Link>
            )
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
