// lib/parseDiscography.ts
import type {
  Album,
  ArtistKey,
  Discography,
  SectionKey,
  Track,
} from '@/types/scrape'

export function parseDiscography(html: string): Discography {
  const doc = new DOMParser().parseFromString(html, 'text/html')
  const result = {} as Discography

  let currentArtist: ArtistKey | null = null
  let currentSection: SectionKey | null = null

  doc.querySelectorAll('h2, h3, table.article-table').forEach((node) => {
    if (node.tagName === 'H2') {
      const text = node.querySelector('.mw-headline')?.textContent?.trim()
      if (text && !['Overview', 'Navigation'].includes(text)) {
        currentArtist = text as ArtistKey
        result[currentArtist] = {}
      }
      return
    }

    if (node.tagName === 'H3') {
      const text = node.querySelector('.mw-headline')?.textContent?.trim()
      if (text && currentArtist) {
        currentSection = text as SectionKey
        if (!result[currentArtist][currentSection]) {
          result[currentArtist][currentSection] = []
        }
      }
      return
    }

    if (!currentArtist || !currentSection) return

    let year: string | null = null
    let language: string | null = null

    node.querySelectorAll('tr').forEach((row) => {
      const th = row.querySelector('th')
      if (th) {
        const text = th.textContent?.trim() ?? ''
        if (/^\d{4}$/.test(text)) year = text
        else if (text) language = text
        return
      }

      const tds = row.querySelectorAll('td')
      if (tds.length < 2) return

      const img = tds[0].querySelector('img')
      const rawCover =
        img?.dataset.src ??
        (img?.src.startsWith('data:') ? null : img?.src) ??
        null

      const cover = cleanImageUrl(rawCover)

      const titleTd = tds[1]
      const title = titleTd.querySelector('b')?.textContent?.trim() ?? ''

      let release: string | null = null
      let length: string | null = null
      titleTd.querySelectorAll('small').forEach((small) => {
        const t = small.textContent?.trim() ?? ''
        if (t.startsWith('Release:')) release = t.replace('Release:', '').trim()
        if (t.startsWith('Length:')) length = t.replace('Length:', '').trim()
      })

      const tracks: Track[] = []
      if (tds[2]) {
        tds[2].querySelectorAll('li').forEach((li) => {
          const sup = li.querySelector('sup')
          let label: Track['label']
          if (sup) {
            label = sup
              .querySelector('span')
              ?.textContent?.trim() as Track['label']
            sup.remove()
          }
          const name = li.textContent?.trim().replace(/^[""]|[""]$/g, '') ?? ''
          tracks.push(label ? { name, label } : { name })
        })
      }

      result[currentArtist!][currentSection!]!.push({
        title,
        cover,
        language,
        year,
        release,
        length,
        tracks,
      } satisfies Album)
    })
  })

  return result
}

export function cleanImageUrl(url: string | null): string | null {
  if (!url) return null
  return url.replace(/\/(revision|scale-to-width-down).*$/, '')
}

export function sortByLatest(albums: Album[]): Album[] {
  return [...albums].sort((a, b) => {
    if (!a.release) return 1
    if (!b.release) return -1
    return new Date(b.release).getTime() - new Date(a.release).getTime()
  })
}
