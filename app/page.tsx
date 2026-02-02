import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-rex.webp"
            alt="Majestic T-Rex in a landscape"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">
            OWN THE APEX <span className="text-primary">PREDATOR</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200">
            Ethically sourced, genetically perfected Tyrannosaurus Rex variants for the discerning collector.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8" asChild>
              <Link href="/products">Shop Collection</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 hover:bg-white/20 border-white/20 text-white" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Features */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-primary text-2xl">
                🧬
              </div>
              <h3 className="text-xl font-bold mb-3">Genetic Purity</h3>
              <p className="text-muted-foreground">
                99.9% accurate Cretaceous DNA sequencing for authentic mesozoic presence.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-primary text-2xl">
                🏔️
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Shipping</h3>
              <p className="text-muted-foreground">
                Reinforced titanium containment units delivered via heavy-lift helicopter.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-primary text-2xl">
                🍖
              </div>
              <h3 className="text-xl font-bold mb-3">Full Support</h3>
              <p className="text-muted-foreground">
                Lifetime consultation on dietary needs and temperament management.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
