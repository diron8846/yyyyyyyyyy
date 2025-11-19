import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Features from './components/Features'
import About from './components/About'
import NewIn from './components/NewIn'
import Watches from './components/Watches'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-neutral-dark px-3 py-2 rounded-md">Skip to content</a>
      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <Stats />
        <Features />
        <About />
        <NewIn />
        <Watches />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
