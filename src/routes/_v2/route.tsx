import { Outlet, createFileRoute } from '@tanstack/react-router'
import PublicLayout from '@/components/Layout/PublicLayout'
import { DISABLE_FOOTER } from '@/configs/links'

export const Route = createFileRoute('/_v2')({
  component: RouteComponent,
})

function RouteComponent() {
  const enableFooter = !DISABLE_FOOTER.includes('/tracks')
  return (
    <PublicLayout enableFooter={enableFooter}>
      <main>
        <Outlet />
      </main>
    </PublicLayout>
  )
}
