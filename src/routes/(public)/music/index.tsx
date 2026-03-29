import { createFileRoute } from '@tanstack/react-router'

import List from '@/modules/music/List'

import HeroImage from '@/components/Page/HeroImage'
import LANDING_BACKGROUND from '@/assets/images/blue-valentine-2.webp'
import { useDiscography } from '@/api/fetchDiscography'

export const Route = createFileRoute('/(public)/music/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { data, isLoading, isError } = useDiscography()

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error.</p>
  if (!data) return null

  console.log(data)
  // Data
  const NMIXX = data?.NMIXX
  const FULL_ALBUMS = NMIXX?.['Full Albums']
  const EPS = NMIXX?.['EPs']
  const SINGLE_ALBUM = NMIXX?.['Single Albums']
  const DIGITAL_SINGLES = NMIXX?.['Digital Singles']
  const OST = NMIXX?.['OSTs']
  const COLLABS = NMIXX?.['Collaborations']
  const REMIXES = NMIXX?.['Remixes']

  return (
    <>
      <HeroImage BACKGROUND={LANDING_BACKGROUND} scrollId="album" />
      <List />
      <pre>
        {JSON.stringify(
          {
            FULL_ALBUMS,
            EPS,
            SINGLE_ALBUM,
            DIGITAL_SINGLES,
            OST,
            COLLABS,
            REMIXES,
          },
          null,
          2,
        )}
      </pre>
    </>
  )
}
