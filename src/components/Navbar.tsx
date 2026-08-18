import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      setMenuOpen(false)
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? 'rgba(245,242,237,0.92)' : 'rgba(245,242,237,0.72)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: scrolled ? '1px solid rgba(19,19,19,0.09)' : '1px solid rgba(19,19,19,0.05)',
        }}
        aria-label="Main navigation"
      >
        <div
          className="max-w-[1440px] mx-auto flex items-center justify-between"
          style={{ padding: '0 clamp(1.5rem, 5vw, 4rem)', height: 'clamp(3.5rem, 5vw, 5rem)' }}
        >
          {/* Logo */}
          <a
            href="/"
            className="relative z-10 text-[#131313] tracking-tight select-none"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)' }}
            aria-label="NexKreate — home"
          >
            NexKreate
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10" role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                role="listitem"
                className="text-[#131313] transition-colors duration-200 hover:text-[#C9A84C]"
                style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', letterSpacing: '0.16em', textTransform: 'uppercase' }}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Desktop CTA + hamburger */}
          <div className="flex items-center gap-5">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden md:inline-flex items-center gap-2 text-[#131313] border border-[#131313] transition-all duration-250 hover:bg-[#131313] hover:text-[#F5F2ED] group"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.72rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                padding: '0.65rem 1.6rem',
              }}
            >
              Start a Project
              <span className="inline-block transition-transform duration-250 group-hover:translate-x-1">→</span>
            </a>

            <button
              className="md:hidden flex flex-col justify-center gap-[5px] p-2 -mr-2"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
            >
              <span className="block h-px w-6 bg-[#131313] transition-all" />
              <span className="block h-px w-6 bg-[#131313] transition-all" />
              <span className="block h-px w-4 bg-[#131313] transition-all self-end" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className="fixed inset-0 z-[200] flex flex-col"
        style={{
          backgroundColor: '#131313',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transform: menuOpen ? 'translateY(0)' : 'translateY(-24px)',
          transition: 'opacity 0.4s ease, transform 0.4s ease',
        }}
      >
        <div className="flex justify-between items-center px-8 py-6">
          <span
            className="text-[#F5F2ED] tracking-tight"
            style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem' }}
          >
            NexKreate
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-[#7C7870] hover:text-[#F5F2ED] transition-colors text-xl p-2 -mr-2"
            aria-label="Close navigation menu"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col flex-1 justify-center px-8 gap-1" aria-label="Mobile navigation">
          {NAV_LINKS.map(({ label, href }, i) => (
            <a
              key={label}
              href={href}
              onClick={(e) => handleNavClick(e, href)}
              className="text-[#F5F2ED] border-b border-white/8 py-7 flex items-center justify-between group hover:text-[#C9A84C] transition-colors duration-200"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.2rem, 8vw, 3.5rem)',
                letterSpacing: '-0.01em',
                transitionDelay: menuOpen ? `${i * 50 + 80}ms` : '0ms',
                transform: menuOpen ? 'translateX(0)' : 'translateX(-20px)',
                opacity: menuOpen ? 1 : 0,
                transition: `color 0.2s ease, transform 0.35s ease ${i * 50 + 80}ms, opacity 0.35s ease ${i * 50 + 80}ms`,
              }}
            >
              {label}
              <span className="text-[#C9A84C] text-lg opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-8 inline-flex items-center gap-3 text-[#C9A84C]"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              opacity: menuOpen ? 1 : 0,
              transition: `opacity 0.35s ease ${NAV_LINKS.length * 50 + 100}ms`,
            }}
          >
            Start a Project →
          </a>
        </nav>
      </div>
    </>
  )
}
