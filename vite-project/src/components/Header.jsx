import React from 'react'
import Navigation from './Navigation'
import { brand } from '../data/brand'

export default function Header(){
  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3" aria-label="Home">
          <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center text-white font-bold">H</div>
          <div className="hidden md:block">
            <div className="text-sm font-bold text-neutral-dark">{brand.name}</div>
            <div className="text-xs text-neutral-dark/60">{brand.tagline}</div>
          </div>
        </a>
        <Navigation />
      </div>
    </header>
  )
}
