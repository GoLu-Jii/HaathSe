import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About HaathSe',
  description: 'Learn about our mission to support artisan communities',
}

export default function About() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-accent text-sm font-semibold tracking-wide uppercase mb-4">
                Our Story
              </p>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                About HaathSe
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                HaathSe was founded with a simple mission: to preserve traditional craftsmanship and empower artisan communities across India by connecting them directly with conscious consumers worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg border border-accent/40 flex items-center justify-center">
                  <span className="text-accent font-heading font-bold">01</span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  Preserve Heritage
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We celebrate centuries of artistic tradition by showcasing handcrafted goods that embody cultural heritage and ancestral skills.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg border border-accent/40 flex items-center justify-center">
                  <span className="text-accent font-heading font-bold">02</span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  Empower Communities
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Direct sales ensure artisans receive fair compensation, enabling them to continue their craft and support their families sustainably.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg border border-accent/40 flex items-center justify-center">
                  <span className="text-accent font-heading font-bold">03</span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  Foster Connection
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every purchase creates a meaningful connection between artisans and collectors, bridging continents through shared appreciation of craftsmanship.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 md:py-28 bg-secondary border-y border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <p className="font-heading text-3xl md:text-4xl font-bold text-accent mb-2">
                  500+
                </p>
                <p className="text-sm text-muted-foreground">Artisans Supported</p>
              </div>
              <div className="text-center">
                <p className="font-heading text-3xl md:text-4xl font-bold text-accent mb-2">
                  50+
                </p>
                <p className="text-sm text-muted-foreground">Villages Connected</p>
              </div>
              <div className="text-center">
                <p className="font-heading text-3xl md:text-4xl font-bold text-accent mb-2">
                  1000+
                </p>
                <p className="text-sm text-muted-foreground">Handmade Products</p>
              </div>
              <div className="text-center">
                <p className="font-heading text-3xl md:text-4xl font-bold text-accent mb-2">
                  15+
                </p>
                <p className="text-sm text-muted-foreground">Craft Categories</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Our Values
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="border-l-2 border-accent pl-6">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  Authenticity
                </h3>
                <p className="text-muted-foreground">
                  Every product is genuine, handmade, and carries the unique signature of its artisan creator. No mass production, only authentic craftsmanship.
                </p>
              </div>
              <div className="border-l-2 border-accent pl-6">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  Fair Trade
                </h3>
                <p className="text-muted-foreground">
                  We believe in equitable partnerships where artisans are compensated fairly for their expertise and labor, ensuring sustainable livelihoods.
                </p>
              </div>
              <div className="border-l-2 border-accent pl-6">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  Sustainability
                </h3>
                <p className="text-muted-foreground">
                  We prioritize eco-friendly practices and support artisans who use traditional, sustainable methods and natural materials.
                </p>
              </div>
              <div className="border-l-2 border-accent pl-6">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  Transparency
                </h3>
                <p className="text-muted-foreground">
                  You know who made your product, where it comes from, and how your purchase contributes to artisan communities.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
