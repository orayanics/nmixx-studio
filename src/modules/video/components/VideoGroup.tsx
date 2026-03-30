import type { PlaylistItem } from '@/types/Playlist'
import VideoCard from './VideoCard'

interface VideoGroupProps {
  year: string
  playlists: Array<PlaylistItem>
}

export default function VideoGroup({ year, playlists }: VideoGroupProps) {
  return (
    <section className="relative">
      {/* Massive Year Background */}
      <div className="absolute -top-12 -left-4 z-0 opacity-10 text-[15vw] font-black text-blue-500 select-none">
        {year}
      </div>

      <div className="relative z-10 mb-8 flex items-center gap-4">
        <h2 className="bg-blue-500 text-black px-6 py-2 text-4xl md:text-6xl font-black skew-x-[-10deg]">
          {year}
        </h2>
        <div className="h-1 grow bg-blue-500/30 border-t border-blue-500" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
