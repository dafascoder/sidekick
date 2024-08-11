import { icons } from "lucide-react"

import type { DashboardConfig, LandingConfig } from "~/types"

export const HirePageInfo = {
  card: {
    title: "New Hires",
    description: "Manage your new hires with ease.",
    cta: {
      title: "Add New Hire",
      href: "/dashboard/hires/add",
    },
  },
}

const imagePaths = {
  logo: {
    "1x": "/static/brand/logo.png",
    "2x": "/static/brand/logo@2x.png",
    "3x": "/static/brand/logo@3x.png",
  },
  text: {
    "1x": "/images/text/text.png",
    "2x": "/images/text/text@2x.png",
    "3x": "/images/text/text@3x.png",
  },
}

const landingConfig: LandingConfig = {
  LandingInfo: {
    title: "Robin",
    description:
      "Your sidekick for managing your hardware and new hires. Get started today!",
    cta: {
      title: "Get Started",
      href: "/auth",
    },
  },
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
  ],
}

const sidebarConfig: DashboardConfig = {
  sidebarNav: [
    {
      title: "Overview",
      href: "/dashboard",
      icon: icons.House,
    },
    {
      title: "New Hires",
      href: "/dashboard/hires",
      icon: icons.UsersRound,
    },
    {
      title: "Hardware",
      href: "/dashboard/hardware",
      icon: icons.Cpu,
    },
    {
      title: "Reports",
      href: "/dashboard/reports",
      icon: icons.ChartBar,
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: icons.Cog,
    },
  ],
}

const siteConfig = {
  links: {
    twitter: "https://twitter.com/Robin",
    github: "https://github.com/Robin",
  },
}

export { sidebarConfig, imagePaths, landingConfig, siteConfig }
