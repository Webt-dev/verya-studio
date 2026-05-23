import { motion, AnimatePresence } from 'framer-motion'
import {
  ShoppingBag, Heart, Search, Menu, X, User,
} from 'lucide-react'

export default function Header({
  cartCount, wishlistCount, isMenuOpen, setIsMenuOpen,
  setIsCartOpen, showToast,
}) {
  const navLinks = ["Home", "New Arrivals", "Collections", "Best Sellers", "About", "Contact"]

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#F7F4EF]/80 backdrop-blur-xl border-b border-black/5">
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Left */}
          <div className="flex items-center gap-8">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden focus-ring p-2 -ml-2"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
            <a href="#" className="font-semibold tracking-[0.18em] text-lg">
              VEYRA STUDIO
            </a>
            <ul className="hidden lg:flex items-center gap-7 text-sm">
              {navLinks.map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase().replace(/\s+/g, '-')}`}
                    className="hover:opacity-60 transition-opacity"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div className="flex items-center gap-1">
            <button className="focus-ring p-2.5 hover:opacity-60" aria-label="Search">
              <Search size={20} />
            </button>
            <button
              className="focus-ring p-2.5 hover:opacity-60 hidden sm:block"
              aria-label="Account"
            >
              <User size={20} />
            </button>
            <button
              onClick={() => showToast("Wishlist coming soon")}
              className="focus-ring p-2.5 hover:opacity-60 relative"
              aria-label={`Wishlist with ${wishlistCount} items`}
            >
              <Heart size={20} className={wishlistCount > 0 ? "fill-[#111111]" : ""} />
              {wishlistCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-[#111111] text-white text-[10px] w-4 h-4 grid place-items-center rounded-full">
                  {wishlistCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsCartOpen(true)}
              className="focus-ring p-2.5 hover:opacity-60 relative"
              aria-label={`Cart with ${cartCount} items`}
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-[#111111] text-white text-[10px] w-4 h-4 grid place-items-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-50 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 bottom-0 w-[86%] max-w-xs bg-[#F7F4EF] z-50 p-6 flex flex-col"
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold tracking-[0.18em]">VEYRA</span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 -mr-2 focus-ring"
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>
              <nav className="mt-8 space-y-1" aria-label="Mobile navigation">
                {navLinks.map((l) => (
                  <a
                    key={l}
                    href={`#${l.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-3 text-lg border-b border-black/5 hover:pl-2 transition-all"
                  >
                    {l}
                  </a>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}