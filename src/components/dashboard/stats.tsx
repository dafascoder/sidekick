"use client"
import type { DashboardCardConfig } from "~/types"
import { Card, CardContent, CardHeader, CardTitle } from "~/ui/card"

type StatProps = DashboardCardConfig

export function StatCard(props: StatProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{props.title}</CardTitle>
        {props.Icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{props.amount}</div>
        <p className="text-xs text-muted-foreground">
          +{props.percentChange}% from last month
        </p>
      </CardContent>
    </Card>
  )
}
