const BASE_URL = 'https://kprofiles.com/nmixx-discography/'

export type ScrapedAlbum = {
  album: string
  releaseDate: string
  cover: string
  tracks: string[]
}

function cleanText(value: string) {
  return value.replace(/\s+/g, ' ').trim()
}

function decodeHtmlEntities(value: string) {
  return value
    .replace(/&#8217;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
}

function stripTags(value: string) {
  return decodeHtmlEntities(value.replace(/<[^>]*>/g, ''))
}

function normalizeCoverUrl(url: string) {
  if (!url) return url

  // Some kprofiles wp-content images return 403 when hotlinked directly.
  if (url.startsWith('https://kprofiles.com/wp-content/')) {
    return url.replace(
      'https://kprofiles.com/wp-content/',
      'https://i0.wp.com/kprofiles.com/wp-content/',
    )
  }

  return url
}

export function parseAlbumsFromHtml(html: string): ScrapedAlbum[] {
  const albums: ScrapedAlbum[] = []
  const blockRegex = /<(p|ol)\b[^>]*>([\s\S]*?)<\/\1>/gi
  let pendingAlbum: Omit<ScrapedAlbum, 'tracks'> | null = null

  for (const match of html.matchAll(blockRegex)) {
    const tag = (match[1] ?? '').toLowerCase()
    const blockHtml = match[2] ?? ''

    if (tag === 'p') {
      if (!/Release Date:/i.test(blockHtml)) continue

      const album = cleanText(
        stripTags(blockHtml.match(/<strong\b[^>]*>([\s\S]*?)<\/strong>/i)?.[1] ?? ''),
      )
      const releaseDate = cleanText(
        stripTags(blockHtml.match(/Release Date:\s*([^<\n\r]+)/i)?.[1] ?? ''),
      )
      const cover = normalizeCoverUrl(
        cleanText(
        blockHtml.match(/<img\b[^>]*\ssrc="([^"]+)"/i)?.[1] ?? '',
        ),
      )

      pendingAlbum = album && releaseDate ? { album, releaseDate, cover } : null
      continue
    }

    if (tag === 'ol' && pendingAlbum) {
      const tracks = Array.from(blockHtml.matchAll(/<li\b[^>]*>([\s\S]*?)<\/li>/gi))
        .map((liMatch) => cleanText(stripTags(liMatch[1] ?? '')))
        .filter(Boolean)

      if (tracks.length > 0) {
        albums.push({ ...pendingAlbum, tracks })
      }
      pendingAlbum = null
    } else if (tag === 'ol') {
      pendingAlbum = null
    }
  }

  return albums
}

export async function scrapeAlbums() {
  const res = await fetch(BASE_URL)

  if (!res.ok) {
    throw new Error(`Failed to fetch discography page: ${res.status}`)
  }

  const html = await res.text()
  return parseAlbumsFromHtml(html)
}
