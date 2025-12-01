import { createFileRoute } from '@tanstack/react-router'
import { AboutMembers } from '@/modules/about/Members'

import HeroImage from '@/components/Page/HeroImage'
import LANDING_BACKGROUND from '@/assets/images/blue-valentine-2.webp'

export const Route = createFileRoute('/(public)/about/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      {/* TODO - Hero */}
      <HeroImage BACKGROUND={LANDING_BACKGROUND} scrollId="about" />
      <AboutMembers />
    </>
  )
}
