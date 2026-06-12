"use client";
import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { motion } from "motion/react";
import NumberFlow from "@number-flow/react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Basic",
    description: "For solo operators getting started with AI marketing.",
    monthlyPrice: 49,
    yearlyPrice: 399,
    features: [
      "1 connected workspace",
      "AI campaign generator (50/mo)",
      "Predictive analytics — core",
      "Email support",
    ],
  },
  {
    name: "Pro",
    description: "For growth teams running multi-channel programs.",
    monthlyPrice: 199,
    yearlyPrice: 1590,
    recommended: true,
    features: [
      "5 connected workspaces",
      "Unlimited campaign generation",
      "Audience intelligence + clustering",
      "ROI optimization agent",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    description: "For organizations operating at global scale.",
    monthlyPrice: null,
    yearlyPrice: null,
    features: [
      "Unlimited workspaces & seats",
      "Dedicated model fine-tuning",
      "SSO, audit logs, SOC 2",
      "White-glove onboarding",
      "Named success engineer",
    ],
  },
];

const PricingSwitch = ({ isYearly, onSwitch }: { isYearly: boolean; onSwitch: (v: boolean) => void }) => {
  const btnRefs = [useRef<HTMLButtonElement>(null), useRef<HTMLButtonElement>(null)];
  const [highlight, setHighlight] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const btn = btnRefs[isYearly ? 1 : 0].current;
    if (btn) setHighlight({ left: btn.offsetLeft, width: btn.offsetWidth });
  }, [isYearly]);

  return (
    <div className="flex justify-start">
      <div className="relative flex w-fit rounded-xl border border-white/10 bg-white/5 p-1">
        <motion.span
          className="absolute top-1 bottom-1 rounded-lg border border-[#fd6b22]/60 bg-[#fd6b22]/20 pointer-events-none"
          animate={{ left: highlight.left, width: highlight.width }}
          transition={{ type: "spring", stiffness: 500, damping: 35 }}
        />
        {(["Monthly Billing", "Yearly Billing"] as const).map((label, i) => (
          <button
            key={label}
            ref={btnRefs[i]}
            onClick={() => onSwitch(i === 1)}
            className={cn(
              "relative z-10 h-11 cursor-pointer rounded-lg px-5 text-sm font-medium transition-colors",
              isYearly === (i === 1) ? "text-white" : "text-white/40 hover:text-white/70"
            )}
          >
            <span className="relative flex items-center gap-2">
              {label}
              {i === 1 && (
                <span className="rounded-full bg-[#fd6b22]/20 px-2 py-0.5 text-xs text-[#fd6b22]">
                  Save 20%
                </span>
              )}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default function PricingSection5() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="py-4">
      {/* Sub-header */}
      <div className="mb-10 space-y-6">
        <p className="text-white/50 text-sm">
          Trusted by teams worldwide — explore which option is right for you.
        </p>
        <PricingSwitch isYearly={isYearly} onSwitch={setIsYearly} />
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "relative rounded-2xl border border-[#fd6b22]/40 bg-[#0f0f0f] p-8 flex flex-col gap-6 transition-colors duration-300 hover:bg-[#fd6b22]/10",
              plan.recommended && "ring-1 ring-white/20"
            )}
          >
            {plan.recommended && (
              <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                <span className="flex items-center gap-1.5 rounded-full border border-[#fd6b22] bg-[#fd6b22] px-4 py-1.5 text-xs font-medium text-white">
                  ✦ RECOMMENDED
                </span>
              </div>
            )}

            <div>
              <h3 className="text-xl font-bold text-white">{plan.name}</h3>
              <p className="mt-1 text-sm text-white/50">{plan.description}</p>
            </div>

            <div className="flex items-baseline gap-1">
              {plan.monthlyPrice === null ? (
                <span className="text-5xl font-bold text-white">Custom</span>
              ) : (
                <>
                  <span className="text-5xl font-bold text-white flex items-baseline gap-0.5">
                    <span>$</span>
                    <NumberFlow
                      value={isYearly ? plan.yearlyPrice! : plan.monthlyPrice}
                      className="text-5xl font-bold text-white"
                      transformTiming={{ duration: 500, easing: "ease-out" }}
                      spinTiming={{ duration: 500, easing: "ease-out" }}
                    />
                  </span>
                  <span className="text-sm text-white/50">/{isYearly ? "yr" : "mo"}</span>
                </>
              )}
            </div>

            <ul className="space-y-3 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-white/80">
                  <Check className="h-4 w-4 shrink-0 text-[#fd6b22]" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 mt-auto">
              <button
                className={cn(
                  "w-full rounded-full py-3 text-sm font-semibold transition-opacity hover:opacity-90",
                  plan.recommended
                    ? "bg-[#f5f0e8] text-black"
                    : "border border-white/20 bg-transparent text-white"
                )}
              >
                Get Started
              </button>
              <button className="w-full rounded-full border border-white/10 py-3 text-sm font-medium text-white/60 hover:text-white transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
