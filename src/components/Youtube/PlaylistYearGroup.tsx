import useAlbum from '../Spotify/useAlbum'
import type { PlaylistItem } from '@/types/Playlist'

interface PlaylistYearGroupProps {
  year: string
  playlists: Array<PlaylistItem>
}

export default function PlaylistYearGroup({
  year,
  playlists,
}: PlaylistYearGroupProps) {
  const sliderRef = useAlbum()

  return (
    <>
      <h2 className="text-6xl">{year}</h2>
      <div
        ref={sliderRef}
        className="max-w-full overflow-x-hidden rounded-lg scrollbar-hide"
      >
        <div className="flex flex gap-3">
          {playlists.map((playlist) => (
            <div key={`${playlist.id}`} className="flex flex-col gap-4 w-full">
              <div className="md:w-[400px] w-60">
                <a
                  href={`https://www.youtube.com/playlist?list=${playlist.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={playlist.snippet.thumbnails.medium.url}
                    alt={playlist.snippet.title}
                    className="mt-2 rounded-[var(--border-radius)] w-full h-full object-cover"
                  />
                </a>
              </div>

              <p className="text-2xl"> {playlist.snippet.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
