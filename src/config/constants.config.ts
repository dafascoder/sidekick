import { icons } from 'lucide-react';
import type { DashboardConfig, LandingConfig } from '~/types';

const imagePaths = {
  bolt: {
    '1x': '/images/bolt/bolt.png',
    '2x': '/images/bolt/bolt@2x.png',
    '3x': '/images/bolt/bolt@3x.png',
  },
  logo: {
    '1x': '/images/logo/logo.png',
    '2x': '/images/logo/logo@2x.png',
    '3x': '/images/logo/logo@3x.png',
  },
  text: {
    '1x': '/images/text/text.png',
    '2x': '/images/text/text@2x.png',
    '3x': '/images/text/text@3x.png',
  },
};

const landingConfig: LandingConfig = {
  mainNav: [
    {
      title: 'Features',
      href: '/#features',
    },
    {
      title: 'Roadmap',
      href: '/#roadmap',
    },
    {
      title: 'Documentation',
      href: '/docs',
    },
  ],
};

const sidebarConfig: DashboardConfig = {
  sidebarNav: [
    {
      title: 'Overview',
      href: '/dashboard',
      icon: icons.House,
    },
    {
      title: 'Hardware',
      href: '/dashboard/hardware',
      icon: icons.Cpu,
    },
    {
      title: 'New Hires',
      href: '/dashboard/hires',
      icon: icons.UsersRound,
    },
    {
      title: 'Orders',
      href: '/dashboard/orders',
      icon: icons.ShoppingCart,
    },
    {
      title: 'Reports',
      href: '/dashboard/reports',
      icon: icons.ChartBar,
    },
    {
      title: 'Settings',
      href: '/dashboard/settings',
      icon: icons.Cog,
    },
  ],
};

export { sidebarConfig, imagePaths, landingConfig };
