import { createFileRoute } from '@tanstack/react-router'
import { AboutMembers } from './members'

export const Route = createFileRoute('/(public)/about/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <AboutMembers />
}
