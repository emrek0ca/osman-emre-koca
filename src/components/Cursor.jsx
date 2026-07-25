import { useEffect, useRef } from 'react'

/**
 * Cursor component — minimal dot + ring follower
 * Uses JS for pointer tracking, CSS for transitions
 */
export default function Cursor() {
  const cursorRef = useRef(null)
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    // Only on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      cursor.style.display = 'none'
      document.documentElement.style.cursor = 'auto'
      return
    }

    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0
    let rafId

    const onMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dotRef.current.style.transform = `translate(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%))`
    }

    const lerp = (a, b, n) => a + (b - a) * n

    const animateRing = () => {
      ringX = lerp(ringX, mouseX, 0.12)
      ringY = lerp(ringY, mouseY, 0.12)
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(calc(${ringX}px - 50%), calc(${ringY}px - 50%))`
      }
      rafId = requestAnimationFrame(animateRing)
    }

    animateRing()
    window.addEventListener('mousemove', onMouseMove)

    // Hover state on interactive elements
    const interactives = document.querySelectorAll('a, button, [data-cursor-hover]')
    const onEnter = () => cursor.classList.add('cursor--hover')
    const onLeave = () => cursor.classList.remove('cursor--hover')

    const attachListeners = () => {
      document.querySelectorAll('a, button, [data-cursor-hover]').forEach((el) => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }
    attachListeners()

    // Click state
    const onMouseDown = () => cursor.classList.add('cursor--click')
    const onMouseUp = () => cursor.classList.remove('cursor--click')
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div ref={cursorRef} className="cursor" aria-hidden="true">
      <div ref={dotRef} className="cursor__dot" />
      <div ref={ringRef} className="cursor__ring" />
    </div>
  )
}
