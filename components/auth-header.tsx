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
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

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
  ];

  const headerStyles = "sticky top-0 z-50 w-full glass-header transition-all duration-300";

  if (isPending) {
    return (
      <header className={headerStyles}>
        <div className="container mx-auto px-4 md:px-6 h-16 flex justify-between items-center relative z-10">
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
      <div className="container mx-auto px-4 md:px-6 h-16 flex justify-between items-center relative z-10">
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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative py-1",
                  pathname === link.href ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full" : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 md:gap-2 mr-2">
            <MobileNav />
            <CartSheet />
          </div>

          <div className="hidden h-6 w-[1px] bg-border md:block mx-1" />

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-9 w-9 rounded-full ring-2 ring-transparent transition-all hover:ring-primary/20">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-primary/10 text-primary font-bold text-xs">
                      {user.name?.charAt(0).toUpperCase() || user.email?.charAt(0).toUpperCase() || 'U'}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 mt-2 rounded-xl border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden p-1">
                <div className="flex items-center justify-start gap-2 p-3 bg-muted/30 mb-1 rounded-lg">
                  <div className="flex flex-col space-y-1">
                    {user.name && <p className="font-semibold text-sm leading-none">{user.name}</p>}
                    <p className="text-xs text-muted-foreground truncate max-w-[180px]">
                      {user.email}
                    </p>
                  </div>
                </div>
                <DropdownMenuSeparator className="mx-1" />
                <DropdownMenuItem asChild className="rounded-lg m-1 cursor-pointer">
                  <Link href="/account/settings">
                    <Settings className="mr-2 h-4 w-4 opacity-70" />
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="mx-1" />
                <DropdownMenuItem onClick={handleSignOut} className="rounded-lg m-1 cursor-pointer text-destructive focus:bg-destructive/10 focus:text-destructive">
                  <LogOut className="mr-2 h-4 w-4 opacity-70" />
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="ghost" asChild className="hidden sm:flex text-sm font-medium hover:bg-muted rounded-full px-5">
                <Link href="/auth/sign-in">Sign in</Link>
              </Button>
              <Button asChild className="h-9 px-5 rounded-full shadow-md shadow-primary/10 transition-all hover:shadow-primary/20 active:scale-95 text-sm font-semibold">
                <Link href="/auth/sign-up">Sign up</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

