import Planet from '@/components/Dynamic/Planet'
import LandingTapes from './LandingTapes'
import LandingTextHero from './LandingTextHero'
import LandingZine from './LandingZine'
import LandingZineHeading from './LandingZineHeading'

export default function LandingView() {
  return (
    <div
      className="relative max-w-7xl mx-auto min-h-screen 
    md:overflow-visible overflow-hidden
    border-x border-blue-500/40"
    >
      <Planet isFullscreen />
      <LandingTextHero />
      <LandingZineHeading />
      <LandingZine />
      <LandingTapes />
    </div>
  )
}
