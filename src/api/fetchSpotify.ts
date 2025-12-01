import type { GetAlbum } from '@/types/Album'
import type { GetAlbumTracks } from '@/types/AlbumTracks'
import type { ArtistAlbums } from '@/types/ArtistAlbums'
import type { ALBUM_TYPE } from '@/types/Shared'

const ARTIST_ID = '28ot3wh4oNmoFOdVajibBl' // NMIXX Spotify Artist ID

let cachedAccessToken: string | null = null
let accessTokenExpiresAt = 0

async function fetchClientCredentialsToken(): Promise<string> {
  try {
    const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID
    const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET

    if (!clientId || !clientSecret) {
      throw new Error(
        'Missing Spotify client credentials. Set VITE_SPOTIFY_CLIENT_ID and VITE_SPOTIFY_CLIENT_SECRET.',
      )
    }

    const basic = btoa(`${clientId}:${clientSecret}`)
    const res = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({ grant_type: 'client_credentials' }),
    })

    if (!res.ok) {
      throw new Error(`Failed to obtain Spotify access token: ${res.status}`)
    }

    const data: {
      access_token: string
      token_type: string
      expires_in: number
    } = await res.json()

    cachedAccessToken = data.access_token
    accessTokenExpiresAt = Date.now() + (data.expires_in - 60) * 1000

    return cachedAccessToken
  } catch (error) {
    console.error('Error fetching Spotify access token:', error)
    throw error
  }
}

async function getSpotifyAccessToken(): Promise<string> {
  const staticToken = import.meta.env.VITE_SPOTIFY_ACCESS_TOKEN
  if (staticToken) return staticToken

  if (cachedAccessToken && Date.now() < accessTokenExpiresAt) {
    return cachedAccessToken
  }
  return fetchClientCredentialsToken()
}

export async function fetchArtistAlbums(
  latestOnly = false,
  album_type?: ALBUM_TYPE,
): Promise<ArtistAlbums> {
  const token = await getSpotifyAccessToken()
  const res = await fetch(
    `https://api.spotify.com/v1/artists/${ARTIST_ID}/albums${album_type ? `?include_groups=${album_type}` : ''}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )
  if (!res.ok) {
    throw new Error(`Failed to fetch artist albums: ${res.status}`)
  }

  const data: ArtistAlbums = await res.json()

  if (!latestOnly) {
    return data
  }

  const sortedItems = [...data.items].sort((a, b) =>
    a.release_date < b.release_date ? 1 : -1,
  )

  const sortedAlbumType = album_type
    ? sortedItems.filter((item) => item.album_type === album_type)
    : sortedItems

  const latest = sortedAlbumType.at(0)

  return {
    ...data,
    items: latest ? [latest] : [],
  }
}

export async function fetchAlbum(albumId: string): Promise<GetAlbum> {
  const token = await getSpotifyAccessToken()
  const res = await fetch(`https://api.spotify.com/v1/albums/${albumId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  if (!res.ok) {
    throw new Error(`Failed to fetch album: ${res.status}`)
  }

  const data: GetAlbum = await res.json()
  return data
}

export async function fetchAlbumTracks(
  albumId: string,
): Promise<GetAlbumTracks> {
  const token = await getSpotifyAccessToken()
  const res = await fetch(
    `https://api.spotify.com/v1/albums/${albumId}/tracks`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )
  if (!res.ok) {
    throw new Error(`Failed to fetch album tracks: ${res.status}`)
  }
  const data: GetAlbumTracks = await res.json()
  return data
}
