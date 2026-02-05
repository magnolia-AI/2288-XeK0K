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

  const headerStyles = "sticky top-0 z-50 w-full glass-header transition-all duration-300";

  if (isPending) {
    return (
      <header className={headerStyles}>
        <div className="container max-w-7xl mx-auto px-4 md:px-6 h-16 flex justify-between items-center relative z-10">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-xl font-bold tracking-tighter">
              <div className="h-6 w-6 bg-muted rounded-md animate-pulse rotate-45" />
              <div className="h-6 w-24 bg-muted animate-pulse rounded" />
            </div>
          </div>
          <div className="h-9 w-9 rounded-full bg-muted animate-pulse" />
        </div>
      </header>
    );
  }

  return (
    <header className={headerStyles}>
      <div className="container max-w-7xl mx-auto px-4 md:px-6 h-16 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Footprints className="h-6 w-6 text-primary rotate-45 transition-transform duration-300 group-hover:scale-110" />
            </div>
            <span className="text-xl font-bold tracking-tighter">
              REX<span className="text-primary">SHOP</span>
            </span>
          </Link>

          <nav className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative py-2 text-[13px] font-medium tracking-widest uppercase transition-colors duration-300",
                    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-[1px] bg-primary"
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

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 md:gap-2 mr-2">
            <MobileNav />
            <ThemeToggle />
            <CartSheet />
          </div>

          <div className="hidden h-6 w-[1px] bg-border md:block mx-1" />

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-9 w-9 rounded-none ring-1 ring-white/10 transition-all hover:ring-primary/50 p-0">
                  <Avatar className="h-8 w-8 rounded-none">
                    <AvatarFallback className="bg-primary/10 text-primary font-bold text-xs rounded-none">
                      {user.name?.charAt(0).toUpperCase() || user.email?.charAt(0).toUpperCase() || 'U'}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 mt-2 rounded-none border-white/10 shadow-xl overflow-hidden p-1 bg-black/95 backdrop-blur-xl">
                <div className="flex items-center justify-start gap-2 p-3 bg-white/5 mb-1 rounded-none">
                  <div className="flex flex-col space-y-1">
                    {user.name && <p className="font-bold text-xs uppercase tracking-tighter leading-none">{user.name}</p>}
                    <p className="text-[10px] text-muted-foreground font-mono truncate max-w-[180px]">
                      {user.email}
                    </p>
                  </div>
                </div>
                <DropdownMenuSeparator className="mx-1 bg-white/5" />
                <DropdownMenuItem asChild className="rounded-none m-1 cursor-pointer focus:bg-white/10">
                  <Link href="/account/settings" className="flex items-center w-full">
                    <Settings className="mr-2 h-4 w-4 opacity-70" />
                    <span className="text-xs uppercase tracking-widest font-bold">Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="mx-1 bg-white/5" />
                <DropdownMenuItem onClick={handleSignOut} className="rounded-none m-1 cursor-pointer text-destructive focus:bg-destructive/10 focus:text-destructive">
                  <LogOut className="mr-2 h-4 w-4 opacity-70" />
                  <span className="text-xs uppercase tracking-widest font-bold">Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="ghost" asChild className="hidden sm:flex text-[10px] font-bold uppercase tracking-[0.2em] rounded-none px-5 transition-all">
                <Link href="/auth/sign-in">Sign in</Link>
              </Button>
              <Button variant="secondary" asChild className="h-9 px-6 rounded-none text-[10px] font-bold uppercase tracking-[0.2em] transition-all active:scale-95">
                <Link href="/auth/sign-up">Sign up</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

