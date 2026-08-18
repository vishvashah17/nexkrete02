import { useState, useEffect, useRef } from 'react'
import { websiteToolCategories, marketingToolCategories } from '../data/tools'

function useInView(delayMs = 0) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setTimeout(() => setInView(true), delayMs)
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delayMs])
  return { ref, inView }
}

function WebsiteCategoryBlock({ category, tools, delay }: { category: string; tools: string[]; delay: number }) {
  const { ref, inView } = useInView(delay)
  return (
    <div
      ref={ref}
      className="transition-all"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(28px)',
        transition: 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div
        className="flex items-center gap-3 mb-5"
        style={{ color: '#C9A84C', fontFamily: 'var(--font-body)', fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}
      >
        <span className="w-5 h-px bg-[#C9A84C]" />
        {category}
      </div>
      <ul>
        {tools.map((tool) => (
          <li
            key={tool}
            className="flex items-center justify-between py-3 border-b group cursor-default"
            style={{ borderColor: 'rgba(245,242,237,0.07)' }}
          >
            <span
              className="text-[#F5F2ED] group-hover:text-[#C9A84C] transition-colors duration-150"
              style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem' }}
            >
              {tool}
            </span>
            <span className="text-[#C9A84C] text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-150">
              →
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function MarketingCategoryBlock({ category, tools, delay }: { category: string; tools: string[]; delay: number }) {
  const { ref, inView } = useInView(delay)
  return (
    <div
      ref={ref}
      className="border-t py-10 transition-all"
      style={{
        borderColor: 'rgba(245,242,237,0.07)',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(28px)',
        transition: 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div className="flex flex-col md:flex-row md:items-baseline gap-6 md:gap-12">
        <div
          className="flex items-center gap-3 flex-shrink-0 md:w-44"
          style={{ color: '#C9A84C', fontFamily: 'var(--font-body)', fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}
        >
          <span className="w-5 h-px bg-[#C9A84C]" />
          {category}
        </div>
        <div className="flex flex-wrap gap-2.5">
          {tools.map((tool, ti) => (
            <span
              key={tool}
              className="border px-4 py-2 transition-all duration-200 cursor-default hover:border-[#C9A84C] hover:text-[#C9A84C]"
              style={{
                borderColor: 'rgba(245,242,237,0.12)',
                color: '#F5F2ED',
                fontFamily: 'var(--font-body)',
                fontSize: ti === 0 ? '1rem' : '0.92rem',
                letterSpacing: '0.03em',
              }}
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Tools() {
  const [tab, setTab] = useState<'website' | 'marketing'>('website')
  const { ref: headerRef, inView: headerInView } = useInView()

  return (
    <section
      style={{ backgroundColor: '#131313', padding: 'clamp(5rem, 10vw, 10rem) 0' }}
      aria-label="Tools we use"
    >
      <div className="max-w-[1440px] mx-auto" style={{ padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
        {/* Header */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20 transition-all"
          style={{
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? 'translateY(0)' : 'translateY(36px)',
            transition: 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <div>
            <span
              className="block mb-5"
              style={{ color: '#7C7870', fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase' }}
            >
              — Section 03
            </span>
            <h2
              className="leading-tight text-[#F5F2ED]"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 5.5vw, 5.5rem)', letterSpacing: '-0.025em' }}
            >
              Tools We Use
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex items-end border-b" style={{ borderColor: 'rgba(245,242,237,0.10)' }}>
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
                  color: tab === t ? '#F5F2ED' : '#7C7870',
                }}
                aria-pressed={tab === t}
              >
                {t === 'website' ? 'Website' : 'Marketing'}
                <span
                  className="absolute bottom-0 left-0 right-0 h-0.5 transition-opacity duration-300"
                  style={{ backgroundColor: '#C9A84C', opacity: tab === t ? 1 : 0 }}
                  aria-hidden="true"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Website tools */}
        {tab === 'website' && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
            {websiteToolCategories.map(({ category, tools }, gi) => (
              <WebsiteCategoryBlock key={category} category={category} tools={tools} delay={gi * 60} />
            ))}
          </div>
        )}

        {/* Marketing tools */}
        {tab === 'marketing' && (
          <div>
            {marketingToolCategories.map(({ category, tools }, gi) => (
              <MarketingCategoryBlock key={category} category={category} tools={tools} delay={gi * 80} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
