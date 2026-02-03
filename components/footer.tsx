import Link from 'next/link';
import { Footprints, Mail, Instagram, Twitter, Shield, Truck, RefreshCw } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  return (
    <footer className="w-full bg-slate-50 dark:bg-slate-950/50 border-t">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold tracking-tighter">
              <Footprints className="h-7 w-7 text-primary rotate-45" />
              <span>REX<span className="text-primary">SHOP</span></span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Step into the prehistoric world with RexShop. We provide premium roaring hardware and accessories for the modern dinosaur enthusiast.
            </p>
            <div className="flex gap-4 mt-2">
              <Link href="#" className="h-9 w-9 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-primary hover:text-primary-foreground transition-all">
                <Instagram className="h-4 w-4" />
              </Link>
              <Link href="#" className="h-9 w-9 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-primary hover:text-primary-foreground transition-all">
                <Twitter className="h-4 w-4" />
              </Link>
              <Link href="#" className="h-9 w-9 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-primary hover:text-primary-foreground transition-all">
                <Mail className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-base uppercase tracking-wider">Navigation</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">T-Rex Catalog</Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">New Arrivals</Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Special Offers</Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Gift Cards</Link>
            </nav>
          </div>

          {/* Customer Service */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-base uppercase tracking-wider">Features</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Truck className="h-4 w-4 text-primary" />
                <span>Pangea-wide Shipping</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <RefreshCw className="h-4 w-4 text-primary" />
                <span>65 Million Year Warranty</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-primary" />
                <span>Secure Fossil Payments</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-base uppercase tracking-wider">Stay Roaring</h3>
            <p className="text-sm text-muted-foreground">Join our pack for exclusive updates and apex predator tips.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Apex email" 
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                Join
              </button>
            </div>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} RexShop Industries. All rights reserved by the Apex.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary">Terms of Service</Link>
            <Link href="#" className="hover:text-primary">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

