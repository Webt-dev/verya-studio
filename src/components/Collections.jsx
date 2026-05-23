import { ArrowRight } from 'lucide-react'

const COLLECTIONS = [
  { title: "Core Essentials", desc: "Foundational everyday pieces designed for clean layering, soft comfort, and daily versatility.", image: "/images/collection-core.jpg", dark: false },
  { title: "Urban Movement", desc: "Flexible silhouettes and utility-inspired details made for the pace of the city.", image: "/images/collection-urban.jpg", dark: true },
  { title: "After Dark", desc: "Sharper textures, darker tones, and statement layers built for evening presence.", image: "/images/collection-dark.jpg", dark: true },
]

export default function Collections() {
  return (
    <section id="collections" className="max-w-7xl mx-auto px-4 sm:px-6 py-14" aria-labelledby="collections-heading">
      <h2 id="collections-heading" className="text-2xl sm:text-3xl font-semibold tracking-tight">Collections</h2>
      <div className="mt-8 grid lg:grid-cols-3 gap-5">
        {COLLECTIONS.map((col) => (
          <article key={col.title} className="relative overflow-hidden rounded-2xl group cursor-pointer">
            <div className="aspect-[4/3] relative">
              <img src={col.image} alt={col.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
            </div>
            <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
              <div className={`max-w-xs ${col.dark? 'text-white' : 'text-[#111111]'}`}>
                <h3 className="text-xl font-semibold">{col.title}</h3>
                <p className="mt-2 text-sm opacity-90 leading-relaxed">{col.desc}</p>
                <button className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium hover:gap-2.5 transition-all">Shop collection <ArrowRight size={14} /></button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}