import { useQuery } from '@tanstack/react-query'

import type { ALBUM_TYPE } from '@/types/Shared'

import { fetchArtistAlbums } from '@/api/fetchSpotify'
import { ALBUM_TYPE_LABELS } from '@/configs/labels'

import Slider from '@/components/Slider/Slider'
import SliderTrack from '@/components/Slider/SliderTrack'
import LoaderError from '@/components/Loader/LoaderError'
import LoaderSpinner from '@/components/Loader/LoaderSpinner'

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

  if (isLoading) return <LoaderSpinner isFullScreen />
  if (error) return <LoaderError isFullScreen />

  if (!data?.items.length) return null

  return (
    <div className="mx-4">
      <h2 className="text-6xl text-white" id={`${album_type}`}>
        {ALBUM_TYPE_LABELS[album_type]}
      </h2>
      <Slider>
        {data.items.map(
          ({ name, release_date, images, external_urls, artists }) => (
            <SliderTrack
              key={`${name}-${release_date}`}
              img={images[0]?.url}
              name={name}
              artist={artists.map((artist) => artist.name).join(', ')}
              href={external_urls.spotify}
            />
          ),
        )}
      </Slider>
    </div>
  )
}
