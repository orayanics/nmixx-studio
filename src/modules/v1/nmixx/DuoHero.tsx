import TextDivider from '@/components/Layout/TextDivider'
import DuoScreen from './components/DuoScreen'
import { BL_CHAOS_DUO_IMGS, BL_CHAOS_INDIV_IMGS } from '@/configs/landing'

export default function DuoHero() {
  return (
    <div className="relative min-h-screen">
      <DuoScreen
        align="left"
        index="01"
        description="romance marked by emotional coldness and toxicity"
        names="haewon & sullyoon"
        img={BL_CHAOS_DUO_IMGS.HAE_SULL}
        indivs={[BL_CHAOS_INDIV_IMGS[2], BL_CHAOS_INDIV_IMGS[1]]}
      />

      <TextDivider
        text="blue valentine"
        className="bg-black"
        textClassName="text-blue-500"
        speed={50}
      />

      <DuoScreen
        align="center"
        index="02"
        description="sadness and intensity create a lingering longing"
        names="lily & bae"
        img={BL_CHAOS_DUO_IMGS.LILY_BAE}
        indivs={[BL_CHAOS_INDIV_IMGS[0], BL_CHAOS_INDIV_IMGS[3]]}
      />

      <TextDivider
        text="blue valentine"
        className="bg-black"
        textClassName="text-blue-500"
        speed={50}
      />

      <DuoScreen
        align="right"
        index="03"
        description="that draws one back despite its harm"
        names="jiwoo & kyujin"
        img={BL_CHAOS_DUO_IMGS.JI_KYU}
        indivs={[BL_CHAOS_INDIV_IMGS[5], BL_CHAOS_INDIV_IMGS[4]]}
      />
    </div>
  )
}
