import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard - HaathSe',
  description: 'Manage your HaathSe account and orders',
}

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-20 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
                Dashboard
              </h1>
              <p className="text-lg text-muted-foreground">
                Manage your purchases, collections, and artisan connections in one place.
              </p>
            </div>
          </div>
        </section>

        {/* Dashboard Content */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-secondary rounded-lg border border-border p-6">
                <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wide mb-2">
                  Total Orders
                </p>
                <p className="font-heading text-3xl font-bold text-foreground">12</p>
              </div>
              <div className="bg-secondary rounded-lg border border-border p-6">
                <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wide mb-2">
                  Saved Artisans
                </p>
                <p className="font-heading text-3xl font-bold text-foreground">8</p>
              </div>
              <div className="bg-secondary rounded-lg border border-border p-6">
                <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wide mb-2">
                  Amount Spent
                </p>
                <p className="font-heading text-3xl font-bold text-accent">₹24,500</p>
              </div>
              <div className="bg-secondary rounded-lg border border-border p-6">
                <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wide mb-2">
                  Impact Made
                </p>
                <p className="font-heading text-3xl font-bold text-foreground">15 hrs</p>
              </div>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content - Left Column */}
              <div className="lg:col-span-2 flex flex-col gap-8">
                {/* Recent Orders */}
                <div className="bg-secondary rounded-lg border border-border p-8">
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                    Recent Orders
                  </h2>
                  <div className="space-y-4">
                    {[1, 2, 3].map((order) => (
                      <div key={order} className="flex items-center justify-between py-4 border-b border-border last:border-b-0">
                        <div>
                          <p className="font-semibold text-foreground">Hand Block Printed Saree</p>
                          <p className="text-sm text-muted-foreground">Order #HM{1000 + order}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-foreground">₹4,500</p>
                          <p className="text-sm text-accent">Delivered</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="mt-6 w-full py-2 px-4 border border-accent text-accent text-sm font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors">
                    View All Orders
                  </button>
                </div>

                {/* Wishlist */}
                <div className="bg-secondary rounded-lg border border-border p-8">
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                    My Wishlist
                  </h2>
                  <div className="space-y-4">
                    {['Ceramic Vase', 'Wooden Sculpture', 'Textile Art'].map((item, index) => (
                      <div key={index} className="flex items-center justify-between py-4 border-b border-border last:border-b-0">
                        <p className="text-foreground">{item}</p>
                        <button className="text-accent hover:text-accent/80 text-sm font-medium">
                          Add to Cart
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar - Right Column */}
              <div className="flex flex-col gap-8">
                {/* Profile Section */}
                <div className="bg-secondary rounded-lg border border-border p-8">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-4">
                    Your Profile
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Name</p>
                      <p className="text-foreground font-semibold">Aisha Patel</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Email</p>
                      <p className="text-foreground font-semibold">aisha@example.com</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Member Since</p>
                      <p className="text-foreground font-semibold">January 2024</p>
                    </div>
                    <button className="mt-6 w-full py-2 px-4 border border-accent text-accent text-sm font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors">
                      Edit Profile
                    </button>
                  </div>
                </div>

                {/* Favorite Artisans */}
                <div className="bg-secondary rounded-lg border border-border p-8">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-4">
                    Favorite Artisans
                  </h3>
                  <div className="space-y-3">
                    {['Priya Sharma', 'Rajesh Patel', 'Lakshmi Devi'].map((artisan, index) => (
                      <p key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-2 h-2 bg-accent rounded-full"></span>
                        {artisan}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
