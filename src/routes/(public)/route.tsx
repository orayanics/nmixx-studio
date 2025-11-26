import { Outlet, createFileRoute } from '@tanstack/react-router'
import PublicLayout from '@/components/Layout/PublicLayout'

export const Route = createFileRoute('/(public)')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <PublicLayout>
      <Outlet />
    </PublicLayout>
  )
}
