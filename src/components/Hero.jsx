import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(SplitText)

export default function Hero() {
  const titleRef = useRef(null)
  const restRef  = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const split = new SplitText(titleRef.current, { type: 'chars', charsClass: 'char' })
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' }, delay: 0.05 })
      tl.from(split.chars, { yPercent: 100, duration: 0.7, stagger: { amount: 0.35 } })
        .from(restRef.current, { opacity: 0, y: 8, duration: 0.5 }, '-=0.2')
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="home" className="section">
      <div className="section-inner hero">
        <h1 ref={titleRef} className="hero__title" style={{ overflow: 'hidden' }}>
          Hi, I'm Emre 👋
        </h1>
        <div ref={restRef}>
          <p className="hero__sub">
            Backend &amp; AI software engineer and founder, shipping production
            systems since 2021. Currently building{' '}
            <a
              href="https://wiqoai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__link"
            >
              Wiqo
            </a>
            {' '}— an AI agent that turns natural-language requests into tasks on your computer.
          </p>
          <div className="hero__links">
            <a href="mailto:osmanemrekoca@gmail.com" className="hero__link">
              osmanemrekoca@gmail.com
            </a>
            <span style={{ color: '#d4d4d4' }}>·</span>
            <a
              href="https://wiqoai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__link"
            >
              wiqoai.com ↗
            </a>
            <span style={{ color: '#d4d4d4' }}>·</span>
            <a
              href="https://github.com/emrek0ca"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__link"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
