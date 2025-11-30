import { useState } from 'react'
import { SkipBack, SkipForward } from 'lucide-react'
import styles from './PlayerSpinner.module.css'

import type { AlbumWithTracks } from '@/api/helperSpotify'
import type { TrackItem } from '@/types/AlbumTracks'

interface PlayerSpinnerProps {
  album: AlbumWithTracks
}

export default function PlayerSpinner({ album }: PlayerSpinnerProps) {
  const { name, artists, images, external_urls, release_date, tracks } = album

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const trackList: Array<TrackItem> = tracks
  const trackCount = trackList.length

  const handleTrackBack = () => {
    if (trackCount === 0) return
    setCurrentTrackIndex((prevIndex) =>
      prevIndex === 0 ? trackCount - 1 : prevIndex - 1,
    )
  }

  const handleTrackForward = () => {
    if (trackCount === 0) return
    setCurrentTrackIndex((prevIndex) =>
      prevIndex === trackCount - 1 ? 0 : prevIndex + 1,
    )
  }

  const currentTrack: TrackItem | undefined =
    trackCount > 0 ? trackList[currentTrackIndex] : undefined

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

                <div
                  className={`${styles['cd-controls']} md:w-100 w-full mt-4 flex flex-row items-center justify-center [&_p]:text-center`}
                >
                  <button onClick={handleTrackBack}>
                    <SkipBack size={32} className="inline cursor-pointer" />
                  </button>
                  <div className="w-100 text-center">
                    <h2 className="text-2xl text-white">
                      {currentTrack?.name ?? 'No tracks available'}
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
