'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Menu, Home, LayoutGrid, Footprints, ChevronRight } from 'lucide-react'

export function MobileNav() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/products', label: 'T-Rex Catalog', icon: LayoutGrid },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden h-9 w-9 bg-background/20 hover:bg-background/40 backdrop-blur-sm transition-colors border border-primary/10">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] p-0 bg-background/95 backdrop-blur-xl border-r border-primary/20">
        <SheetHeader className="p-6 border-b bg-muted/30">
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
        <nav className="flex flex-col py-4">
          {links.map((link) => {
            const Icon = link.icon
            return (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between px-6 py-4 text-sm font-semibold transition-colors hover:bg-muted/50 group"
                onClick={() => setOpen(false)}
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  {link.label}
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground/50 group-hover:text-primary transition-colors" />
              </Link>
            )
          })}
        </nav>
        <div className="mt-auto p-6 border-t bg-muted/30">
          <p className="text-xs text-muted-foreground text-center">
            Genetically engineered for your satisfaction.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  )
}
