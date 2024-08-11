import type { LucideIcon } from "lucide-react"

export type DashboardCardConfig = {
  Icon: ReactNode
  amount: number
  percentChange: number
  title: string
}

export type LandingInfo = {
  title: string
  description: string
  cta: {
    title: string
    href: string
  }
}

export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

export type MainNavItem = NavItem

export type SiteConfig = {
  name: string
  description: string
  url?: string
  ogImage?: string
  links?: {
    twitter?: string
    github?: string
  }
}

export type LandingConfig = {
  LandingInfo: LandingInfo
  mainNav: MainNavItem[]
}

export type DashboardConfig = {
  sidebarNav: SidebarNavItem[]
}

export type SidebarNavItem = {
  title: string
  disabled?: boolean
  external?: boolean
  icon?: LucideIcon
  href: string
}
