import { PRODUCTS } from '../data/products'
import { useEffect, useRef, useState } from 'react'

export default function BestSellers() {
  const bestSellers = PRODUCTS.filter((p) => p.bestSeller)
  const scrollRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const el = scrollRef.current
    if (!el || window.innerWidth >= 768) return

    let index = 0
    const cardWidth = el.offsetWidth * 0.78 + 16 // 78% + gap

    const interval = setInterval(() => {
      if (isPaused) return
      index = (index + 1) % bestSellers.length
      el.scrollTo({ left: index * cardWidth, behavior: 'smooth' })

      // loop back to start smoothly
      if (index === 0) {
        setTimeout(() => el.scrollTo({ left: 0, behavior: 'auto' }), 500)
      }
    }, 2800)

    return () => clearInterval(interval)
  }, [bestSellers.length, isPaused])

  return (
    <section id="best-sellers" className="bg-white border-y border-black/5" aria-labelledby="best-sellers-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="flex items-end justify-between">
          <h2 id="best-sellers-heading" className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Best Sellers
          </h2>
          <span className="text-xs text-[#6B6B6B] md:hidden">Auto-playing</span>
        </div>

        {/* MOBILE AUTO CAROUSEL */}
        <div className="mt-8 md:hidden -mx-4 px-4">
          <div
            ref={scrollRef}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setTimeout(() => setIsPaused(false), 1000)}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {bestSellers.map((p) => (
              <article key={p.id} className="snap-start shrink-0 w-[78%]">
                <div className="aspect-[3/4] rounded-2xl relative overflow-hidden bg-[#F0EDE8]">
                  <img src={p.image} alt={p.name} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60" />
                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-xl rounded-xl p-3">
                    <p className="text- uppercase tracking-widest text-[#6B6B6B]">Best Seller</p>
                    <div className="flex items-center justify-between mt-1">
                      <h3 className="font-medium text-sm truncate pr-2">{p.name}</h3>
                      <span className="font-semibold text-sm">${p.price}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* DESKTOP GRID */}
        <div className="mt-8 hidden md:grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {bestSellers.map((p) => (
            <article key={p.id} className="group cursor-pointer">
              <div className="aspect-[3/4] rounded-2xl relative overflow-hidden bg-[#F0EDE8]">
                <img src={p.image} alt={p.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-2xl p-4">
                  <p className="text- uppercase tracking-widest text-[#6B6B6B]">Best Seller</p>
                  <div className="flex items-center justify-between mt-1">
                    <h3 className="font-medium text-sm">{p.name}</h3>
                    <span className="font-semibold">${p.price}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`.scrollbar-hide::-webkit-scrollbar{display:none}`}</style>
    </section>
  )
}