import { Icons } from '~/components/icons';

import Image from 'next/image';
import Link from 'next/link';

import { UserAuthForm } from '~/components/forms/userAuthForm';
import { buttonVariants } from '~/components/ui/button';
import { cn } from '~/lib/utils';

export default async function LoginPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute left-4 top-4 md:left-8 md:top-8',
        )}
      >
        <>
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          Back
        </>
      </Link>
      <div className="h-20">
        <Image
          src="/logo.svg"
          alt="logo"
          width={80}
          height={80}
          layout="fixed"
        />
      </div>

      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-sm text-muted-foreground">
            Select a social to login
          </p>
        </div>
        <UserAuthForm />
      </div>
    </div>
  );
}
