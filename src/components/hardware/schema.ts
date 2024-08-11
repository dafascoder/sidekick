import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const HardwareSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  label: z.string(),
  assignee: z.string(),
  oktaUser: z.string(),
  kandjiUser: z.string(),
  kolideUser: z.string(),
})

export type Hardware = z.infer<typeof HardwareSchema>
