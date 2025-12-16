import { InfinityIcon, SkipBackIcon, SkipForwardIcon } from 'lucide-react'
import styles from './PlayerSpinner.module.css'

import usePlayerSpinner from './usePlayerSpinner'
import type { AlbumWithTracks } from '@/api/helperSpotify'

interface PlayerSpinnerProps {
  album: AlbumWithTracks
}

export default function PlayerSpinner({ album }: PlayerSpinnerProps) {
  const { name, artists, external_urls, tracks } = album

  const { currentTrack, handleTrackBack, handleTrackForward } =
    usePlayerSpinner({
      trackCount: tracks.length,
      trackList: tracks,
    })

  return (
    <div className={styles.container}>
      <div className={styles.visual}>
        <div className={styles.cdWrapper}>
          <a
            href={external_urls.spotify}
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
                  <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
                  <stop offset="50%" stopColor="rgba(255,255,255,0.05)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0.6)" />
                </linearGradient>
              </defs>
              {/* Main CD Body with Hole */}
              <path
                d="M 100 100 m -95, 0 a 95,95 0 1,0 190,0 a 95,95 0 1,0 -190,0 
                   M 100 100 m -20, 0 a 20,20 0 1,1 40,0 a 20,20 0 1,1 -40,0"
                fill="url(#cdGradient)"
                fillRule="evenodd"
              />
              {/* Inner Ring Detail */}
              <circle
                cx="100"
                cy="100"
                r="25"
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
              />
              {/* Outer Ring Detail */}
              <circle
                cx="100"
                cy="100"
                r="94"
                fill="none"
                stroke="rgba(255,255,255,0.2)"
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
            {artists.map((artist) => artist.name).join(', ')}
            <br />
            <span style={{ fontSize: '0.9em', opacity: 0.7 }}>{name}</span>
          </p>
        </div>

        <div className={`${styles.controls}`}>
          <div className={styles.pagination}>
            {tracks.map((_, index) =>
              currentTrack !== tracks[index].name ? (
                <div key={index} className={styles.dot} />
              ) : (
                <div className={`${styles.dot} ${styles.dotActive}`} />
              ),
            )}
          </div>

          <div className="flex gap-6 w-full justify-center">
            <button
              className="rounded-full bg-white text-black p-3 cursor-pointer"
              onClick={handleTrackBack}
            >
              <SkipBackIcon />
            </button>

            <button
              className="rounded-full bg-white text-black p-3 cursor-pointer"
              onClick={handleTrackForward}
            >
              <SkipForwardIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
