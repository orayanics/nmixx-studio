interface SpotifyAlbum {
  name: string
  artists: Array<string>
  releaseDate: string
  totalTracks: number
  imageUrl: string | null
  albumUrl: string
  uri: string
}

interface SpotifySearchResponse {
  albums: {
    items: Array<SpotifyAlbumItem>
  }
}

interface SpotifyAlbumItem {
  name: string
  artists: Array<{ name: string }>
  release_date: string
  total_tracks: number
  images: Array<{ url: string }>
  external_urls: { spotify: string }
  uri: string
}

// In-memory token cache for client-credentials flow
let cachedAccessToken: string | null = null
let accessTokenExpiresAt = 0

async function fetchClientCredentialsToken(): Promise<string> {
  try {
    const clientId = (import.meta as any).env?.VITE_SPOTIFY_CLIENT_ID
    const clientSecret = (import.meta as any).env?.VITE_SPOTIFY_CLIENT_SECRET

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
  const staticToken = (import.meta as any).env?.VITE_SPOTIFY_ACCESS_TOKEN
  if (staticToken) return staticToken

  if (cachedAccessToken && Date.now() < accessTokenExpiresAt) {
    return cachedAccessToken
  }
  return fetchClientCredentialsToken()
}

async function searchAlbums(query: string): Promise<Array<SpotifyAlbum>> {
  const url = `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=album&limit=20`

  try {
    const token = await getSpotifyAccessToken()
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      if (response.status === 401) {
        cachedAccessToken = null
        accessTokenExpiresAt = 0
      }
      throw new Error(
        `Failed to fetch data from Spotify API (${response.status})`,
      )
    }

    const data: SpotifySearchResponse = await response.json()

    const albums = data.albums.items.map((album: SpotifyAlbumItem) => ({
      name: album.name,
      artists: album.artists.map((artist) => artist.name),
      releaseDate: album.release_date,
      totalTracks: album.total_tracks,
      imageUrl: album.images[0]?.url ?? null,
      albumUrl: album.external_urls.spotify,
      uri: album.uri,
    }))

    return albums
  } catch (error) {
    console.error('Error fetching data from Spotify:', error)
    return []
  }
}

async function getAlbumTracks(albumId: string): Promise<Array<string>> {
  // remove "spotify:album:" prefix if present
  const albumID = albumId.startsWith('spotify:album:')
    ? albumId.replace('spotify:album:', '')
    : albumId

  const url = `https://api.spotify.com/v1/albums/${albumID}/tracks`

  try {
    const token = await getSpotifyAccessToken()
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      if (response.status === 401) {
        cachedAccessToken = null
        accessTokenExpiresAt = 0
      }
      throw new Error(
        `Failed to fetch album tracks from Spotify API (${response.status})`,
      )
    }

    const data = await response.json()
    const trackNames = data.items.map((track: any) => track.name)

    return trackNames
  } catch (error) {
    console.error('Error fetching album tracks from Spotify:', error)
    return []
  }
}

export { searchAlbums, getAlbumTracks }
