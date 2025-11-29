import { useQuery } from '@tanstack/react-query'

import type { ALBUM_TYPE } from '@/types/Shared'

import { fetchArtistAlbums } from '@/api/fetchSpotify'
import { ALBUM_TYPE_LABELS } from '@/configs/labels'

interface AlbumsProps {
  album_type: ALBUM_TYPE
}

export default function Albums(props: AlbumsProps) {
  const { album_type } = props

  const { data, isLoading, error } = useQuery({
    queryKey: ['albums', album_type],
    queryFn: () => fetchArtistAlbums(false, album_type),
    staleTime: 60_000,
    gcTime: 300_000,
  })

  if (isLoading)
    return <div>Loading NMIXX {ALBUM_TYPE_LABELS[album_type]}…</div>
  if (error) return <div>Failed to load {ALBUM_TYPE_LABELS[album_type]}.</div>

  if (!data?.items.length) return null

  return (
    <div className="mx-2">
      <h2 className="text-2xl text-center">{ALBUM_TYPE_LABELS[album_type]}</h2>

      <div className="grid md:grid-cols-3 grid-cols-auto grid-rows-auto gap-4 p-4">
        {data.items.map(
          ({
            name,
            release_date,
            total_tracks,
            images,
            external_urls,
            artists,
          }) => (
            <div
              key={`${name}-${release_date}`}
              className="w-full flex items-center justify-center gap-4"
            >
              <a href={external_urls.spotify} target="_blank" rel="noreferrer">
                <img
                  src={images[0].url}
                  alt={`${name} cover`}
                  className="rounded-lg object-cover md:w-20 w-30 md:h-20 w-30"
                />
              </a>

              <div className="flex flex-col justify-between">
                <div>
                  <p className="truncate w-52">{name}</p>
                  <p className="truncate w-52">
                    {artists
                      .map(({ name: artistName }) => artistName)
                      .join(', ')}
                  </p>
                </div>
                <p style={{ color: '#777', fontSize: 12 }}>
                  Released: {release_date} · Tracks: {total_tracks}
                </p>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  )
}
