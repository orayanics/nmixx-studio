import { createFileRoute } from '@tanstack/react-router'
import { SOT_INDIV_IDS } from '@/configs/landing'
import { NMIXX_PROFILE } from '@/configs/members'
import { useDiscography } from '@/api/fetchDiscography'

import LoaderSpinner from '@/components/Loader/LoaderSpinner'
import LoaderError from '@/components/Loader/LoaderError'
import TextDivider from '@/components/Layout/TextDivider'
import MemberPhoto from '@/modules/nmixx/components/MemberPhoto'
import MemberDetail from '@/modules/nmixx/components/MemberDetail'
import MemberDiscography from '@/modules/nmixx/components/MemberDiscography'

export const Route = createFileRoute('/(public)/nmixx/$member')({
  component: RouteComponent,
})

function RouteComponent() {
  const { member } = Route.useParams()
  const match = SOT_INDIV_IDS.find(
    (item) => item.title.toLowerCase() === member?.toLowerCase(),
  )
  const matchDetails = NMIXX_PROFILE.find(
    (item) => item.stage_name.toLowerCase() === member?.toLowerCase(),
  )
  const isBae = member?.toLowerCase() === 'bae'

  const { data, isPending, isError } = useDiscography()
  const memberData = data
    ? data[matchDetails?.stage_name as keyof typeof data]
    : null

  const allReleases = [
    ...(memberData?.['OSTs'] || []).map((o: any) => ({
      ...o,
      type: 'OST_DATA',
    })),
    ...(memberData?.['Collaborations'] || []).map((c: any) => ({
      ...c,
      type: 'COLLAB_FILE',
    })),
  ]

  if (isPending) return <LoaderSpinner isFullScreen />
  if (isError || !data || !match) return <LoaderError isFullScreen />

  return (
    <>
      <TextDivider
        speed={250}
        className="bg-blue-500 text-black"
        text={
          <>
            NMIXX_CORE // {matchDetails?.stage_name} // SYSTEM_RECOVERED //{' '}
            {matchDetails?.rep_animal} // DATA_STREAM_OPEN //
          </>
        }
      />

      <div className="text-blue-500 font-mono my-2">
        <div className="grid grid-cols-12 gap-2 min-h-screen">
          <MemberPhoto img={match.img} title={match.title} isBae={isBae} />

          <div className="col-span-12 lg:col-span-7 flex flex-col gap-2">
            <MemberDetail
              stageName={matchDetails?.stage_name!}
              birthday={matchDetails?.birthday!}
              repAnimal={matchDetails?.rep_animal!}
            />

            <MemberDiscography releases={allReleases} />
          </div>
        </div>
      </div>

      <TextDivider
        speed={250}
        className="bg-blue-500 text-black"
        text={
          <>
            NMIXX_CORE // {matchDetails?.stage_name} // SYSTEM_RECOVERED //{' '}
            {matchDetails?.rep_animal} // DATA_STREAM_OPEN //
          </>
        }
      />
    </>
  )
}
