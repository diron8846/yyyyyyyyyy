import React from 'react'

export default function Section({children, id, className = ''}){
  return (
    <section id={id} className={"w-full max-w-7xl mx-auto px-6 md:px-8 py-12 " + className}>
      {children}
    </section>
  )
}
