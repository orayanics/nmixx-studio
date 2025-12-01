import { createFileRoute } from '@tanstack/react-router'

import Hero from '@/modules/music/Hero'
import List from '@/modules/music/List'

export const Route = createFileRoute('/(public)/music/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Hero />
      <List />
    </>
  )
}
