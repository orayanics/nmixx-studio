import { createFileRoute } from '@tanstack/react-router'
import { AboutMembers } from '@/modules/about/Members'

import HeroImage from '@/components/Page/HeroImage'
import sample from '@/assets/images/blue-valentine-1.jpg'

export const Route = createFileRoute('/(public)/about/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      {/* TODO - Hero */}
      <HeroImage BACKGROUND={sample} scrollId="about" />
      <AboutMembers />
    </>
  )
}
