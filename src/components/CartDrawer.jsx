import { motion, AnimatePresence } from 'framer-motion'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'

export default function CartDrawer({ cart, cartTotal, cartCount, isOpen, onClose, updateQty, removeFromCart, showToast }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-50"
            onClick={onClose}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full sm:w-[420px] bg-[#F7F4EF] z-50 flex flex-col shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Shopping cart"
          >
            {/* Header */}
            <div className="h-16 flex items-center justify-between px-5 border-b border-black/5 shrink-0">
              <h2 className="font-medium text-lg">Your cart ({cartCount})</h2>
              <button onClick={onClose} className="p-2 -mr-2 focus-ring" aria-label="Close cart">
                <X size={20} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-auto px-5 py-4">
              {cart.length === 0 ? (
                <div className="h-full grid place-items-center text-center">
                  <div>
                    <ShoppingBag className="mx-auto mb-3 opacity-40" size={48} />
                    <p className="font-medium text-lg">Your cart is empty</p>
                    <p className="text-sm text-[#6B6B6B] mt-1">Add some items to get started.</p>
                  </div>
                </div>
              ) : (
                <ul className="space-y-4">
                  {cart.map((item, idx) => (
                    <li key={`${item.id}-${item.size}-${idx}`} className="flex gap-3">
                      <div className={`w-20 h-24 rounded-xl bg-gradient-to-br ${item.gradient} shrink-0`}
                        role="img" aria-label={item.name}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="text-sm font-medium leading-snug">{item.name}</p>
                            <p className="text-xs text-[#6B6B6B] mt-0.5">
                              Size {item.size} {item.color ? `· ${item.color}` : ''}
                            </p>
                          </div>
                          <button
                            onClick={() => removeFromCart(idx)}
                            className="text-xs text-[#6B6B6B] hover:text-[#111111] transition focus-ring rounded shrink-0"
                          >
                            Remove
                          </button>
                        </div>
                        <div className="mt-2 flex items-center justify-between">
                          <div className="flex items-center border border-black/10 rounded-full">
                            <button
                              onClick={() => updateQty(idx, -1)}
                              className="w-8 h-8 grid place-items-center focus-ring rounded-l-full hover:bg-black/5 transition"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="w-8 text-center text-sm">{item.qty}</span>
                            <button
                              onClick={() => updateQty(idx, 1)}
                              className="w-8 h-8 grid place-items-center focus-ring rounded-r-full hover:bg-black/5 transition"
                              aria-label="Increase quantity"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <p className="text-sm font-medium">${item.price * item.qty}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="border-t border-black/5 p-5 bg-white/70 backdrop-blur shrink-0">
                <div className="flex items-center justify-between">
                  <span className="text-[#6B6B6B]">Subtotal</span>
                  <span className="text-lg font-semibold">${cartTotal}</span>
                </div>
                {cartTotal >= 120 && (
                  <p className="text-xs text-green-700 mt-1">🎉 You qualify for free shipping!</p>
                )}
                <button
                  onClick={() => showToast("Checkout is a demo — thanks for exploring!")}
                  className="mt-4 w-full h-12 rounded-full bg-[#111111] text-white font-medium hover:opacity-90 transition focus-ring"
                >
                  Checkout
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}