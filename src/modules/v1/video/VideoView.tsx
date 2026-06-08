import { useQuery } from '@tanstack/react-query'
import usePlaylist from '@/utils/usePlaylist'
import VideoGroup from './components/VideoGroup'

import { getChannelPlaylists } from '@/api/fetchYoutube'
import LoaderError from '@/components/Loader/LoaderError'
import LoaderSpinner from '@/components/Loader/LoaderSpinner'
import { ScrambleText } from '../landing/components/ScrambleText'
import Planet from '@/components/Dynamic/Planet'
import BorderSquare from '@/components/Layout/BorderSquare'

export default function VideoView() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['youtube'],
    queryFn: () => getChannelPlaylists(),
  })
  const { years, groupedPlaylists } = usePlaylist(data || [])

  if (isLoading) return <LoaderSpinner isFullScreen />
  if (error) return <LoaderError isFullScreen />

  return (
    <div
      className="relative max-w-7xl mx-auto min-h-screen 
    md:overflow-visible overflow-hidden
    border-x border-blue-500/40"
    >
      <Planet isFullscreen />

      <div className="relative min-h-screen flex items-center justify-center">
        <header
          className="border-y border-blue-500/40
          bg-linear-to-t from-blue-500/5 to-transparent
          px-10 py-20 space-y-2 backdrop-blur-md relative z-10 w-full"
        >
          <BorderSquare />

          <h1 className="text-blue-500 text-7xl md:text-[2rem] uppercase text-center">
            <ScrambleText text="TAPES ARCHIVE" delay={50} />
          </h1>
          <p className="text-3xl md:text-5xl text-center max-w-3xl tracking-tight mx-auto">
            A place where creatures with diverse personalities coexisted.
          </p>
          <p className="text-lg text-center max-w-3xl tracking-tight mx-auto text-neutral-400">
            The PICK N MIXX store, a symbol of the MIXX, used to sell a variety
            of candies and donuts. MIXX was a world where territories would
            expand with imagination.
          </p>
        </header>
      </div>

      <div className="flex flex-col">
        {years.map((year) => (
          <VideoGroup
            key={`year-${year}`}
            year={year}
            playlists={groupedPlaylists[year]}
          />
        ))}
      </div>
    </div>
  )
}
