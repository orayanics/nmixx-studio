import type { PlaylistItem } from '@/types/Playlist'
import Slider from '@/components/Slider/Slider'
import SliderTrack from '@/components/Slider/SliderTrack'

interface PlaylistYearGroupProps {
  year: string
  playlists: Array<PlaylistItem>
}

export default function PlaylistYearGroup({
  year,
  playlists,
}: PlaylistYearGroupProps) {
  return (
    <>
      <h2 className="text-6xl">{year}</h2>
      <Slider>
        {playlists.map((playlist) => (
          <SliderTrack
            key={playlist.id}
            img={playlist.snippet.thumbnails.medium.url}
            name={playlist.snippet.title}
            artist={new Date(playlist.snippet.publishedAt).toDateString()}
            href={`https://www.youtube.com/playlist?list=${playlist.id}`}
          />
        ))}
      </Slider>
    </>
  )
}
