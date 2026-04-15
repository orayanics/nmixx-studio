import type { Artist, ExternalUrls, LinkedFrom, Restrictions } from './Shared'

export interface GetAlbumTracks {
  href: string
  limit: number
  next: string | null
  offset: number
  previous: string | null
  total: number
  items: Array<TrackItem>
}

export interface TrackItem {
  artists: Array<Artist>
  available_markets: Array<string>
  disc_number: number
  duration_ms: number
  explicit: boolean
  external_urls: ExternalUrls
  href: string
  id: string
  is_playable: boolean
  linked_from: LinkedFrom
  restrictions: Restrictions
  name: string
  preview_url: string | null
  track_number: number
  type: string
  uri: string
  is_local: boolean
}
