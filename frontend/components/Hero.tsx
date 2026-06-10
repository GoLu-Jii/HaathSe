export default function Hero() {
  return (
    <section className="min-h-screen bg-background flex items-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center py-16 md:py-24">
          {/* Left - Text Content */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-accent text-sm font-semibold tracking-wide uppercase mb-4">
                Authentic Craftsmanship
              </p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Handmade by Artisans
              </h1>
              <p className="text-base md:text-lg text-muted-foreground mt-6 leading-relaxed">
                Discover exquisite handcrafted goods directly from Indian villages. Each piece tells a story of heritage, tradition, and masterful skill.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 transition-colors">
                Explore Collection
              </button>
              <button className="px-8 py-3 border border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-colors">
                Learn More
              </button>
            </div>

            <div className="flex gap-8 pt-8">
              <div>
                <p className="text-2xl font-heading font-bold text-accent">500+</p>
                <p className="text-sm text-muted-foreground">Artisans</p>
              </div>
              <div>
                <p className="text-2xl font-heading font-bold text-accent">1000+</p>
                <p className="text-sm text-muted-foreground">Products</p>
              </div>
              <div>
                <p className="text-2xl font-heading font-bold text-accent">50+</p>
                <p className="text-sm text-muted-foreground">Villages</p>
              </div>
            </div>
          </div>

          {/* Right - Image Placeholder */}
          <div className="flex items-center justify-center h-96 md:h-full min-h-96">
            <div className="w-full aspect-square bg-secondary rounded-lg border border-border flex items-center justify-center overflow-hidden">
              <div className="text-center">
                <svg className="w-24 h-24 text-muted-foreground mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-muted-foreground text-sm">Artisan Image</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
