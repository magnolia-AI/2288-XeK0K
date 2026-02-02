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
import { LogOut, Settings, Footprints } from 'lucide-react';
import { CartSheet } from '@/components/cart-sheet';

export function AuthHeader() {
  const { user, isPending, signOut } = useAuthClient();

  const handleSignOut = async () => {
    await signOut();
    window.location.href = '/';
  };

  if (isPending) {
    return (
      <header className="border-b bg-background sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-6 h-16 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-xl font-bold tracking-tighter">
              <Footprints className="h-6 w-6 text-primary rotate-45" />
              <span>REX<span className="text-primary">SHOP</span></span>
            </div>
          </div>
          <div className="h-9 w-9 rounded-full bg-muted animate-pulse" />
        </div>
      </header>
    );
  }

  return (
    <header className="border-b bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6 h-16 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tighter hover:opacity-90 transition-opacity">
            <Footprints className="h-6 w-6 text-primary rotate-45" />
            <span>REX<span className="text-primary">SHOP</span></span>
          </Link>
          <nav className="hidden md:flex gap-6 items-center">
            <Link href="/products" className="text-sm font-semibold hover:text-primary transition-colors">
              T-Rex Catalog
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <CartSheet />
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {user.name?.charAt(0).toUpperCase() || user.email?.charAt(0).toUpperCase() || 'U'}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-1 leading-none">
                    {user.name && <p className="font-medium">{user.name}</p>}
                    {user.email && (
                      <p className="w-[200px] truncate text-sm text-muted-foreground">
                        {user.email}
                      </p>
                    )}
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/account/settings" className="cursor-pointer">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer text-destructive">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="ghost" asChild>
                <Link href="/auth/sign-in">Sign in</Link>
              </Button>
              <Button asChild>
                <Link href="/auth/sign-up">Sign up</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
