import Planet from '@/components/Dynamic/Planet'
import LandingTapes from './LandingTapes'
import LandingTextHero from './LandingTextHero'
import LandingZine from './LandingZine'
import LandingZineHeading from './LandingZineHeading'

export default function LandingView() {
  return (
    <div className="relative overflow-hidden min-h-screen">
      <Planet />
      <LandingTextHero />
      <LandingZineHeading />
      <LandingZine />
      <LandingTapes />
    </div>
  )
}
