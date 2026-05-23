const BLOCKS = [
  { title: "City mornings", image: "/images/lookbook-city.jpg" },
  { title: "Weekend uniform", image: "/images/lookbook-weekend.jpg" },
  { title: "Monochrome layers", image: "/images/lookbook-monochrome.jpg" },
  { title: "Night essentials", image: "/images/lookbook-night.jpg" },
]

export default function Lookbook() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Editorial</h2>

      {/* DESKTOP - original collage */}
      <div className="mt-8 hidden md:grid grid-cols-12 gap-4">
        <div style={{ gridColumn: 'span 7', gridRow: 'span 2', height: '540px' }} className="relative overflow-hidden rounded-2xl group">
          <img src={BLOCKS[0].image} alt={BLOCKS[0].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-xs font-medium">{BLOCKS[0].title}</div>
        </div>
        <div style={{ gridColumn: 'span 5', height: '260px' }} className="relative overflow-hidden rounded-2xl group">
          <img src={BLOCKS[1].image} alt={BLOCKS[1].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-xs font-medium">{BLOCKS[1].title}</div>
        </div>
        <div style={{ gridColumn: 'span 5', height: '260px' }} className="relative overflow-hidden rounded-2xl group">
          <img src={BLOCKS[2].image} alt={BLOCKS[2].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-xs font-medium">{BLOCKS[2].title}</div>
        </div>
        <div style={{ gridColumn: 'span 12', height: '280px' }} className="relative overflow-hidden rounded-2xl group">
          <img src={BLOCKS[3].image} alt={BLOCKS[3].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-xs font-medium">{BLOCKS[3].title}</div>
        </div>
      </div>

      {/* MOBILE - collage version */}
      <div className="mt-6 grid grid-cols-2 gap-3 md:hidden">
        {/* City mornings - big top */}
        <div className="col-span-2 relative h- overflow-hidden rounded-2xl">
          <img src={BLOCKS[0].image} alt={BLOCKS[0].title} className="w-full h-full object-cover" />
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-xs font-medium">{BLOCKS[0].title}</div>
        </div>

        {/* Two small squares */}
        <div className="relative h- overflow-hidden rounded-2xl">
          <img src={BLOCKS[1].image} alt={BLOCKS[1].title} className="w-full h-full object-cover" />
          <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur px-2.5 py-1 rounded-full text- font-medium">{BLOCKS[1].title}</div>
        </div>

        <div className="relative h- overflow-hidden rounded-2xl">
          <img src={BLOCKS[2].image} alt={BLOCKS[2].title} className="w-full h-full object-cover" />
          <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur px-2.5 py-1 rounded-full text- font-medium">{BLOCKS[2].title}</div>
        </div>

        {/* Night essentials - full width bottom */}
        <div className="col-span-2 relative h- overflow-hidden rounded-2xl">
          <img src={BLOCKS[3].image} alt={BLOCKS[3].title} className="w-full h-full object-cover" />
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-xs font-medium">{BLOCKS[3].title}</div>
        </div>
      </div>
    </section>
  )
}