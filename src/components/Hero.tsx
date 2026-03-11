import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Download, ArrowRight, Brain, Cpu, MessageSquare, Database, Terminal, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Layer */}
      <div className="liquid-mesh-vibrant" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center mb-24">
            {/* Headline Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-8"
            >
              <h1 className="text-7xl md:text-[8rem] font-heading font-medium tracking-tighter leading-none text-foreground mb-8">
                SAI DARSHAK <br /> REDDY YETTAPU
              </h1>
              <div className="flex items-center gap-6">
                <span className="text-2xl md:text-3xl font-heading text-accent italic">Data Center Network Engineer.</span>
                <div className="h-px w-24 bg-accent/30" />
              </div>
              <div className="mt-8 max-w-2xl">
                <p className="text-2xl md:text-3xl font-heading text-foreground/90 leading-snug">
                  Optimizing Infrastructure. Tracing Fiber. <br />
                  Ensuring High Availability.
                </p>
              </div>
            </motion.div>

            {/* Profile Avatar Selection Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="lg:col-span-4 relative group"
            >
              <div className="relative w-full aspect-square max-w-[450px] mx-auto">
                <div className="absolute inset-0 bg-accent/20 blur-[120px] rounded-full scale-110 group-hover:scale-125 transition-transform duration-1000" />
                <div className="relative h-full w-full rounded-[4rem] overflow-hidden glass-premium p-4">
                  <img
                    src="/sai_profile.png"
                    alt="Sai Darshak Reddy Yettapu"
                    className="w-full h-full object-cover rounded-[3rem] grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Card: Pioneering Network Infrastructure */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="lg:col-span-5"
            >
              <div className="glass-premium rounded-[3rem] overflow-hidden p-8 group h-full flex flex-col">
                <div className="relative h-64 rounded-[2.5rem] overflow-hidden mb-8">
                  <img
                    src="/project_cabling.png"
                    alt="Network Infrastructure"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-6 left-6 flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
                    <Terminal className="w-3.5 h-3.5 text-white" />
                    <span className="text-[9px] font-bold text-white uppercase tracking-widest">Network Ops</span>
                  </div>
                </div>
                <h3 className="text-3xl font-heading mb-4 leading-tight uppercase tracking-tight text-foreground">
                  Scaling <span className="text-accent italic">Data Centers.</span>
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed font-light flex-grow">
                  Specializing in Rack & Stack, Structured Cabling, and Network Validation to ensure stable infrastructure operations.
                </p>
                <Link to="projects" smooth duration={800}>
                  <Button className="w-full bg-accent text-white h-16 rounded-2xl hover:shadow-glow transition-all font-bold uppercase tracking-[0.2em] text-[10px]">
                    Explore projects <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Middle Card: Core Expertise */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="lg:col-span-4"
            >
              <div className="glass-premium rounded-[3rem] p-10 h-full">
                <h3 className="text-sm font-bold uppercase tracking-[0.4em] mb-12 text-accent">
                  Expertise Matrix
                </h3>
                <ul className="space-y-10">
                  {[
                    { icon: Cpu, label: 'Rack Operations', desc: 'Rack & Stack Deployments' },
                    { icon: Database, label: 'Fiber Optics', desc: 'SMF/MMF Termination' },
                    { icon: Terminal, label: 'Fiber Testing', desc: 'OTDR & Fluke Validation' },
                    { icon: Brain, label: 'Net Hardware', desc: 'Switches & Diagnostics' },
                    { icon: MessageSquare, label: 'Server Provisioning', desc: 'Ubuntu & Windows Server' }
                  ].map((skill, i) => (
                    <li key={i} className="flex items-center gap-6 group">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-500">
                        <skill.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-heading text-lg text-foreground group-hover:text-accent transition-colors">{skill.label}</p>
                        <p className="text-[10px] uppercase tracking-widest text-muted-foreground/60">{skill.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right: Floating Iridescent Blob */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="lg:col-span-3 flex flex-col justify-center items-center py-12 relative"
            >
              <div className="relative blob-float">
                <img
                  src="/sai_profile.png"
                  alt="Sai Portrait"
                  className="w-80 h-80 object-cover rounded-full drop-shadow-[0_0_120px_rgba(var(--accent-rgb),0.4)] border-4 border-accent/20"
                />
                <div className="absolute inset-0 bg-accent/5 blur-3xl animate-pulse rounded-full" />
              </div>
              <div className="mt-12 text-center">
                <p className="text-serif italic text-2xl text-foreground font-light tracking-tight">
                  Reliable <span className="text-accent underline decoration-accent/20 underline-offset-8">Connectivity.</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
