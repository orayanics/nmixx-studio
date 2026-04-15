import { useEffect, useRef, useState } from 'react'
import { LANDING_DECK } from '@/configs/landing'
import LoaderSpinner from '@/components/Loader/LoaderSpinner'

export const PortraitCard = ({
  name,
  zoom = 1,
  focus = { x: '50%', y: '50%' },
}: {
  name: string
  zoom?: number
  focus?: { x: string; y: string }
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  const selected = LANDING_DECK.find(
    (item) => item.title.toUpperCase() === name,
  )
  useEffect(() => {
    if (imgRef.current?.complete) setIsLoaded(true)
  }, [])

  return (
    <div className="relative aspect-3/4 border border-blue-500/40 border-border overflow-hidden group">
      <div className="absolute z-10 inset-0 halftone-aura opacity-30 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none" />

      {!isLoaded && <LoaderSpinner isFullScreen />}

      <div className="absolute inset-0 flex items-center justify-center">
        <img
          ref={imgRef}
          onLoad={() => setIsLoaded(true)}
          onError={() => setIsLoaded(true)}
          src={selected?.img || ''}
          alt={name}
          className="zine-image object-cover w-full h-full"
          style={{
            transform: `scale(${zoom}) translate(-${focus.x}, -${focus.y})`,
            transformOrigin: `${focus.x} ${focus.y}`,
          }}
        />
      </div>
    </div>
  )
}
