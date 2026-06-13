import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/Product")({
  head: () => ({
    meta: [
      { title: "VixIQ X1 | AI Marketing Intelligence" },
      {
        name: "description",
        content:
          "VixIQ X1 is the AI-first marketing intelligence platform for campaign generation, audience orchestration, and live performance insights.",
      },
      { property: "og:title", content: "VixIQ X1 | AI Marketing Intelligence" },
      {
        property: "og:description",
        content:
          "See how VixIQ X1 turns ad metrics, creative signals, and predictive AI into smarter campaigns and faster growth.",
      },
    ],
  }),
  component: ProductPage,
});

function ProductPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen bg-[#030303] text-white"
    >
      <Navbar />

      <section className="relative isolate overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] items-start">
            <div className="space-y-8">
              <p className="inline-flex rounded-full bg-sand/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-sand">
                New product page
              </p>
              <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                VixIQ X1
                <span className="block text-sand">AI marketing intelligence designed for modern growth engines.</span>
              </h1>
              <p className="max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
                Turn streaming ad metrics and audience behavior into campaigns that know when to pivot, what to launch, and how to keep performance rising. VixIQ X1 blends generative strategy, real-time prediction, and continuous optimization into one platform.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="https://app.mero-vix.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-sand px-6 py-3 text-sm font-semibold text-black transition-all hover:brightness-105"
                >
                  Launch VixIQ X1
                </a>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-white/20"
                >
                  Back to homepage
                </Link>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:max-w-xl">
                {[
                  { href: "/#about", label: "About the platform" },
                  { href: "/#features", label: "Key features" },
                  { href: "/#pricing", label: "Pricing" },
                  { href: "/#contact", label: "Contact" },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition hover:border-sand/30 hover:bg-sand/10"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <div className="space-y-5">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-[#E1DCC9]">VixIQ X1 at a glance</p>
                  <h2 className="mt-3 text-3xl font-semibold text-white">Built for teams that need faster, smarter marketing decisions.</h2>
                </div>
                <ul className="space-y-4 text-white/80 text-sm leading-7">
                  <li>
                    <strong className="text-white">Automated campaign intelligence.</strong> Generate brand-safe copy, creative structures, and media plans from a single strategic brief.
                  </li>
                  <li>
                    <strong className="text-white">Adaptive audience scoring.</strong> Combine first-party signals, ad-platform metrics, and behavioral clusters to find the audiences with the highest lift.
                  </li>
                  <li>
                    <strong className="text-white">Live performance guardrails.</strong> See spend anomalies and conversion drift in real time, then ship optimized actions automatically.
                  </li>
                  <li>
                    <strong className="text-white">Enterprise-ready execution.</strong> Scale without adding headcount by deploying AI workflows that keep campaigns aligned to narrative and ROI.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#090909] py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.24em] text-sand">Why VixIQ X1</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Break free from static dashboards and build with intelligence that learns.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/75 sm:text-lg">
              VixIQ X1 doesn’t just report results. It anticipates shifts, rewrites creative, and reallocates budgets while your team stays focused on brand and growth.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Campaign strategy that feels human",
                desc: "Generate full-funnel launch plans, ad copy variations, and channel narratives with AI trained on your brand voice and historical performance.",
              },
              {
                title: "Audience intelligence in motion",
                desc: "Build and refresh audience clusters using behavioral signals so every buyer segment sees the right message at the right moment.",
              },
              {
                title: "Performance built to respond",
                desc: "Detect spend spikes, conversion dips, and budget waste as they happen, so your team can act before momentum turns.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8 transition-all hover:-translate-y-1 hover:border-sand/30">
                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/75">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-[0.9fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.22em] text-sand">How it works</p>
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              A seamless AI engine that connects creative, audiences, and outcomes.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-white/75">
              Each cycle in VixIQ X1 is designed to protect campaign momentum while it learns. From live data ingestion to generative campaign output, the platform keeps every step aligned to your business goals.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                label: "01",
                title: "Ingest ad and audience signals",
                text: "The platform consumes streaming metrics from ad networks, conversion events, and first-party behavioral signals in one continuous flow.",
              },
              {
                label: "02",
                title: "Model trends and anomalies",
                text: "Real-time monitoring flags spend drift and conversion drop-offs while predictive scoring reveals which audience segments are ready to scale.",
              },
              {
                label: "03",
                title: "Generate campaign intelligence",
                text: "A brand-aligned generative layer produces strategic briefs, audience paths, and creative concepts that drive measurable growth.",
              },
            ].map((item) => (
              <div key={item.label} className="rounded-[1.75rem] border border-white/10 bg-[#111111]/80 p-6 backdrop-blur-xl">
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sand/10 text-lg font-semibold text-sand">{item.label}</span>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-white/75">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#070707] py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-[0.95fr_0.65fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.22em] text-sand">Performance architecture</p>
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Innovate with AI infrastructure built for real-time marketing intelligence.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-white/75">
              VixIQ X1 is designed for smart teams who need both fast decisions and scalable execution. The result is a platform that makes generative strategy and live analytics feel effortless.
            </p>
          </div>

          <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20">
            {[
              {
                title: "Generative strategy engine",
                caption: "NVIDIA NeMo",
                detail: "The AI copy and campaign generator learns your brand voice and builds full-funnel creative structures from a single prompt.",
              },
              {
                title: "Audience intelligence layer",
                caption: "RAPIDS + Merlin",
                detail: "A high-performance data pipeline clusters audiences dynamically and predicts which segments will convert next.",
              },
              {
                title: "Live pipeline monitoring",
                caption: "Morpheus",
                detail: "Continuous stream processing checks attribution signals, spend, and conversion paths in real time to catch issues instantly.",
              },
              {
                title: "Deployment and optimization",
                caption: "Triton + TensorRT",
                detail: "Models are hosted, served, and accelerated in production so insights and creative output stay low-latency across every campaign.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-[#111111]/80 p-6">
                <p className="text-sm uppercase tracking-[0.18em] text-[#E1DCC9]">{item.caption}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/75">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-gradient-to-r from-[#141212] via-[#0b0b0b] to-[#140c06] p-10 shadow-2xl shadow-black/40">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.22em] text-sand">Ready to see it live</p>
              <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Move from insight to activation with VixIQ X1.
              </h2>
            </div>
            <a
              href="https://app.mero-vix.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-sand px-8 py-4 text-sm font-semibold text-black transition-all hover:brightness-105"
            >
              Explore the live product
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </motion.main>
  );
}
