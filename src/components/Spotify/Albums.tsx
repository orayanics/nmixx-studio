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
    <div className="mx-4">
      <h2 className="text-6xl text-white">{ALBUM_TYPE_LABELS[album_type]}</h2>
      <div className="flex gap-4 max-w-full rounded-lg overflow-x-auto my-6">
        {data.items.map(
          ({ name, release_date, images, external_urls, artists }) => (
            <div
              key={`${name}-${release_date}`}
              className={`${styles['card--gradient']} relative w-auto flex items-center justify-center gap-4`}
            >
              <a
                href={external_urls.spotify}
                target="_blank"
                rel="noreferrer"
                className="md:w-[400px] w-60 rounded-lg overflow-hidden block"
              >
                <img
                  src={images[0].url}
                  alt={`${name} cover`}
                  className="rounded-lg object-cover w-full h-full"
                />
              </a>

              <div className="absolute z-20 bottom-0 left-0 right-0 text-white text-center py-4">
                <div>
                  <p className="break-words font-bold md:text-4xl text-2xl w-60 mx-auto">
                    {name}
                  </p>
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
