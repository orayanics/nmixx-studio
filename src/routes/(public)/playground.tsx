import { createFileRoute } from '@tanstack/react-router'

import StackToCarousel from '@/components/Dynamic/StackToCarousel'

import { LANDING_DECK } from '@/configs/landing'

export const Route = createFileRoute('/(public)/playground')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <div style={{ height: '50vh' }}>
        <h1>NMIXX</h1>
        <h2>Blue Valentine</h2>
      </div>
      <StackToCarousel DECK={LANDING_DECK} />
    </>
  )
}
