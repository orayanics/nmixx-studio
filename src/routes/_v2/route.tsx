import { Outlet, createFileRoute, useLocation } from '@tanstack/react-router'
import PublicLayout from '@/components/Layout/PublicLayout'
import { DISABLE_FOOTER } from '@/configs/links'

export const Route = createFileRoute('/_v2')({
  component: RouteComponent,
})

function RouteComponent() {
  const location = useLocation()
  const pathname = location.pathname
  const enableFooter = !DISABLE_FOOTER.includes(pathname)

  return (
    <PublicLayout enableFooter={enableFooter}>
      <main>
        <Outlet />
      </main>
    </PublicLayout>
  )
}
