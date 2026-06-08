import { afterEach, describe, expect, test, vi } from 'vitest'

import { NMIXX_DISCOGRAPHY } from '@/configs/albums'
import { loadDiscography } from './discography'

describe('loadDiscography', () => {
  afterEach(() => {
    vi.restoreAllMocks()
    vi.useRealTimers()
  })

  test('falls back to bundled discography when remote scraping fails', async () => {
    const fetcher = vi.fn(async () => {
      throw new Error('network unavailable')
    })

    await expect(loadDiscography(fetcher)).resolves.toEqual(NMIXX_DISCOGRAPHY)
  })

  test('aborts a stalled remote scrape and returns bundled discography', async () => {
    vi.useFakeTimers()

    const fetcher = vi.fn((_url: string, init?: RequestInit) => {
      return new Promise<Response>((_resolve, reject) => {
        init?.signal?.addEventListener('abort', () => {
          reject(new DOMException('aborted', 'AbortError'))
        })
      })
    })

    const result = loadDiscography(fetcher, 250)
    await vi.advanceTimersByTimeAsync(250)

    await expect(result).resolves.toEqual(NMIXX_DISCOGRAPHY)
  })
})
