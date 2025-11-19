
import watch6_400 from '../assets/images/watch6-400.jpg'
import watch6_800 from '../assets/images/watch6-800.jpg'
import watch6_1400 from '../assets/images/watch6-1400.jpg'
import watch7_400 from '../assets/images/watch7-400.jpg'
import watch7_800 from '../assets/images/watch7-800.jpg'
import watch7_1400 from '../assets/images/watch7-1400.jpg'

export default function Testimonials(){
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-extrabold text-neutral-dark mb-4">What People Are Saying About Us</h3>
            <div className="flex items-center gap-4 mb-4">
              <img
                src={watch6_800}
                srcSet={`${watch6_400} 400w, ${watch6_800} 800w, ${watch6_1400} 1400w`}
                sizes="48px"
                alt="avatar"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <div className="font-semibold">Josh Smith</div>
                <div className="text-sm text-neutral-dark/70">Manager at The New York Times</div>
              </div>
            </div>
            <blockquote className="text-neutral-dark/80">“The build quality and finishing on my Aurora Chrono exceeded expectations — it feels like a true heirloom.”</blockquote>
          </div>
          <div>
            <img
              loading="lazy"
              src={watch7_800}
              srcSet={`${watch7_400} 400w, ${watch7_800} 800w, ${watch7_1400} 1400w`}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 700px"
              alt="watch testimonial"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
