import fs from "fs"
import path from "path" // Import the 'fs' module
import { z } from "zod"
import { columns } from "~/components/hardware/columns"
import { HardwareTable } from "~/components/hardware/hardware-table"
import { HardwareSchema } from "~/components/hardware/schema"
import {} from "~/ui/tabs"

async function GetHardware() {
  const data = await fs.promises.readFile(
    // Use 'fs.promises.readFile' instead of 'fs.readFile'
    path.join(process.cwd(), "/src/components/hardware/hardware.json"),
  )

  const tasks = JSON.parse(data.toString())

  return z.array(HardwareSchema).parse(tasks)
}

export default async function HardwarePage() {
  const hardwareData = await GetHardware()
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <HardwareTable data={hardwareData} columns={columns} />
    </main>
  )
}
