'use client'

import { useEffect, useRef } from 'react'

export default function HomeBackgroundEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    let animationFrame = 0
    let time = 0

    const drawGrid = () => {
      time += 0.005
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const gridSize = 50
      ctx.strokeStyle = 'rgba(14, 165, 233, 0.2)'
      ctx.lineWidth = 0.5

      for (let x = 0; x < canvas.width; x += gridSize) {
        const offset = Math.sin(time + x * 0.001) * 2
        ctx.beginPath()
        ctx.moveTo(x + offset, 0)
        ctx.lineTo(x + offset, canvas.height)
        ctx.stroke()
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        const offset = Math.cos(time + y * 0.001) * 2
        ctx.beginPath()
        ctx.moveTo(0, y + offset)
        ctx.lineTo(canvas.width, y + offset)
        ctx.stroke()
      }

      for (let x = 0; x < canvas.width; x += gridSize * 2) {
        for (let y = 0; y < canvas.height; y += gridSize * 2) {
          const pulse = Math.sin(time * 2 + x * 0.01 + y * 0.01) * 0.5 + 0.5
          const size = 3 + pulse * 3
          const glowSize = size + 4

          const gradient = ctx.createRadialGradient(x, y, 0, x, y, glowSize)
          gradient.addColorStop(0, `rgba(14, 165, 233, ${0.4 + pulse * 0.3})`)
          gradient.addColorStop(0.5, `rgba(14, 165, 233, ${0.2 + pulse * 0.2})`)
          gradient.addColorStop(1, 'rgba(14, 165, 233, 0)')
          ctx.fillStyle = gradient
          ctx.beginPath()
          ctx.arc(x, y, glowSize, 0, Math.PI * 2)
          ctx.fill()

          const pointGradient = ctx.createRadialGradient(x, y, 0, x, y, size)
          pointGradient.addColorStop(0, `rgba(59, 130, 246, ${0.9 + pulse * 0.1})`)
          pointGradient.addColorStop(0.7, `rgba(14, 165, 233, ${0.7 + pulse * 0.2})`)
          pointGradient.addColorStop(1, 'rgba(14, 165, 233, 0.5)')
          ctx.fillStyle = pointGradient
          ctx.beginPath()
          ctx.arc(x, y, size, 0, Math.PI * 2)
          ctx.fill()

          ctx.fillStyle = `rgba(147, 197, 253, ${0.9 + pulse * 0.1})`
          ctx.beginPath()
          ctx.arc(x, y, size * 0.4, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      for (let x = 0; x < canvas.width; x += gridSize * 2) {
        for (let y = 0; y < canvas.height; y += gridSize * 2) {
          if (x + gridSize * 2 < canvas.width) {
            const opacity = 0.1 + Math.sin(time + x * 0.01) * 0.05
            ctx.strokeStyle = `rgba(14, 165, 233, ${opacity})`
            ctx.beginPath()
            ctx.moveTo(x, y)
            ctx.lineTo(x + gridSize * 2, y)
            ctx.stroke()
          }
          if (y + gridSize * 2 < canvas.height) {
            const opacity = 0.1 + Math.cos(time + y * 0.01) * 0.05
            ctx.strokeStyle = `rgba(14, 165, 233, ${opacity})`
            ctx.beginPath()
            ctx.moveTo(x, y)
            ctx.lineTo(x, y + gridSize * 2)
            ctx.stroke()
          }
        }
      }

      animationFrame = requestAnimationFrame(drawGrid)
    }

    drawGrid()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 via-dark-900 to-purple-900/30 animate-gradient" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary-800/10 to-transparent" />

      <div className="absolute top-20 left-10 w-96 h-96 bg-primary-500/15 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-purple-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 opacity-10">
          <div className="absolute inset-0 border-2 border-primary-400/30 transform rotate-12 animate-pulse" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
        </div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 opacity-10">
          <div className="absolute inset-0 border-2 border-primary-300/30 transform -rotate-12 animate-pulse" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', animationDelay: '1s' }} />
        </div>
        <div className="absolute top-1/3 left-10 text-primary-500/5 text-9xl font-mono font-bold transform -rotate-12 animate-pulse" style={{ animationDelay: '0.5s' }}>
          {'{'}
        </div>
        <div className="absolute bottom-1/3 right-10 text-primary-500/5 text-9xl font-mono font-bold transform rotate-12 animate-pulse" style={{ animationDelay: '1.5s' }}>
          {'}'}
        </div>
      </div>

      <div className="absolute inset-0 bg-radial-gradient from-transparent via-dark-900/50 to-dark-900" />

      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <defs>
            <linearGradient id="experienceHomeLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(14, 165, 233, 0)" />
              <stop offset="50%" stopColor="rgba(14, 165, 233, 0.5)" />
              <stop offset="100%" stopColor="rgba(14, 165, 233, 0)" />
            </linearGradient>
          </defs>
          <line x1="0" y1="20%" x2="100%" y2="20%" stroke="url(#experienceHomeLineGradient)" strokeWidth="1" className="animate-pulse" />
          <line x1="0" y1="80%" x2="100%" y2="80%" stroke="url(#experienceHomeLineGradient)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '1s' }} />
        </svg>
      </div>

      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500/50 to-transparent animate-pulse" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500/50 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
  )
}
