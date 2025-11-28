import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import { SkipBack, SkipForward } from 'lucide-react'

import styles from './LatestAlbum.module.css'
import { getAlbumTracks } from '@/api/fetchSpotify'

type SpotifyAlbum = {
  name: string
  artists: Array<string>
  releaseDate: string
  totalTracks: number
  imageUrl: string | null
  albumUrl: string
  uri: string
}

interface LatestAlbumProps {
  album: SpotifyAlbum
}
export default function LatestAlbum(props: LatestAlbumProps) {
  const { album } = props
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)

  const { data, isLoading, error } = useQuery({
    queryKey: ['album-tracks', album.uri],
    queryFn: () => getAlbumTracks(album.uri),
    staleTime: 60_000,
    gcTime: 300_000,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  })

  if (isLoading) return <div>Loading album tracks…</div>
  if (error) return <div>Failed to load album tracks.</div>

  const tracks = data ?? []

  const handleTrackBack = () => {
    setCurrentTrackIndex((prevIndex) =>
      prevIndex === 0 ? tracks.length - 1 : prevIndex - 1,
    )
  }

  const handleTrackForward = () => {
    setCurrentTrackIndex((prevIndex) =>
      prevIndex === tracks.length - 1 ? 0 : prevIndex + 1,
    )
  }

  return (
    <div className="mb-4">
      {(() => {
        return (
          <div
            key={`${album.name}-${album.releaseDate}`}
            className="mt-10 w-full flex flex-col justify-center items-center gap-4 p-4 mb-4 mx-auto"
          >
            {album.imageUrl ? (
              <>
                <div
                  className={`relative rounded-full overflow-hidden ${styles.cd}`}
                >
                  <a href={album.albumUrl} target="_blank" rel="noreferrer">
                    <div className={styles['cd-hole']} />

                    <img
                      src={album.imageUrl}
                      alt={`${album.name} cover`}
                      className="rounded-full"
                    />
                  </a>
                </div>

                <div className="w-full mt-4 flex flex-row items-center justify-center [&_p]:text-center">
                  <button onClick={handleTrackBack}>
                    <SkipBack size={32} className="inline cursor-pointer" />
                  </button>
                  <div className="w-100 text-center">
                    <h2 className="text-2xl">{tracks[currentTrackIndex]}</h2>
                    <p className="text-lg text-gray-700">
                      {album.artists.join(', ')}
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
