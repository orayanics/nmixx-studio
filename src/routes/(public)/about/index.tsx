import { createFileRoute } from '@tanstack/react-router'
import { AboutMembers } from '@/modules/about/Members'
import Hero from '@/modules/music/Hero'

export const Route = createFileRoute('/(public)/about/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      {/* TODO - Hero */}
      <Hero />
      <AboutMembers />
    </>
  )
}
