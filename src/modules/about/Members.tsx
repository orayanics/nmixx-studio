import Carousel from '@/components/Dynamic/Carousel'
import { LANDING_DECK } from '@/configs/landing'

export function AboutMembers() {
  return (
    <section className="text-white">
      <h2 className="text-6xl text-center">meet the members</h2>
      <p className="text-center mb-10">
        Lily, Haewon, Bae, Sullyoon, Jiwoo, Kyujin
      </p>
      <Carousel DECK={LANDING_DECK} />
    </section>
  )
}
