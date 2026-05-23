import { Instagram, Twitter, Youtube } from 'lucide-react'

const COLUMNS = [
  { title: "Shop", links: ["New Arrivals", "Best Sellers", "Essentials", "Accessories"] },
  { title: "Company", links: ["About", "Journal", "Careers", "Sustainability"] },
  { title: "Support", links: ["Contact", "Shipping", "Returns", "Size Guide"] },
]

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand */}
        <div className="lg:col-span-2">
          <p className="font-semibold tracking-[0.18em] text-lg">VEYRA STUDIO</p>
          <p className="mt-3 text-sm text-[#6B6B6B] max-w-xs leading-relaxed">
            Elevated everyday essentials. Minimal design, premium comfort, quiet confidence.
          </p>
          <div className="mt-4 flex gap-3">
            {[Instagram, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label={["Instagram", "Twitter", "YouTube"][i]}
                className="w-9 h-9 grid place-items-center rounded-full border border-black/10 hover:bg-[#111111] hover:text-white transition focus-ring"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {COLUMNS.map((col) => (
          <div key={col.title}>
            <p className="font-medium text-sm">{col.title}</p>
            <ul className="mt-3 space-y-2 text-sm text-[#6B6B6B]">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-[#111111] transition focus-ring rounded">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between text-xs text-[#6B6B6B]">
          <p>&copy; 2026 Veyra Studio. Fictional brand.</p>
          <p className="hidden sm:block">Visa &middot; Mastercard &middot; PayPal &middot; Apple Pay</p>
        </div>
      </div>
    </footer>
  )
}