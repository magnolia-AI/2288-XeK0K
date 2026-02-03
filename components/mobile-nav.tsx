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
          variant="ghost" 
          size="icon" 
          className="md:hidden h-9 w-9 bg-muted/20 hover:bg-muted/40 transition-all rounded-lg"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[280px] p-0 flex flex-col border-r shadow-2xl overflow-hidden">
        <SheetHeader className="p-6 border-b bg-gradient-to-br from-muted/50 to-background">
          <SheetTitle asChild>
            <Link 
              href="/" 
              className="flex items-center gap-2 text-xl font-bold tracking-tighter"
              onClick={() => setOpen(false)}
            >
              <Footprints className="h-6 w-6 text-primary rotate-45" />
              <span>REX<span className="text-primary">SHOP</span></span>
            </Link>
          </SheetTitle>
        </SheetHeader>
        
        <nav className="flex-1 py-4 overflow-y-auto">
          <div className="px-3 mb-2">
            <p className="px-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 mb-2 mt-2">
              Navigation
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
                  "flex items-center justify-between px-6 py-3 mx-2 rounded-xl text-sm font-semibold transition-all group duration-200",
                  isActive 
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20" 
                    : "text-muted-foreground hover:bg-muted/80 hover:text-foreground hover:translate-x-1"
                )}
                onClick={() => setOpen(false)}
              >
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "p-2 rounded-lg",
                    isActive ? "bg-white/20" : "bg-muted shadow-inner"
                  )}>
                    <Icon className="h-4 w-4" />
                  </div>
                  {link.label}
                </div>
                {!isActive && <ChevronRight className="h-4 w-4 opacity-30 group-hover:opacity-100 transition-all" />}
              </Link>
            )
          })}
        </nav>
        
        <div className="mt-auto p-6 border-t bg-muted/30">
          <div className="flex flex-col gap-4">
            <div className="p-4 bg-background/50 backdrop-blur rounded-xl border border-border/50 shadow-sm">
              <p className="text-[11px] leading-relaxed text-muted-foreground italic text-center">
                "Genetically engineered for apex performance."
              </p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

