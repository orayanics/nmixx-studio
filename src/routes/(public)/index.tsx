import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(public)/')({
  component: App,
})

import LandingView from '@/modules/landing/LandingView'
function App() {
  return <LandingView />
}
