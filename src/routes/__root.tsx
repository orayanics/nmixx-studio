import { Outlet, createRootRoute } from '@tanstack/react-router'
// import interWoff2 from '@fontsource-variable/inter/files/inter-latin-wght-normal.woff2?url'
import mainStyle from '@/styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { charSet: 'utf-8' },
      {
        name: 'description',
        content: 'NMIXX Studio - A fan-made project for NMIXX',
      },
    ],
    links: [
      {
        rel: 'preconnect',
        href: 'https://i.scdn.co',
        crossOrigin: 'anonymous',
      },
      // {
      //   rel: 'preload',
      //   as: 'font',
      //   href: interWoff2 as string,
      //   type: 'font/woff2',
      //   crossOrigin: 'anonymous',
      // },
      {
        rel: 'stylesheet',
        as: 'style',
        href: mainStyle,
      },
    ],
  }),
  component: () => <Outlet />,
})
