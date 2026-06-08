import { createFileRoute } from '@tanstack/react-router'
import LandingView from '@/modules/v1/landing/LandingView'

export const Route = createFileRoute('/v1/')({
  component: LandingView,
})
