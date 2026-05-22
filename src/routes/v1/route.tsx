import { Outlet, createFileRoute, useLocation } from '@tanstack/react-router'
import RouteLoadingOverlay from '@/components/Loader/RouteLoadingOverlay'
import PublicLayout from '@/components/Layout/PublicLayout'

export const Route = createFileRoute('/v1')({
  component: RouteComponent,
})

function RouteComponent() {
  const location = useLocation()

  return (
    <RouteLoadingOverlay triggerKey={location.pathname} text="loading">
      <PublicLayout>
        <main
          key={location.pathname}
          style={{ viewTransitionName: 'main-content' }}
        >
          <Outlet />
        </main>
      </PublicLayout>
    </RouteLoadingOverlay>
  )
}
