// lib/types.ts
export interface Track {
  name: string
  label?: 'Title' | 'Pre-release'
}

export interface Album {
  title: string
  cover: string | null
  language: string | null
  year: string | null
  release: string | null
  length: string | null
  tracks: Track[]
}

export type SectionKey =
  | 'Full Albums'
  | 'EPs'
  | 'Single Albums'
  | 'Digital Singles'
  | 'OSTs'
  | 'Collaborations'
  | 'Remixes'

export type ArtistKey =
  | 'NMIXX'
  | 'Lily'
  | 'Haewon'
  | 'Sullyoon'
  | 'Bae'
  | 'Jiwoo'
  | 'Kyujin'

export type ArtistDiscography = Partial<Record<SectionKey, Album[]>>

export type Discography = Record<ArtistKey, ArtistDiscography>
