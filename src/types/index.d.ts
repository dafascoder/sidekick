import type { LucideIcon } from "lucide-react"

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
