import { useState } from 'react'

import { SkipBack, SkipForward } from 'lucide-react'

import styles from './PlayerSpinner.module.css'

interface PlayerSpinnerProps {
  album: {
    artists: Array<{ name: string; id: string; href: string }>
    album_type: string
    total_tracks: number
    name: string
    release_date: string
    href: string
    images: Array<{ url: string }>
    external_urls: { spotify: string }
    uri: string
    tracks: Array<{
      name: string
      id: string
      uri: string
      preview_url?: string | null
    }>
  }
}

export default function PlayerSpinner(props: PlayerSpinnerProps) {
  const { album } = props
  const {
    total_tracks,
    name,
    artists,
    images,
    external_urls,
    release_date,
    tracks,
  } = album

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const [trackList, setTrackList] = useState(tracks)

  const handleTrackBack = () => {
    setCurrentTrackIndex((prevIndex) =>
      prevIndex === 0 ? total_tracks - 1 : prevIndex - 1,
    )
  }

  const handleTrackForward = () => {
    setCurrentTrackIndex((prevIndex) =>
      prevIndex === total_tracks - 1 ? 0 : prevIndex + 1,
    )
  }

  const size = 300
  return (
    <div className="absolute w-full bg-black/30 backdrop-blur-[1.2px] inset-0 flex flex-col justify-center items-center">
      {(() => {
        return (
          <div
            key={`${name}-${release_date}`}
            className="flex flex-col justify-center items-center gap-4 p-4 mx-auto w-full h-full"
          >
            {images.length > 0 ? (
              <>
                <div
                  className={`relative rounded-full overflow-hidden ${styles.cd}`}
                >
                  <a
                    href={external_urls.spotify}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className={styles['cd-hole']} />

                    <svg
                      viewBox={`0 0 ${size} ${size}`}
                      className={styles.cdSvg}
                    >
                      <defs>
                        <mask id="cdHoleMask">
                          <rect width="100%" height="100%" fill="white" />
                          <circle
                            cx={size / 2}
                            cy={size / 2}
                            r={size * 0.12}
                            fill="black"
                          />
                        </mask>
                      </defs>

                      <image
                        href={images[0]?.url}
                        x="0"
                        y="0"
                        width={size}
                        height={size}
                        mask="url(#cdHoleMask)"
                      />
                    </svg>
                  </a>
                </div>

                <div className="md:w-100 w-full mt-4 flex flex-row items-center justify-center [&_p]:text-center">
                  <button onClick={handleTrackBack}>
                    <SkipBack size={32} className="inline cursor-pointer" />
                  </button>
                  <div className="w-100 text-center">
                    <h2 className="text-2xl text-white">
                      {trackList[currentTrackIndex].name}
                    </h2>
                    <p className="text-lg text-gray-300">
                      {artists.map((artist) => artist.name).join(', ')}
                    </p>
                  </div>
                  <button onClick={handleTrackForward}>
                    <SkipForward size={32} className="inline cursor-pointer" />
                  </button>
                </div>
              </>
            ) : (
              <div className={`${styles.cd} bg-gray-400/20 rounded-full`} />
            )}
          </div>
        )
      })()}
    </div>
  )
}
