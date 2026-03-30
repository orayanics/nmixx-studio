import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(public)/nmixx/$haewon')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/nmixx/haewon"!</div>
}
