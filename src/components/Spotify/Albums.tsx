import { useQuery } from '@tanstack/react-query'
import styles from './Albums.module.css'
import useAlbum from './useAlbum'

import type { ALBUM_TYPE } from '@/types/Shared'

import { fetchArtistAlbums } from '@/api/fetchSpotify'
import { ALBUM_TYPE_LABELS } from '@/configs/labels'

interface AlbumsProps {
  album_type: ALBUM_TYPE
}

export default function Albums(props: AlbumsProps) {
  const { album_type } = props
  const sliderRef = useAlbum()

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
      <h2 className="text-6xl text-white" id={`${album_type}`}>
        {ALBUM_TYPE_LABELS[album_type]}
      </h2>
      <div
        ref={sliderRef}
        className="flex gap-4 max-w-full rounded-[var(--border-radius)] overflow-x-hidden overflow-y-hidden my-6 scroll-smooth scrollbar-hide"
      >
        {data.items.map(
          ({ name, release_date, images, external_urls, artists }) => (
            <div
              key={`${name}-${release_date}`}
              className={`${styles['card--gradient']} relative w-auto flex items-center justify-center gap-4`}
            >
              <div className="md:w-[400px] w-60 rounded-[var(--border-radius)] overflow-hidden block">
                <img
                  src={images[0].url}
                  alt={`${name} cover`}
                  className="rounded-[var(--border-radius)] object-cover w-full h-full"
                />
              </div>

              <div className="absolute z-20 bottom-0 left-0 right-0 text-white text-center py-4">
                <div>
                  <p className="break-words font-bold md:text-4xl text-2xl w-60 mx-auto">
                    <a
                      href={external_urls.spotify}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {name}
                    </a>
                  </p>
                  <p className="text-gray-400 truncate">
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
