import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Heart, Star } from 'lucide-react'

const SIZES = ["XS", "S", "M", "L", "XL"]

export default function QuickViewModal({ product, onClose, addToCart, wishlist, toggleWishlist }) {
  const [selectedSize, setSelectedSize] = useState("M")
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || "")

  if (!product) return null

  const isWished = wishlist.includes(product.id)

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-50"
        onClick={onClose}
      />
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        className="fixed inset-x-4 bottom-4 top-20 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 w-auto sm:w-full sm:max-w-2xl max-h-[85vh] bg-[#F7F4EF] rounded-2xl z-50 overflow-hidden flex flex-col shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-label={`Quick view: ${product.name}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 h-14 border-b border-black/5 shrink-0">
          <p className="font-medium">Quick view</p>
          <button onClick={onClose} className="p-2 -mr-2 focus-ring" aria-label="Close quick view">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-auto flex-1 grid sm:grid-cols-2">
          <div
            className={`aspect-[4/5] sm:aspect-auto sm:min-h-[400px] bg-gradient-to-br ${product.gradient}`}
            role="img"
            aria-label={product.name}
          />
          <div className="p-6">
            <p className="text-xs text-[#6B6B6B] uppercase tracking-wider">{product.category}</p>
            <h3 className="text-xl font-semibold mt-1">{product.name}</h3>
            <p className="text-xl font-semibold mt-3">${product.price}</p>

            <div className="mt-2 flex items-center gap-2">
              <div className="flex" aria-label={`Rated ${product.rating} out of 5`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.round(product.rating) ? "fill-[#111111] text-[#111111]" : "text-black/20"}
                  />
                ))}
              </div>
              <span className="text-sm text-[#6B6B6B]">({product.reviews} reviews)</span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-[#6B6B6B]">{product.description}</p>

            {/* Colors */}
            <div className="mt-5">
              <p className="text-sm font-medium mb-2">Color</p>
              <div className="flex gap-2 flex-wrap">
                {product.colors.map((c) => (
                  <button
                    key={c}
                    onClick={() => setSelectedColor(c)}
                    className={`px-3 py-1.5 rounded-full text-xs border transition focus-ring ${
                      selectedColor === c
                        ? 'bg-[#111111] text-white border-[#111111]'
                        : 'border-black/10 hover:border-black/30 bg-white'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="mt-5">
              <p className="text-sm font-medium mb-2">Size</p>
              <div className="flex gap-2">
                {SIZES.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`w-10 h-10 rounded-full text-sm border transition focus-ring ${
                      selectedSize === s
                        ? 'bg-[#111111] text-white border-[#111111]'
                        : 'border-black/10 hover:border-black/30 bg-white'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 flex gap-2">
              <button
                onClick={() => {
                  addToCart(product, selectedSize)
                  onClose()
                }}
                className="flex-1 h-12 rounded-full bg-[#111111] text-white text-sm font-medium hover:opacity-90 transition focus-ring"
              >
                Add to cart — ${product.price}
              </button>
              <button
                onClick={() => toggleWishlist(product.id)}
                className="w-12 h-12 grid place-items-center rounded-full border border-black/10 hover:border-black/30 transition focus-ring"
                aria-label={isWished ? "Remove from wishlist" : "Add to wishlist"}
              >
                <Heart size={18} className={isWished ? "fill-[#111111]" : ""} />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}