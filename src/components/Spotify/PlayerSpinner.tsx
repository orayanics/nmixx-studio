import { Suspense } from 'react'
import { useSuspenseQuery } from '@tanstack/react-query'
import { SkipBack, SkipForward } from 'lucide-react'
import styles from './PlayerSpinner.module.css'

import usePlayerSpinner from './usePlayerSpinner'
import LoaderSpinner from '@/components/Loader/LoaderSpinner'

import useScreen from '@/utils/useScreen'

import { getLatestAlbumTracks } from '@/api/helperSpotify'

export default function PlayerSpinner() {
  const { data, isFetching } = useSuspenseQuery({
    queryKey: ['latest-album-tracks'],
    queryFn: getLatestAlbumTracks,
    staleTime: 60 * 1000, // 1 minute
  })

  if (isFetching) {
    return <LoaderSpinner isFullScreen />
  }

  const album = data

  const { name, artists, external_urls, release_date, tracks } = album

  const { isMobile } = useScreen()
  const { currentTrack, handleTrackBack, handleTrackForward } =
    usePlayerSpinner({
      trackCount: tracks.length,
      trackList: tracks,
    })

  const src = isMobile ? album.images[1]?.url : album.images[0]?.url
  const width = isMobile ? 300 : 640
  const height = isMobile ? 300 : 640

  return (
    <div
      className="z-20 w-full bg-black/20 inset-0 flex flex-col md:p-0 p-4 justify-center items-center"
      id="player"
    >
      <div
        key={`${name}-${release_date}`}
        className="flex md:w-auto w-full bg-white/20 glass--bg flex-col justify-center items-center gap-4 p-10 mx-auto rounded-[var(--border-radius-xl)]"
      >
        <div
          className={`relative rounded-[var(--border-radius-circle)] overflow-hidden ${styles.cd}`}
        >
          <a href={external_urls.spotify} target="_blank" rel="noreferrer">
            <div className={styles['cd-hole']} />

            <Suspense fallback={<LoaderSpinner />}>
              <img
                src={src}
                width={width}
                height={height}
                alt={`${name} album cover`}
              />
            </Suspense>
          </a>
        </div>

        <div
          className={`${styles['cd-controls']} md:w-100 w-full mt-4 flex flex-row items-center justify-center [&_p]:text-center`}
        >
          <button onClick={handleTrackBack} aria-label="Back">
            <SkipBack size={32} className="inline cursor-pointer" />
          </button>
          <div className="w-100 text-center">
            <h2 className="text-2xl text-white">{currentTrack}</h2>
            <p className="text-lg text-gray-300">
              {artists.map((artist) => artist.name).join(', ')}
            </p>
          </div>
          <button onClick={handleTrackForward} aria-label="Forward">
            <SkipForward size={32} className="inline cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  )
}
