import { Truck, RefreshCw, Shield, ShoppingBag } from 'lucide-react'

const BENEFITS = [
  { icon: Truck, title: "Premium fabrics", desc: "Soft hand-feel, structured drape, built to last." },
  { icon: RefreshCw, title: "Fast delivery", desc: "Worldwide shipping with tracked delivery." },
  { icon: Shield, title: "Easy exchanges", desc: "30-day returns. No hassle, no questions." },
  { icon: ShoppingBag, title: "Secure checkout", desc: "Shop with confidence, always encrypted." },
]

export default function Benefits() {
  return (
    <section className="bg-[#111111] text-[#F7F4EF]" aria-labelledby="benefits-heading">
      <h2 id="benefits-heading" className="sr-only">Why shop with us</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {BENEFITS.map((b) => (
          <div key={b.title} className="flex gap-3">
            <b.icon size={20} className="mt-0.5 shrink-0 opacity-80" />
            <div>
              <p className="font-medium">{b.title}</p>
              <p className="text-sm opacity-70 mt-1 leading-relaxed">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}