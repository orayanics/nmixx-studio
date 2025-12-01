import { createFileRoute } from '@tanstack/react-router'

import Albums from '@/components/Spotify/Albums'
import Hero from '@/modules/music/Hero'

export const Route = createFileRoute('/(public)/music/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Hero />
      <section className="relative">
        <Albums album_type="album" />
        <Albums album_type="single" />
        <Albums album_type="compilation" />
        <Albums album_type="appears_on" />
      </section>
    </>
  )
}
