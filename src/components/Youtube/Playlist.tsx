import { useQuery } from '@tanstack/react-query'
import usePlaylist from './usePlaylist'
import PlaylistYearGroup from './PlaylistYearGroup'

import { getChannelPlaylists } from '@/api/fetchYoutube'

export default function Playlist() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['youtube'],
    queryFn: () => getChannelPlaylists(),
  })
  const { years, groupedPlaylists } = usePlaylist(data || [])

  if (isLoading) return <div>Loading videos…</div>
  if (error) return <div>Failed to load videos.</div>

  return (
    <div className="mx-4">
      <div className="flex flex-col items-start gap-4 text-white">
        {years.map((year) => (
          <PlaylistYearGroup
            key={`year-${year}`}
            year={year}
            playlists={groupedPlaylists[year]}
          />
        ))}
      </div>
    </div>
  )
}
