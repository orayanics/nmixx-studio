import {
  HeadContent,
  Outlet,
  createRootRouteWithContext,
} from '@tanstack/react-router'

import mainStyle from '../styles.css?url'

import type { QueryClient } from '@tanstack/react-query'

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  head: () => ({
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { charSet: 'utf-8' },
      {
        name: 'description',
        content: 'NMIXX Studio - A fan-made project for NMIXX',
      },
      {
        title: 'NMIXX Studios',
      },
    ],
    links: [
      {
        rel: 'preconnect',
        href: 'https://i.scdn.co',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        as: 'style',
        href: mainStyle,
      },
    ],
  }),
  component: () => (
    <>
      <HeadContent />
      <Outlet />
    </>
  ),
})
