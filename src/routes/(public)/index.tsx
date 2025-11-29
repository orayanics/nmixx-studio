import { createFileRoute } from '@tanstack/react-router'

import { RootIndex } from '../__root/index'

export const Route = createFileRoute('/(public)/' as never)({
  component: RootIndex,
})
