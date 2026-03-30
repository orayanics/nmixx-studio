import { InfinityIcon, SkipBackIcon, SkipForwardIcon } from 'lucide-react'
import styles from './PlayerSpinner.module.css'

import usePlayerSpinner from './usePlayerSpinner'
import type { LastFMAlbum } from '@/types/LastFm'

interface PlayerSpinnerProps {
  album: LastFMAlbum
}

export default function PlayerSpinner({ album }: PlayerSpinnerProps) {
  const { name, artist, url, tracks } = album
  const trackList = tracks.track

  const { currentTrack, handleTrackBack, handleTrackForward } =
    usePlayerSpinner({
      trackCount: trackList.length,
      trackList,
    })

  return (
    <div className="h-full flex">
      <div className={styles.container}>
        <div className={styles.visual}>
          <div className={styles.cdWrapper}>
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className={styles.cdLink}
            >
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.cdSvg}
              >
                <defs>
                  <linearGradient
                    id="cdGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="rgba(255,255,255,1)" />
                    <stop offset="50%" stopColor="rgba(255,255,255,0.05)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,1)" />
                  </linearGradient>
                </defs>
                <path
                  d="M 100 100 m -95, 0 a 95,95 0 1,0 190,0 a 95,95 0 1,0 -190,0 
                   M 100 100 m -20, 0 a 20,20 0 1,1 40,0 a 20,20 0 1,1 -40,0"
                  fill="url(#cdGradient)"
                  fillRule="evenodd"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="25"
                  fill="none"
                  stroke="rgba(255,255,255,0.4)"
                  strokeWidth="1"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="94"
                  fill="none"
                  stroke="rgba(255,255,255,0.5)"
                  strokeWidth="1"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.header}>
            <InfinityIcon />
            <span className={styles.label}>NMIXX Studio</span>
          </div>

          <div className={styles.info}>
            <h2 className={styles.title}>{currentTrack}</h2>
            <p className={styles.artist}>
              {artist}
              <br />
              <span style={{ fontSize: '0.9em', opacity: 0.7 }}>{name}</span>
            </p>
          </div>

          <div className={`${styles.controls}`}>
            <div className={styles.pagination}>
              {trackList.map((_, index) =>
                currentTrack !== trackList[index].name ? (
                  <div key={index} className={styles.dot} />
                ) : (
                  <div
                    key={index}
                    className={`${styles.dot} ${styles.dotActive}`}
                  />
                ),
              )}
            </div>

            <div className="flex gap-6 w-full justify-center">
              <button onClick={handleTrackBack}>
                <SkipBackIcon />
              </button>

              <button onClick={handleTrackForward}>
                <SkipForwardIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
