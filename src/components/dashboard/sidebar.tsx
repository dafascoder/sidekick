'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from '~/ui/tooltip';
import { cn } from '~/lib/utils';
import { sidebarConfig } from '~/config/constants.config';
import { Zap } from 'lucide-react';

export function Sidebar() {
  const path = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <TooltipProvider>
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
          <Link
            href="#"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <Zap className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">Robin</span>
          </Link>
          {sidebarConfig.sidebarNav.map((item, index) => {
            const Icon = item.icon;
            return (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      'flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8',
                      path === item.href
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground',
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
            );
          })}
        </nav>
      </TooltipProvider>
    </aside>
  );
}
