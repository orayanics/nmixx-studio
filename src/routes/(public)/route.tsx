import { Outlet, createFileRoute, useLocation } from '@tanstack/react-router'
import PublicLayout from '@/components/Layout/PublicLayout'

export const Route = createFileRoute('/(public)')({
  component: RouteComponent,
})

const DISABLE_FOOTER_PATHS = ['']
const DISABLE_NAVIGATION_PATHS = ['/']

function RouteComponent() {
  const location = useLocation()
  const enableFooter = !DISABLE_FOOTER_PATHS.includes(location.pathname)
  return (
    <PublicLayout
      enableFooter={enableFooter}
      enableNavigation={!DISABLE_NAVIGATION_PATHS.includes(location.pathname)}
    >
      <Outlet />
    </PublicLayout>
  )
}
