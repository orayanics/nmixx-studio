import Navigation from '@/components/Page/Navigation'
import Footer from '@/components/Page/Footer'

import { PUBLIC_LINKS_V1 } from '@/configs/links'

interface PublicLayoutProps {
  children: React.ReactNode
  enableFooter?: boolean
  enableNavigation?: boolean
}

export default function PublicLayout(props: PublicLayoutProps) {
  const { children, enableFooter = true, enableNavigation = true } = props

  return (
    <>
      {enableNavigation && <Navigation links={PUBLIC_LINKS_V1} />}
      <main className="min-h-screen mx-auto">{children}</main>
      {enableFooter && <Footer />}
    </>
  )
}
