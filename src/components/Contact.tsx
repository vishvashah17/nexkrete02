import { useState, useEffect, useRef } from 'react'

type FormData = {
  firstName: string
  lastName: string
  company: string
  email: string
  phone: string
  primaryService: string
  subService: string
  message: string
}

type Errors = Partial<Record<keyof FormData, string>>

const SUB_SERVICES: Record<string, string[]> = {
  'Website Development': ['New Website Development', 'Website Revamp & Optimization'],
  'Performance Marketing': ['Meta Ads (Push Marketing)', 'Google Ads (PPC Ads)'],
}

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

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    firstName: '', lastName: '', company: '',
    email: '', phone: '', primaryService: '', subService: '', message: '',
  })
  const [errors, setErrors] = useState<Errors>({})
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const { ref, inView } = useInView()

  const update = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const val = e.target.value
    setForm((prev) => ({
      ...prev,
      [field]: val,
      ...(field === 'primaryService' ? { subService: '' } : {}),
    }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const validate = (): Errors => {
    const e: Errors = {}
    if (!form.firstName.trim()) e.firstName = 'First name is required'
    if (!form.lastName.trim()) e.lastName = 'Last name is required'
    if (!form.company.trim()) e.company = 'Company name is required'
    if (!form.email.trim()) {
      e.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Please enter a valid email'
    }
    if (!form.phone.trim()) {
      e.phone = 'Phone number is required'
    } else if (!/^[\+\d][\d\s\-\(\)\.]{6,}$/.test(form.phone)) {
      e.phone = 'Please enter a valid phone number'
    }
    if (!form.primaryService) e.primaryService = 'Please select a service'
    if (form.primaryService && !form.subService) e.subService = 'Please select an option'
    return e
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setSubmitting(true)
    // Simulated submission — replace with real endpoint
    await new Promise((r) => setTimeout(r, 1600))
    setSubmitting(false)
    setSuccess(true)
  }

  const fieldStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: '1rem',
    width: '100%',
    backgroundColor: 'transparent',
    borderBottom: '1px solid rgba(19,19,19,0.18)',
    paddingTop: '0.65rem',
    paddingBottom: '0.65rem',
    color: '#131313',
    outline: 'none',
  } as const

  const labelStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: '0.68rem',
    letterSpacing: '0.18em',
    textTransform: 'uppercase' as const,
    color: '#7C7870',
    display: 'block',
    marginBottom: '0.4rem',
  }

  const errorStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: '0.72rem',
    color: '#C0392B',
    marginTop: '0.3rem',
    display: 'block',
  }

  return (
    <section
      id="contact"
      style={{ backgroundColor: '#F5F2ED', padding: 'clamp(5rem, 10vw, 10rem) 0' }}
      aria-label="Contact"
    >
      <div
        ref={ref}
        className="max-w-[1440px] mx-auto transition-all duration-700"
        style={{
          padding: '0 clamp(1.5rem, 5vw, 4rem)',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(28px)',
        }}
      >
        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          {/* Left: intro */}
          <div>
            <span
              className="block mb-5 text-[#7C7870]"
              style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase' }}
            >
              — Section 05
            </span>
            <h2
              className="leading-tight mb-8"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 5vw, 5rem)', letterSpacing: '-0.025em' }}
            >
              Let's Start Your Project
            </h2>
            <p
              className="text-[#7C7870] mb-12 max-w-sm"
              style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: 1.7 }}
            >
              Tell us what you're building. Our team will review your request and get back to you within 24 hours.
            </p>

            <div className="space-y-7">
              {[
                {
                  label: 'Website Development',
                  desc: 'Custom-built websites engineered for performance and conversion.',
                },
                {
                  label: 'Performance Marketing',
                  desc: 'Meta & Google Ads campaigns that deliver measurable, scalable results.',
                },
              ].map((s) => (
                <div key={s.label} className="flex items-start gap-4">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] flex-shrink-0"
                    style={{ marginTop: '0.35rem' }}
                  />
                  <div>
                    <div
                      className="mb-1"
                      style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem' }}
                    >
                      {s.label}
                    </div>
                    <div
                      className="text-[#7C7870]"
                      style={{ fontFamily: 'var(--font-body)', fontSize: '0.92rem', lineHeight: 1.6 }}
                    >
                      {s.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div>
            {success ? (
              <div className="flex flex-col items-start justify-center min-h-[480px]">
                <div
                  className="w-14 h-14 rounded-full border-2 border-[#C9A84C] flex items-center justify-center mb-8"
                  aria-hidden="true"
                >
                  <span className="text-[#C9A84C] text-xl">✓</span>
                </div>
                <h3
                  className="mb-3"
                  style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}
                >
                  Thanks!
                </h3>
                <p
                  className="text-[#7C7870]"
                  style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: 1.7 }}
                >
                  Our team will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-7">
                {/* Name row */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" style={labelStyle}>First Name</label>
                    <input
                      id="firstName"
                      type="text"
                      value={form.firstName}
                      onChange={update('firstName')}
                      placeholder="Alex"
                      autoComplete="given-name"
                      style={fieldStyle}
                      aria-describedby={errors.firstName ? 'err-firstName' : undefined}
                      aria-invalid={!!errors.firstName}
                    />
                    {errors.firstName && <span id="err-firstName" style={errorStyle} role="alert">{errors.firstName}</span>}
                  </div>
                  <div>
                    <label htmlFor="lastName" style={labelStyle}>Last Name</label>
                    <input
                      id="lastName"
                      type="text"
                      value={form.lastName}
                      onChange={update('lastName')}
                      placeholder="Morgan"
                      autoComplete="family-name"
                      style={fieldStyle}
                      aria-describedby={errors.lastName ? 'err-lastName' : undefined}
                      aria-invalid={!!errors.lastName}
                    />
                    {errors.lastName && <span id="err-lastName" style={errorStyle} role="alert">{errors.lastName}</span>}
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" style={labelStyle}>Company / Business Name</label>
                  <input
                    id="company"
                    type="text"
                    value={form.company}
                    onChange={update('company')}
                    placeholder="Your Company"
                    autoComplete="organization"
                    style={fieldStyle}
                    aria-invalid={!!errors.company}
                  />
                  {errors.company && <span style={errorStyle} role="alert">{errors.company}</span>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" style={labelStyle}>Email Address</label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={update('email')}
                    placeholder="you@company.com"
                    autoComplete="email"
                    style={fieldStyle}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <span style={errorStyle} role="alert">{errors.email}</span>}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" style={labelStyle}>Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={update('phone')}
                    placeholder="+1 (555) 000 0000"
                    autoComplete="tel"
                    style={fieldStyle}
                    aria-invalid={!!errors.phone}
                  />
                  {errors.phone && <span style={errorStyle} role="alert">{errors.phone}</span>}
                </div>

                {/* Primary service */}
                <div>
                  <label htmlFor="primaryService" style={labelStyle}>Primary Service</label>
                  <select
                    id="primaryService"
                    value={form.primaryService}
                    onChange={update('primaryService')}
                    style={{ ...fieldStyle, cursor: 'pointer' }}
                    aria-invalid={!!errors.primaryService}
                  >
                    <option value="">Select a service</option>
                    <option>Website Development</option>
                    <option>Performance Marketing</option>
                  </select>
                  {errors.primaryService && <span style={errorStyle} role="alert">{errors.primaryService}</span>}
                </div>

                {/* Conditional sub-service */}
                <div
                  className="overflow-hidden transition-all duration-350"
                  style={{
                    maxHeight: form.primaryService ? '120px' : '0px',
                    opacity: form.primaryService ? 1 : 0,
                  }}
                >
                  <label htmlFor="subService" style={labelStyle}>
                    {form.primaryService === 'Website Development' ? 'Project Type' : 'Campaign Type'}
                  </label>
                  <select
                    id="subService"
                    value={form.subService}
                    onChange={update('subService')}
                    style={{ ...fieldStyle, cursor: 'pointer' }}
                    aria-invalid={!!errors.subService}
                    disabled={!form.primaryService}
                  >
                    <option value="">Select an option</option>
                    {(SUB_SERVICES[form.primaryService] || []).map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                  {errors.subService && <span style={errorStyle} role="alert">{errors.subService}</span>}
                </div>

                {/* Optional message */}
                <div>
                  <label htmlFor="message" style={labelStyle}>
                    Project Requirements / Message{' '}
                    <span style={{ textTransform: 'none', letterSpacing: '0', color: '#aaa8a4' }}>(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    value={form.message}
                    onChange={update('message')}
                    placeholder="Tell us a little about what you're looking to build..."
                    rows={4}
                    style={{ ...fieldStyle, resize: 'none' }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="group inline-flex items-center gap-4 transition-all duration-300"
                  style={{
                    backgroundColor: '#131313',
                    color: '#F5F2ED',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.75rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    padding: '1.1rem 2.4rem',
                    opacity: submitting ? 0.7 : 1,
                    cursor: submitting ? 'not-allowed' : 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    if (!submitting) {
                      (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#C9A84C'
                      ;(e.currentTarget as HTMLButtonElement).style.color = '#131313'
                    }
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLButtonElement).style.backgroundColor = '#131313'
                    ;(e.currentTarget as HTMLButtonElement).style.color = '#F5F2ED'
                  }}
                >
                  {submitting ? (
                    <>
                      <span
                        className="w-4 h-4 rounded-full border-2 animate-spin flex-shrink-0"
                        style={{ borderColor: 'rgba(245,242,237,0.3)', borderTopColor: '#F5F2ED' }}
                        aria-hidden="true"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Project Inquiry
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
