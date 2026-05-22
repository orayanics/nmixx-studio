import { createFileRoute } from '@tanstack/react-router'
import DuoHero from '@/modules/v1/nmixx/DuoHero'
export const Route = createFileRoute('/v1/nmixx/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <DuoHero />
}
