import React from 'react'
import Card from './Card'
import { brand } from '../data/brand'

export default function Features(){
  return (
    <section id="features" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-extrabold text-neutral-dark mb-3">Why teams choose Helio</h2>
          <p className="text-neutral-dark/75 mb-8">{brand.valueProp}</p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {brand.features.map(f => (
            <Card key={f.id} title={f.title}>{f.body}</Card>
          ))}
        </div>
      </div>
    </section>
  )
}
