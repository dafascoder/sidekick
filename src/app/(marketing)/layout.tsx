import { Footer, LoginLink } from "~/components/landing"
import { MainNav } from "~/components/navigation/main-nav"
import { landingConfig } from "~/config/constants.config"
import { ModeToggle } from "~/ui/mode-toggle"

export default async function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="max-w-screen overflow-x-hidden">
      <div className="flex min-h-screen flex-col">
        <header className="container z-40 bg-background">
          <div className="flex h-20 items-center justify-between py-6">
            <div
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-r from-bg-primary to-bg-foreground opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
            <MainNav items={landingConfig.mainNav} />
            <div className="flex items-center space-x-4">
              <LoginLink />
              <ModeToggle />
            </div>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  )
}
