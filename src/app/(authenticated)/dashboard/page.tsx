import { Users } from "lucide-react"
import { StatCard } from "~/components/dashboard/stats"

export default async function DashboardPage() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <StatCard
          title={"Total Hardware"}
          amount={400}
          percentChange={20}
          Icon={<Users />}
        />
        <StatCard
          title={"Total Hardware"}
          amount={400}
          percentChange={20}
          Icon={<Users />}
        />
        <StatCard
          title={"Total Hardware"}
          amount={400}
          percentChange={20}
          Icon={<Users />}
        />
        <StatCard
          title={"Total Hardware"}
          amount={400}
          percentChange={20}
          Icon={<Users />}
        />
      </div>
    </main>
  )
}
