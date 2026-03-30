export interface LastFMImage {
  size: 'small' | 'medium' | 'large' | 'extralarge' | 'mega' | ''
  '#text': string
}

export interface LastFMStreamable {
  fulltrack: '0' | '1'
  '#text': '0' | '1'
}

export interface LastFMTrackArtist {
  url: string
  name: string
  mbid: string
}

export interface LastFMTrack {
  streamable: LastFMStreamable
  duration: number
  url: string
  name: string
  '@attr': {
    rank: number
  }
  artist: LastFMTrackArtist
}

export interface LastFMTag {
  url: string
  name: string
}

export interface LastFMWiki {
  published: string
  summary: string
  content: string
}

export interface LastFMAlbum {
  artist: string
  mbid: string
  tags: {
    tag: LastFMTag[]
  }
  playcount: string
  image: LastFMImage[]
  tracks: {
    track: LastFMTrack[]
  }
  url: string
  name: string
  listeners: string
  wiki: LastFMWiki
}

export interface LastFMAlbumResponse {
  album: LastFMAlbum
}
