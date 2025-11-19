import React from 'react'

export default function Newsletter(){
  return (
    <section className="bg-secondary text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="max-w-2xl">
          <h3 className="text-3xl font-extrabold mb-2">Get more discount\nOff your order</h3>
          <p className="opacity-90">Join our mailing list</p>
        </div>
        <form className="w-full md:w-auto flex gap-3 items-center">
          <label htmlFor="email" className="sr-only">Email</label>
          <input id="email" type="email" placeholder="Your email address" className="px-4 py-3 rounded-md text-neutral-dark w-full md:w-80" />
          <button className="px-5 py-3 rounded-md bg-neutral-dark text-white font-semibold">Shop Now</button>
        </form>
      </div>
    </section>
  )
}
