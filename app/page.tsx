import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Video from '@/components/video';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck, Dna, Rocket, ArrowRight, Zap, Microscope } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Cinematic Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden uppercase font-heading">
        {/* Animated Background Video */}
        <div className="absolute inset-0 z-0">
          <Video
            src="/videos/hero-animation.mp4"
            className="h-full w-full object-cover brightness-[0.25] scale-105"
            autoplay
            loop
            muted
          />
          {/* Multi-layered Overlays for Contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-80" />
          
          {/* Subtle Grid Overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150 pointer-events-none" />
        </div>
        
        {/* Hero Content */}
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-10 rounded-full border border-primary/40 bg-zinc-950/60 backdrop-blur-xl transition-all hover:bg-zinc-950/80">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-[10px] font-bold tracking-[0.25em] text-white text-glow-hud">
                Secure Genetic Uplink Established
              </span>
            </div>

            <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter mb-8 leading-[0.8] text-white drop-shadow-2xl">
              GENETIC <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/90 to-cyan-400 italic">
                MASTERPIECES
              </span>
            </h1>
            
            <p className="text-xl mb-14 max-w-2xl mx-auto text-zinc-100 font-medium leading-relaxed tracking-tight text-glow-hud">
              The world&apos;s premier digital showroom for pure-bred Tyrannosaurus Rex specimens. 
              Ethically sequenced. Geologically authenticated. Peerless.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-md">
              <Button size="lg" className="group relative h-16 px-10 text-lg font-black rounded-none transition-all hover:scale-[1.05] active:scale-[0.98] bg-primary text-primary-foreground text-glow-primary border border-primary/20 shadow-[0_0_20px_rgba(34,211,238,0.2)]" asChild>
                <Link href="/products">
                  <span>ENTER THE CATALOG</span>
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-16 px-10 text-lg font-bold rounded-none border-white/40 bg-white/5 backdrop-blur-2xl text-white hover:bg-white/10 hover:border-white transition-all shadow-xl" asChild>
                <Link href="/about">LINEAGE VERIFICATION</Link>
              </Button>
            </div>
            
            {/* HUD Elements - High Contrast Monospace */}
            <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-14 items-start font-mono">
              <div className="flex flex-col gap-2 group transition-all hover:translate-x-1">
                <div className="text-xs uppercase tracking-[0.3em] font-bold text-primary/80">Grid Sector</div>
                <div className="text-2xl font-black text-white text-glow-hud">ARC-742</div>
              </div>
              <div className="flex flex-col gap-2 group transition-all hover:translate-x-1">
                <div className="text-xs uppercase tracking-[0.3em] font-bold text-primary/80">Security Level</div>
                <div className="text-2xl font-black text-primary italic text-glow-primary underline decoration-primary/40 underline-offset-8">SIGMA-9</div>
              </div>
              <div className="flex flex-col gap-2 group transition-all hover:translate-x-1">
                <div className="text-xs uppercase tracking-[0.3em] font-bold text-primary/80">Atmosphere</div>
                <div className="text-2xl font-black text-white text-glow-hud">STABLE</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 text-primary/80 group">
          <div className="text-[10px] uppercase tracking-[0.5em] font-black group-hover:text-primary transition-colors">Scroll to Decipher</div>
          <div className="w-px h-20 bg-gradient-to-b from-primary via-primary/20 to-transparent animate-pulse" />
        </div>
      </section>

      {/* Facility standards / Features */}
      <section className="py-40 relative overflow-hidden bg-black">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-900 border border-zinc-900 shadow-2xl">
            {[
              {
                icon: <Dna className="h-10 w-10 text-primary shadow-primary/20" />,
                title: "99.9% Purity",
                desc: "Every specimen is Sequenced from authentic Cretaceous marrow, extracted under controlled hermetic conditions."
              },
              {
                icon: <ShieldCheck className="h-10 w-10 text-primary shadow-primary/20" />,
                title: "Containment First",
                desc: "We provide reinforced titanium-alloy enclosures and military-grade monitoring systems with every acquisition."
              },
              {
                icon: <Rocket className="h-10 w-10 text-primary shadow-primary/20" />,
                title: "Stealth Logistics",
                desc: "Global delivery executed via heavy-lift vertical takeoff aircraft. Silence and security are our standard."
              }
            ].map((feature, i) => (
              <div key={i} className="px-12 py-16 bg-black hover:bg-zinc-950 transition-all duration-500 group">
                <div className="mb-10 p-5 w-fit rounded-full bg-primary/5 border border-primary/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-black mb-6 tracking-tighter uppercase">{feature.title}</h3>
                <p className="text-zinc-200 leading-relaxed font-medium text-lg">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured specimens teaser */}
      <section className="py-40 bg-zinc-950 relative border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <Badge variant="outline" className="mb-6 text-primary border-primary py-2 px-4 rounded-none font-mono tracking-widest text-[10px] bg-primary/5">
                ACTIVE_AUCTIONS_LIVE
              </Badge>
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase drop-shadow-xl">
                FEATURED <br /><span className="text-zinc-600">BLOODLINES</span>
              </h2>
            </div>
            <Link href="/products" className="group flex items-center gap-3 text-sm font-black tracking-[0.3em] uppercase text-white hover:text-primary transition-all pb-2 border-b-2 border-primary/20 hover:border-primary">
              Inspect Full Fleet <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Specimen Card 1 */}
            <div className="relative group overflow-hidden bg-black border border-white/10 aspect-[4/5] md:aspect-auto md:h-[700px] shadow-2xl transition-all hover:border-primary/30">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0 opacity-40 group-hover:opacity-60" 
                   style={{ backgroundImage: `url('https://images.unsplash.com/photo-1517926967795-31923e805da3?auto=format&fit=crop&q=80&w=1000')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-10 md:p-16 w-full">
                <div className="text-primary font-mono text-xs font-black tracking-widest mb-4 bg-primary/10 w-fit px-3 py-1 border-l-2 border-primary">VARIANT: M-CLASS</div>
                <h3 className="text-4xl md:text-5xl font-black mb-6 uppercase text-white tracking-tighter">OBSIDIAN <br /> MONARCH</h3>
                <p className="text-zinc-200 font-medium text-lg mb-10 max-w-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  The pinnacle of our genetic mutation program. Jet-black scales designed for zero-light tactical dominance.
                </p>
                <Button size="lg" variant="outline" className="rounded-none border-white text-white bg-transparent hover:bg-primary hover:text-black hover:border-primary font-black transition-all group-hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]">
                  SECURE SPECIMEN
                </Button>
              </div>
            </div>

            {/* Specimen Card 2 */}
            <div className="relative group overflow-hidden bg-black border border-white/10 aspect-[4/5] md:aspect-auto md:h-[700px] shadow-2xl transition-all hover:border-primary/30">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0 opacity-40 group-hover:opacity-60" 
                   style={{ backgroundImage: `url('https://images.unsplash.com/photo-1532009855437-dbaf76b7db0a?auto=format&fit=crop&q=80&w=1000')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-10 md:p-16 w-full text-right flex flex-col items-end">
                <div className="text-primary font-mono text-xs font-black tracking-widest mb-4 bg-primary/10 w-fit px-3 py-1 border-r-2 border-primary">VARIANT: A-CLASS</div>
                <h3 className="text-4xl md:text-5xl font-black mb-6 uppercase text-white tracking-tighter self-end">ALPINE <br /> SOVEREIGNTY</h3>
                <p className="text-zinc-200 font-medium text-lg mb-10 max-w-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  Optimized for sub-zero deployments. Pure-white coat with thermal regulatory enhancements for glacial survival.
                </p>
                <Button size="lg" variant="outline" className="rounded-none border-white text-white bg-transparent hover:bg-primary hover:text-black hover:border-primary font-black transition-all group-hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]">
                  SECURE SPECIMEN
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High-impact CTA Section */}
      <section className="py-48 relative overflow-hidden bg-black border-t border-white/5">
        <div className="absolute inset-0 opacity-30 grayscale-[0.8] brightness-50"
             style={{ 
               backgroundImage: `url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')`,
               backgroundSize: 'cover',
               backgroundAttachment: 'fixed'
             }} />
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <div className="max-w-4xl mx-auto backdrop-blur-2xl bg-zinc-950/60 p-20 border border-white/10 outline outline-4 outline-primary/5 outline-offset-8">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-10 uppercase text-white drop-shadow-2xl">
              READY TO CLAIM <br /><span className="text-primary italic">YOUR APEX?</span>
            </h2>
            <p className="text-2xl mb-14 text-zinc-200 font-medium leading-relaxed text-glow-hud italic">
              Contact our high-value asset department for an immediate consultation on your containment field requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Button size="lg" className="h-16 px-16 text-xl font-black rounded-none bg-white text-black hover:bg-primary hover:text-black transition-all shadow-[0_0_40px_rgba(255,255,255,0.15)]">
                REQUEST CLEARANCE
              </Button>
              <Button size="lg" variant="outline" className="h-16 px-16 text-xl font-black rounded-none border-white/30 text-white hover:bg-white/10 transition-all backdrop-blur-xl">
                VIEW LINEAGE
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
