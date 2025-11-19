import React from 'react'

export default function Card({title, children, className = '', ...props}){
  return (
    <article className={"rounded-lg bg-white shadow-sm p-6 border border-neutral-light " + className} {...props}>
      <h3 className="text-lg font-semibold text-neutral-dark mb-2">{title}</h3>
      <p className="text-sm text-neutral-dark/75">{children}</p>
    </article>
  )
}
