import { AvatarMenu } from "~/components/dashboard/avatar"
import { DashboardMobileNav } from "~/components/dashboard/dashboard-mobile-nav"
import { SearchBar } from "~/components/dashboard/search"
import { Sidebar } from "~/components/dashboard/sidebar"
import { ModeToggle } from "~/ui/mode-toggle"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-r-emerald-50 bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <DashboardMobileNav />
          <SearchBar />
          <AvatarMenu />
          <ModeToggle />
        </header>
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  )
}
