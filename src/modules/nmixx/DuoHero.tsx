import DuoScreen from './components/DuoScreen'
import { BL_CHAOS_DUO_IMGS } from '@/configs/landing'

export default function DuoHero() {
  return (
    <div className="relative">
      <DuoScreen
        align="left"
        index="01"
        title="blue valentine"
        description="romance marked by emotional coldness and toxicity"
        names="haewon & sullyoon"
        img={BL_CHAOS_DUO_IMGS.HAE_SULL}
      />

      <DuoScreen
        align="center"
        index="02"
        title="blue valentine"
        description="sadness and intensity create a lingering longing"
        names="lily & bae"
        img={BL_CHAOS_DUO_IMGS.LILY_BAE}
      />

      <DuoScreen
        align="right"
        index="03"
        title="blue valentine"
        description="that draws one back despite its harm"
        names="jiwoo & kyujin"
        img={BL_CHAOS_DUO_IMGS.JI_KYU}
      />
    </div>
  )
}
