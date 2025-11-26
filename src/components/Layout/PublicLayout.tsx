import React from 'react'
import Navigation from '@/components/Page/PageNavigation'

export default function PublicLayout(props: { children: React.ReactNode }) {
  const { children } = props
  return (
    <div>
      <Navigation />
      {children}
    </div>
  )
}
