'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Menu, Home, LayoutGrid, Footprints, ChevronRight, ShoppingBag } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/products', label: 'T-Rex Catalog', icon: LayoutGrid },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="outline" 
          size="icon" 
          className="md:hidden h-9 w-9 border border-primary/20 hover:border-primary/50 transition-all bg-white/5 backdrop-blur-sm rounded-none px-0 shadow-[inset_0_0_10px_rgba(255,255,255,0.05)]"
        >
          <Menu className="h-5 w-5 text-foreground/80" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent 
        side="left" 
        className="w-[280px] p-0 flex flex-col border-r border-white/10 bg-background/95 backdrop-blur-xl shadow-2xl overflow-hidden"
      >
        <SheetHeader className="p-6 border-b border-white/5 bg-gradient-to-br from-white/5 to-transparent">
          <SheetTitle asChild>
            <Link 
              href="/" 
              className="flex items-center gap-2 text-xl font-bold tracking-tighter"
              onClick={() => setOpen(false)}
            >
              <Footprints className="h-6 w-6 text-primary rotate-45" />
              <span className="font-heading">REX<span className="text-primary text-glow-primary">SHOP</span></span>
            </Link>
          </SheetTitle>
        </SheetHeader>
        
        <nav className="flex-1 py-4 overflow-y-auto">
          <div className="px-3 mb-2">
            <p className="px-6 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/50 mb-2 mt-2 font-mono">
              SYSTEM.NAV
            </p>
          </div>
          {links.map((link) => {
            const Icon = link.icon
            const isActive = pathname === link.href
            
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center justify-between px-6 py-4 mx-3 rounded-xl text-sm font-semibold transition-all group duration-300",
                  isActive 
                    ? "bg-primary/20 text-primary border border-primary/30 shadow-[0_0_20px_rgba(var(--primary),0.1)]" 
                    : "text-muted-foreground hover:bg-white/5 hover:text-foreground hover:translate-x-1"
                )}
                onClick={() => setOpen(false)}
              >
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "p-2 rounded-lg transition-colors",
                    isActive ? "text-primary text-glow-primary" : "text-muted-foreground group-hover:text-foreground"
                  )}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className={cn(
                    "tracking-tight",
                    isActive && "text-glow-primary"
                  )}>
                    {link.label}
                  </span>
                </div>
                {!isActive && <ChevronRight className="h-4 w-4 opacity-20 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />}
              </Link>
            )
          })}
        </nav>
        
        <div className="mt-auto p-6 border-t border-white/5 bg-white/5 backdrop-blur-sm">
          <div className="flex flex-col gap-4">
            <div className="p-4 bg-background/40 backdrop-blur rounded-xl border border-white/5 shadow-inner">
              <p className="text-[10px] leading-relaxed text-muted-foreground/70 font-mono uppercase tracking-wider text-center">
                Genetically engineered for apex performance.
              </p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
