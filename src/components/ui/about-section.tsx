"use client";

import React from "react";
import { Zap, Palette, Puzzle, BookOpen, Box, Brain } from "lucide-react";

export function AboutSection() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-24" id="about">
      {/* soft glow background */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#fd6b22]/10 blur-[150px] -z-10"
        aria-hidden
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        * { font-family: 'Poppins', sans-serif; }
      `}</style>

      {/* header */}
      <header className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">Why MeroVix Exists</h1>
        <p className="mt-4 text-sm md:text-lg text-slate-400 font-light">
          A collection of our core capabilities — each crafted with intention, precision, and state-of-the-art Generative AI.
        </p>
      </header>

      {/* grid */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        <Feature
          icon={<Zap className="w-6 h-6 text-[#fd6b22]" />}
          title="Lightning-Fast Decisions"
          desc="Built with speed — minimal lag times and optimized for real-time campaign orchestration."
        />
        <Feature
          icon={<Palette className="w-6 h-6 text-[#fd6b22]" />}
          title="Beautifully Designed Workflows"
          desc="Modern, pixel-perfect UI tailored for marketing teams ready for any campaign."
        />
        <Feature
          icon={<Puzzle className="w-6 h-6 text-[#fd6b22]" />}
          title="Plug-and-Play Integration"
          desc="Simple setup with seamless support for your existing marketing data stack."
        />
        <Feature
          icon={<BookOpen className="w-6 h-6 text-[#fd6b22]" />}
          title="Clear & Comprehensive"
          desc="Get started fast with intelligent analytics, live previews, and predictive scoring."
        />
        <Feature
          icon={<Box className="w-6 h-6 text-[#fd6b22]" />}
          title="Fully Customizable"
          desc="Easily adapt AI models, reporting, and layouts to perfectly match your brand."
        />
        <Feature
          icon={<Brain className="w-6 h-6 text-[#fd6b22]" />}
          title="Generative Intelligence"
          desc="Built with advanced LLMs in mind to ensure unmatched strategic insights."
        />
      </div>
    </section>
  );
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="group flex flex-col items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-[#fd6b22]/50 hover:bg-[#1F150C]">
      <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#fd6b22]/10 border border-[#fd6b22]/20">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-medium text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400 font-light">{desc}</p>
      </div>
    </div>
  );
}
