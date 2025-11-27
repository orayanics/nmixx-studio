import React from 'react'
import Navigation from '@/components/Page/Navigation'

import { PUBLIC_LINKS } from '@/configs/links'

export default function PublicLayout(props: { children: React.ReactNode }) {
  const { children } = props
  return (
    <>
      <Navigation links={PUBLIC_LINKS} />
      {children}
    </>
  )
}
