import { ExportButton } from "~/components/hires/export-button"
import { FilterButton } from "~/components/hires/filter-button"
import { RecentHireTable } from "~/components/hires/recent-hire-table"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/ui/tabs"

export function RecentHireTabs() {
  return (
    <Tabs defaultValue="week">
      <div className="flex items-center">
        <TabsList>
          <TabsTrigger value="week">Week</TabsTrigger>
          <TabsTrigger value="month">Month</TabsTrigger>
          <TabsTrigger value="year">Year</TabsTrigger>
        </TabsList>
        <div className="ml-auto flex items-center gap-2">
          <FilterButton />
          <ExportButton />
        </div>
      </div>
      <TabsContent value="week">
        <Card x-chunk="dashboard-05-chunk-3">
          <CardHeader className="px-7">
            <CardTitle>Recent Hires</CardTitle>
            <CardDescription>Recent Hires for the Week</CardDescription>
          </CardHeader>
          <CardContent>
            <RecentHireTable />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
