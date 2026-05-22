import { createFileRoute } from '@tanstack/react-router'
import Landing from '@/modules/v2/landing'

export const Route = createFileRoute('/')({
  component: Landing,
})
