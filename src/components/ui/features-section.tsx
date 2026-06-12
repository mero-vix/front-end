"use client";

import { Marquee } from "@/components/ui/marquee";
// Icons replaced with image assets

const marqueeData = [
  "How do I launch a campaign from a single prompt?",
  "Can AI predict my ad performance before I spend?",
  "How do I segment my audience automatically?",
  "What's my best-performing channel right now?",
  "How do I generate creative that converts?",
  "Can I automate my full marketing funnel?",
  "How do I reallocate budget in real time?",
  "What signals indicate a campaign is failing?",
  "How do I build personalized customer journeys?",
  "Can AI detect anomalies before they cost me?",
  "How do I unify attribution across channels?",
  "What's the ROI of each creative asset?",
];

const features = [
  {
    imageUrl: "/images/AI Campaign Generator.svg",
    title: "AI Campaign Generator",
    description:
      "Generate full-funnel campaigns, copy, creative, and channel mix, tuned to your brand voice in seconds.",
  },
  {
    imageUrl: "/images/AI Campaign Generator (1).svg",
    title: "Predictive Analytics",
    description:
      "Forecast performance across channels before you spend, with confidence intervals you can defend.",
  },
  {
    imageUrl: "/images/Audience Intelligence.svg",
    title: "Audience Intelligence",
    description:
      "Cluster, score and activate audiences with embeddings that update with every behavioral signal.",
  },
  {
    imageUrl: "/images/Marketing Automation.svg",
    title: "Marketing Automation",
    description:
      "Compose multi-step journeys with conditional logic, orchestrated by an agent that watches outcomes.",
  },
  {
    imageUrl: "/images/ROI Optimization.svg",
    title: "ROI Optimization",
    description:
      "Continuous reallocation of budget across channels, creatives, and audiences based on incremental lift.",
  },
  {
    imageUrl: "/images/Performance Tracking.svg",
    title: "Performance Tracking",
    description:
      "Unified attribution from impression to revenue, with anomaly detection and proactive alerts.",
  },
];

export function FeaturesSection() {
  const m1 = marqueeData.slice(0, Math.floor(marqueeData.length / 3));
  const m2 = marqueeData.slice(
    Math.floor(marqueeData.length / 3),
    Math.floor((marqueeData.length / 3) * 2)
  );
  const m3 = marqueeData.slice(Math.floor((marqueeData.length / 3) * 2));

  return (
    <section id="features" className="relative pt-20 sm:pt-32 pb-0">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#fd6b22]/20 to-transparent" />

      <div className="mx-auto max-w-full">
        {/* Header */}
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center space-y-4 px-5 text-center md:px-10">
          <span className="font-bold text-lg sm:text-xl uppercase tracking-[0.35em] text-[#fd6b22]">
            The system
          </span>
          <h2 className="max-w-3xl font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
            The Full Campaign Stack
          </h2>
          <p className="max-w-xl text-base md:text-lg text-slate-400 font-light">
            Mero-vix handles generation, prediction, optimization, and execution, so your team handles growth.
          </p>

          {/* Marquee ticker */}
          <div className="relative mx-auto w-full max-w-4xl overflow-hidden py-4">
            {/* fade edges */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-black to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-black to-transparent" />

            <div className="-mx-6 flex flex-col gap-2 md:-mx-10 lg:-mx-16">
              <Marquee className="[--duration:45s] [--gap:0.75rem]" repeat={4}>
                {m1.map((q) => (
                  <span
                    key={q}
                    className="whitespace-nowrap rounded-full border border-[#fd6b22]/25 bg-[#fd6b22]/8 px-4 py-1.5 text-sm text-slate-300 font-light"
                  >
                    {q}
                  </span>
                ))}
              </Marquee>

              <Marquee
                className="[--duration:50s] [--gap:0.75rem]"
                repeat={4}
                reverse
              >
                {m2.map((q) => (
                  <span
                    key={q}
                    className="whitespace-nowrap rounded-full border border-[#fd6b22]/25 bg-[#fd6b22]/8 px-4 py-1.5 text-sm text-slate-300 font-light"
                  >
                    {q}
                  </span>
                ))}
              </Marquee>

              <Marquee className="[--duration:42s] [--gap:0.75rem]" repeat={4}>
                {m3.map((q) => (
                  <span
                    key={q}
                    className="whitespace-nowrap rounded-full border border-[#fd6b22]/25 bg-[#fd6b22]/8 px-4 py-1.5 text-sm text-slate-300 font-light"
                  >
                    {q}
                  </span>
                ))}
              </Marquee>
            </div>
          </div>
        </div>

        {/* Feature grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-4 md:px-8">
          {features.map((feature, index) => {
            return (
              <div
                key={feature.title}
                className="group flex flex-col gap-5 p-8 border border-dashed border-[#fd6b22] rounded-2xl transition-all duration-300 hover:bg-[#412D15] hover:border-solid hover:shadow-[0_0_20px_rgba(253,107,34,0.15)]"
              >
                {/* Image */}
                <div className="aspect-square w-full rounded-2xl overflow-hidden border border-[#fd6b22]/20 transition-all duration-300 group-hover:border-[#fd6b22]/50">
                  <img
                    src={feature.imageUrl}
                    alt={feature.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=80&h=80&fit=crop&auto=format";
                    }}
                  />
                </div>

                <div className="flex flex-col gap-0 pt-2 lg:pt-4">
                  <h3 className="font-semibold text-2xl tracking-tight text-[#fd6b22] sm:text-3xl border-b border-[#fd6b22] pb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 font-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
