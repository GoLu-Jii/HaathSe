'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="border-b border-border bg-background sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
              <span className="text-primary font-heading font-bold text-sm">HS</span>
            </div>
            <span className="font-heading text-xl font-semibold text-foreground hidden sm:inline">
              HaathSe
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            <Link href="/" className="text-foreground hover:text-accent transition-colors text-sm font-medium">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:text-accent transition-colors text-sm font-medium">
              About
            </Link>
            <Link href="/dashboard" className="text-foreground hover:text-accent transition-colors text-sm font-medium">
              Dashboard
            </Link>
            <Link href="/login" className="text-foreground hover:text-accent transition-colors text-sm font-medium">
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-5 h-5 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <div className="flex flex-col gap-4 pt-4">
              <Link href="/" className="text-foreground hover:text-accent transition-colors text-sm font-medium">
                Home
              </Link>
              <Link href="/about" className="text-foreground hover:text-accent transition-colors text-sm font-medium">
                About
              </Link>
              <Link href="/dashboard" className="text-foreground hover:text-accent transition-colors text-sm font-medium">
                Dashboard
              </Link>
              <Link href="/login" className="text-foreground hover:text-accent transition-colors text-sm font-medium">
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
