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
