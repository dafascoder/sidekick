import { Copy, MoreVertical, Truck } from "lucide-react"
import { Button } from "~/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/ui/dropdown-menu"
import { Separator } from "~/ui/separator"

type RecentHireCardProps = {
  title: string
  progress: number
  description: string
  orderNumber: string
  employeeName: string
  employeeEmail: string
  personalEmail: string
  date: string
  shippingInfo: {
    name: string
    address: string
    city: string
    state: string
    zip: string
  }
  item: {
    name: string
    quantity: number
  }
  updatedAt: string
}

function RecentHireCard(data: RecentHireCardProps) {
  return (
    <>
      <Card className="overflow-hidden">
        <CardHeader className="flex flex-row items-start bg-muted/50 dark:bg-muted/60">
          <div className="grid gap-0.5">
            <CardTitle className="group flex items-center gap-2 text-lg">
              {data.orderNumber}
              <Button
                size="icon"
                variant="outline"
                className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
              >
                <Copy className="h-3 w-3" />
                <span className="sr-only">Copy Order ID</span>
              </Button>
            </CardTitle>
            <CardDescription>Date: {data.date}</CardDescription>
          </div>
          <div className="ml-auto flex items-center gap-1">
            <Button size="sm" variant="outline" className="h-8 gap-1">
              <Truck className="h-3.5 w-3.5" />
              <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                Track Order
              </span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="icon" variant="outline" className="h-8 w-8">
                  <MoreVertical className="h-3.5 w-3.5" />
                  <span className="sr-only">More</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Export</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Trash</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        <CardContent className="p-6 text-sm">
          <div className="grid gap-3">
            <div className="font-semibold justify-between flex">
              <span>Items</span>
              <span>Quantity</span>
            </div>
            <ul className="grid gap-3">
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">{data.item.name}</span>
                <span>{data.item.quantity}</span>
              </li>
            </ul>
            <Separator className="my-4" />
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-3">
                <div className="font-semibold">Shipping Location</div>
                <address className="grid gap-0.5 not-italic text-muted-foreground">
                  <span>{data.shippingInfo.name}</span>
                  <span>{data.shippingInfo.address}</span>
                  <span>{data.shippingInfo.state}</span>
                </address>
              </div>
            </div>
            <Separator className="my-4" />
            <div className="grid gap-3">
              <div className="font-semibold">Employee Information</div>
              <dl className="grid gap-3">
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Employee Name</dt>
                  <dd>{data.shippingInfo.name}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Employee Email</dt>
                  <dd>
                    <a href="mailto:">{data.employeeEmail}</a>
                  </dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Personal Email</dt>
                  <dd>
                    <a href="mailto:">{data.personalEmail}</a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-row items-center  bg-muted/50 dark:bg-muted/60 px-6 py-3">
          <div className="text-xs text-muted-foreground">
            Updated <time dateTime="2023-11-23">{data.updatedAt}</time>
          </div>
        </CardFooter>
      </Card>
    </>
  )
}

export function RecentHireDetails() {
  return (
    <div className="hidden xl:block">
      <RecentHireCard
        title="Onboarding Package"
        progress={75}
        description="Welcome package for new hires"
        orderNumber="ORD-1029384"
        employeeName="John Doe"
        employeeEmail="john.doe@company.com"
        personalEmail="johndoe@example.com"
        date="2024-08-09"
        shippingInfo={{
          name: "John Doe",
          address: "123 Main St",
          city: "New York",
          state: "NY",
          zip: "10001",
        }}
        item={{
          name: "Laptop",
          quantity: 1,
        }}
        updatedAt="2024-08-08"
      />
    </div>
  )
}
