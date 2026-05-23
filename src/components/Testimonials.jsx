import { Star } from 'lucide-react'

const REVIEWS = [
  {
    name: "Lena",
    city: "Berlin",
    quote: "The SoftForm Hoodie is hands-down the most comfortable hoodie I've ever owned. The fit is relaxed but still looks sharp. I wear it almost every day.",
    rating: 5,
    product: "SoftForm Hoodie",
  },
  {
    name: "Marcus",
    city: "New York",
    quote: "I ordered the Urban Layer Jacket and Drift Cargos — both fit perfectly. The quality feels way above the price point. Veyra is my new go-to.",
    rating: 5,
    product: "Urban Movement Collection",
  },
  {
    name: "Aisha",
    city: "London",
    quote: "Finally found a brand that gets minimal without being boring. The Cloud Knit Sweater is beautiful and the shipping was surprisingly fast.",
    rating: 5,
    product: "Cloud Knit Sweater",
  },
]

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14" aria-labelledby="testimonials-heading">
      <h2 id="testimonials-heading" className="text-2xl sm:text-3xl font-semibold tracking-tight">
        What our customers say
      </h2>
      <div className="mt-8 grid md:grid-cols-3 gap-5">
        {REVIEWS.map((r) => (
          <article key={r.name} className="bg-white border border-black/5 rounded-2xl p-6">
            <div className="flex gap-0.5" aria-label={`Rated ${r.rating} out of 5`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={i < r.rating ? "fill-[#111111] text-[#111111]" : "text-black/15"}
                />
              ))}
            </div>
            <p className="mt-3 text-sm leading-relaxed italic text-[#6B6B6B]">
              &ldquo;{r.quote}&rdquo;
            </p>
            <div className="mt-4 pt-4 border-t border-black/5">
              <p className="text-sm font-medium">{r.name}</p>
              <p className="text-xs text-[#6B6B6B]">{r.city} &middot; {r.product}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}