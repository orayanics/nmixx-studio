import { createFileRoute } from '@tanstack/react-router'

import List from '@/modules/video/List'
import HeroImage from '@/components/Page/HeroImage'
import sample from '@/assets/images/blue-valentine-1.jpg'

export const Route = createFileRoute('/(public)/video/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <HeroImage BACKGROUND={sample} scrollId="video" />
      <List />
    </>
  )
}
