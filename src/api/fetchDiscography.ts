import { useQuery } from '@tanstack/react-query'
import { parseDiscography } from '@/utils/parseDiscography'
import type { Discography } from '@/types/scrape'

const API_URL =
  'https://nmixx.fandom.com/api.php?action=parse&page=Discography&format=json&origin=*'

async function fetchDiscography(): Promise<Discography> {
  const res = await fetch(API_URL)
  const json = await res.json()
  const html: string = json.parse.text['*']
  return parseDiscography(html)
}

export function useDiscography() {
  return useQuery({
    queryKey: ['discography'],
    queryFn: fetchDiscography,
    staleTime: 1000 * 60 * 60,
  })
}
