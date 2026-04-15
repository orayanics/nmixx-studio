import { useMemo } from 'react'

import { SPOTIFY_DATA } from '@/configs/scraped'
import type { ALBUM_TYPE } from '@/types/Shared'

import { ALBUM_TYPE_LABELS } from '@/configs/labels'

import Slider from '@/components/Slider/Slider'
import SliderTrack from '@/components/Slider/SliderTrack'

interface AlbumsProps {
  album_type: ALBUM_TYPE
}

export default function Albums(props: AlbumsProps) {
  const { album_type } = props

  const items = useMemo(
    () =>
      SPOTIFY_DATA.data.items.filter(
        (item) => item.type === album_type.toUpperCase(),
      ),
    [album_type],
  )

  if (!items.length) return null

  return (
    <div className="mx-4">
      <h2 className="text-6xl text-white" id={`${album_type}`}>
        {ALBUM_TYPE_LABELS[album_type]}
      </h2>
      <Slider>
        {items.map(({ id, name, date, coverArt, shareUrl }) => (
          <SliderTrack
            key={id}
            img={coverArt.lg}
            name={name}
            artist={date}
            href={shareUrl}
          />
        ))}
      </Slider>
    </div>
  )
}
