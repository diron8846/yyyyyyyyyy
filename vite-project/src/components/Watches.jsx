import React, { useRef, useEffect, useState } from 'react'

const watches = [
  { title: 'Aurora Chrono', img: 'https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&s=6f2f7d0e5b6f' },
  { title: 'Atlas Classic', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&s=5f1c' },
  { title: 'Nero Minimal', img: 'https://images.unsplash.com/photo-1514995669114-9e6f0d4f4b3a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&s=2b3a' },
  { title: 'Helio Sport', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&s=5f1c' },
]

export default function Watches(){
  const containerRef = useRef(null)
  const slideRefs = useRef([])
  const [current, setCurrent] = useState(0)
  const len = watches.length

  useEffect(() => {
    // ensure ref array matches length
    slideRefs.current = slideRefs.current.slice(0, len)
  }, [len])

  useEffect(() => {
    // announce or bring into view the current slide
    const el = slideRefs.current[current]
    if (el && typeof el.scrollIntoView === 'function') {
      el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
    }
  }, [current])

  useEffect(() => {
    const node = containerRef.current
    if (!node) return
    function onKey(e){
      if (e.key === 'ArrowRight'){
        e.preventDefault(); setCurrent((c) => (c + 1) % len)
      } else if (e.key === 'ArrowLeft'){
        e.preventDefault(); setCurrent((c) => (c - 1 + len) % len)
      } else if (e.key === 'Home'){
        e.preventDefault(); setCurrent(0)
      } else if (e.key === 'End'){
        e.preventDefault(); setCurrent(len - 1)
      }
    }
    node.addEventListener('keydown', onKey)
    return () => node.removeEventListener('keydown', onKey)
  }, [len])

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="text-2xl font-extrabold text-neutral-dark">Workshop: Watches</h3>
            <p className="text-neutral-dark/70">Selected timepieces crafted for style and precision — available in our workshop showcase.</p>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button onClick={() => setCurrent((c) => Math.max(0, c - 1))} aria-label="Previous watches" className="rounded-full p-2 bg-neutral-light/90 hover:bg-neutral-light">‹</button>
            <button onClick={() => setCurrent((c) => Math.min(len - 1, c + 1))} aria-label="Next watches" className="rounded-full p-2 bg-neutral-light/90 hover:bg-neutral-light">›</button>
          </div>
        </div>

        <div
          ref={containerRef}
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="Watch workshop carousel"
          className="relative outline-none"
        >
          <div className="flex gap-6 overflow-x-auto scroll-smooth py-2 px-1 -mx-1 snap-x snap-mandatory" style={{ WebkitOverflowScrolling: 'touch' }}>
            {watches.map((w, i) => (
              <div
                key={i}
                ref={el => slideRefs.current[i] = el}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${len}`}
                tabIndex={i === current ? 0 : -1}
                className="snap-center flex-none min-w-[260px] md:min-w-[300px] bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative h-56">
                  <img loading="lazy" src={w.img} alt={w.title} className="object-cover w-full h-full" />
                  <div className="absolute bottom-3 left-3 bg-black/50 text-white px-3 py-1 rounded text-sm">{w.title}</div>
                </div>
                <div className="p-4">
                  <div className="font-semibold text-neutral-dark">{w.title}</div>
                  <div className="text-sm text-neutral-dark/70 mt-2">Hand-assembled, water resistant, 2 year warranty.</div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-lg font-bold">$349</div>
                    <button className="px-3 py-2 rounded bg-primary text-white text-sm">Buy</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 mt-6">
            {watches.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`w-2.5 h-2.5 rounded-full ${i === current ? 'bg-neutral-dark' : 'bg-neutral-light/40'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
