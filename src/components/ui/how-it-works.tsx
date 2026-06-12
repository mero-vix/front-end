"use client";

import React from 'react';
import { ContainerScroll, ContainerSticky, ProcessCard, ProcessCardBody, ProcessCardTitle } from "@/components/ui/process-timeline";
import { Plug, BrainCircuit, PenTool, Rocket } from 'lucide-react';

const PROCESS_PHASES = [
  {
    id: "step-1",
    icon: (props: any) => <img src="/images/Connect Data.svg" alt="Connect Data" {...props} style={{ filter: "drop-shadow(0px 0px 1px rgba(253, 107, 34, 0.5))", transform: "scale(1.4)" }} />,
    title: 'Connect Data',
    description: 'Plug in ad platforms, CRM, and analytics. No complex pipelines to maintain.',
    image: '/images/Connect Data_Image.svg',
    imageAlt: 'Data connection illustration',
  },
  {
    id: "step-2",
    icon: (props: any) => <img src="/images/AI Analysis.svg" alt="AI Analysis" {...props} style={{ filter: "drop-shadow(0px 0px 1px rgba(253, 107, 34, 0.5))", transform: "scale(1.4)" }} />,
    title: 'AI Analysis',
    description: 'VixIQ X1 models your audience and creative performance against your goals in real-time.',
    image: '/images/AI Analysis_Image.svg',
    imageAlt: 'AI neural network visualization',
  },
  {
    id: "step-3",
    icon: (props: any) => <img src="/images/Compaign Generation.svg" alt="Campaign Generation" {...props} style={{ filter: "drop-shadow(0px 0px 1px rgba(253, 107, 34, 0.5))", transform: "scale(1.4)" }} />,
    title: 'Campaign Generation',
    description: 'Spin up full-funnel campaigns, complete with creative and copy, in a single prompt.',
    image: '/images/Campaign Generation_Image.svg',
    imageAlt: 'Marketing campaign creation on screen',
  },
  {
    id: "step-4",
    icon: (props: any) => <img src="/images/Continuous Optimization.svg" alt="Continuous Optimization" {...props} style={{ filter: "drop-shadow(0px 0px 1px rgba(253, 107, 34, 0.5))", transform: "scale(1.4)" }} />,
    title: 'Continuous Optimization',
    description: 'Let our agent autonomously reallocate budget and detect anomalies 24/7.',
    image: '/images/Continuous Optimization_Image.svg',
    imageAlt: 'Analytics dashboard with charts',
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="how" className="w-full bg-[#1F150C] relative">
      <ContainerScroll
        className="px-4 sm:px-6 h-[400vh]"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(65, 45, 21, 0.55), transparent 70%)"
        }}
      >
        <div className="pt-16 pb-6 space-y-6 container mx-auto max-w-6xl z-10 relative">
          <span className="inline-block py-1 px-3 rounded-full bg-[#fd6b22]/10 border border-[#fd6b22]/20 text-[#fd6b22] font-medium text-xs sm:text-sm uppercase tracking-widest">
            Our Model
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            From signal to <br />shipped campaign
          </h2>
          <p className="max-w-[60ch] text-lg text-slate-400 font-light">
            Experience the power of Generative AI. We transform raw data into executing campaigns with a fully autonomous loop.
          </p>
        </div>

        <ContainerSticky className="flex flex-nowrap container mx-auto max-w-6xl top-24 py-12 pr-8 sm:pr-16">
          {PROCESS_PHASES.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <ProcessCard
                key={phase.id}
                itemsLength={PROCESS_PHASES.length}
                index={index}
                className="min-w-[92%] sm:min-w-[85%] md:min-w-[80%] lg:min-w-[75%] max-w-[92%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[75%] mx-4 sm:mx-12"
              >
                <ProcessCardTitle className="border-r border-white/10 hidden">
                  <div className="rounded-2xl w-14 h-14 bg-[#fd6b22]/10 border border-[#fd6b22]/30 text-[#fd6b22] flex justify-center items-center shadow-[0_0_15px_rgba(253,107,34,0.15)]">
                    <Icon className="w-6 h-6" />
                  </div>
                </ProcessCardTitle>

                <ProcessCardBody className="p-0 overflow-hidden">
                  {/* Mobile/md: stacked layout — image on top, text below */}
                  {/* lg/xl: side-by-side — text on left, image on right */}
                  <div className="flex flex-col lg:flex-row lg:items-stretch h-full">

                    {/* Text side */}
                    <div className="flex flex-col justify-center gap-4 px-5 py-6 sm:px-7 sm:py-8 lg:w-1/2">
                      <div className="rounded-xl w-10 h-10 bg-[#fd6b22]/10 border border-[#fd6b22]/30 text-[#fd6b22] flex justify-center items-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl xl:text-4xl font-bold text-white leading-tight">
                        {phase.title}
                      </h3>
                      <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed opacity-90">
                        {phase.description}
                      </p>
                    </div>

                    {/* Image side — right on lg/xl, top on mobile */}
                    <div className="relative w-full h-44 sm:h-56 lg:h-auto lg:w-1/2 order-first lg:order-last overflow-hidden rounded-t-xl lg:rounded-t-none lg:rounded-r-2xl lg:rounded-l-2xl">
                      <img
                        src={phase.image}
                        alt={phase.imageAlt}
                        className="w-full h-full object-cover"
                      />
                      {/* orange gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1F150C] via-[#fd6b22]/10 to-transparent lg:bg-gradient-to-l" />
                      {/* glowing ring */}
                      <div className="absolute inset-0 ring-1 ring-[#fd6b22]/40" />
                      {/* step badge */}
                      <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-[#fd6b22] flex items-center justify-center text-white text-xs font-bold shadow-lg">
                        {index + 1}
                      </div>
                    </div>

                  </div>
                </ProcessCardBody>
              </ProcessCard>
            );
          })}
        </ContainerSticky>
      </ContainerScroll>
    </section>
  );
};
