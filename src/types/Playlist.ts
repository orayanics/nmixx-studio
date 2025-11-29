export interface Playlist {
  kind: string
  etag: string
  pageInfo: {
    totalResults: number
    resultsPerPage: number
  }
  items: Array<PlaylistItem>
}

export interface PlaylistItem {
  kind: string
  etag: string
  id: string
  snippet: {
    publishedAt: string
    channelId: string
    title: string
    description: string
    thumbnails: {
      default: Thumbnail
      medium: Thumbnail
      high: Thumbnail
      standard?: Thumbnail
      maxres?: Thumbnail
    }
    channelTitle: string
    localized: {
      title: string
      description: string
    }
  }
}

export interface Thumbnail {
  url: string
  width: number
  height: number
}
