import { createFileRoute } from '@tanstack/react-router'
import { Music, Music2, Music3 } from 'lucide-react'

import { LANDING_BACKGROUND, LANDING_DECK } from '@/configs/landing'

import Carousel from '@/components/Dynamic/Carousel'
import PublicLayout from '@/components/Layout/PublicLayout'
import TextFade from '@/components/Dynamic/TextFade'

import styles from '@/styles/Landing.module.css'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <PublicLayout>
      <section
        className={`${styles['landing-backround']}`}
        style={{
          backgroundImage: `url(${LANDING_BACKGROUND})`,
        }}
      >
        <TextFade position="center">
          <div>
            <h1 className="text-center text-8xl"> Blue Valentine</h1>
            <p className="text-center mx-auto text-sm">
              Available in Streaming Platforms
            </p>

            <div className="flex gap-4 justify-center items-center mt-4">
              <Music2 size={32} />
              <Music size={32} />
              <Music3 size={32} />
            </div>
          </div>
        </TextFade>
      </section>

      <section>
        <h2 className="text-6xl text-center">meet the members</h2>
        <p className="text-center mb-10">
          Lily, Haewon, Bae, Sullyoon, Jiwoo, Bae
        </p>
        <Carousel DECK={LANDING_DECK} />
      </section>

      <section>
        <h2 className="text-6xl text-center">latest music</h2>
        <h2 className="text-center">
          Listen to Blue Valentine on your favorite streaming platform.
        </h2>
      </section>
    </PublicLayout>
  )
}
