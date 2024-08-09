import { icons } from "lucide-react"

import type { DashboardConfig, LandingConfig } from "~/types"

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
      href: "/docs",
    },
  },
  mainNav: [
    {
      title: "Features",
      href: "/#features",
    },
    {
      title: "Roadmap",
      href: "/#roadmap",
    },
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
      title: "Hardware",
      href: "/dashboard/hardware",
      icon: icons.Cpu,
    },
    {
      title: "New Hires",
      href: "/dashboard/hires",
      icon: icons.UsersRound,
    },
    {
      title: "Orders",
      href: "/dashboard/orders",
      icon: icons.ShoppingCart,
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
