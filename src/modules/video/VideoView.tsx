import { useQuery } from '@tanstack/react-query'
import usePlaylist from '@/utils/usePlaylist'
import VideoGroup from './components/VideoGroup'

import { getChannelPlaylists } from '@/api/fetchYoutube'
import LoaderError from '@/components/Loader/LoaderError'
import LoaderSpinner from '@/components/Loader/LoaderSpinner'

export default function VideoView() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['youtube'],
    queryFn: () => getChannelPlaylists(),
  })
  const { years, groupedPlaylists } = usePlaylist(data || [])

  if (isLoading) return <LoaderSpinner isFullScreen />
  if (error) return <LoaderError isFullScreen />

  return (
    <div className="bg-scrapbook min-h-screen p-4 md:p-8 font-mono">
      <header className="mb-12 border-b-8 border-blue-500 pb-4">
        <h1 className="text-blue-500 text-6xl md:text-9xl font-black italic tracking-tighter uppercase">
          Archive_01
        </h1>
        <p className="text-blue-300 text-xs font-bold uppercase tracking-widest">
          SYSTEM_ACCESS: GRANTED // DATA_RETRIEVAL: COMPLETE
        </p>
      </header>

      <div className="flex flex-col gap-24">
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
