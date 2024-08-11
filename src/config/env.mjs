import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    // This is optional because it's only used in development.
    // See https://next-auth.js.org/deployment.
    AUTH_SECRET: z.string().min(1),
    GITHUB_CLIENT_ID: z.string().min(1),
    GITHUB_CLIENT_SECRET: z.string().min(1),
    DB_USERNAME: z.string().min(1),
    DB_PASSWORD: z.string().min(1),
    DB_NAME: z.string().min(1),
    DB_PORT: z.string().min(1),
    DB_HOST: z.string().min(1),
    NEXT_PUBLIC_APP_URL: z.string().min(1),
    AUTH_RESEND_KEY: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.string().min(1),
  },
  runtimeEnv: {
    AUTH_SECRET: process.env.AUTH_SECRET,
    GITHUB_CLIENT_ID: process.env.AUTH_GITHUB_ID,
    GITHUB_CLIENT_SECRET: process.env.AUTH_GITHUB_SECRET,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
    DB_PORT: process.env.DB_PORT,
    DB_HOST: process.env.DB_HOST,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    AUTH_RESEND_KEY: process.env.AUTH_RESEND_KEY,
  },
});
