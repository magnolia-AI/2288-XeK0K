'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuthClient } from '@/lib/auth/client';
import { LogOut, Settings, Footprints, ShoppingBag } from 'lucide-react';
import { CartSheet } from '@/components/cart-sheet';
import { MobileNav } from '@/components/mobile-nav';
import { ThemeToggle } from '@/components/theme-toggle';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export function AuthHeader() {
  const { user, isPending, signOut } = useAuthClient();
  const pathname = usePathname();

  const handleSignOut = async () => {
    await signOut();
    window.location.href = '/';
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'The Catalog', href: '/products' },
    { name: 'Contact', href: '/contact' },
  ];

  const headerStyles = "sticky top-0 z-50 w-full glass-header border-b border-border/40 transition-all duration-300";

  if (isPending) {
    return (
      <header className={headerStyles}>
        <div className="container max-w-7xl mx-auto px-4 md:px-6 h-20 flex justify-between items-center relative z-10">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-xl font-bold tracking-tighter">
              <div className="h-6 w-6 bg-muted rounded-none animate-pulse rotate-45" />
              <div className="h-6 w-24 bg-muted animate-pulse rounded-none" />
            </div>
          </div>
          <div className="h-10 w-10 rounded-none bg-muted animate-pulse" />
        </div>
      </header>
    );
  }

  return (
    <header className={headerStyles}>
      <div className="container max-w-7xl mx-auto px-4 md:px-6 h-20 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Footprints className="h-6 w-6 text-primary rotate-45 transition-transform duration-500 group-hover:rotate-[225deg]" />
              <div className="absolute -inset-1 bg-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <span className="text-xl font-black tracking-tighter uppercase italic">
              REX<span className="text-primary not-italic">SHOP</span>
            </span>
          </Link>

          <nav className="hidden lg:flex gap-10 items-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative py-1 text-[11px] font-bold tracking-[0.25em] uppercase transition-all duration-300",
                    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <MobileNav />
            <div className="flex items-center gap-[2px]">
              <ThemeToggle />
              <CartSheet />
            </div>
          </div>

          <div className="hidden h-8 w-[1px] bg-border md:block" />

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="group relative h-10 w-10 rounded-none ring-1 ring-border transition-all hover:ring-primary/50 overflow-hidden p-0">
                  <Avatar className="h-full w-full rounded-none">
                    <AvatarFallback className="bg-muted text-primary font-black text-[10px] rounded-none">
                      {user.name?.charAt(0).toUpperCase() || user.email?.charAt(0).toUpperCase() || 'U'}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 mt-4 rounded-none border-border shadow-2xl p-0 bg-background/95 backdrop-blur-2xl">
                <div className="flex flex-col p-4 bg-muted/30 border-b border-border/50">
                  {user.name && <p className="font-black text-[10px] uppercase tracking-widest leading-none mb-1">{user.name}</p>}
                  <p className="text-[9px] text-muted-foreground font-mono truncate">
                    {user.email}
                  </p>
                </div>
                <div className="p-1">
                  <DropdownMenuItem asChild className="rounded-none cursor-pointer focus:bg-muted transition-colors">
                    <Link href="/account/settings" className="flex items-center w-full px-3 py-2">
                      <Settings className="mr-3 h-3.5 w-3.5 opacity-50" />
                      <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Settings</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-border mx-1" />
                  <DropdownMenuItem onClick={handleSignOut} className="rounded-none cursor-pointer text-destructive focus:bg-destructive/10 focus:text-destructive transition-colors">
                    <Link href="#" className="flex items-center w-full px-3 py-2">
                      <LogOut className="mr-3 h-3.5 w-3.5 opacity-50" />
                      <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Sign out</span>
                    </Link>
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-4">
              <Button variant="ghost" asChild className="hidden sm:flex h-11 text-[10px] font-black uppercase tracking-[0.3em] rounded-none px-6 transition-all hover:text-primary hover:bg-transparent">
                <Link href="/auth/sign-in">Sign in</Link>
              </Button>
              <Button asChild className="h-11 px-8 rounded-none text-[10px] font-black uppercase tracking-[0.3em] bg-foreground text-background hover:bg-primary transition-all active:scale-95 shadow-[0_0_20px_rgba(var(--foreground),0.1)] hover:shadow-primary/20">
                <Link href="/auth/sign-up">Sign up</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>

  );
}
