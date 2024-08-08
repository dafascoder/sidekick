import { Label } from "@radix-ui/react-label"

import { Icons } from "~/components/icons"
import { Button, buttonVariants } from "~/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import { Input } from "~/components/ui/input"
import { signIn } from "~/config/auth"
import { cn } from "~/lib/utils"

export const UserAuthForm = () => {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Welcome</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 space-x-2">
          <form
            action={async (formData) => {
              "use server"
              await signIn("resend", formData)
            }}
            className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Login via magic link
            </Button>
          </form>
          <div className="flex items-center justify-center">
            <span className="text-muted-foreground">or</span>
          </div>
          <form
            action={async () => {
              "use server"
              await signIn("github", { redirectTo: "/dashboard" })
            }}>
            <Button
              type="submit"
              className={cn(
                buttonVariants({ variant: "secondary" }),
                "w-full",
              )}>
              <Icons.gitHub className="mr-2 h-4 w-4" />
              Sign in with Github
            </Button>
          </form>
        </div>
      </CardContent>
    </Card>
  )
}
