import { createFileRoute } from '@tanstack/react-router'
import { NMIXX_MEMBERS, type Member } from '@/configs/members'

export const Route = createFileRoute('/_v2/nmixx/$member')({
  params: {
    parse: (params): { member: Member } => {
      if (!NMIXX_MEMBERS.includes(params.member as Member)) {
        throw new Error('Invalid NMIXX member')
      }
      return { member: params.member as Member }
    },
  },

  component: RouteComponent,
})

function RouteComponent() {
  const { member } = Route.useParams()

  return (
    <div className="max-w-7xl mx-auto md:overflow-visible overflow-hidden min-h-screen">
      <p>{member}</p>
    </div>
  )
}
