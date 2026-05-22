import { createFileRoute } from '@tanstack/react-router'
import MusicView from '@/modules/v1/music/MusicView'

export const Route = createFileRoute('/v1/music/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <MusicView />
}
