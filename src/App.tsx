import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Tools from './components/Tools'
import Process from './components/Process'
import CTABanner from './components/CTABanner'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Tools />
        <Process />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  )
}
