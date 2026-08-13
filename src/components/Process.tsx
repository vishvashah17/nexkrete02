import { useState, useEffect, useRef } from 'react'
import { processSteps } from '../data/process'

function useInView() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return { ref, inView }
}

export default function Process() {
  const [tab, setTab] = useState<'website' | 'marketing'>('website')
  const [activeStep, setActiveStep] = useState<number>(0)
  const { ref: headerRef, inView: headerInView } = useInView()
  const { ref: timelineRef, inView: timelineInView } = useInView()

  const toggle = (i: number) => {
    setActiveStep(activeStep === i ? -1 : i)
  }

  const currentStep = activeStep >= 0 ? processSteps[activeStep] : null
  const currentContent = currentStep
    ? (tab === 'website' ? currentStep.website : currentStep.marketing)
    : null

  return (
    <section
      id="process"
      style={{ backgroundColor: '#F5F2ED', padding: 'clamp(5rem, 10vw, 10rem) 0' }}
      aria-label="Our process"
    >
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
              — Section 04
            </span>
            <h2
              className="leading-[0.95]"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 5vw, 5rem)', letterSpacing: '-0.025em' }}
            >
              How We Turn Your<br />Idea Into Reality
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex items-end border-b" style={{ borderColor: 'rgba(19,19,19,0.12)' }}>
            {(['website', 'marketing'] as const).map((t) => (
              <button
                key={t}
                onClick={() => { setTab(t) }}
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
                  className="absolute bottom-0 left-0 right-0 h-0.5 transition-opacity duration-300"
                  style={{ backgroundColor: '#C9A84C', opacity: tab === t ? 1 : 0 }}
                  aria-hidden="true"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Timeline layout */}
        <div
          ref={timelineRef}
          className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-0 md:gap-20 transition-all duration-700"
          style={{ opacity: timelineInView ? 1 : 0, transform: timelineInView ? 'translateY(0)' : 'translateY(28px)' }}
        >
          {/* Left: step list */}
          <div className="relative">
            {/* Connector line */}
            <div
              className="absolute left-[15px] top-6 bottom-6 w-px"
              style={{ backgroundColor: 'rgba(19,19,19,0.08)' }}
              aria-hidden="true"
            />

            {processSteps.map((step, i) => (
              <div key={step.number}>
                {/* Active connector overlay */}
                {activeStep === i && (
                  <div
                    className="absolute w-px"
                    style={{
                      left: '15px',
                      top: `${(i / processSteps.length) * 100}%`,
                      height: `${(1 / processSteps.length) * 100}%`,
                      backgroundColor: '#C9A84C',
                      transition: 'all 0.3s ease',
                    }}
                    aria-hidden="true"
                  />
                )}

                <button
                  onClick={() => toggle(i)}
                  className="relative w-full text-left flex items-center gap-5 py-5 group"
                  aria-expanded={activeStep === i}
                  aria-controls={`step-content-${i}`}
                >
                  {/* Step dot */}
                  <div
                    className="relative z-10 w-[30px] h-[30px] rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{
                      backgroundColor: activeStep === i ? '#C9A84C' : 'transparent',
                      border: `1px solid ${activeStep === i ? '#C9A84C' : 'rgba(19,19,19,0.2)'}`,
                      color: activeStep === i ? '#131313' : '#7C7870',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.62rem',
                      letterSpacing: '0.06em',
                    }}
                  >
                    {step.number}
                  </div>

                  {/* Title */}
                  <span
                    className="flex-1 transition-colors duration-300"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1rem, 1.6vw, 1.3rem)',
                      color: activeStep === i ? '#131313' : '#7C7870',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {step.title}
                  </span>

                  {/* Arrow indicator */}
                  <span
                    className="text-[#7C7870] text-sm transition-transform duration-300 flex-shrink-0 mr-2"
                    style={{ transform: activeStep === i ? 'rotate(90deg)' : 'rotate(0deg)' }}
                    aria-hidden="true"
                  >
                    →
                  </span>
                </button>

                {/* Mobile inline accordion content */}
                <div
                  id={`step-content-${i}`}
                  className="md:hidden overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: activeStep === i ? '400px' : '0px',
                    opacity: activeStep === i ? 1 : 0,
                  }}
                  role="region"
                  aria-label={`Step ${step.number}: ${step.title}`}
                >
                  <div
                    className="pb-6 pt-1"
                    style={{ paddingLeft: '50px', paddingRight: '8px' }}
                  >
                    <p
                      className="text-[#7C7870] leading-relaxed"
                      style={{ fontFamily: 'var(--font-body)', fontSize: '1rem' }}
                    >
                      {tab === 'website' ? step.website : step.marketing}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: desktop content panel */}
          <div className="hidden md:block">
            <div
              className="sticky top-28 transition-all duration-400"
              style={{
                opacity: currentStep ? 1 : 0,
                transform: currentStep ? 'translateY(0)' : 'translateY(12px)',
              }}
            >
              {currentStep && (
                <>
                  <div
                    className="flex items-center gap-3 mb-7"
                    style={{ color: '#C9A84C', fontFamily: 'var(--font-body)', fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}
                  >
                    <span className="w-8 h-px bg-[#C9A84C]" />
                    Step {currentStep.number}
                  </div>
                  <h3
                    className="mb-7 leading-tight"
                    style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', letterSpacing: '-0.025em' }}
                  >
                    {currentStep.title}
                  </h3>
                  <p
                    className="text-[#7C7870] leading-relaxed"
                    style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1rem, 1.3vw, 1.1rem)', maxWidth: '38ch' }}
                  >
                    {currentContent}
                  </p>

                  {/* Step progress dots */}
                  <div className="flex items-center gap-2 mt-10" aria-hidden="true">
                    {processSteps.map((_, di) => (
                      <span
                        key={di}
                        className="rounded-full transition-all duration-300"
                        style={{
                          width: di === activeStep ? '20px' : '6px',
                          height: '6px',
                          backgroundColor: di === activeStep ? '#C9A84C' : 'rgba(19,19,19,0.15)',
                        }}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
