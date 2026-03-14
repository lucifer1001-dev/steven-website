'use client'

import { useEffect, useRef } from 'react'

type PageBackgroundVariant = 'about' | 'skills' | 'experience' | 'contact'

type Props = {
  variant: PageBackgroundVariant
}

export default function PageBackground({ variant }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let rafId = 0
    let time = 0
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpi = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      canvas.width = Math.floor(window.innerWidth * dpi)
      canvas.height = Math.floor(window.innerHeight * dpi)
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.setTransform(dpi, 0, 0, dpi, 0, 0)
    }

    const drawAbout = () => {
      // Organic, calm "about me" motion: drifting aurora blobs.
      const w = window.innerWidth
      const h = window.innerHeight

      ctx.clearRect(0, 0, w, h)
      ctx.fillStyle = 'rgba(2, 6, 23, 0.2)'
      ctx.fillRect(0, 0, w, h)

      const blobs = [
        { x: 0.18, y: 0.24, r: 0.34, sx: 0.25, sy: 0.2, c: 'rgba(59, 130, 246, 0.22)' },
        { x: 0.78, y: 0.66, r: 0.3, sx: 0.22, sy: 0.24, c: 'rgba(14, 165, 233, 0.2)' },
        { x: 0.48, y: 0.48, r: 0.26, sx: 0.18, sy: 0.16, c: 'rgba(56, 189, 248, 0.14)' },
      ]

      for (const b of blobs) {
        const cx = w * (b.x + Math.sin(time * b.sx) * 0.06)
        const cy = h * (b.y + Math.cos(time * b.sy) * 0.06)
        const rr = Math.min(w, h) * b.r
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, rr)
        g.addColorStop(0, b.c)
        g.addColorStop(1, 'rgba(15, 23, 42, 0)')
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(cx, cy, rr, 0, Math.PI * 2)
        ctx.fill()
      }

      // Subtle diagonal light sweep.
      const sweepX = ((time * 40) % (w + 300)) - 300
      const sweep = ctx.createLinearGradient(sweepX, 0, sweepX + 280, h)
      sweep.addColorStop(0, 'rgba(125, 211, 252, 0)')
      sweep.addColorStop(0.5, 'rgba(125, 211, 252, 0.06)')
      sweep.addColorStop(1, 'rgba(125, 211, 252, 0)')
      ctx.fillStyle = sweep
      ctx.fillRect(0, 0, w, h)
    }

    const drawSkills = () => {
      // Structured, technical motion: active grid + scanline + blinking nodes.
      const w = window.innerWidth
      const h = window.innerHeight
      const grid = 52

      ctx.clearRect(0, 0, w, h)
      ctx.fillStyle = 'rgba(2, 6, 23, 0.2)'
      ctx.fillRect(0, 0, w, h)

      ctx.strokeStyle = 'rgba(56, 189, 248, 0.12)'
      ctx.lineWidth = 0.7

      for (let x = 0; x < w + grid; x += grid) {
        const dx = Math.sin(time * 0.55 + x * 0.004) * 2
        ctx.beginPath()
        ctx.moveTo(x + dx, 0)
        ctx.lineTo(x + dx, h)
        ctx.stroke()
      }

      for (let y = 0; y < h + grid; y += grid) {
        const dy = Math.cos(time * 0.55 + y * 0.004) * 2
        ctx.beginPath()
        ctx.moveTo(0, y + dy)
        ctx.lineTo(w, y + dy)
        ctx.stroke()
      }

      for (let x = 0; x < w + grid; x += grid * 2) {
        for (let y = 0; y < h + grid; y += grid * 2) {
          const p = Math.sin(time * 2.2 + x * 0.02 + y * 0.02) * 0.5 + 0.5
          ctx.fillStyle = `rgba(186, 230, 253, ${0.08 + p * 0.22})`
          ctx.beginPath()
          ctx.arc(x, y, 1 + p * 1.2, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      const scanY = (time * 34) % (h + 120) - 60
      const scan = ctx.createLinearGradient(0, scanY - 28, 0, scanY + 28)
      scan.addColorStop(0, 'rgba(14, 165, 233, 0)')
      scan.addColorStop(0.5, 'rgba(14, 165, 233, 0.12)')
      scan.addColorStop(1, 'rgba(14, 165, 233, 0)')
      ctx.fillStyle = scan
      ctx.fillRect(0, scanY - 28, w, 56)
    }

    const drawExperience = () => {
      // Completely new concept: perspective "career track" with floating milestone cards.
      const w = window.innerWidth
      const h = window.innerHeight

      ctx.clearRect(0, 0, w, h)
      ctx.fillStyle = 'rgba(2, 6, 23, 0.2)'
      ctx.fillRect(0, 0, w, h)

      const vy = h * 0.14
      const laneTilt = -h * 0.34

      // Lines collect toward the top band but keep fixed spacing (never meet).
      ctx.strokeStyle = 'rgba(125, 211, 252, 0.08)'
      ctx.lineWidth = 0.9
      const guideCount = 12
      const bottomStep = w / guideCount
      const topStep = bottomStep * 0.46
      const topBandWidth = guideCount * topStep
      const topBandStart = w * 0.5 - topBandWidth * 0.5
      for (let i = 0; i <= guideCount; i++) {
        const bx = (w / guideCount) * i + Math.sin(time * 0.24 + i) * 4
        const tx = topBandStart + i * topStep + Math.sin(time * 0.18 + i * 0.4) * 2
        const cx = bx + (tx - bx) * 0.56 + Math.sin(time * 0.22 + i) * 12
        const cy = h * 0.54
        ctx.beginPath()
        ctx.moveTo(bx, h + 40)
        ctx.quadraticCurveTo(cx, cy, tx, -30)
        ctx.stroke()
      }

      // Depth "step" lines.
      for (let i = 1; i <= 8; i++) {
        const t = i / 8
        const y = h - Math.pow(t, 1.55) * (h - h * 0.16)
        const halfWidth = (w * 0.52) * (1 - t * 0.7)
        const skew = laneTilt * 0.14
        const shift = Math.sin(time * 0.2 + i) * 14
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.07)'
        ctx.beginPath()
        ctx.moveTo(w * 0.5 - halfWidth + shift + skew, y)
        ctx.lineTo(w * 0.5 + halfWidth + shift - skew, y)
        ctx.stroke()
      }

      const roundedRect = (x: number, y: number, width: number, height: number, radius: number) => {
        const r = Math.min(radius, width / 2, height / 2)
        ctx.beginPath()
        ctx.moveTo(x + r, y)
        ctx.lineTo(x + width - r, y)
        ctx.quadraticCurveTo(x + width, y, x + width, y + r)
        ctx.lineTo(x + width, y + height - r)
        ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height)
        ctx.lineTo(x + r, y + height)
        ctx.quadraticCurveTo(x, y + height, x, y + height - r)
        ctx.lineTo(x, y + r)
        ctx.quadraticCurveTo(x, y, x + r, y)
        ctx.closePath()
      }

      const drawCardIcon = (x: number, y: number, size: number, iconType: 'frontend' | 'backend' | 'infra' | 'data') => {
        const r = size / 2
        ctx.strokeStyle = 'rgba(186, 230, 253, 0.8)'
        ctx.lineWidth = 1

        if (iconType === 'frontend') {
          ctx.beginPath()
          ctx.arc(x, y, r * 0.58, 0, Math.PI * 2)
          ctx.stroke()
          ctx.beginPath()
          ctx.arc(x, y, r * 0.18, 0, Math.PI * 2)
          ctx.fillStyle = 'rgba(186, 230, 253, 0.75)'
          ctx.fill()
          return
        }

        if (iconType === 'backend') {
          roundedRect(x - r * 0.58, y - r * 0.58, r * 1.16, r * 1.16, 3)
          ctx.stroke()
          return
        }

        if (iconType === 'infra') {
          ctx.beginPath()
          ctx.moveTo(x, y - r * 0.72)
          ctx.lineTo(x + r * 0.68, y + r * 0.64)
          ctx.lineTo(x - r * 0.68, y + r * 0.64)
          ctx.closePath()
          ctx.stroke()
          return
        }

        // data
        ctx.beginPath()
        ctx.moveTo(x, y - r * 0.72)
        ctx.lineTo(x + r * 0.62, y - r * 0.2)
        ctx.lineTo(x + r * 0.38, y + r * 0.68)
        ctx.lineTo(x - r * 0.38, y + r * 0.68)
        ctx.lineTo(x - r * 0.62, y - r * 0.2)
        ctx.closePath()
        ctx.stroke()
      }

      // Floating milestone cards (major style change vs lines/runners).
      const skillTags: Array<{ label: string; icon: 'frontend' | 'backend' | 'infra' | 'data' }> = [
        { label: 'React', icon: 'frontend' },
        { label: 'TypeScript', icon: 'frontend' },
        { label: 'Next.js', icon: 'frontend' },
        { label: 'GraphQL', icon: 'data' },
        { label: 'React Query', icon: 'data' },
        { label: 'Node.js', icon: 'backend' },
        { label: 'Python', icon: 'backend' },
        { label: 'AWS', icon: 'infra' },
        { label: 'Docker', icon: 'infra' },
        { label: 'Datadog', icon: 'infra' },
        { label: 'Sentry', icon: 'infra' },
        { label: 'WCAG', icon: 'frontend' },
      ]
      const lanes = [-0.36, -0.18, 0.02, 0.22, 0.4]
      const seeded = (n: number) => {
        const x = Math.sin(n * 12.9898) * 43758.5453
        return x - Math.floor(x)
      }
      lanes.forEach((lane, laneIndex) => {
        for (let i = 0; i < 4; i++) {
          const seed = laneIndex * 10 + i + 1
          const startOffset = seeded(seed + 7)
          const speed = 0.05 + seeded(seed + 13) * 0.06
          const swaySpeed = 0.45 + seeded(seed + 23) * 0.6
          const swayAmount = 4 + seeded(seed + 29) * 8

          // Each card has unique start offset and speed to avoid synced motion.
          const phase = (time * speed + startOffset) % 1
          const depth = 1 - phase
          const y = vy + depth * (h - vy + 120) - 80
          const perspective = 0.3 + depth * 0.85
          const xSpread = w * 0.42 * perspective
          const x =
            w * 0.5 +
            lane * xSpread +
            (laneTilt * 0.08) * (1 - depth) +
            Math.sin(time * swaySpeed + i + laneIndex) * swayAmount

          const cardW = 78 + perspective * 66
          const cardH = 20 + perspective * 18
          const cardX = x - cardW / 2
          const cardY = y - cardH / 2

          const cardFill = ctx.createLinearGradient(cardX, cardY, cardX, cardY + cardH)
          cardFill.addColorStop(0, `rgba(30, 64, 175, ${0.1 + perspective * 0.14})`)
          cardFill.addColorStop(1, `rgba(14, 165, 233, ${0.08 + perspective * 0.1})`)
          ctx.fillStyle = cardFill
          roundedRect(cardX, cardY, cardW, cardH, 6)
          ctx.fill()

          ctx.strokeStyle = `rgba(125, 211, 252, ${0.14 + perspective * 0.2})`
          ctx.lineWidth = 0.8
          roundedRect(cardX, cardY, cardW, cardH, 6)
          ctx.stroke()

          const skill = skillTags[(laneIndex * 4 + i) % skillTags.length]
          const iconSize = Math.min(cardH * 0.62, 16)
          const iconX = cardX + 10 + iconSize / 2
          const iconY = cardY + cardH / 2

          const iconBg = ctx.createLinearGradient(iconX - iconSize / 2, iconY - iconSize / 2, iconX + iconSize / 2, iconY + iconSize / 2)
          iconBg.addColorStop(0, `rgba(30, 64, 175, ${0.22 + perspective * 0.2})`)
          iconBg.addColorStop(1, `rgba(14, 165, 233, ${0.16 + perspective * 0.16})`)
          ctx.fillStyle = iconBg
          roundedRect(iconX - iconSize / 2, iconY - iconSize / 2, iconSize, iconSize, 4)
          ctx.fill()

          drawCardIcon(iconX, iconY, iconSize, skill.icon)

          const fontSize = 9 + perspective * 5
          ctx.fillStyle = `rgba(191, 219, 254, ${0.42 + perspective * 0.3})`
          ctx.font = `${fontSize}px Inter, sans-serif`
          ctx.textBaseline = 'middle'
          ctx.fillText(skill.label, cardX + 18 + iconSize, cardY + cardH / 2)
        }
      })

      // Soft spotlight around vanishing point.
      const spotlight = ctx.createRadialGradient(w * 0.5, h * 0.16, 0, w * 0.5, h * 0.16, 260)
      spotlight.addColorStop(0, 'rgba(56, 189, 248, 0.12)')
      spotlight.addColorStop(1, 'rgba(56, 189, 248, 0)')
      ctx.fillStyle = spotlight
      ctx.fillRect(0, 0, w, h)
    }

    const drawContact = () => {
      // Communication signal motion: concentric waves + orbiting beacons.
      const w = window.innerWidth
      const h = window.innerHeight
      const ox = w * 0.8
      const oy = h * 0.78

      ctx.clearRect(0, 0, w, h)
      ctx.fillStyle = 'rgba(2, 6, 23, 0.2)'
      ctx.fillRect(0, 0, w, h)

      for (let i = 0; i < 4; i++) {
        const r = 120 + i * 88 + Math.sin(time * 0.9 + i) * 6
        ctx.strokeStyle = `rgba(94, 234, 212, ${0.14 - i * 0.025})`
        ctx.lineWidth = 0.9
        ctx.beginPath()
        ctx.arc(ox, oy, r, 0, Math.PI * 2)
        ctx.stroke()
      }

      for (let i = 0; i < 14; i++) {
        const a = (Math.PI * 2 * i) / 14 + time * 0.3
        const rr = 100 + (i % 3) * 48
        const x = ox + Math.cos(a) * rr
        const y = oy + Math.sin(a) * rr
        ctx.fillStyle = 'rgba(153, 246, 228, 0.24)'
        ctx.beginPath()
        ctx.arc(x, y, 1.6, 0, Math.PI * 2)
        ctx.fill()
      }

      const g = ctx.createRadialGradient(ox, oy, 0, ox, oy, 340)
      g.addColorStop(0, 'rgba(45, 212, 191, 0.1)')
      g.addColorStop(1, 'rgba(15, 23, 42, 0)')
      ctx.fillStyle = g
      ctx.fillRect(0, 0, w, h)
    }

    const drawByVariant = () => {
      if (variant === 'about') drawAbout()
      if (variant === 'skills') drawSkills()
      if (variant === 'experience') drawExperience()
      if (variant === 'contact') drawContact()
    }

    const tick = () => {
      time += 0.012
      drawByVariant()
      if (!prefersReducedMotion) {
        rafId = window.requestAnimationFrame(tick)
      }
    }

    resize()
    drawByVariant()

    if (!prefersReducedMotion) {
      rafId = window.requestAnimationFrame(tick)
    }

    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
      if (rafId) {
        window.cancelAnimationFrame(rafId)
      }
    }
  }, [variant])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  )
}
