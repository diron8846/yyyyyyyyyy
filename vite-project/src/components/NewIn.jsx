
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

const products = [
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
]

export default function NewIn(){
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="col-span-1">
            <h3 className="text-2xl font-extrabold text-neutral-dark mb-4">New In\nStore Now</h3>
            <p className="text-neutral-dark/70 mb-4">Get the latest items immediately with promo prices</p>
            <a href="#" className="text-sm text-primary font-medium">Check All →</a>
          </div>

          <div className="col-span-2">
            <div className="flex gap-4 overflow-x-auto pb-2">
              {products.map((p, i) => (
                <div key={i} className="min-w-[220px] bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-40 w-56 md:w-64">
                    <img
                      loading="lazy"
                      src={p.img}
                      srcSet={p.srcSet}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 350px"
                      alt={p.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute bottom-2 left-2 bg-black/40 text-white text-sm px-3 py-1 rounded">{p.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
