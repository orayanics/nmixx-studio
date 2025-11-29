import { Outlet, createFileRoute, useLocation } from '@tanstack/react-router'
import PublicLayout from '@/components/Layout/PublicLayout'

export const Route = createFileRoute('/(public)')({
  component: RouteComponent,
})

const DISABLE_FOOTER_PATHS = ['/']

function RouteComponent() {
  const location = useLocation()
  const enableFooter = !DISABLE_FOOTER_PATHS.includes(location.pathname)
  return (
    <PublicLayout enableFooter={enableFooter}>
      <Outlet />
    </PublicLayout>
  )
}
