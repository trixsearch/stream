import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const glowRef = useRef(null)
  const dotRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const glow = { ...target }
    const dot = { ...target }
    let raf

    const onMove = (e) => {
      target.x = e.clientX
      target.y = e.clientY
    }

    const lerp = (a, b, t) => a + (b - a) * t

    const loop = () => {
      glow.x = lerp(glow.x, target.x, 0.075)
      glow.y = lerp(glow.y, target.y, 0.075)
      dot.x = lerp(dot.x, target.x, 0.28)
      dot.y = lerp(dot.y, target.y, 0.28)

      if (glowRef.current) {
        glowRef.current.style.transform =
          `translate3d(${glow.x}px, ${glow.y}px, 0) translate(-50%, -50%)`
      }
      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate3d(${dot.x}px, ${dot.y}px, 0) translate(-50%, -50%)`
      }
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={glowRef} className="cursor-glow" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  )
}