import { PRODUCTS } from '../data/products'
import { Plus } from 'lucide-react'

const LOOK_IDS = [1, 3, 8, 4]

export default function CompleteTheLook({ addToCart, showToast }) {
  const lookProducts = LOOK_IDS.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean)
  const total = lookProducts.reduce((s, p) => s + p.price, 0)

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14" aria-labelledby="complete-heading">
      <h2 id="complete-heading" className="text-2xl sm:text-3xl font-semibold tracking-tight">
        Complete the Look
      </h2>
      <p className="text-[#6B6B6B] mt-1 text-sm">Our editors' pick for the perfect outfit.</p>

      <div className="mt-8 flex flex-col lg:flex-row items-center gap-3 lg:gap-4">
        {lookProducts.map((p, i) => (
          <div key={p.id} className="flex items-center gap-3 lg:gap-4">
            <div className="bg-white rounded-2xl border border-black/5 p-3 flex items-center gap-3 w-full lg:w-auto">
              <div className="w-16 h-20 rounded-xl overflow-hidden shrink-0 bg-[#F0EDE8]">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium leading-snug truncate">{p.name}</p>
                <p className="text-xs text-[#6B6B6B]">{p.category}</p>
                <p className="text-sm font-semibold mt-1">${p.price}</p>
              </div>
            </div>
            {i < lookProducts.length - 1 && (
              <div className="w-6 h-6 rounded-full bg-black/5 grid place-items-center shrink-0">
                <Plus size={12} className="text-[#6B6B6B]" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
        <p className="text-lg font-semibold">Total: ${total}</p>
        <button onClick={() => { lookProducts.forEach(p => addToCart(p)); showToast("Full look added to cart!") }} className="bg-[#111111] text-white px-8 h-12 rounded-full text-sm font-medium hover:opacity-90 transition">
          Shop the look
        </button>
      </div>
    </section>
  )
}