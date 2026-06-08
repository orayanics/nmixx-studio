import { createFileRoute } from '@tanstack/react-router'

import VideoView from '@/modules/v1/video/VideoView'
// import HeroImage from '@/components/Page/HeroImage'
// import LANDING_BACKGROUND from '@/assets/images/blue-valentine-2.webp'

export const Route = createFileRoute('/v1/video/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      {/* <HeroImage BACKGROUND={LANDING_BACKGROUND} scrollId="video" /> */}
      <VideoView />
    </>
  )
}
