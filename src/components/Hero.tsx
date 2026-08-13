import { useState, useEffect, useRef } from 'react'

const WORDS = ['Websites', 'Campaigns']

function useCountUp(target: number, duration = 1800) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true)
      },
      { threshold: 0.6 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    let startTs: number
    const step = (ts: number) => {
      if (!startTs) startTs = ts
      const progress = Math.min((ts - startTs) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [started, target, duration])

  return { count, ref }
}

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0)
  const [wordVisible, setWordVisible] = useState(true)
  const [loaded, setLoaded] = useState(false)

  const stat1 = useCountUp(25)
  const stat2 = useCountUp(20)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const id = setInterval(() => {
      setWordVisible(false)
      setTimeout(() => {
        setWordIdx((i) => (i + 1) % WORDS.length)
        setWordVisible(true)
      }, 340)
    }, 3000)
    return () => clearInterval(id)
  }, [])

  const reveal = (delay: number) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'translateY(0)' : 'translateY(28px)',
    transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
  })

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: '#F5F2ED' }}
      aria-label="Hero"
    >
      {/* Subtle decorative elements */}
      <div
        className="absolute top-[18%] right-[8%] hidden lg:block pointer-events-none select-none"
        style={{ ...reveal(800), opacity: loaded ? 0.12 : 0 }}
        aria-hidden="true"
      >
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
          <circle cx="36" cy="36" r="35" stroke="#131313" strokeWidth="0.8" />
          <circle cx="36" cy="36" r="24" stroke="#131313" strokeWidth="0.5" />
          <circle cx="36" cy="36" r="12" stroke="#131313" strokeWidth="0.5" />
          <line x1="36" y1="1" x2="36" y2="71" stroke="#131313" strokeWidth="0.5" />
          <line x1="1" y1="36" x2="71" y2="36" stroke="#131313" strokeWidth="0.5" />
        </svg>
      </div>

      <div
        className="absolute bottom-[28%] right-[20%] hidden xl:block pointer-events-none select-none"
        style={{ ...reveal(1000), opacity: loaded ? 0.10 : 0 }}
        aria-hidden="true"
      >
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path d="M18 2L21.3 13.7L33 10.3L24.7 18L33 25.7L21.3 22.3L18 34L14.7 22.3L3 25.7L11.3 18L3 10.3L14.7 13.7L18 2Z" stroke="#131313" strokeWidth="1" />
        </svg>
      </div>

      <div
        className="absolute top-[55%] left-[6%] hidden xl:block pointer-events-none select-none"
        style={{ ...reveal(1200), opacity: loaded ? 0.07 : 0 }}
        aria-hidden="true"
      >
        <svg width="120" height="1" viewBox="0 0 120 1">
          <line x1="0" y1="0.5" x2="120" y2="0.5" stroke="#131313" strokeWidth="1" />
        </svg>
      </div>

      {/* Main content */}
      <div
        className="max-w-[1440px] mx-auto w-full flex-1 flex flex-col justify-center"
        style={{ padding: 'clamp(6rem, 10vw, 9rem) clamp(1.5rem, 5vw, 4rem) clamp(2rem, 4vw, 4rem)' }}
      >
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-10 md:mb-14" style={reveal(0)}>
          <span className="w-8 h-px bg-[#131313] inline-block" />
          <span
            className="text-[#7C7870]"
            style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase' }}
          >
            Digital Agency — Website & Marketing
          </span>
        </div>

        {/* Headline */}
        <h1
          className="leading-[0.90] mb-10 md:mb-14"
          style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3.2rem, 10.5vw, 10rem)', letterSpacing: '-0.025em' }}
        >
          <span className="block" style={reveal(80)}>
            We Craft
          </span>

          {/* Animated word line */}
          <span className="flex flex-wrap items-baseline gap-x-3 md:gap-x-5" style={reveal(180)}>
            <span className="relative inline-block italic" style={{ color: '#C9A84C' }}>
              {/* Highlight pill behind the word */}
              <span
                className="absolute inset-0 -inset-x-3 rounded-sm"
                style={{
                  backgroundColor: 'rgba(201,168,76,0.08)',
                  transform: wordVisible ? 'scaleX(1)' : 'scaleX(0.6)',
                  transformOrigin: 'left',
                  transition: 'transform 0.3s ease',
                }}
                aria-hidden="true"
              />
              <span
                className="relative z-10 inline-block"
                style={{
                  opacity: wordVisible ? 1 : 0,
                  transform: wordVisible ? 'translateY(0)' : 'translateY(-14px)',
                  transition: 'opacity 0.3s ease, transform 0.3s ease',
                  paddingLeft: '0.15em',
                  paddingRight: '0.15em',
                }}
              >
                &ldquo;{WORDS[wordIdx]}&rdquo;
              </span>
              {/* Underline */}
              <span
                className="absolute -bottom-1 left-0 h-[2px] rounded-full"
                style={{
                  backgroundColor: '#C9A84C',
                  width: wordVisible ? '100%' : '0%',
                  transition: 'width 0.4s ease 0.1s',
                }}
                aria-hidden="true"
              />
            </span>
          </span>

          <span className="block" style={reveal(280)}>
            that build
          </span>
          <span className="block" style={reveal(360)}>
            your brand.
          </span>
        </h1>

        {/* Supporting text + CTA */}
        <div
          className="flex flex-col md:flex-row md:items-end gap-8 md:gap-20"
          style={reveal(460)}
        >
          <p
            className="max-w-[420px] leading-relaxed text-[#7C7870]"
            style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1rem, 1.5vw, 1.15rem)' }}
          >
            From stunning websites to high-converting marketing campaigns, NexKreate delivers digital
            solutions that help businesses build credibility, increase visibility, and achieve sustainable growth.
          </p>

          <a
            href="#work"
            className="group inline-flex items-center gap-3 border border-[#131313] text-[#131313] transition-all duration-300 hover:bg-[#131313] hover:text-[#F5F2ED] whitespace-nowrap self-start flex-shrink-0"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              padding: '1rem 2rem',
            }}
          >
            See Our Work
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">→</span>
          </a>
        </div>
      </div>

      {/* Stats strip */}
      <div
        className="border-t w-full"
        style={{
          borderColor: 'rgba(19,19,19,0.09)',
          ...reveal(600),
          opacity: loaded ? 1 : 0,
        }}
      >
        <div
          className="max-w-[1440px] mx-auto grid grid-cols-3"
          style={{ padding: '0 clamp(1.5rem, 5vw, 4rem)' }}
        >
          {/* Projects delivered */}
          <div
            ref={stat1.ref}
            className="py-8 md:py-10 border-r"
            style={{ borderColor: 'rgba(19,19,19,0.09)' }}
          >
            <div
              className="leading-none mb-2"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.03em' }}
            >
              {stat1.count}+
            </div>
            <div
              className="text-[#7C7870]"
              style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}
            >
              Projects Delivered
            </div>
          </div>

          {/* Happy clients */}
          <div
            ref={stat2.ref}
            className="py-8 md:py-10 border-r px-6 md:px-10"
            style={{ borderColor: 'rgba(19,19,19,0.09)' }}
          >
            <div
              className="leading-none mb-2"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.03em' }}
            >
              {stat2.count}+
            </div>
            <div
              className="text-[#7C7870]"
              style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}
            >
              Happy Clients
            </div>
          </div>

          {/* 24/7 — static badge */}
          <div className="py-8 md:py-10 pl-6 md:pl-10">
            <div
              className="leading-none mb-2"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.03em' }}
            >
              24/7
            </div>
            <div
              className="text-[#7C7870]"
              style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}
            >
              Support
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
