import { PRODUCTS, CATEGORIES } from '../data/products'

const categoryImages = {
  "Oversized T-Shirts": "/images/products/product-1.jpg",
  "Hoodies": "/images/products/product-2.jpg",
  "Jackets": "/images/products/product-4.jpg",
  "Pants": "/images/products/product-3.jpg",
  "Knitwear": "/images/products/product-7.jpg",
  "Essentials": "/images/products/product-6.jpg",
}

export default function CategorySection({ setCategory }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12" aria-labelledby="categories-heading">
      <h2 id="categories-heading" className="text-2xl sm:text-3xl font-semibold tracking-tight">Shop by category</h2>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {CATEGORIES.slice(0, 6).map((cat) => (
          <button key={cat} onClick={() => { setCategory(cat); document.getElementById('new-arrivals')?.scrollIntoView({ behavior: 'smooth' }) }} className="group text-left focus:outline-none focus:ring-2 focus:ring-[#111] rounded-2xl" aria-label={`Browse ${cat}`}>
            <div className="aspect-[4/5] rounded-2xl relative overflow-hidden bg-[#F0EDE8]">
              <img src={categoryImages[cat]} alt={cat} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <div className="bg-white/90 backdrop-blur px-3 py-2 rounded-xl inline-block">
                  <span className="text-xs sm:text-sm font-medium">{cat}</span>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}