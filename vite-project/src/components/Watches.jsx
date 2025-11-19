
import watch1_400 from '../assets/images/watch1-400.jpg'
import watch1_800 from '../assets/images/watch1-800.jpg'
import watch1_1400 from '../assets/images/watch1-1400.jpg'
import watch2_400 from '../assets/images/watch2-400.jpg'
import watch2_800 from '../assets/images/watch2-800.jpg'
import watch2_1400 from '../assets/images/watch2-1400.jpg'
import watch3_400 from '../assets/images/watch3-400.jpg'
import watch3_800 from '../assets/images/watch3-800.jpg'
import watch3_1400 from '../assets/images/watch3-1400.jpg'
import watch4_400 from '../assets/images/watch4-400.jpg'
import watch4_800 from '../assets/images/watch4-800.jpg'
import watch4_1400 from '../assets/images/watch4-1400.jpg'
import watch5_400 from '../assets/images/watch5-400.jpg'
import watch5_800 from '../assets/images/watch5-800.jpg'
import watch5_1400 from '../assets/images/watch5-1400.jpg'
import watch6_400 from '../assets/images/watch6-400.jpg'
import watch6_800 from '../assets/images/watch6-800.jpg'
import watch6_1400 from '../assets/images/watch6-1400.jpg'
import watch7_400 from '../assets/images/watch7-400.jpg'
import watch7_800 from '../assets/images/watch7-800.jpg'
import watch7_1400 from '../assets/images/watch7-1400.jpg'
import watch8_400 from '../assets/images/watch8-400.jpg'
import watch8_800 from '../assets/images/watch8-800.jpg'
import watch8_1400 from '../assets/images/watch8-1400.jpg'

const watches = [
  {
    title: 'Aurora Chrono',
    img: watch1_800,
    srcSet: `${watch1_400} 400w, ${watch1_800} 800w, ${watch1_1400} 1400w`
  },
  {
    title: 'Atlas Classic',
    img: watch2_800,
    srcSet: `${watch2_400} 400w, ${watch2_800} 800w, ${watch2_1400} 1400w`
  },
  {
    title: 'Nero Minimal',
    img: watch3_800,
    srcSet: `${watch3_400} 400w, ${watch3_800} 800w, ${watch3_1400} 1400w`
  },
  {
    title: 'Helio Sport',
    img: watch4_800,
    srcSet: `${watch4_400} 400w, ${watch4_800} 800w, ${watch4_1400} 1400w`
  },
  {
    title: 'Chrono Luxe',
    img: watch5_800,
    srcSet: `${watch5_400} 400w, ${watch5_800} 800w, ${watch5_1400} 1400w`
  },
  {
    title: 'Solaris Edge',
    img: watch6_800,
    srcSet: `${watch6_400} 400w, ${watch6_800} 800w, ${watch6_1400} 1400w`
  },
  {
    title: 'Midnight Steel',
    img: watch7_800,
    srcSet: `${watch7_400} 400w, ${watch7_800} 800w, ${watch7_1400} 1400w`
  },
  {
    title: 'Vintage Gold',
    img: watch8_800,
    srcSet: `${watch8_400} 400w, ${watch8_800} 800w, ${watch8_1400} 1400w`
  },
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
                  <img
                    loading="lazy"
                    src={w.img}
                    srcSet={w.srcSet}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 350px"
                    alt={w.title}
                    className="object-cover w-full h-full"
                  />
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
