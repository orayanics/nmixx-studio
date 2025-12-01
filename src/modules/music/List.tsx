import Albums from '@/components/Spotify/Albums'

export default function List() {
  return (
    <section className="relative">
      <Albums album_type="album" />
      <Albums album_type="single" />
      <Albums album_type="compilation" />
      <Albums album_type="appears_on" />
    </section>
  )
}
