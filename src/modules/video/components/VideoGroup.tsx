import type { PlaylistItem } from '@/types/Playlist'
import VideoCard from './VideoCard'
import BorderSquare from '@/components/Layout/BorderSquare'

interface VideoGroupProps {
  year: string
  playlists: Array<PlaylistItem>
}

export default function VideoGroup({ year, playlists }: VideoGroupProps) {
  return (
    <section className="relative">
      <BorderSquare />
      <div
        className="relative z-10 border border-blue-500/40 p-10
      bg-linear-to-t from-blue-500/5 to-transparent"
      >
        <p className="font-mono text-lg tracking-tight text-neutral-400">
          From the year
        </p>
        <p className="text-4xl md:text-6xl font-bold">{year}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {playlists.map((playlist) => (
          <VideoCard
            key={playlist.id}
            img={playlist.snippet.thumbnails.standard.url}
            name={playlist.snippet.title}
            artist={new Date(playlist.snippet.publishedAt).toDateString()}
            href={`https://www.youtube.com/playlist?list=${playlist.id}`}
          />
        ))}
      </div>
    </section>
  )
}
