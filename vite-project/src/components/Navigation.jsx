import React from 'react'

export default function Navigation(){
  return (
    <nav aria-label="Primary navigation" className="flex items-center gap-6">
      <a href="#features" className="text-sm font-medium text-neutral-dark/80 hover:text-neutral-dark">Features</a>
      <a href="#about" className="text-sm font-medium text-neutral-dark/80 hover:text-neutral-dark">About</a>
      <a href="#pricing" className="text-sm font-medium text-neutral-dark/80 hover:text-neutral-dark">Pricing</a>
      <a href="#" className="ml-2 text-sm font-medium text-primary hover:underline">Login</a>
    </nav>
  )
}
