const NAV_LINKS = ['Work', 'Services', 'Process', 'Contact']
const SERVICE_LINKS = [
  'Website Development',
  'Website Revamp & Optimization',
  'Performance Marketing',
  'Meta Ads',
  'Google Ads',
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      id="services"
      className="border-t"
      style={{ borderColor: 'rgba(19,19,19,0.09)', backgroundColor: '#F5F2ED' }}
      aria-label="Footer"
    >
      <div
        className="max-w-[1440px] mx-auto"
        style={{ padding: 'clamp(3.5rem, 7vw, 7rem) clamp(1.5rem, 5vw, 4rem) clamp(2rem, 4vw, 4rem)' }}
      >
        {/* Main footer grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 mb-16">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="/"
              className="block mb-5 text-[#131313] tracking-tight"
              style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem' }}
              aria-label="NexKreate home"
            >
              NexKreate
            </a>
            <p
              className="text-[#7C7870] leading-relaxed"
              style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', maxWidth: '22ch' }}
            >
              Digital agency combining creative design, development, and performance marketing to help businesses grow.
            </p>

            {/* Accent mark */}
            <div className="flex items-center gap-2 mt-8">
              <span className="w-6 h-px bg-[#C9A84C]" />
              <span
                className="text-[#C9A84C]"
                style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}
              >
                Est. 2024
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div
              className="mb-6 text-[#C9A84C]"
              style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}
            >
              Navigation
            </div>
            <ul className="space-y-3.5">
              {NAV_LINKS.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-[#7C7870] hover:text-[#131313] transition-colors duration-200"
                    style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div
              className="mb-6 text-[#C9A84C]"
              style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}
            >
              Services
            </div>
            <ul className="space-y-3.5">
              {SERVICE_LINKS.map((item) => (
                <li key={item}>
                  <a
                    href="#contact"
                    className="text-[#7C7870] hover:text-[#131313] transition-colors duration-200"
                    style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Map / Location */}
          <div>
            <div
              className="mb-6 text-[#C9A84C]"
              style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}
            >
              Find Us
            </div>

            {/* Map placeholder — replace with Google Maps embed or Mapbox */}
            <div
              className="w-full rounded overflow-hidden flex flex-col items-center justify-center gap-3"
              style={{
                aspectRatio: '4/3',
                backgroundColor: 'rgba(19,19,19,0.04)',
                border: '1px solid rgba(19,19,19,0.08)',
              }}
              aria-label="Location map placeholder"
              role="img"
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <circle cx="14" cy="11" r="4" stroke="#C9A84C" strokeWidth="1.5" />
                <path
                  d="M14 2C8.48 2 4 6.48 4 12c0 8 10 16 10 16s10-8 10-16c0-5.52-4.48-10-10-10z"
                  stroke="#C9A84C"
                  strokeWidth="1.5"
                />
              </svg>
              <span
                className="text-center px-4"
                style={{ color: '#7C7870', fontFamily: 'var(--font-body)', fontSize: '0.72rem', letterSpacing: '0.08em' }}
              >
                Map integration placeholder
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-8 border-t"
          style={{ borderColor: 'rgba(19,19,19,0.08)' }}
        >
          <span
            className="text-[#7C7870]"
            style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem' }}
          >
            © {year} NexKreate. All rights reserved.
          </span>

          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" aria-hidden="true" />
            <span
              className="text-[#7C7870]"
              style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem' }}
            >
              Built with precision. Designed for growth.
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
