'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

function createDiscTexture(): THREE.CanvasTexture {
  const SIZE = 1024
  const canvas = document.createElement('canvas')
  canvas.width = SIZE
  canvas.height = SIZE
  const ctx = canvas.getContext('2d')!
  const cx = SIZE / 2
  const cy = SIZE / 2

  ctx.fillStyle = '#060c18'
  ctx.fillRect(0, 0, SIZE, SIZE)

  const atmoGrad = ctx.createRadialGradient(
    cx,
    SIZE * 0.9,
    0,
    cx,
    SIZE * 0.9,
    600,
  )
  atmoGrad.addColorStop(0, 'rgba(24, 82, 210, 0.55)')
  atmoGrad.addColorStop(0.4, 'rgba(15, 160, 100, 0.25)')
  atmoGrad.addColorStop(1, 'rgba(0,0,0,0)')
  ctx.fillStyle = atmoGrad
  ctx.fillRect(0, 0, SIZE, SIZE)

  const GOLD = '#c9a84c'
  const GOLD_MID = 'rgba(201,168,76,0.3)'
  const GOLD_FAINT = 'rgba(201,168,76,0.07)'

  for (let r = 88; r < 495; r += 9) {
    ctx.beginPath()
    ctx.arc(cx, cy, r, 0, Math.PI * 2)
    ctx.strokeStyle = r % 45 < 5 ? GOLD_MID : GOLD_FAINT
    ctx.lineWidth = 1
    ctx.stroke()
  }

  ctx.save()
  ctx.strokeStyle = GOLD
  ctx.lineWidth = 1.8
  const wx = 582,
    wy = 295,
    wLen = 175
  ctx.beginPath()
  for (let i = 0; i <= wLen; i++) {
    const envelope = Math.sin((i / wLen) * Math.PI)
    const y = wy + Math.sin(i * 0.42) * 20 * envelope
    i === 0 ? ctx.moveTo(wx + i, y) : ctx.lineTo(wx + i, y)
  }
  ctx.stroke()
  ctx.lineWidth = 1
  for (let i = 0; i <= 9; i++) {
    ctx.beginPath()
    ctx.moveTo(wx + i * (wLen / 9), wy + 32)
    ctx.lineTo(wx + i * (wLen / 9), wy + 42)
    ctx.stroke()
  }
  ctx.lineWidth = 0.8
  for (let i = 0; i < 4; i++) {
    ctx.beginPath()
    ctx.moveTo(wx + i * 28 + 8, wy + 52)
    ctx.lineTo(wx + i * 28 + 22, wy + 52)
    ctx.stroke()
  }
  ctx.restore()

  ctx.save()
  ctx.strokeStyle = GOLD
  ctx.lineWidth = 1.5
  const ox = 320,
    oy = 295
  for (const r of [32, 52, 72]) {
    ctx.beginPath()
    ctx.arc(ox, oy, r, 0, Math.PI * 2)
    ctx.stroke()
  }
  ctx.lineWidth = 1
  ctx.beginPath()
  ctx.moveTo(ox - 82, oy)
  ctx.lineTo(ox + 82, oy)
  ctx.moveTo(ox, oy - 82)
  ctx.lineTo(ox, oy + 82)
  ctx.stroke()
  for (let a = 0; a < Math.PI * 2; a += Math.PI / 8) {
    ctx.beginPath()
    ctx.moveTo(ox + Math.cos(a) * 76, oy + Math.sin(a) * 76)
    ctx.lineTo(ox + Math.cos(a) * 84, oy + Math.sin(a) * 84)
    ctx.stroke()
  }
  ctx.fillStyle = GOLD
  ctx.beginPath()
  ctx.arc(ox + 72, oy - 5, 5, 0, Math.PI * 2)
  ctx.fill()
  ctx.restore()

  ctx.save()
  ctx.strokeStyle = GOLD
  ctx.lineWidth = 1.5
  const px = 330,
    py = 700
  const rays: [number, number][] = [
    [0, 110],
    [32, 68],
    [68, 90],
    [118, 52],
    [158, 95],
    [215, 58],
    [268, 78],
    [312, 48],
  ]
  for (const [deg, len] of rays) {
    const a = (deg * Math.PI) / 180
    ctx.beginPath()
    ctx.moveTo(px, py)
    ctx.lineTo(px + Math.cos(a) * len, py + Math.sin(a) * len)
    ctx.stroke()
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(px + Math.cos(a) * (len + 6), py + Math.sin(a) * (len + 6))
    ctx.lineTo(px + Math.cos(a) * (len + 13), py + Math.sin(a) * (len + 13))
    ctx.stroke()
    ctx.lineWidth = 1.5
  }
  ctx.restore()

  ctx.save()
  ctx.strokeStyle = GOLD
  ctx.lineWidth = 1.5
  const rx = 615,
    ry = 635
  ctx.strokeRect(rx, ry, 115, 88)
  ctx.strokeRect(rx + 12, ry + 12, 91, 64)
  ctx.lineWidth = 1
  ctx.beginPath()
  ctx.moveTo(rx + 57, ry - 18)
  ctx.lineTo(rx + 57, ry)
  ctx.moveTo(rx + 57, ry + 88)
  ctx.lineTo(rx + 57, ry + 106)
  ctx.moveTo(rx - 18, ry + 44)
  ctx.lineTo(rx, ry + 44)
  ctx.moveTo(rx + 115, ry + 44)
  ctx.lineTo(rx + 133, ry + 44)
  ctx.stroke()
  ctx.lineWidth = 1.5
  ctx.beginPath()
  ctx.arc(rx + 57, ry + 44, 10, 0, Math.PI * 2)
  ctx.stroke()
  ctx.fillStyle = GOLD
  for (const [dx, dy] of [
    [rx + 18, ry + 18],
    [rx + 97, ry + 18],
    [rx + 18, ry + 68],
    [rx + 97, ry + 68],
  ]) {
    ctx.beginPath()
    ctx.arc(dx, dy, 2.5, 0, Math.PI * 2)
    ctx.fill()
  }
  ctx.restore()

  ctx.fillStyle = '#000'
  ctx.beginPath()
  ctx.arc(cx, cy, 30, 0, Math.PI * 2)
  ctx.fill()
  ctx.strokeStyle = GOLD
  ctx.lineWidth = 1.5
  ctx.beginPath()
  ctx.arc(cx, cy, 30, 0, Math.PI * 2)
  ctx.stroke()
  ctx.fillStyle = GOLD
  ctx.beginPath()
  ctx.arc(cx, cy, 5, 0, Math.PI * 2)
  ctx.fill()

  return new THREE.CanvasTexture(canvas)
}

interface AlbumDiscProps {
  cover?: string | null
  size?: number
  className?: string
  style?: React.CSSProperties
}

export function AlbumDisc({
  cover,
  size = 500,
  className,
  style,
}: AlbumDiscProps) {
  const mountRef = useRef<HTMLDivElement>(null)
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const el = mountRef.current
    if (!el) return

    let cleanupFn: (() => void) | null = null

    const init = async () => {
      // --- Renderer ---
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setSize(size, size)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      //   renderer.toneMapping = THREE.
      renderer.toneMappingExposure = 2
      renderer.outputColorSpace = THREE.SRGBColorSpace
      el.appendChild(renderer.domElement)

      // --- Scene & Camera ---
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100)
      camera.position.set(0, 0.6, 5.2)
      camera.lookAt(0, 0, 0)

      // --- Stars ---
      //   const starPos = new Float32Array(3200 * 3)
      //   for (let i = 0; i < starPos.length; i++)
      //     starPos[i] = (Math.random() - 0.5) * 90
      //   const starGeo = new THREE.BufferGeometry()
      //   starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3))
      //   scene.add(
      //     new THREE.Points(
      //       starGeo,
      //       new THREE.PointsMaterial({
      //         color: 0xffffff,
      //         size: 1.055,
      //         sizeAttenuation: true,
      //       }),
      //     ),
      //   )

      // --- Main group (parallax target) ---
      const group = new THREE.Group()
      scene.add(group)

      // --- Texture: cover image or engraving fallback ---
      const textureLoader = new THREE.TextureLoader()
      const texture = await new Promise<THREE.Texture>((resolve) => {
        if (cover) {
          textureLoader.load(
            cover,
            (t) => {
              t.colorSpace = THREE.SRGBColorSpace
              resolve(t)
            },
            undefined,
            () => resolve(createDiscTexture()),
          )
        } else {
          resolve(createDiscTexture())
        }
      })

      // --- Disc ---
      const discGeo = new THREE.CylinderGeometry(1.9, 1.9, 0.075, 128)
      const faceMat = new THREE.MeshStandardMaterial({
        map: texture,
        // metalness: 0.8,
        // roughness: 0.3,
      })
      const edgeMat = new THREE.MeshStandardMaterial({
        color: 0x1a1508,
        // metalness: 0.95,
        // roughness: 0.15,
        // emissive: new THREE.Color(0x3d2a0a),
        // emissiveIntensity: 0.3,
      })
      // CylinderGeometry groups: 0=lateral, 1=top cap, 2=bottom cap
      const disc = new THREE.Mesh(discGeo, [edgeMat, faceMat, faceMat])
      disc.rotation.x = Math.PI * 0.58
      group.add(disc)

      // --- Ring group (independent tilt) ---
      const ringGroup = new THREE.Group()
      ringGroup.rotation.x = Math.PI * 0.58
      group.add(ringGroup)

      const R = 2.6

      ringGroup.add(
        new THREE.Mesh(
          new THREE.TorusGeometry(R, 0.026, 16, 240),
          new THREE.MeshStandardMaterial({
            color: 0xd4aa48,
            emissive: new THREE.Color(0xc89830),
            emissiveIntensity: 1.2,
            metalness: 1,
            roughness: 0.05,
          }),
        ),
      )

      for (const [tube, opacity] of [
        [0.055, 0.3],
        [0.11, 0.12],
        [0.2, 0.05],
      ] as [number, number][]) {
        ringGroup.add(
          new THREE.Mesh(
            new THREE.TorusGeometry(R, tube, 8, 240),
            new THREE.MeshBasicMaterial({
              color: 0xd4aa48,
              transparent: true,
              opacity,
              blending: THREE.AdditiveBlending,
              depthWrite: false,
            }),
          ),
        )
      }

      // --- Lights ---
      scene.add(new THREE.AmbientLight(0x08102a, 2))
      const key = new THREE.PointLight(0xfff0dd, 4, 22)
      key.position.set(4, 3, 4)
      scene.add(key)
      const rim = new THREE.PointLight(0x2244ff, 1.8, 18)
      rim.position.set(-3, -2, -4)
      scene.add(rim)
      const goldLight = new THREE.PointLight(0xffaa28, 3, 12)
      goldLight.position.set(1.5, -1, 3)
      scene.add(goldLight)

      // --- Mouse ---
      const onMove = (e: MouseEvent) => {
        const r = el.getBoundingClientRect()
        mouse.current.x = ((e.clientX - r.left) / r.width - 0.5) * 2
        mouse.current.y = -((e.clientY - r.top) / r.height - 0.5) * 2
      }
      window.addEventListener('mousemove', onMove)

      // --- Animation ---
      const clock = new THREE.Clock()
      let raf: number

      const tick = () => {
        raf = requestAnimationFrame(tick)
        const t = clock.getElapsedTime()

        disc.rotation.y = t * 0.1
        ringGroup.rotation.z = t * 0.16
        group.rotation.y += (mouse.current.x * 0.35 - group.rotation.y) * 0.05
        group.rotation.x += (mouse.current.y * 0.18 - group.rotation.x) * 0.05
        group.position.y = Math.sin(t * 0.4) * 0.06

        renderer.render(scene, camera)
      }
      tick()

      cleanupFn = () => {
        cancelAnimationFrame(raf)
        window.removeEventListener('mousemove', onMove)
        texture.dispose()
        renderer.dispose()
        el.removeChild(renderer.domElement)
      }
    }

    init()

    return () => cleanupFn?.()
  }, [size, cover])

  return (
    <div
      ref={mountRef}
      className={className}
      style={{ width: size, height: size, ...style }}
    />
  )
}
