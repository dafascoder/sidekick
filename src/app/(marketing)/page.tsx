import { Hero } from "~/components/landing"
import { landingConfig } from "~/config/constants.config"

export default async function Page() {
  return (
    <>
      <Hero
        title={landingConfig.LandingInfo.title}
        description={landingConfig.LandingInfo.description}
      />
    </>
  )
}
