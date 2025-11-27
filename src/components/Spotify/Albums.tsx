import { useQuery } from '@tanstack/react-query'

import LatestAlbum from './LatestAlbum'

import { searchAlbums } from '@/api/fetchSpotify'

export default function Albums() {
  const nmixx = 'NMIXX'

  const { data, isLoading, error } = useQuery({
    queryKey: ['albums', nmixx],
    queryFn: () => searchAlbums(nmixx),
    staleTime: 60_000,
    gcTime: 300_000,
  })

  if (isLoading) return <div>Loading NMIXX albums…</div>
  if (error) return <div>Failed to load albums.</div>

  const albums = data ?? []
  const firstAlbum = albums[0]
  return (
    <div className="mx-2">
      <LatestAlbum album={firstAlbum} />

      <div className="grid md:grid-cols-3 grid-cols-auto grid-rows-auto gap-4 p-4">
        {albums.slice(1).map((album) => (
          <div
            key={`${album.name}-${album.releaseDate}`}
            className="w-full flex gap-4"
          >
            {album.imageUrl ? (
              <a href={album.albumUrl} target="_blank" rel="noreferrer">
                <img
                  src={album.imageUrl}
                  alt={`${album.name} cover`}
                  className="rounded-lg object-cover md:w-20 w-30 md:h-20 w-30"
                />
              </a>
            ) : (
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 8,
                  background: '#eee',
                }}
              />
            )}
            <div className="flex flex-col justify-between">
              <div>
                <p className="truncate w-52">{album.name}</p>
                <p className="truncate w-52">{album.artists.join(', ')}</p>
              </div>
              <p style={{ color: '#777', fontSize: 12 }}>
                Released: {album.releaseDate} · Tracks: {album.totalTracks}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
