import { useState, useEffect, useRef } from 'react'
import { websiteProjects, marketingProjects } from '../data/projects'

function useInView() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return { ref, inView }
}

function LaptopFrame({ color }: { color: string }) {
  return (
    <div className="relative w-full select-none" style={{ paddingBottom: '63%' }} aria-hidden="true">
      {/* Screen body */}
      <div
        className="absolute top-0 rounded-t-xl overflow-hidden"
        style={{ left: '4%', right: '4%', height: '87%', backgroundColor: '#1C1C1C', padding: '3px 3px 0' }}
      >
        <div
          className="w-full h-full rounded-t-lg overflow-hidden"
          style={{ background: `linear-gradient(140deg, ${color} 0%, #080808 100%)` }}
        >
          {/* Browser bar */}
          <div
            className="flex items-center gap-1.5 px-3"
            style={{ height: '22px', backgroundColor: 'rgba(0,0,0,0.4)' }}
          >
            <div className="w-2 h-2 rounded-full bg-red-400 opacity-60" />
            <div className="w-2 h-2 rounded-full bg-yellow-400 opacity-60" />
            <div className="w-2 h-2 rounded-full bg-green-400 opacity-60" />
            <div className="flex-1 ml-3 h-2.5 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }} />
          </div>
          {/* Placeholder screen content */}
          <div className="p-5">
            <div className="h-4 rounded w-1/3 mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }} />
            <div className="h-2.5 rounded w-2/3 mb-2" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }} />
            <div className="h-2.5 rounded w-1/2 mb-6" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }} />
            <div className="rounded mb-3" style={{ height: '60px', backgroundColor: 'rgba(255,255,255,0.06)' }} />
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map((k) => (
                <div key={k} className="rounded" style={{ height: '40px', backgroundColor: 'rgba(255,255,255,0.05)' }} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Base */}
      <div
        className="absolute bottom-0 rounded-b"
        style={{ left: 0, right: 0, height: '6%', backgroundColor: '#2E2E2E' }}
      />
      <div
        className="absolute bottom-0"
        style={{ left: '28%', right: '28%', height: '2.5%', backgroundColor: '#3D3D3D' }}
      />
    </div>
  )
}

function PhoneFrame({ color }: { color: string }) {
  return (
    <div
      className="relative rounded-[28px] overflow-hidden select-none"
      style={{ width: '38%', aspectRatio: '9/18', border: '5px solid #2E2E2E', flexShrink: 0 }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(160deg, ${color} 0%, #080808 100%)` }}
      />
      {/* Notch */}
      <div
        className="absolute top-3 left-1/2 -translate-x-1/2 rounded-full"
        style={{ width: '40%', height: '14px', backgroundColor: '#0e0e0e' }}
      />
      <div className="absolute inset-0 pt-10 px-3 opacity-35">
        <div className="h-3 rounded w-2/3 mx-auto mb-3" style={{ backgroundColor: 'rgba(255,255,255,0.7)' }} />
        <div className="h-2 rounded w-1/2 mx-auto mb-6" style={{ backgroundColor: 'rgba(255,255,255,0.4)' }} />
        <div className="h-16 rounded mb-2" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }} />
        <div className="h-10 rounded mb-2" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />
        <div className="h-10 rounded" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />
      </div>
    </div>
  )
}

function WebsiteProjectCard({
  project,
  index,
}: {
  project: typeof websiteProjects[0]
  index: number
}) {
  const { ref, inView } = useInView()
  const isRight = project.align === 'right'
  const isFull = project.align === 'center'

  return (
    <div
      ref={ref}
      className="transition-all duration-700"
      style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(40px)' }}
    >
      {isFull ? (
        /* Full-width composition */
        <div>
          <div className="group cursor-pointer" onClick={() => window.open(project.url, '_blank')}>
            <div className="flex items-end gap-6 transition-transform duration-500 group-hover:scale-[1.01]">
              <div className="flex-1">
                <LaptopFrame color={project.screenColor} />
              </div>
              <PhoneFrame color={project.screenColor} />
            </div>
            <div className="mt-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-[#C9A84C]" style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                View Website
              </span>
              <span className="text-[#C9A84C] text-xs">↗</span>
            </div>
          </div>
          <div className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span
                className="block mb-3 text-[#C9A84C]"
                style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}
              >
                {String(index + 1).padStart(2, '0')} — {project.category}
              </span>
              <h3
                style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', letterSpacing: '-0.02em' }}
              >
                {project.name}
              </h3>
            </div>
            <div className="md:max-w-xs">
              <p
                className="text-[#7C7870] leading-relaxed mb-5"
                style={{ fontFamily: 'var(--font-body)', fontSize: '1rem' }}
              >
                {project.description}
              </p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-b border-[#131313] pb-0.5 transition-all duration-200 hover:gap-4 hover:border-[#C9A84C] hover:text-[#C9A84C]"
                style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.16em', textTransform: 'uppercase' }}
              >
                View Project ↗
              </a>
            </div>
          </div>
        </div>
      ) : (
        /* Alternating left/right layout */
        <div className={`flex flex-col ${isRight ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-16`}>
          {/* Mockup */}
          <div className="w-full md:w-[58%] group cursor-pointer flex-shrink-0" onClick={() => window.open(project.url, '_blank')}>
            <div className="transition-transform duration-500 group-hover:scale-[1.02]">
              <LaptopFrame color={project.screenColor} />
            </div>
            <div className="mt-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-[#C9A84C]" style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                View Website
              </span>
              <span className="text-[#C9A84C] text-xs">↗</span>
            </div>
          </div>

          {/* Info */}
          <div className="w-full md:flex-1">
            <span
              className="block mb-4 text-[#C9A84C]"
              style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}
            >
              {String(index + 1).padStart(2, '0')} — {project.category}
            </span>
            <h3
              className="mb-5"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', letterSpacing: '-0.02em' }}
            >
              {project.name}
            </h3>
            <p
              className="text-[#7C7870] leading-relaxed mb-8"
              style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem' }}
            >
              {project.description}
            </p>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-b border-[#131313] pb-0.5 transition-all duration-200 hover:gap-4 hover:border-[#C9A84C] hover:text-[#C9A84C]"
              style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.16em', textTransform: 'uppercase' }}
            >
              View Project ↗
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

function MarketingProjectCard({ project, index }: { project: typeof marketingProjects[0]; index: number }) {
  const { ref, inView } = useInView()

  const chartBars = [38, 55, 42, 72, 48, 88, 64, 80, 55, 92, 70, 85]

  return (
    <div
      ref={ref}
      className="border transition-all duration-700"
      style={{
        borderColor: 'rgba(19,19,19,0.08)',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(32px)',
        transitionDelay: `${index * 80}ms`,
      }}
    >
      <div className="grid md:grid-cols-[55%_1fr]">
        {/* Dashboard placeholder */}
        <div
          className="p-6 md:p-8 flex flex-col"
          style={{ background: `linear-gradient(135deg, ${project.screenColor} 0%, #060606 100%)`, minHeight: '260px' }}
        >
          <div
            className="text-[#C9A84C] mb-6"
            style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}
          >
            {project.platform} — {project.objective}
          </div>

          {/* Fake metric display */}
          <div className="flex-1 flex items-center gap-8">
            <div>
              <div
                className="text-white/20 mb-1"
                style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', letterSpacing: '0.16em', textTransform: 'uppercase' }}
              >
                Key Metric
              </div>
              <div
                className="text-white/50"
                style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', letterSpacing: '-0.02em' }}
              >
                {project.metric}
              </div>
              <div
                className="text-white/25 mt-1"
                style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', letterSpacing: '0.1em' }}
              >
                [Dashboard Screenshot Placeholder]
              </div>
            </div>
          </div>

          {/* Fake sparkline */}
          <div className="flex items-end gap-0.5 h-10 mt-6" aria-hidden="true">
            {chartBars.map((h, j) => (
              <div
                key={j}
                className="flex-1 rounded-sm"
                style={{ height: `${h}%`, backgroundColor: `rgba(201,168,76,${0.15 + (j / chartBars.length) * 0.3})` }}
              />
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="p-6 md:p-8 flex flex-col justify-center">
          <span
            className="text-[#C9A84C] block mb-4"
            style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}
          >
            {String(index + 1).padStart(2, '0')} — {project.platform}
          </span>
          <h3
            className="mb-4"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', letterSpacing: '-0.02em' }}
          >
            {project.name}
          </h3>
          <p className="text-[#7C7870] mb-6" style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem' }}>
            Objective: {project.objective}
          </p>
          <div
            className="inline-block border px-4 py-3"
            style={{ borderColor: 'rgba(19,19,19,0.1)' }}
          >
            <div
              className="text-[#7C7870] mb-1"
              style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', letterSpacing: '0.16em', textTransform: 'uppercase' }}
            >
              Key Result
            </div>
            <div
              className="text-[#131313]"
              style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem' }}
            >
              {project.keyResult}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Work() {
  const [tab, setTab] = useState<'website' | 'marketing'>('website')
  const { ref: headerRef, inView: headerInView } = useInView()

  return (
    <section id="work" style={{ backgroundColor: '#F5F2ED', padding: 'clamp(5rem, 10vw, 10rem) 0' }}>
      <div className="max-w-[1440px] mx-auto" style={{ padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
        {/* Header */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24 transition-all duration-700"
          style={{ opacity: headerInView ? 1 : 0, transform: headerInView ? 'translateY(0)' : 'translateY(24px)' }}
        >
          <div>
            <span
              className="block mb-5 text-[#7C7870]"
              style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase' }}
            >
              — Section 02
            </span>
            <h2
              className="leading-tight"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 5.5vw, 5.5rem)', letterSpacing: '-0.025em' }}
            >
              Our Work
            </h2>
          </div>

          {/* Editorial tabs */}
          <div className="flex items-end border-b" style={{ borderColor: 'rgba(19,19,19,0.12)' }}>
            {(['website', 'marketing'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="relative pb-4 px-7 transition-colors duration-200"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: tab === t ? '#131313' : '#7C7870',
                }}
                aria-pressed={tab === t}
              >
                {t === 'website' ? 'Website' : 'Marketing'}
                <span
                  className="absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-300"
                  style={{ backgroundColor: '#C9A84C', opacity: tab === t ? 1 : 0 }}
                  aria-hidden="true"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Website projects */}
        {tab === 'website' && (
          <div className="space-y-28 md:space-y-36">
            {websiteProjects.map((project, i) => (
              <WebsiteProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        )}

        {/* Marketing projects */}
        {tab === 'marketing' && (
          <div className="space-y-6">
            {marketingProjects.map((project, i) => (
              <MarketingProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
