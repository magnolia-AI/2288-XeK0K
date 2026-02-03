import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Video from '@/components/video';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Cinematic Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Animated Background Video */}
        <div className="absolute inset-0 z-0">
          <Video
            src="/videos/hero-animation.mp4"
            className="h-full w-full object-cover brightness-[0.4]"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
        </div>
        
        {/* Glassmorphism Content Card */}
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto backdrop-blur-md bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl text-center">
            <div className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full border border-primary/20">
              Genetic Excellence Defined
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white leading-tight">
              MASTER THE <span className="text-primary italic">APEX</span>
            </h1>
            <p className="text-lg md:text-xl mb-10 max-w-xl mx-auto text-gray-300 font-light leading-relaxed">
              Ethically sequenced, genetically perfected Tyrannosaurus Rex variants. The ultimate acquisition for the world's most elite collectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="h-14 px-10 text-lg font-bold rounded-xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(var(--primary),0.3)]" asChild>
                <Link href="/products">View Specimens</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-10 text-lg font-medium rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 transition-all" asChild>
                <Link href="/about">Process & Lineage</Link>
              </Button>
            </div>
            
            {/* Quick Stats Overlay */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/10 text-white/60">
              <div>
                <div className="text-2xl font-bold text-white">99.9%</div>
                <div className="text-[10px] uppercase tracking-widest mt-1">Purity</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">5</div>
                <div className="text-[10px] uppercase tracking-widest mt-1">Founders</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">0</div>
                <div className="text-[10px] uppercase tracking-widest mt-1">Incidents</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-white" />
          <div className="text-[10px] uppercase tracking-[0.2em] font-medium text-white">Explore</div>
        </div>
      </section>

      {/* Trust Markers Section */}
      <section className="py-24 relative bg-background border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="group text-center">
              <div className="w-20 h-20 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-8 text-3xl border border-primary/10 transition-all group-hover:bg-primary/10 group-hover:scale-110">
                🧬
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Cretaceous Accuracy</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our specimens feature 99.9% accurate Cretaceous DNA sequencing for authentic mesozoic presence and behavior.
              </p>
            </div>
            <div className="group text-center">
              <div className="w-20 h-20 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-8 text-3xl border border-primary/10 transition-all group-hover:bg-primary/10 group-hover:scale-110">
                🏔️
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Titanium Logistics</h3>
              <p className="text-muted-foreground leading-relaxed">
                Reinforced titanium containment units delivered via stealth heavy-lift aircraft directly to your secure enclosure.
              </p>
            </div>
            <div className="group text-center">
              <div className="w-20 h-20 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-8 text-3xl border border-primary/10 transition-all group-hover:bg-primary/10 group-hover:scale-110">
                🛡️
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Lifetime Guardianship</h3>
              <p className="text-muted-foreground leading-relaxed">
                24/7 genetic monitoring and temperament consultation by our world-class paleontological staff.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
