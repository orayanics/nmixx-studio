import { createServerFn } from '@tanstack/react-start'
import * as cheerio from 'cheerio'
import { NMIXX_DISCOGRAPHY, type Album } from '@/configs/albums'

const KPROFILES_URL = 'https://kprofiles.com/nmixx-discography/'
const FETCH_TIMEOUT_MS = 7000

type DiscographyFetcher = (
  url: string,
  init?: RequestInit,
) => Promise<Response>

export const fetchDiscography = createServerFn({ method: 'GET' }).handler(
  async (): Promise<Album[]> => loadDiscography(),
)

export async function loadDiscography(
  fetcher: DiscographyFetcher = fetch,
  timeoutMs = FETCH_TIMEOUT_MS,
): Promise<Album[]> {
  const abortController = new AbortController()
  const timeoutId = setTimeout(() => abortController.abort(), timeoutMs)

  try {
    const res = await fetcher(KPROFILES_URL, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
      },
      signal: abortController.signal,
    })

    if (!res.ok) {
      throw new Error(`kprofiles fetch failed: ${res.status} ${res.statusText}`)
    }

    const albums = parseDiscography(await res.text())

    return albums.length ? albums : NMIXX_DISCOGRAPHY
  } catch {
    return NMIXX_DISCOGRAPHY
  } finally {
    clearTimeout(timeoutId)
  }
}

function parseDiscography(html: string): Album[] {
  const $ = cheerio.load(html)
  const albums: Album[] = []

  // Album entries are <p> blocks containing <strong> (name) + "Release Date:" + <img>
  // followed immediately by <ol> of track <li>s
  $('.entry-content p').each((_, el) => {
    const p = $(el)
    const pHtml = p.html() ?? ''
    const pText = p.text()

    const albumName = p.find('strong').first().text().trim()
    if (!albumName || !pText.includes('Release Date:') || !p.find('img').length)
      return

    // Extract date from raw HTML — avoids <br> collapsing edge cases
    const dateMatch = pHtml.match(/Release Date:\s*([^<\n\r]+)/)
    const releaseDate = dateMatch?.[1]?.trim() ?? ''
    if (!releaseDate) return

    // Handle both bare <img> and <a><img></a> (e.g. ENTWURF)
    const imgEl = p.find('img').first()
    const cover =
      imgEl.attr('src') ??
      imgEl.attr('data-lazy-src') ??
      imgEl.attr('data-src') ??
      ''

    // <ol> is the immediate next sibling element after this <p>
    const tracks: string[] = []
    p.next('ol')
      .find('li')
      .each((_, li) => {
        tracks.push($(li).text().trim())
      })

    albums.push({ album: albumName, releaseDate, cover, tracks })
  })

  return albums
}
