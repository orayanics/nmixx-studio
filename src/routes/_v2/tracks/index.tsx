import { createFileRoute } from '@tanstack/react-router'
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
  useTransform,
} from 'framer-motion'
import type { MotionValue } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'

import { NMIXX_DISCOGRAPHY } from '@/configs/albums'
import styles from './tracks.module.css'
export const Route = createFileRoute('/_v2/tracks/')({
  component: RouteComponent,
})

function RouteComponent() {
  const albums = useMemo(() => [...NMIXX_DISCOGRAPHY].reverse(), [])
  const [activeIndex, setActiveIndex] = useState(0)
  const snapTimeoutRef = useRef<number | null>(null)
  const dragStateRef = useRef<{ active: boolean; lastX: number } | null>(null)
  const target = useMotionValue(0)
  const smooth = useSpring(target, { stiffness: 90, damping: 28, mass: 1.1 })

  const wrapIndex = (index: number) => {
    const length = albums.length
    return ((index % length) + length) % length
  }

  const scheduleSnap = () => {
    if (snapTimeoutRef.current !== null) {
      window.clearTimeout(snapTimeoutRef.current)
    }
    snapTimeoutRef.current = window.setTimeout(() => {
      target.set(Math.round(target.get()))
    }, 220)
  }

  useMotionValueEvent(smooth, 'change', (value) => {
    const snapped = Math.round(value)
    if (Math.abs(value - snapped) < 0.12) {
      setActiveIndex(wrapIndex(snapped))
    }
  })

  useEffect(() => {
    const previousHtmlOverflow = document.documentElement.style.overflow
    const previousBodyOverflow = document.body.style.overflow
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'

    return () => {
      document.documentElement.style.overflow = previousHtmlOverflow
      document.body.style.overflow = previousBodyOverflow
      if (snapTimeoutRef.current !== null) {
        window.clearTimeout(snapTimeoutRef.current)
      }
    }
  }, [])

  const activeAlbum = albums[activeIndex] ?? null

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    event.preventDefault()
    const raw =
      Math.abs(event.deltaX) > Math.abs(event.deltaY)
        ? event.deltaX
        : event.deltaY
    const deltaModeScale =
      event.deltaMode === 1 ? 40 : event.deltaMode === 2 ? 120 : 1
    const delta = Math.max(-120, Math.min(120, raw * deltaModeScale))
    target.set(target.get() + delta * 0.0025)
    scheduleSnap()
  }

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId)
    dragStateRef.current = { active: true, lastX: event.clientX }
  }

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const dragState = dragStateRef.current
    if (!dragState?.active) return
    event.preventDefault()
    const deltaX = event.clientX - dragState.lastX
    dragState.lastX = event.clientX
    target.set(target.get() - deltaX * 0.01)
  }

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    const dragState = dragStateRef.current
    if (!dragState?.active) return
    dragState.active = false
    event.currentTarget.releasePointerCapture(event.pointerId)
    scheduleSnap()
  }

  const visibleCount = 13
  const angleSpan = 200
  const radius = 1000

  return (
    <section
      className={`${styles.tracksSection} max-w-screen mx-auto h-svh overflow-hidden box-border
      flex flex-col items-center justify-center`}
    >
      <div
        className={styles.arcWrapper}
        onWheel={handleWheel}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <div className={styles.arcStage}>
          {albums.map((album, i) => (
            <ArcSlot
              key={i}
              album={album}
              albumIndex={i}
              totalAlbums={albums.length}
              position={smooth}
              angleSpan={angleSpan}
              radius={radius}
              visibleCount={visibleCount}
              active={i === activeIndex}
            />
          ))}
        </div>
      </div>

      {activeAlbum ? (
        <motion.div
          className={styles.details}
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
        >
          <div className={styles.albumMeta}>
            <p className="font-bold text-2xl">{activeAlbum.album}</p>
            <p>{activeAlbum.releaseDate}</p>
          </div>
          <ol className={styles.trackList}>
            {activeAlbum.tracks.map((track, index) => (
              <li key={`${activeAlbum.album}-${track}`} className={styles.trackItem}>
                <span className={styles.trackIndex}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>{track}</span>
              </li>
            ))}
          </ol>
        </motion.div>
      ) : null}
    </section>
  )
}

type ArcSlotProps = {
  album: (typeof NMIXX_DISCOGRAPHY)[number]
  albumIndex: number
  totalAlbums: number
  position: MotionValue<number>
  angleSpan: number
  radius: number
  visibleCount: number
  active: boolean
}

function ArcSlot({
  album,
  albumIndex,
  totalAlbums,
  position,
  angleSpan,
  radius,
  visibleCount,
  active,
}: ArcSlotProps) {
  const offset = useTransform(position, (value) => {
    const raw = albumIndex - value
    // Wrap to [-N/2, N/2): continuous, no Math.round discontinuity
    return (
      (((raw % totalAlbums) + totalAlbums + totalAlbums / 2) % totalAlbums) -
      totalAlbums / 2
    )
  })
  const angle = useTransform(
    offset,
    (value) => (value * angleSpan) / (visibleCount - 1),
  )
  const x = useTransform(
    angle,
    (value) => Math.sin((value * Math.PI) / 180) * radius,
  )
  const y = useTransform(
    angle,
    (value) => -Math.cos((value * Math.PI) / 180) * radius,
  )
  const distance = useTransform(offset, (value) => Math.abs(value))
  const fadeStart = visibleCount * 0.8
  const opacity = useTransform(distance, (value) =>
    Math.max(0, 1 - value / fadeStart),
  )
  const zIndex = useTransform(distance, (value) =>
    Math.round((1 - value / visibleCount) * 100),
  )

  return (
    <motion.div
      className={`${styles.arcItem} ${active ? styles.arcItemActive : ''}`}
      style={{ x, y, opacity, zIndex }}
      animate={{ scale: active ? 1.5 : 1 }}
      transition={{ type: 'spring', stiffness: 180, damping: 22, mass: 0.9 }}
      transformTemplate={({ x: xValue, y: yValue, scale: scaleValue }) =>
        `translate(-50%, -50%) translate3d(${xValue}, ${yValue}, 0) scale(${scaleValue})`
      }
      aria-hidden={false}
    >
      <img className={styles.arcCover} src={album.cover} alt={album.album} />
    </motion.div>
  )
}
