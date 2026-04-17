import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

import LandingView from '@/modules/landing/LandingView'
function App() {
  return <LandingView />
}
