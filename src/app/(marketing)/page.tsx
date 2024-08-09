import Image from "next/image"
import Link from "next/link"
import { landingConfig, siteConfig } from "~/config/constants.config"
import { cn } from "~/lib/utils"
import { buttonVariants } from "~/ui/button"

export default async function Page() {
  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <Link
          href={siteConfig.links.twitter}
          className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
          target="_blank"
        >
          Follow along on Twitter
        </Link>
        <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          {landingConfig.LandingInfo.title}
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          {landingConfig.LandingInfo.description}
        </p>
        <div className="space-x-4">
          <Link
            href={landingConfig.LandingInfo.cta.href}
            className={cn(buttonVariants({ size: "lg" }))}
          >
            {landingConfig.LandingInfo.cta.title}
          </Link>
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            GitHub
          </Link>
        </div>
        <div className="mt-16 flow-root sm:mt-24">
          <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <Image
              alt="App screenshot"
              src="/static/screenshots/dashboard.png"
              width={2432}
              height={1442}
              className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
