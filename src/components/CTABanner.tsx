import { useEffect, useRef, useState } from 'react'

function useInView() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return { ref, inView }
}

export default function CTABanner() {
  const { ref, inView } = useInView()

  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: '#131313', padding: 'clamp(5rem, 12vw, 12rem) 0' }}
      aria-label="Call to action"
    >
      {/* Oversized background letterforms */}
      <div
        className="absolute -right-10 top-1/2 -translate-y-1/2 select-none pointer-events-none leading-none"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(14rem, 30vw, 26rem)',
          letterSpacing: '-0.06em',
          color: 'rgba(245,242,237,0.03)',
        }}
        aria-hidden="true"
      >
        NK
      </div>

      {/* Horizontal accent line top */}
      <div
        className="absolute top-0 left-0 h-px"
        style={{ backgroundColor: 'rgba(201,168,76,0.3)', width: '30%' }}
        aria-hidden="true"
      />

      <div
        ref={ref}
        className="max-w-[1440px] mx-auto relative z-10 transition-all duration-800"
        style={{
          padding: '0 clamp(1.5rem, 5vw, 4rem)',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(32px)',
        }}
      >
        <div className="max-w-[900px]">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-10">
            <span className="w-10 h-px bg-[#C9A84C]" />
            <span
              className="text-[#C9A84C]"
              style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase' }}
            >
              Ready to Start?
            </span>
          </div>

          {/* Headline */}
          <h2
            className="text-[#F5F2ED] leading-[0.92] mb-10"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.6rem, 7.5vw, 7rem)', letterSpacing: '-0.025em' }}
          >
            Ready to build
            something that moves
            your business forward?
          </h2>

          <p
            className="text-[#7C7870] mb-12 max-w-md"
            style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1rem, 1.5vw, 1.1rem)', lineHeight: 1.7 }}
          >
            Let's turn your idea into a high-performing digital experience.
          </p>

          <a
            href="#contact"
            className="group inline-flex items-center gap-4 text-[#131313] bg-[#C9A84C] transition-all duration-300 hover:bg-[#F5F2ED] hover:gap-6"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              padding: '1.1rem 2.4rem',
            }}
          >
            Start Your Project
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
