import { createFileRoute } from '@tanstack/react-router'
import MusicView from '@/modules/music/MusicView'

export const Route = createFileRoute('/(public)/music/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <MusicView />
}
