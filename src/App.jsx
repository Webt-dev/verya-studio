import { useState, useMemo, useEffect, useCallback } from 'react'
import { PRODUCTS } from './data/products'
import AnnouncementBar from './components/AnnouncementBar'
import Header from './components/Header'
import Hero from './components/Hero'
import CategorySection from './components/CategorySection'
import ProductDiscovery from './components/ProductDiscovery'
import BestSellers from './components/BestSellers'
import Collections from './components/Collections'
import BrandStory from './components/BrandStory'
import Lookbook from './components/Lookbook'
import CompleteTheLook from './components/CompleteTheLook'
import Testimonials from './components/Testimonials'
import Benefits from './components/Benefits'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import QuickViewModal from './components/QuickViewModal'
import Toast from './components/Toast'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [quickView, setQuickView] = useState(null)
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")
  const [sort, setSort] = useState("featured")
  const [toast, setToast] = useState(null)

  const showToast = useCallback((msg) => {
    setToast(msg)
    setTimeout(() => setToast(null), 2500)
  }, [])

  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS]
    if (category !== "All") list = list.filter((p) => p.category === category)
    if (search) {
      const q = search.toLowerCase()
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      )
    }
    switch (sort) {
      case "price-asc": list.sort((a, b) => a.price - b.price); break
      case "price-desc": list.sort((a, b) => b.price - a.price); break
      case "newest": list.sort((a, b) => Number(b.newest) - Number(a.newest)); break
      default: break
    }
    return list
  }, [search, category, sort])

  const addToCart = useCallback((product, size = "M") => {
    setCart((prev) => {
      const idx = prev.findIndex((i) => i.id === product.id && i.size === size)
      if (idx > -1) {
        const next = [...prev]
        next[idx] = { ...next[idx], qty: next[idx].qty + 1 }
        return next
      }
      return [...prev, { ...product, size, qty: 1 }]
    })
    showToast(`Added ${product.name} to cart`)
    setIsCartOpen(true)
  }, [showToast])

  const updateQty = useCallback((idx, delta) => {
    setCart((prev) =>
      prev.map((item, i) =>
        i === idx ? { ...item, qty: Math.max(1, item.qty + delta) } : item
      )
    )
  }, [])

  const removeFromCart = useCallback((idx) => {
    setCart((prev) => prev.filter((_, i) => i !== idx))
  }, [])

  const toggleWishlist = useCallback((id) => {
    setWishlist((prev) => {
      const has = prev.includes(id)
      showToast(has ? "Removed from wishlist" : "Saved to wishlist")
      return has ? prev.filter((x) => x !== id) : [...prev, id]
    })
  }, [showToast])

  const cartTotal = cart.reduce((s, i) => s + i.price * i.qty, 0)
  const cartCount = cart.reduce((s, i) => s + i.qty, 0)

  // Lock body scroll when overlay is open
  useEffect(() => {
    document.body.style.overflow = isCartOpen || isMenuOpen || quickView ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isCartOpen, isMenuOpen, quickView])

  return (
    <div className="min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-[#111111] text-white px-4 py-2 rounded z-[100]"
      >
        Skip to content
      </a>

      <AnnouncementBar />
      <Header
        cartCount={cartCount}
        wishlistCount={wishlist.length}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setIsCartOpen={setIsCartOpen}
        showToast={showToast}
      />

      <main id="main">
        <Hero />
        <CategorySection setCategory={setCategory} />
        <ProductDiscovery
          filteredProducts={filteredProducts}
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          sort={sort}
          setSort={setSort}
          wishlist={wishlist}
          toggleWishlist={toggleWishlist}
          addToCart={addToCart}
          setQuickView={setQuickView}
        />
        <BestSellers />
        <Collections />
        <BrandStory />
        <Lookbook />
        <CompleteTheLook addToCart={addToCart} showToast={showToast} />
        <Testimonials />
        <Benefits />
        <Newsletter showToast={showToast} />
      </main>

      <Footer />

      {/* Overlays */}
      <CartDrawer
        cart={cart}
        cartTotal={cartTotal}
        cartCount={cartCount}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        updateQty={updateQty}
        removeFromCart={removeFromCart}
        showToast={showToast}
      />

      {quickView && (
        <QuickViewModal
          product={quickView}
          onClose={() => setQuickView(null)}
          addToCart={addToCart}
          wishlist={wishlist}
          toggleWishlist={toggleWishlist}
        />
      )}

      <Toast message={toast} />
      <ScrollToTop />
    </div>
  )
}