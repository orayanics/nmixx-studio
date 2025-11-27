import { createFileRoute } from '@tanstack/react-router'
import StackToCarousel from '@/components/Dynamic/StackToCarousel'

import { LANDING_BACKGROUND, LANDING_DECK } from '@/configs/landing'
import PublicLayout from '@/components/Layout/PublicLayout'

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
      />
      <section>
        <div>
          <code>
            <h1 className="text-center"> MONO STLYE FONT</h1>
          </code>
        </div>
        <StackToCarousel DECK={LANDING_DECK} />
      </section>
    </PublicLayout>
  )
}
