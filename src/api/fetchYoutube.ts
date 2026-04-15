import type { Playlist } from '@/types/Playlist'

const CHANNEL_ID = 'UCnUAyD4t2LkvW68YrDh7fDg'

export async function getChannelPlaylists() {
  const YOUTUBE_KEY = import.meta.env.VITE_YOUTUBE_API_KEY
  const url = `https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&channelId=${CHANNEL_ID}&maxResults=50&key=${YOUTUBE_KEY}`

  const res = await fetch(url)
  if (!res.ok) throw new Error('Failed to fetch playlists')

  const data: Playlist = await res.json()
  return data.items
}
