import { Badge } from "~/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/ui/table"

type RecentHireRowsProps = {
  name: string
  workEmail: string
  personalEmail: string
  position: string
  status: string
}

function RecentHireRow(data: RecentHireRowsProps) {
  return (
    <TableRow>
      <TableCell className="font-medium">
        <div className="font-medium">{data.name}</div>
        <div className="hidden text-sm text-muted-foreground md:inline">
          {data.workEmail}
        </div>
      </TableCell>
      <TableCell>
        <Badge variant="outline">{data.status}</Badge>
      </TableCell>
      <TableCell>{data.personalEmail}</TableCell>
      <TableCell className="text-right">{data.position}</TableCell>
    </TableRow>
  )
}

export function RecentHireTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Email</TableHead>
          <TableHead className="text-right">Position</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <RecentHireRow
          name="John Doe"
          status="Hired"
          position="Software Engineer"
          personalEmail="john.doe@example.com"
          workEmail="john.doe@work.com"
        />
        <RecentHireRow
          name="Jane Smith"
          status="Pending"
          position="Product Manager"
          personalEmail="jane.smith@example.com"
          workEmail="john.doe@work.com"
        />
        <RecentHireRow
          name="Alex Johnson"
          status="Onboarding"
          position="UX Designer"
          personalEmail="alex.johnson@example.com"
          workEmail="alex.johnson@work.com"
        />
      </TableBody>
    </Table>
  )
}
