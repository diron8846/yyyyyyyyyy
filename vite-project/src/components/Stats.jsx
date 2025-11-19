import React from 'react'

const items = [
  { value: '7', label: 'Years Crafting' },
  { value: '12', label: 'Countries Shipped' },
  { value: '25k+', label: 'Pieces Sold' },
  { value: '32', label: 'Models Available' },
]

export default function Stats(){
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-8 -mt-10 relative z-20">
      <div className="bg-secondary text-white rounded-xl shadow-lg p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {items.map((it, idx) => (
          <div key={idx} className={`flex-1 text-center ${idx < items.length -1 ? 'sm:border-r sm:border-secondary/70' : ''} px-4` }>
            <div className="text-2xl md:text-3xl font-extrabold">{it.value}</div>
            <div className="text-sm mt-1 opacity-90">{it.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
