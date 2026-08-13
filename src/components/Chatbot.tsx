import { useState, useRef, useEffect } from 'react'

type Message = {
  id: number
  text: string
  from: 'bot' | 'user'
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: 1,
    from: 'bot',
    text: "Hi! We're NexKreate. How can we help you grow your business today?",
  },
]

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES)
  const [input, setInput] = useState('')
  const [counter, setCounter] = useState(2)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open) messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  const sendMessage = () => {
    const text = input.trim()
    if (!text) return
    const userMsg: Message = { id: counter, from: 'user', text }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setCounter((c) => c + 1)

    // Placeholder bot reply — connect to real backend later
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          from: 'bot',
          text: "Thanks for reaching out! Please fill in our contact form and our team will get back to you within 24 hours.",
        },
      ])
    }, 900)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div
      className="fixed bottom-5 right-5 z-[300] flex flex-col items-end"
      role="complementary"
      aria-label="Chat support"
    >
      {/* Chat panel */}
      <div
        className="mb-3 transition-all duration-350 origin-bottom-right overflow-hidden"
        style={{
          width: '320px',
          opacity: open ? 1 : 0,
          transform: open ? 'scale(1) translateY(0)' : 'scale(0.92) translateY(16px)',
          pointerEvents: open ? 'auto' : 'none',
          maxHeight: open ? '460px' : '0px',
          backgroundColor: '#131313',
          border: '1px solid rgba(245,242,237,0.12)',
        }}
        aria-hidden={!open}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-4 border-b"
          style={{ borderColor: 'rgba(245,242,237,0.09)' }}
        >
          <div>
            <div
              className="text-[#F5F2ED] tracking-tight"
              style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem' }}
            >
              NexKreate
            </div>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" aria-hidden="true" />
              <span
                className="text-[#7C7870]"
                style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem' }}
              >
                Usually replies within minutes
              </span>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="text-[#7C7870] hover:text-[#F5F2ED] transition-colors text-base p-1"
            aria-label="Close chat"
          >
            ✕
          </button>
        </div>

        {/* Messages */}
        <div
          className="overflow-y-auto flex flex-col gap-3 px-5 py-5"
          style={{ maxHeight: '280px', minHeight: '180px' }}
          role="log"
          aria-live="polite"
          aria-label="Chat messages"
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`max-w-[85%] px-4 py-3 text-sm leading-relaxed ${
                msg.from === 'user' ? 'self-end' : 'self-start'
              }`}
              style={{
                backgroundColor: msg.from === 'user' ? '#C9A84C' : 'rgba(245,242,237,0.06)',
                color: msg.from === 'user' ? '#131313' : '#F5F2ED',
                fontFamily: 'var(--font-body)',
              }}
            >
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div
          className="flex items-stretch border-t"
          style={{ borderColor: 'rgba(245,242,237,0.09)' }}
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            className="flex-1 bg-transparent px-5 py-3 outline-none text-[#F5F2ED] placeholder:text-[#7C7870]"
            style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem' }}
            aria-label="Chat message input"
          />
          <button
            onClick={sendMessage}
            className="px-5 py-3 text-[#131313] bg-[#C9A84C] hover:bg-[#F5F2ED] transition-colors text-sm"
            style={{ fontFamily: 'var(--font-body)' }}
            aria-label="Send message"
          >
            →
          </button>
        </div>
      </div>

      {/* Launcher button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-14 h-14 flex items-center justify-center relative overflow-hidden transition-all duration-300 hover:scale-105"
        style={{
          backgroundColor: '#131313',
          border: '1px solid rgba(245,242,237,0.18)',
        }}
        aria-label={open ? 'Close chat' : 'Open chat'}
        aria-expanded={open}
      >
        {/* Chat icon */}
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          className="absolute transition-all duration-300"
          style={{
            opacity: open ? 0 : 1,
            transform: open ? 'scale(0.5) rotate(45deg)' : 'scale(1) rotate(0deg)',
          }}
          aria-hidden="true"
        >
          <path d="M3 5h16M3 10h10" stroke="#F5F2ED" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="17" cy="16" r="3.5" stroke="#C9A84C" strokeWidth="1.5" />
          <path d="M17 14.5v1.5l1 1" stroke="#C9A84C" strokeWidth="1.2" strokeLinecap="round" />
        </svg>

        {/* Close icon */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="absolute transition-all duration-300"
          style={{
            opacity: open ? 1 : 0,
            transform: open ? 'scale(1) rotate(0deg)' : 'scale(0.5) rotate(-45deg)',
          }}
          aria-hidden="true"
        >
          <path d="M2 2l12 12M14 2L2 14" stroke="#F5F2ED" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  )
}
