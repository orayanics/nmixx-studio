import { Outlet, createFileRoute } from '@tanstack/react-router'
import PublicLayout from '@/components/Layout/PublicLayout'

export const Route = createFileRoute('/v1')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <PublicLayout>
      <main>
        <Outlet />
      </main>
    </PublicLayout>
  )
}
