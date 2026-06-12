import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Features } from "@/components/site/Features";
import { Pricing } from "@/components/site/Pricing";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VixIQ X1 — Generative AI Marketing Intelligence" },
      {
        name: "description",
        content:
          "VixIQ X1 is a generative AI marketing intelligence platform — orchestrate campaigns, predict outcomes, and optimize ROI in real time.",
      },
      { property: "og:title", content: "VixIQ X1 — Generative AI Marketing Intelligence" },
      {
        property: "og:description",
        content:
          "The generative AI intelligence layer for modern marketing teams.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Features />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </motion.main>
  );
}
