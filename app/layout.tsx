import './globals.css'
import type { Metadata } from 'next'
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from '@/components/theme-provider'
import { AuthProvider } from '@/components/auth-provider'
import { AuthHeader } from '@/components/auth-header'
import { Footer } from '@/components/footer'
import { neonAuth } from '@neondatabase/auth/next/server'

export const metadata: Metadata = {
  title: 'RexShop | Premium T-Rex Hardware & Accessories',
  description: 'The ultimate destination for prehistoric power players and dinosaur enthusiasts.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const initialSession = await neonAuth();

  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="h-full flex flex-col antialiased selection:bg-primary selection:text-primary-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <AuthProvider initialSession={initialSession}>
            <div className="flex flex-col min-h-screen">
              <AuthHeader />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
            <Toaster />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
