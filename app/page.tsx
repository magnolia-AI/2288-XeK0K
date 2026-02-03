import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Video from '@/components/video';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck, Dna, Rocket, ArrowRight, Zap, Microscope } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Cinematic Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Animated Background Video */}
        <div className="absolute inset-0 z-0">
          <Video
            src="/videos/hero-animation.mp4"
            className="h-full w-full object-cover brightness-[0.35] scale-105"
            autoplay
            loop
            muted
          />
          {/* Multi-layered Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_90%)]" />
          
          {/* Subtle Grid Overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none" />
        </div>
        
        {/* Hero Content */}
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-md animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary-foreground/80">
                Secure Genetic Uplink Established
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.9] text-white">
              GENETIC <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-blue-400 italic">
                MASTERPIECES
              </span>
            </h1>
            
            <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-gray-400 font-light leading-relaxed">
              The world's premier digital showroom for pure-bred Tyrannosaurus Rex specimens. 
              Ethically sequenced. Geologically authenticated. Peerless.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-md">
              <Button size="lg" className="group relative h-16 px-10 text-lg font-bold rounded-none overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] bg-primary text-primary-foreground" asChild>
                <Link href="/products">
                  <span>ENTER THE CATALOG</span>
                  <ArrowRight className="ml-2 h-5 w-2 transition-transform group-hover:translate-x-1" />
                  <div className="absolute inset-0 bg-white/20 translate-y-full transition-transform group-hover:translate-y-0" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-16 px-10 text-lg font-medium rounded-none border-white/10 bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 hover:border-white/20 transition-all transition-colors" asChild>
                <Link href="/about">LINEAGE VERIFICATION</Link>
              </Button>
            </div>
            
            {/* HUD Elements */}
            <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-12 text-white/20 items-start">
              <div className="flex flex-col gap-1">
                <div className="text-[10px] uppercase tracking-widest font-bold">Ambient Temp</div>
                <div className="text-2xl font-mono">24.5°C</div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-[10px] uppercase tracking-widest font-bold">Security Level</div>
                <div className="text-2xl font-mono text-primary/50 text-primary">SIGMA-9</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/40">
          <div className="text-[9px] uppercase tracking-[0.4em] font-bold">Scroll to Decipher</div>
          <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </section>

      {/* Facility standards / Features */}
      <section className="py-32 relative overflow-hidden bg-black">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {[
              {
                icon: <Dna className="h-8 w-8 text-primary" />,
                title: "99.9% Purity",
                desc: "Every specimen is Sequenced from authentic Cretaceous marrow, extracted under controlled hermetic conditions."
              },
              {
                icon: <ShieldCheck className="h-8 w-8 text-primary" />,
                title: "Containment First",
                desc: "We provide reinforced titanium-alloy enclosures and military-grade monitoring systems with every acquisition."
              },
              {
                icon: <Rocket className="h-8 w-8 text-primary" />,
                title: "Stealth Logistics",
                desc: "Global delivery executed via heavy-lift vertical takeoff aircraft. Silence and security are our standard."
              }
            ].map((feature, i) => (
              <div key={i} className="p-12 bg-black hover:bg-white/[0.02] transition-colors group">
                <div className="mb-8 p-4 w-fit rounded-xl bg-primary/5 border border-primary/10 group-hover:border-primary/30 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed font-light">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured specimens teaser */}
      <section className="py-32 bg-zinc-950 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <Badge variant="outline" className="mb-4 text-primary border-primary/30 py-1 px-3 rounded-none font-mono tracking-tighter">
                ACTIVE_AUCTIONS_LIVE
              </Badge>
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter">
                FEATURED <br /><span className="text-gray-500">BLOODLINES</span>
              </h2>
            </div>
            <Link href="/products" className="group flex items-center gap-2 text-sm font-bold tracking-widest uppercase hover:text-primary transition-colors hover:scale-105 transition-all">
              Inspect Full Fleet <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Specimen Card 1 */}
            <div className="relative group overflow-hidden bg-black border border-white/5 aspect-[4/3] md:aspect-auto md:h-[600px]">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-60" 
                   style={{ backgroundImage: `url('https://images.unsplash.com/photo-1517926967795-31923e805da3?auto=format&fit=crop&q=80&w=1000')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full translate-y-4 group-hover:translate-y-0 transition-transform">
                <div className="text-primary font-mono text-xs mb-2">VARIANT: M-CLASS</div>
                <h3 className="text-3xl font-bold mb-4">OBSIDIAN MONARCH</h3>
                <p className="text-gray-400 line-clamp-2 text-sm mb-6 max-w-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  The pinnacle of our genetic mutation program. Jet-black scales designed for zero-light tactical dominance.
                </p>
                <Button variant="outline" className="rounded-none border-white/20 hover:bg-white text-black bg-white group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                  SECURE SPECIMEN
                </Button>
              </div>
            </div>

            {/* Specimen Card 2 */}
            <div className="relative group overflow-hidden bg-black border border-white/5 aspect-[4/3] md:aspect-auto md:h-[600px]">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-60" 
                   style={{ backgroundImage: `url('https://images.unsplash.com/photo-1525877442183-58f3b92d8ef1?auto=format&fit=crop&q=80&w=1000')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full translate-y-4 group-hover:translate-y-0 transition-transform">
                <div className="text-primary font-mono text-xs mb-2">VARIANT: A-CLASS</div>
                <h3 className="text-3xl font-bold mb-4">ALPINE SOVEREIGNTY</h3>
                <p className="text-gray-400 line-clamp-2 text-sm mb-6 max-w-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Optimized for sub-zero deployments. Pure-white coat with thermal regulatory enhancements for glacial survival.
                </p>
                <Button variant="outline" className="rounded-none border-white/20 hover:bg-zinc-800 text-white bg-zinc-900 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                  SECURE SPECIMEN
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Banner CTA */}
      <section className="py-24 bg-primary text-black overflow-hidden relative group cursor-pointer">
        <div className="absolute inset-0 bg-white/10 -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
          <Zap className="h-12 w-12 mb-6" />
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">READY TO CLAIM YOUR APEX?</h2>
          <p className="text-black/70 max-w-xl mb-10 font-medium">
            Contact our high-value asset department for an immediate consultation on your containment field requirements.
          </p>
          <Button size="lg" variant="secondary" className="h-16 px-12 bg-black text-white hover:bg-black/90 rounded-none text-lg font-bold">
            REQUEST CLEARANCE
          </Button>
        </div>
      </section>
    </div>
  );
}

