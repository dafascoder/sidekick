import NextAuth from "next-auth"

import { authConfig } from "~/config/auth.config"
import { DEFAULT_REDIRECT, PUBLIC_ROUTES } from "~/lib/routes"

const { auth } = NextAuth(authConfig)

export default auth((req) => {
  const { nextUrl } = req

  const isAuthenticated = !!req.auth
  const isPublicRoute = PUBLIC_ROUTES.includes(nextUrl.pathname)
  const isAuthRoute = "http://localhost:3000/auth"

  if (isPublicRoute && isAuthenticated)
    return Response.redirect(new URL(DEFAULT_REDIRECT, nextUrl))

  if (!isAuthenticated && !isPublicRoute)
    return Response.redirect(isAuthRoute, 302)
})

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
