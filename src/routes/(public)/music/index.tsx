import { createFileRoute } from '@tanstack/react-router'

import List from '@/modules/music/List'

import HeroImage from '@/components/Page/HeroImage'
import LANDING_BACKGROUND from '@/assets/images/blue-valentine-2.webp'

export const Route = createFileRoute('/(public)/music/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <HeroImage BACKGROUND={LANDING_BACKGROUND} scrollId="album" />
      <List />
    </>
  )
}
