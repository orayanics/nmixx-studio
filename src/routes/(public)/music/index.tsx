import { createFileRoute } from '@tanstack/react-router'

import Albums from '@/components/Spotify/Albums'

export const Route = createFileRoute('/(public)/music/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <section>
      <h2 className="text-6xl text-center">nmixx's music</h2>
      <Albums album_type="album" />
      <Albums album_type="single" />
      <Albums album_type="compilation" />
      <Albums album_type="appears_on" />
    </section>
  )
}
