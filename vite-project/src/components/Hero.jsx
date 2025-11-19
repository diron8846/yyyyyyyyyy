
import { brand } from '../data/brand'
import { PrimaryButton, OutlineButton } from './Button'
import watch1_400 from '../assets/images/watch1-400.jpg'
import watch1_800 from '../assets/images/watch1-800.jpg'
import watch1_1400 from '../assets/images/watch1-1400.jpg'

export default function Hero(){
  return (
    <header className="relative bg-neutral-dark text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-dark/90 via-neutral-dark/80 to-neutral-dark/70"></div>
      <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-0 py-20 lg:py-28 grid lg:grid-cols-2 gap-8 items-center">
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <div className="inline-block mb-4">
            <span className="text-sm text-secondary font-medium">{brand.tagline}</span>
          </div>
          <h1 className="mx-auto lg:mx-0 max-w-3xl text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">Aurora — Timepieces for the modern wrist</h1>
          <p className="mt-6 text-base md:text-lg text-neutral-light/80 max-w-2xl">Crafted precision. Clean lines. Mechanical soul — discover our curated collection of watches designed to last generations.</p>
          <div className="mt-8 flex justify-center lg:justify-start gap-4">
            <PrimaryButton aria-label="Shop now">Shop Now</PrimaryButton>
            <OutlineButton aria-label="Learn more">Learn more</OutlineButton>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="w-full max-w-2xl lg:max-w-xl">
            <img
              loading="lazy"
              src={watch1_800}
              srcSet={`${watch1_400} 400w, ${watch1_800} 800w, ${watch1_1400} 1400w`}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 700px"
              alt="Aurora watch"
              className="w-full h-auto rounded-xl shadow-2xl border border-neutral-dark/20 object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
