import { createFileRoute } from '@tanstack/react-router'
import Landing from '@/modules/v2/landing'
import PublicLayout from '@/components/Layout/PublicLayout'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <PublicLayout enableFooter={false}>
      <Landing />
    </PublicLayout>
  )
}
