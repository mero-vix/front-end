"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Users, Calendar, TrendingUp } from "lucide-react";
import { useRef, useEffect, useState } from "react";

/* ---------------- WordsPullUp ---------------- */
interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  style?: React.CSSProperties;
}

export const WordsPullUp = ({ text, className = "", showAsterisk = false, style }: WordsPullUpProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(" ");

  return (
    <div ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <motion.span
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block relative"
            style={{ marginRight: isLast ? 0 : "0.25em" }}
          >
            {word}
            {showAsterisk && isLast && (
              <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em] text-[#fd6b22]">*</span>
            )}
          </motion.span>
        );
      })}
    </div>
  );
};

/* ---------------- WordsPullUpMultiStyle ---------------- */
interface Segment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  className?: string;
  style?: React.CSSProperties;
}

export const WordsPullUpMultiStyle = ({ segments, className = "", style }: WordsPullUpMultiStyleProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const words: { word: string; className?: string }[] = [];
  segments.forEach((seg) => {
    seg.text.split(" ").forEach((w) => {
      if (w) words.push({ word: w, className: seg.className });
    });
  });

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center ${className}`} style={style}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          className={`inline-block ${w.className ?? ""}`}
          style={{ marginRight: "0.25em" }}
        >
          {w.word}
        </motion.span>
      ))}
    </div>
  );
};

/* ---------------- Canvas Particle Network ---------------- */
const ParticleNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let particles: any[] = [];
    let animationFrameId: number;
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };
    
    const initParticles = () => {
      particles = [];
      const numParticles = Math.floor((canvas.width * canvas.height) / 12000);
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 1.5 + 0.5
        });
      }
    };
    
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(253, 107, 34, 0.6)'; 
      ctx.strokeStyle = 'rgba(253, 107, 34, 0.2)';
      
      for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        
        for (let j = i + 1; j < particles.length; j++) {
          let p2 = particles[j];
          let dx = p.x - p2.x;
          let dy = p.y - p2.y;
          let dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(draw);
    };
    
    window.addEventListener('resize', resize);
    resize();
    draw();
    
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-70 pointer-events-none" />;
};

/* ---------------- Hero ---------------- */

const PrismaHero = () => {
  return (
    <section id="home" className="h-screen w-full">
      <div className="relative h-full w-full overflow-hidden rounded-2xl md:rounded-[2rem] bg-black">
        
        {/* Background image */}
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="/images/hero section.png"
          alt="Hero background"
        />

        {/* Noise overlay */}
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />

        {/* Dark overlay for text readability */}
        <div className="pointer-events-none absolute inset-0 bg-black/60" />

        {/* Hero content */}
        <div className="absolute inset-0 flex flex-col justify-between px-4 pb-2 pt-32 sm:px-6 md:px-10">
          
          {/* Top part: Heading and Subtext */}
          <div className="w-full flex flex-col gap-6">
            <h1
              className="font-medium leading-[0.9] tracking-[-0.04em] text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
              style={{ color: "white" }}
            >
              <WordsPullUp text="The Generative AI Marketing Intelligence Platform." />
            </h1>
            
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm text-white/80 sm:text-base md:text-lg max-w-lg lg:max-w-2xl font-light"
              style={{ lineHeight: 1.4 }}
            >
              The generative AI engine that builds full marketing campaigns, predicts performance before launch, and continuously optimizes ad spend, content, and audience targeting, all without manual intervention.
            </motion.p>
          </div>

          {/* Bottom part: Stats + Button */}
          <div className="grid grid-cols-12 items-end gap-4 w-full">
            {/* Stats Cards */}
            <motion.div
              className="hidden lg:flex col-span-8 gap-8 pb-6 lg:pb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <HeroStatCard icon={<img src="/images/Happy Clients.svg" alt="Happy Clients" className="w-8 h-8" style={{ filter: "drop-shadow(0px 0px 1px rgba(253, 107, 34, 0.5))" }} />} value={1200} suffix="+" label="Happy Clients" delay={0.9} />
              <HeroStatCard icon={<img src="/images/Years Experience.svg" alt="Years Experience" className="w-8 h-8" style={{ filter: "drop-shadow(0px 0px 1px rgba(253, 107, 34, 0.5))" }} />} value={12} suffix="" label="Years Experience" delay={1.0} />
              <HeroStatCard icon={<img src="/images/Satisfaction Rate.svg" alt="Satisfaction Rate" className="w-8 h-8" style={{ filter: "drop-shadow(0px 0px 1px rgba(253, 107, 34, 0.5))" }} />} value={98} suffix="%" label="Satisfaction Rate" delay={1.1} />
            </motion.div>
            <div className="col-span-12 flex flex-col gap-5 pb-6 lg:col-span-4 lg:pb-10">
              
              <motion.a
                href="/Product"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group inline-flex items-center gap-2 self-end rounded-full bg-white py-1 pl-5 pr-1 text-sm font-bold text-black transition-all hover:gap-3 sm:text-base mb-16 lg:mb-24 relative z-[2147483647]"
              >
                VixIQ X1
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110 sm:h-10 sm:w-10">
                  <ArrowRight className="h-4 w-4" style={{ color: "#fd6b22" }} />
                </span>
              </motion.a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------------- Hero Stat Card ---------------- */
interface HeroStatCardProps {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  delay: number;
}

function HeroStatCard({ icon, value, suffix, label, delay }: HeroStatCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [hasAnimated, setHasAnimated] = useState(false);

  const springValue = useSpring(0, { stiffness: 50, damping: 10 });
  const displayValue = useTransform(springValue, (latest) => Math.floor(latest));

  useEffect(() => {
    if (isInView && !hasAnimated) {
      springValue.set(value);
      setHasAnimated(true);
    } else if (!isInView && hasAnimated) {
      springValue.set(0);
      setHasAnimated(false);
    }
  }, [isInView, value, springValue, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center gap-3 px-8 py-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-[#fd6b22]/50 transition-all duration-300 group min-w-[160px]"
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="w-14 h-14 rounded-full bg-[#fd6b22]/10 border border-[#fd6b22]/20 flex items-center justify-center text-[#fd6b22] group-hover:bg-[#fd6b22]/20 transition-colors duration-300"
        whileHover={{ rotate: 360, transition: { duration: 0.7 } }}
      >
        {icon}
      </motion.div>
      <div className="text-3xl font-bold text-white font-heading flex items-center">
        <motion.span>{displayValue}</motion.span>
        <span>{suffix}</span>
      </div>
      <p className="text-white/60 text-sm">{label}</p>
      <motion.div className="w-10 h-0.5 bg-[#fd6b22] rounded-full group-hover:w-16 transition-all duration-300" />
    </motion.div>
  );
}

export {PrismaHero}
