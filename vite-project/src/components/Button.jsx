import React from 'react'

export function PrimaryButton({ children, ...props }){
  return (
    <button
      {...props}
      className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-primary text-white font-semibold shadow-sm hover:brightness-95 focus-visible:ring-4 focus-visible:ring-primary/30"
    >
      {children}
    </button>
  )
}

export function SecondaryButton({ children, ...props }){
  return (
    <button
      {...props}
      className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-secondary text-white font-medium hover:opacity-95 focus-visible:ring-4 focus-visible:ring-secondary/25"
    >
      {children}
    </button>
  )
}

export function OutlineButton({ children, ...props }){
  return (
    <button
      {...props}
      className="inline-flex items-center justify-center px-4 py-2 rounded-md border border-neutral-dark text-neutral-dark bg-white font-medium hover:bg-neutral-light/60 focus-visible:ring-4 focus-visible:ring-neutral-dark/10"
    >
      {children}
    </button>
  )
}

export default PrimaryButton
