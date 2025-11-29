import type { PlaylistItem } from '@/types/Playlist'

interface PlaylistProps {
  playlistItems: Array<PlaylistItem>
}

export default function Playlist(props: PlaylistProps) {
  const { playlistItems } = props

  return (
    <div>
      {playlistItems.map(({ id, snippet }) => (
        <a
          key={id}
          href={`https://www.youtube.com/playlist?list=${id}`}
          target="_blank"
          rel="noreferrer"
          className="block mb-4 hover:bg-gray-100 p-2 rounded"
        >
          <h3 className="text-xl font-bold">{snippet.title}</h3>
          <p className="text-gray-600">{snippet.description}</p>

          <img
            src={snippet.thumbnails.high.url}
            alt={snippet.title}
            width={snippet.thumbnails.high.width}
            height={snippet.thumbnails.high.height}
            className="mt-2 rounded"
          />
        </a>
      ))}
    </div>
  )
}
