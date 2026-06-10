import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Card from '@/components/Card'
import Footer from '@/components/Footer'

const artisans = [
  {
    name: 'Priya Sharma',
    village: 'Jaipur, Rajasthan',
    craft: 'Hand Block Printing',
    daysToMake: 14,
  },
  {
    name: 'Rajesh Patel',
    village: 'Ahmedabad, Gujarat',
    craft: 'Textile Weaving',
    daysToMake: 21,
  },
  {
    name: 'Lakshmi Devi',
    village: 'Thanjavur, Tamil Nadu',
    craft: 'Bronze Sculpture',
    daysToMake: 30,
  },
  {
    name: 'Arun Kumar',
    village: 'Khimsar, Rajasthan',
    craft: 'Ceramic Pottery',
    daysToMake: 10,
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      {/* Artisans Grid Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-accent text-sm font-semibold tracking-wide uppercase mb-4">
              Featured Collection
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Artisans
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Each artisan brings generations of skill and tradition to their craft. Discover the stories behind every handmade creation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {artisans.map((artisan, index) => (
              <Card
                key={index}
                name={artisan.name}
                village={artisan.village}
                craft={artisan.craft}
                daysToMake={artisan.daysToMake}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-secondary border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center flex flex-col gap-8">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Support Artisans?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Join thousands of conscious consumers supporting handmade traditions and empowering artisan communities.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 transition-colors">
                Shop Now
              </button>
              <button className="px-8 py-3 border border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-colors">
                Learn About Artisans
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
