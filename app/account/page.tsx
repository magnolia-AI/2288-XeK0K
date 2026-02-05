'use client';

import { ExplorerStats } from '@/components/account/explorer-stats';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useUserProfile } from '@/hooks/use-user-profile';
import { Settings, LogOut, Package, History, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AccountPage() {
  const { profile } = useUserProfile();

  const menuItems = [
    { label: 'Order History', icon: History, href: '/account/orders' },
    { label: 'Inventory', icon: Package, href: '/account/inventory' },
    { label: 'Profile Settings', icon: User, href: '/account/settings' },
  ];

  return (
    <div className="container max-w-6xl py-12 px-4 sm:px-6">
      <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-4xl font-black italic tracking-tighter uppercase text-foreground">
            Explorer Dashboard
          </h1>
          <p className="text-sm text-muted-foreground uppercase tracking-[0.2em] mt-1 font-medium">
            Welcome back, Cadet
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/account/settings">
            <Button variant="outline" size="sm" className="rounded-none border-white/10 hover:bg-white/5 uppercase text-[10px] tracking-widest font-bold">
              <Settings className="mr-2 h-3.5 w-3.5" />
              Settings
            </Button>
          </Link>
          <Button variant="ghost" size="sm" className="rounded-none hover:bg-destructive/10 hover:text-destructive uppercase text-[10px] tracking-widest font-bold">
            <LogOut className="mr-2 h-3.5 w-3.5" />
            Sign Out
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left Column: Explorer Stats */}
        <div className="lg:col-span-4">
          <ExplorerStats />
        </div>

        {/* Right Column: Quick Actions & Overview */}
        <div className="space-y-6 lg:col-span-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {menuItems.map((item) => (
              <Link key={item.label} href={item.href}>
                <Card className="rounded-none border-white/10 bg-white/5 transition-all hover:bg-white/10 hover:border-primary/50 group text-center py-8">
                  <div className="flex flex-col items-center gap-3">
                    <item.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] uppercase tracking-widest font-bold">{item.label}</span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <Card className="rounded-none border-white/10 bg-black/40 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-lg font-black italic tracking-tighter uppercase">Recent Activity</CardTitle>
              <CardDescription className="text-xs uppercase tracking-widest">Your last field reports and updates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-2 border-primary/20 bg-white/5 p-4 flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-xs font-bold uppercase tracking-tight">System Refined</p>
                    <p className="text-[10px] text-muted-foreground">Successfully reached Level {profile.explorerLevel}</p>
                  </div>
                  <span className="text-[10px] text-muted-foreground font-mono">2 days ago</span>
                </div>
                <div className="border-l-2 border-white/10 bg-white/5 p-4 flex items-center justify-between opacity-50">
                  <div className="space-y-1">
                    <p className="text-xs font-bold uppercase tracking-tight">Gear Acquired</p>
                    <p className="text-[10px] text-muted-foreground">Order REX-992-PDX Completed</p>
                  </div>
                  <span className="text-[10px] text-muted-foreground font-mono">1 week ago</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

