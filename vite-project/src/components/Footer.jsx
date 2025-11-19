import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-[#0f1724] text-neutral-light">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <div className="text-lg font-bold mb-4">weCan</div>
          <p className="text-sm text-neutral-light/80">Quality furniture and curated collections for modern homes.</p>
        </div>
        <div>
          <div className="font-semibold mb-3">Our Products</div>
          <ul className="text-sm text-neutral-light/70 space-y-2">
            <li>Support Suite</li>
            <li>The Sales Suite</li>
            <li>Guides</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Resources</div>
          <ul className="text-sm text-neutral-light/70 space-y-2">
            <li>Product Support</li>
            <li>Request Demo</li>
            <li>Library</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Company</div>
          <ul className="text-sm text-neutral-light/70 space-y-2">
            <li>About Us</li>
            <li>Press</li>
            <li>Events</li>
          </ul>
        </div>

        <div className="md:col-span-4 border-t border-neutral-light/10 mt-6 pt-6 text-sm text-neutral-light/70">© {new Date().getFullYear()} weCan — All rights reserved.</div>
      </div>
    </footer>
  )
}
