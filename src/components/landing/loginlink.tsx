'use client';
import { Icons } from '~/components/icons';
import { buttonVariants } from '~/components/ui/button';
import Link from 'next/link';

import { cn } from '~/lib/utils';

export const LoginLink = () => {
  return (
    <nav>
      <Link
        href="/auth"
        className={cn(
          buttonVariants({ variant: 'secondary', size: 'sm' }),
          'px-4',
        )}
      >
        Login
      </Link>
    </nav>
  );
};
