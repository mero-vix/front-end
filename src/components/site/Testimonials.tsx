import { Reveal } from "./Reveal";
import { CircularTestimonials } from "@/components/ui/circular-testimonials";

const testimonials = [
  {
    quote:
      "VixIQ X1 cut our campaign build time in half. The predictive layer alone is worth every penny.",
    name: "Zara Ellison",
    designation: "Head of Growth, Clearpath Digital",
    src: "/images/Priya Shah.svg",
  },
  {
    quote:
      "Finally an AI tool that understands marketing strategy, not just content generation.",
    name: "Nova Sinclair",
    designation: "Marketing Director, Stackvera",
    src: "/images/Daniel Reyes.svg",
  },
  {
    quote:
      "34% drop in cost-per-acquisition within the first month. The AI optimization is genuinely impressive.",
    name: "Caden Rhys",
    designation: "Performance Marketing Lead, Orbient Inc.",
    src: "/images/Amara Okafor.svg",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative pt-4 sm:pt-6 pb-24 sm:pb-32 overflow-visible">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-5xl mx-auto -mb-8 mt-12 pb-0 overflow-visible">
          <span className="font-sub text-lg md:text-xl uppercase tracking-[0.25em] text-orange-500 font-semibold">
            Voices
          </span>
          <div className="mt-4 pb-0 overflow-visible">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.25] text-white overflow-visible whitespace-nowrap" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.03em' }}>
              Real Marketing. Real Insights. Real Results.
            </h2>
          </div>
        </div>

        <Reveal>
          <div className="flex items-center justify-center">
            <CircularTestimonials
              testimonials={testimonials}
              autoplay={true}
              colors={{
                name: "hsl(var(--foreground))",
                designation: "hsl(var(--muted-foreground))",
                testimony: "hsl(var(--foreground))",
                arrowBackground: "hsl(var(--muted))",
                arrowForeground: "hsl(var(--foreground))",
                arrowHoverBackground: "hsl(var(--accent))",
              }}
              fontSizes={{
                name: "1.5rem",
                designation: "1rem",
                quote: "1.25rem",
              }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
