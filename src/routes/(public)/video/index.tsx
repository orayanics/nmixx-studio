import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'

import Playlist from '@/components/Youtube/Playlist'
import { getChannelPlaylists } from '@/api/fetchYoutube'

export const Route = createFileRoute('/(public)/video/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['youtube'],
    queryFn: () => getChannelPlaylists(),
    staleTime: 60_000,
    gcTime: 300_000,
  })

  if (isLoading) return <div>Loading videos…</div>
  if (error) return <div>Failed to load videos.</div>

  return <Playlist playlistItems={data || []} />
}
