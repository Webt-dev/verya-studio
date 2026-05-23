import { motion } from 'framer-motion'
import { Truck, RefreshCw, Shield } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1
            id="hero-heading"
            className="text-[clamp(2.5rem,7vw,5.25rem)] leading-[0.9] font-semibold tracking-tight"
          >
            Minimal pieces with maximum presence.
          </h1>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#6B6B6B] max-w-lg">
            Veyra Studio creates elevated everyday essentials built for movement, comfort, and quiet confidence.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#new-arrivals"
              className="bg-[#111111] text-white px-7 h-12 inline-grid place-items-center rounded-full text-sm font-medium hover:opacity-90 transition focus-ring"
            >
              Shop New Arrivals
            </a>
            <a
              href="#collections"
              className="border border-black/20 px-7 h-12 inline-grid place-items-center rounded-full text-sm font-medium hover:bg-[#111111] hover:text-white transition focus-ring"
            >
              Explore Collections
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 text-sm">
            {[
              { icon: Truck, text: "Premium materials" },
              { icon: RefreshCw, text: "Worldwide shipping" },
              { icon: Shield, text: "Easy returns" },
            ].map((b) => (
              <div key={b.text} className="flex items-center gap-2 text-[#6B6B6B]">
                <b.icon size={16} />
                <span>{b.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-3xl overflow-hidden relative">
            <img
              src="/images/hero-main.jpg"
              alt="Urban Layer Jacket featured"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-xl rounded-2xl p-5 shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#6B6B6B]">Featured</p>
                  <p className="font-medium mt-0.5">Urban Layer Jacket</p>
                </div>
                <p className="text-lg font-semibold">$188</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}