import { queryOptions } from '@tanstack/react-query'
import { fetchDiscography } from '@/server/discography'

export const discographyQueryOptions = queryOptions({
  queryKey: ['nmixx', 'discography'],
  queryFn: () => fetchDiscography(),
  staleTime: 1000 * 60 * 60,
})
