import type { Metadata } from "next"

import { Inter as FontSans } from "next/font/google"

import "./globals.css"

import { ThemeProvider } from "~/components/providers/theme-provider"
import { cn } from "~/lib/utils"
import { Toaster } from "~/ui/sonner"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Robin",
  description: "Robin is the best in class for managing employee onboarding.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
