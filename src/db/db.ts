import { drizzle } from "drizzle-orm/node-postgres"
import { Pool } from "pg"

import { env } from "~/config/env.mjs"
import * as schema from "./schema"

const pool = new Pool({
  connectionString: `postgres://${env.DB_USERNAME}:${env.DB_PASSWORD}@${env.DB_HOST}:${env.DB_PORT}/${env.DB_NAME}`,
})

export const db = drizzle(pool, { schema })
