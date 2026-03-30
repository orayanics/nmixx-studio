import { createFileRoute } from '@tanstack/react-router'
import DuoHero from '@/modules/nmixx/DuoHero'
export const Route = createFileRoute('/(public)/nmixx/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <DuoHero />
}
