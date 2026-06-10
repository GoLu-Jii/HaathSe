import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
            {/* Brand Column */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
                  <span className="text-primary font-heading font-bold text-sm">HS</span>
                </div>
                <span className="font-heading text-lg font-semibold text-foreground">
                  HaathSe
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Connecting artisans with conscious consumers. Supporting handmade traditions from Indian villages.
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col gap-4">
              <h4 className="font-heading font-semibold text-foreground">Quick Links</h4>
              <div className="flex flex-col gap-3">
                <Link href="/" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Home
                </Link>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  About
                </Link>
                <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Dashboard
                </Link>
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-col gap-4">
              <h4 className="font-heading font-semibold text-foreground">Categories</h4>
              <div className="flex flex-col gap-3">
                <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Textiles
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Ceramics
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Jewelry
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Woodcraft
                </a>
              </div>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-4">
              <h4 className="font-heading font-semibold text-foreground">Connect</h4>
              <div className="flex flex-col gap-3">
                <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Facebook
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Email
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              &copy; 2024 HaathSe. All rights reserved. Celebrating artisan heritage.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-xs text-muted-foreground hover:text-accent transition-colors">
                Privacy
              </a>
              <a href="#" className="text-xs text-muted-foreground hover:text-accent transition-colors">
                Terms
              </a>
              <a href="#" className="text-xs text-muted-foreground hover:text-accent transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
