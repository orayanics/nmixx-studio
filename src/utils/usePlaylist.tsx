import type { PlaylistItem } from '@/types/Playlist'

export default function usePlaylist(data: Array<PlaylistItem>) {
  const years = Array.from(
    new Set(
      data.map(({ snippet }) =>
        new Date(snippet.publishedAt).getFullYear().toString(),
      ),
    ),
  ).sort((a, b) => parseInt(b) - parseInt(a))

  // group playlist by years
  const groupedPlaylists: { [year: string]: Array<PlaylistItem> } = {}
  years.forEach((year) => {
    groupedPlaylists[year] = data.filter(
      ({ snippet }) =>
        new Date(snippet.publishedAt).getFullYear().toString() === year,
    )
  })

  return { years, groupedPlaylists }
}
