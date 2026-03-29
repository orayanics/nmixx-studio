import LandingTapes from './LandingTapes'
import LandingTextHero from './LandingTextHero'
import LandingZine from './LandingZine'
import LandingZineHeading from './LandingZineHeading'

export default function LandingView() {
  return (
    <div className="relative">
      <LandingTextHero />
      <LandingZineHeading />
      <LandingZine />
      <LandingTapes />
    </div>
  )
}
