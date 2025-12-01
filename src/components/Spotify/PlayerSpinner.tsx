import { SkipBack, SkipForward } from 'lucide-react'
import styles from './PlayerSpinner.module.css'

import usePlayerSpinner from './usePlayerSpinner'

import type { AlbumWithTracks } from '@/api/helperSpotify'

interface PlayerSpinnerProps {
  album: AlbumWithTracks
}

export default function PlayerSpinner({ album }: PlayerSpinnerProps) {
  const { name, artists, images, external_urls, release_date, tracks } = album
  const { currentTrack, handleTrackBack, handleTrackForward } =
    usePlayerSpinner({
      trackCount: tracks.length,
      trackList: tracks,
    })

  const size = 600
  return (
    <div className="absolute z-20 w-full bg-black/20 inset-0 flex flex-col md:p-0 p-4 justify-center items-center">
      <div
        key={`${name}-${release_date}`}
        className="flex md:w-auto w-full bg-white/20 glass--bg flex-col justify-center items-center gap-4 p-10 mx-auto rounded-[var(--border-radius-xl)]"
      >
        <div
          className={`relative rounded-[var(--border-radius-circle)] overflow-hidden ${styles.cd}`}
        >
          <a href={external_urls.spotify} target="_blank" rel="noreferrer">
            <div className={styles['cd-hole']} />

            <svg viewBox={`0 0 ${size} ${size}`} className={`${styles.cdSvg}`}>
              <defs>
                <mask id="cdHoleMask">
                  <rect width="100%" height="100%" fill="#fefefeff" />
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
                // width={size}
                // height={size}
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
            <h2 className="text-2xl text-white">{currentTrack}</h2>
            <p className="text-lg text-gray-300">
              {artists.map((artist) => artist.name).join(', ')}
            </p>
          </div>
          <button onClick={handleTrackForward}>
            <SkipForward size={32} className="inline cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  )
}
