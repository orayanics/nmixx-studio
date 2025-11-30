import { useQuery } from '@tanstack/react-query'
import styles from './Albums.module.css'

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
      {/* <h2 className="text-2xl text-center">{ALBUM_TYPE_LABELS[album_type]}</h2> */}

      <div className="grid md:grid-cols-2 grid-cols-auto grid-rows-auto gap-4 p-4">
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
              className={`${styles['card--gradient']} relative w-full flex items-center justify-center gap-4 mx-auto`}
            >
              <a href={external_urls.spotify} target="_blank" rel="noreferrer">
                <img
                  src={images[0].url}
                  alt={`${name} cover`}
                  className="rounded-lg object-cover md:w-100 w-30 md:h-100 w-30"
                />
              </a>

              <div className="absolute z-20 bottom-0 left-0 right-0 text-white text-center py-4">
                <div>
                  <p className="font-bold text-gray-300">
                    {release_date} · Tracks: {total_tracks}
                  </p>

                  <p className="word-break text-4xl w-60 mx-auto">{name}</p>
                  <p className="truncate">
                    {artists
                      .map(({ name: artistName }) => artistName)
                      .join(', ')}
                  </p>
                </div>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  )
}
