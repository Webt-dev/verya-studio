import { Heart, Search, Star } from 'lucide-react'

export default function ProductCard({ product, wishlist, toggleWishlist, addToCart, setQuickView }) {
  const isWished = wishlist.includes(product.id)

  return (
    <article className="group">
      <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#F0EDE8]">
        <img
          src={product.image}
          alt={`${product.name} - ${product.description}`}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition" />

        {product.badge && (
          <div className="absolute top-3 left-3">
            <span className="bg-white/95 backdrop-blur px-2.5 py-1 rounded-full text-xs font-medium">
              {product.badge}
            </span>
          </div>
        )}

        <div className="absolute top-3 right-3 flex flex-col gap-1.5">
          <button onClick={() => toggleWishlist(product.id)} aria-label={isWished ? "Remove from wishlist" : "Add to wishlist"} className="w-8 h-8 grid place-items-center bg-white/90 backdrop-blur rounded-full hover:bg-white transition focus-ring">
            <Heart size={16} className={isWished ? "fill-[#111111]" : ""} />
          </button>
          <button onClick={() => setQuickView(product)} aria-label={`Quick view ${product.name}`} className="w-8 h-8 grid place-items-center bg-white/90 backdrop-blur rounded-full hover:bg-white transition focus-ring opacity-0 group-hover:opacity-100">
            <Search size={16} />
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button onClick={() => addToCart(product)} className="w-full h-11 bg-[#111111] text-white rounded-full text-sm font-medium hover:opacity-90 transition focus-ring">
            Add to cart
          </button>
        </div>
      </div>

      <div className="mt-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-medium leading-snug">{product.name}</h3>
            <p className="text-sm text-[#6B6B6B]">{product.category}</p>
          </div>
          <p className="font-medium">${product.price}</p>
        </div>
        <div className="mt-1.5 flex items-center gap-2">
          <div className="flex" aria-label={`Rated ${product.rating} out of 5`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={12} className={i < Math.round(product.rating) ? "fill-[#111111] text-[#111111]" : "text-black/20"} />
            ))}
          </div>
          <span className="text-xs text-[#6B6B6B]">({product.reviews})</span>
        </div>
      </div>
    </article>
  )
}