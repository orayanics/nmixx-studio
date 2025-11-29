export type ExternalUrls = {
  spotify: string // can change
}

export type Image = {
  url: string
  height: number
  width: number
}

export type Restrictions = {
  reason: string
}

export type Artist = {
  external_urls: ExternalUrls
  href: string
  id: string
  name: string
  type: string
  uri: string
}

export type Copyright = {
  text: string
  type: string
}

export type ExternalIds = {
  isrc: string
  ean: string
  upc: string
}

export type LinkedFrom = {
  external_urls: ExternalUrls
  href: string
  id: string
  type: string
  uri: string
}

export type ALBUM_TYPE = 'album' | 'single' | 'compilation' | 'appears_on'
