import { DrizzleAdapter } from "@auth/drizzle-adapter"
import NextAuth from "next-auth"
import github from "next-auth/providers/github"
import google from "next-auth/providers/google"

import { db } from "~/db/db"
import { accounts, sessions, users, verificationTokens } from "~/db/schema"

import Resend from "next-auth/providers/resend"
import { authConfig } from "./auth.config"
import { env } from "./env.mjs"

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
  }),
  providers: [
    google,
    github,
    Resend({
      apiKey: env.AUTH_RESEND_KEY,
      from: "no-reply@votlig.com",
    }),
  ],
})
