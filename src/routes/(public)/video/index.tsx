import { createFileRoute } from '@tanstack/react-router'
import List from '@/modules/video/List'
import Hero from '@/modules/music/Hero'

export const Route = createFileRoute('/(public)/video/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      {/* TODO - Hero */}
      <Hero />
      <List />
    </>
  )
}
