import { createFileRoute } from '@tanstack/react-router'

import List from '@/modules/music/List'

import HeroImage from '@/components/Page/HeroImage'
import sample from '@/assets/images/blue-valentine-1.jpg'

export const Route = createFileRoute('/(public)/music/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <HeroImage BACKGROUND={sample} scrollId="album" />
      <List />
    </>
  )
}
