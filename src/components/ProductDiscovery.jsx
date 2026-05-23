import { useState } from 'react'
import { Search, ChevronDown } from 'lucide-react'
import { CATEGORIES } from '../data/products'
import ProductCard from './ProductCard'

export default function ProductDiscovery({
  filteredProducts, search, setSearch, category, setCategory,
  sort, setSort, wishlist, toggleWishlist, addToCart, setQuickView,
}) {
  const [showAll, setShowAll] = useState(false)
  
  // Mobile: show 4, desktop: show all
  const visibleProducts = showAll ? filteredProducts : filteredProducts.slice(0, 8)

  return (
    <section id="new-arrivals" className="max-w-7xl mx-auto px-4 sm:px-6 py-12" aria-labelledby="new-arrivals-heading">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h2 id="new-arrivals-heading" className="text-2xl sm:text-3xl font-semibold tracking-tight">New Arrivals</h2>
          <p className="text-[#6B6B6B] mt-1">Clothing made for the pace of modern life.</p>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:flex-none">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B6B6B]" size={16} />
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" className="pl-9 pr-3 h-10 w-full sm:w-56 rounded-full border border-black/10 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#111]" aria-label="Search products" />
          </div>
          <select value={sort} onChange={(e) => setSort(e.target.value)} className="h-10 rounded-full border border-black/10 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#111] shrink-0" aria-label="Sort">
            <option value="featured">Featured</option>
            <option value="newest">Newest</option>
            <option value="price-asc">Price ↑</option>
            <option value="price-desc">Price ↓</option>
          </select>
        </div>
      </div>

      {/* MOBILE CAROUSEL - Shop by Category */}
      <div className="mt-6 -mx-4 px-4 sm:mx-0 sm:px-0">
        <div className="flex gap-2 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide">
          {["All", ...CATEGORIES].map((c) => (
            <button key={c} onClick={() => setCategory(c)} aria-pressed={category === c} className={`snap-start whitespace-nowrap px-4 h-9 rounded-full text-sm border transition shrink-0 ${category === c ? 'bg-[#111111] text-white border-[#111111]' : 'border-black/10 hover:border-black/20 bg-white'}`}>
              {c}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-4 text-sm text-[#6B6B6B]" aria-live="polite">{filteredProducts.length} products</p>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5">
        {visibleProducts.map((p) => (
          <ProductCard key={p.id} product={p} wishlist={wishlist} toggleWishlist={toggleWishlist} addToCart={addToCart} setQuickView={setQuickView} />
        ))}
      </div>

      {/* Mobile View All */}
      {!showAll && filteredProducts.length > 8 && (
        <div className="mt-8 text-center sm:hidden">
          <button onClick={() => setShowAll(true)} className="inline-flex items-center gap-1.5 px-5 h-11 rounded-full border border-black/15 text-sm font-medium hover:bg-black/5">
            View all {filteredProducts.length} products <ChevronDown size={16} />
          </button>
        </div>
      )}

      {filteredProducts.length === 0 && (
        <div className="text-center py-16 text-[#6B6B6B]">
          <p className="text-lg font-medium">No products found</p>
        </div>
      )}
    </section>
  )
}