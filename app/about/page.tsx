'use client';

import { ShieldCheck, Dna, Rocket, Globe2, Microscope, Award } from 'lucide-react';
import Video from '@/components/video';
import { Badge } from '@/components/ui/badge';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white selection:bg-primary selection:text-primary-foreground">
      {/* Genetic Legacy Hero Section */}
      <section className="relative h-[85vh] min-h-[700px] flex items-center justify-center overflow-hidden uppercase font-heading">
        {/* Cinematic Background Layer */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black" />
          
          {/* Animated Video Background - Using existing video but adding overlays */}
          <Video
            src="/videos/pixverse_cMTicXgn9D.mp4"
            className="h-full w-full object-cover brightness-[0.2] scale-105"
            autoplay
            loop
            muted
          />

          {/* Grainy Noise Overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150 contrast-150 pointer-events-none z-10" />
          
          {/* Subtle Vertical Scanlines */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none opacity-20" />
          
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-70" />
        </div>
        
        {/* Content Container */}
        <div className="container relative z-20 mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            {/* Top HUD Indicator */}
            <div className="inline-flex items-center gap-3 px-4 py-1.5 mb-12 border-l border-r border-primary/30 bg-primary/5 backdrop-blur-md">
              <span className="w-1.5 h-1.5 bg-primary animate-pulse rounded-full" />
              <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-primary">
                ESTABLISHED_DATA_STREAM_65Ma
              </span>
              <span className="w-1.5 h-1.5 bg-primary animate-pulse rounded-full" />
            </div>

            <h1 className="text-6xl md:text-[8rem] xl:text-[10rem] font-black tracking-tighter mb-8 leading-[0.8] text-white selection:text-black">
              GENETIC <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/90 to-cyan-400 italic">
                LEGACY
              </span>
            </h1>
            
            <p className="text-sm md:text-base mb-16 max-w-xl mx-auto text-zinc-400 font-mono tracking-widest uppercase leading-relaxed text-glow-hud">
              Resurrecting the apex lineage through hyper-controlled 
              geological extraction and recursive sequence optimization.
            </p>

            {/* Bottom HUD Data Points */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 pt-12 border-t border-white/10 w-full max-w-5xl">
              <div className="flex flex-col gap-1 items-start text-left">
                <span className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase">Foundation</span>
                <span className="text-2xl font-black text-white italic tracking-tighter">ER-01_ANP</span>
              </div>
              <div className="flex flex-col gap-1 items-start text-left text-primary">
                <span className="text-[10px] text-primary/60 font-mono tracking-widest uppercase">Sequence_Purity</span>
                <span className="text-2xl font-black text-glow-primary tracking-tighter italic">99.98%</span>
              </div>
              <div className="flex flex-col gap-1 items-start text-left">
                <span className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase">Origin_Site</span>
                <span className="text-2xl font-black text-white tracking-tighter italic">HELL_CREEK</span>
              </div>
              <div className="flex flex-col gap-1 items-start text-left">
                <span className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase">Classification</span>
                <span className="text-2xl font-black text-white tracking-tighter italic underline decoration-white/20 underline-offset-4">PIONEER</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Corner HUD Elements */}
        <div className="absolute top-10 left-10 w-24 h-24 border-t-2 border-l-2 border-primary/20 pointer-events-none hidden md:block" />
        <div className="absolute top-10 right-10 w-24 h-24 border-t-2 border-r-2 border-white/10 pointer-events-none hidden md:block" />
        <div className="absolute bottom-10 left-10 w-24 h-24 border-b-2 border-l-2 border-white/10 pointer-events-none hidden md:block" />
        <div className="absolute bottom-10 right-10 w-24 h-24 border-b-2 border-r-2 border-primary/20 pointer-events-none hidden md:block" />
      </section>

      {/* Corporate Mission */}
      <section className="py-32 relative bg-black border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10 order-2 lg:order-1">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic">
                  THE REXSHOP <br />
                  <span className="text-zinc-600">MANIFESTO</span>
                </h2>
                <div className="h-1 w-20 bg-primary" />
              </div>
              <div className="space-y-6 text-zinc-400 text-lg leading-relaxed font-medium">
                <p>
                  At RexShop, we don&apos;t just sell specimens; we facilitate the return of geological majesty. 
                  Our enterprise was founded on the belief that the Tyrannosaurus Rex should not be a ghost in the fossil record, 
                  but a living testament to evolutionary perfection.
                </p>
                <p>
                  Through proprietary genomic sequencing and high-fidelity cloning protocols, we have bridged 
                  a 66-million-year gap. Every acquisition reflects our commitment to genetic purity, security 
                  excellence, and the private ownership of prehistoric history.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div className="space-y-2">
                  <div className="text-3xl font-black text-white italic">0.1%</div>
                  <div className="text-[10px] uppercase tracking-widest text-primary font-bold">Sequence Variance</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-black text-white italic">Σ-9</div>
                  <div className="text-[10px] uppercase tracking-widest text-primary font-bold">Safety Rating</div>
                </div>
              </div>
            </div>
            
            <div className="relative order-1 lg:order-2">
              <div className="aspect-square bg-zinc-900 border border-white/10 overflow-hidden relative group">
                <div 
                  className="absolute inset-0 bg-cover bg-center grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-1000"
                  style={{ backgroundImage: `url('https://images.unsplash.com/photo-1517926967795-31923e805da3?auto=format&fit=crop&q=80&w=1000')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-primary/10" />
                
                {/* HUD Elements */}
                <div className="absolute top-6 left-6 font-mono text-[10px] text-white tracking-widest bg-black/80 px-3 py-1 border border-white/20 backdrop-blur-md">
                  SPECIMEN_ALPHA_SCAN
                </div>
                <div className="absolute bottom-6 right-6 font-mono text-[10px] text-primary tracking-widest bg-black/80 px-3 py-1 border border-primary/20 backdrop-blur-md animate-pulse">
                  SYSTEM_ACTIVE
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-40 relative bg-zinc-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-6">Foundational Protocols</h2>
            <p className="text-muted-foreground font-medium">Built on the bedrock of scientific integrity and military-grade security.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                icon: <Microscope className="h-8 w-8 text-primary" />,
                title: "Ethical Sequencing",
                desc: "Every bloodline is ethically sourced from ancient remains, ensuring no disruption to modern ecosystems."
              },
              {
                icon: <ShieldCheck className="h-8 w-8 text-primary" />,
                title: "Security Paramount",
                desc: "We provide the infrastructure required to host worlds most magnificent predators safely."
              },
              {
                icon: <Award className="h-8 w-8 text-primary" />,
                title: "Pedigree Verified",
                desc: "Each Rex comes with a blockchain-verified geological certificate of lineage purity."
              }
            ].map((item, i) => (
              <div key={i} className="group p-10 bg-black border border-white/5 hover:border-primary/20 transition-all duration-500 relative">
                <div className="mb-8 p-4 w-fit bg-primary/5 border border-primary/10 group-hover:border-primary/40 group-hover:bg-primary/10 transition-all">
                  {item.icon}
                </div>
                <h3 className="text-xl font-black mb-4 uppercase tracking-tighter italic">{item.title}</h3>
                <p className="text-zinc-500 leading-relaxed text-sm font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
