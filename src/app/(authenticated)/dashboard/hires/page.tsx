import { HireSummaryCard } from "~/components/hires/hire-summary-card"
import { RecentHireDetails } from "~/components/hires/recent-hire-details"
import { RecentHireTabs } from "~/components/hires/recent-hire-tabs"

export default async function NewHires() {
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <HireSummaryCard
          title={"New Hires"}
          description={
            "Introducing Our Dynamic New Hires Dashboard for Seamless Onboarding and Insightful Employee Analysis."
          }
          value={""}
          progress={60}
        />
        <RecentHireTabs />
      </div>
      <RecentHireDetails />
    </main>
  )
}
