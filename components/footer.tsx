import Link from 'next/link';
import { Footprints, Mail, Instagram, Twitter, Shield, Truck, RefreshCw } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  return (
    <footer className="w-full bg-black border-t border-white/5 relative overflow-hidden backdrop-blur-3xl font-heading">
      {/* Decorative HUD line at very top */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Brand Section */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 text-3xl font-black tracking-tighter transition-all hover:scale-105 active:scale-95 uppercase">
              <Footprints className="h-8 w-8 text-primary rotate-45" />
              <span className="text-white">REX<span className="text-primary italic">SHOP</span></span>
            </Link>
            <p className="text-zinc-400 text-base max-w-xs leading-relaxed font-medium">
              Step into the prehistoric world with RexShop. We provide premium roaring specimens and genetic masterpieces for the modern apex enthusiast.
            </p>
            <div className="flex gap-4 mt-2">
              <Link href="#" className="h-10 w-10 flex items-center justify-center rounded-none border border-white/10 bg-white/5 hover:bg-primary hover:text-black transition-all">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="h-10 w-10 flex items-center justify-center rounded-none border border-white/10 bg-white/5 hover:bg-primary hover:text-black transition-all">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="h-10 w-10 flex items-center justify-center rounded-none border border-white/10 bg-white/5 hover:bg-primary hover:text-black transition-all">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="font-black text-sm uppercase tracking-[0.3em] text-white/50">Connectivity</h3>
            <nav className="flex flex-col gap-3 font-bold text-base">
              <Link href="/products" className="text-zinc-200 hover:text-primary transition-all hover:translate-x-1">The Catalog</Link>
              <Link href="#" className="text-zinc-200 hover:text-primary transition-all hover:translate-x-1">Gene Sequencing</Link>
              <Link href="#" className="text-zinc-200 hover:text-primary transition-all hover:translate-x-1">Specimen Tracking</Link>
              <Link href="#" className="text-zinc-200 hover:text-primary transition-all hover:translate-x-1">Client Authorization</Link>
            </nav>
          </div>

          {/* Customer Service */}
          <div className="flex flex-col gap-6">
            <h3 className="font-black text-sm uppercase tracking-[0.3em] text-white/50">Technical Specs</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-base text-zinc-100 font-bold">
                <Truck className="h-5 w-5 text-primary" />
                <span>Pangea-wide Logistics</span>
              </div>
              <div className="flex items-center gap-3 text-base text-zinc-100 font-bold">
                <RefreshCw className="h-5 w-5 text-primary" />
                <span>65M Year Quality Pledge</span>
              </div>
              <div className="flex items-center gap-3 text-base text-zinc-100 font-bold">
                <Shield className="h-5 w-5 text-primary" />
                <span>Secure Fossil Protocol</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-6">
            <h3 className="font-black text-sm uppercase tracking-[0.3em] text-white/50">Secure Channel</h3>
            <p className="text-base text-zinc-400 font-medium leading-relaxed">Join our pack for exclusive genetic updates and apex predator tactical tips.</p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Enter Authorized Email" 
                className="flex h-12 w-full rounded-none border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold ring-offset-background placeholder:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all uppercase"
              />
              <button className="inline-flex items-center justify-center rounded-none text-sm font-black tracking-widest uppercase ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-black hover:bg-primary/90 h-12 px-6">
                Establish Link
              </button>
            </div>
          </div>
        </div>

        <Separator className="my-16 bg-white/5" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold text-zinc-500 tracking-[0.2em]">
          <p>© {new Date().getFullYear()} REXSHOP GLOBAL INDUSTRIES. ALL RIGHTS RESERVED BY THE APEX.</p>
          <div className="flex gap-8 uppercase">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Protocol</Link>
            <Link href="#" className="hover:text-primary transition-colors">Client Mandates</Link>
            <Link href="#" className="hover:text-primary transition-colors">Data Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
