export default function BrandStory() {
  return (
    <section id="about" className="bg-white border-y border-black/5" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 id="about-heading" className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Designed for movement. Made for presence.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#6B6B6B]">
            Veyra Studio exists for people who move between work, travel, weekends, and nights out.
            We focus on minimal design, versatile clothing, and premium everyday quality without excess.
          </p>
          <p className="mt-4 text-base leading-relaxed">
            Every piece is cut for comfort, built from considered fabrics, and finished with quiet details.
            Structured essentials. Soft comfort. Quiet confidence.
          </p>
          <blockquote className="mt-8 border-l-2 border-[#111111] pl-4 italic text-base text-[#6B6B6B]">
            "We make clothing that works as hard as your day does, and still looks sharp at night."
            <footer className="mt-2 not-italic text-sm font-medium text-[#111111]">— The Veyra Studio Team</footer>
          </blockquote>
        </div>
        <div className="aspect-[4/3] rounded-2xl relative overflow-hidden">
          <img
            src="/images/brand-story.jpg"
            alt="Veyra Studio fabric and design process"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}