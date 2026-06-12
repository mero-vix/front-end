"use client";

import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import { CheckCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useId, useRef, useState } from "react";

const PricingSwitch = ({
  button1,
  button2,
  onSwitch,
  className,
  layoutId,
}: {
  button1: string;
  button2: string;
  onSwitch: (value: string) => void;
  className?: string;
  layoutId?: string;
}) => {
  const [selected, setSelected] = useState("0");
  const uniqueId = useId();
  const switchLayoutId = layoutId || `switch-${uniqueId}`;

  const handleSwitch = (value: string) => {
    setSelected(value);
    onSwitch(value);
  };

  return (
    <div
      className={cn(
        "relative z-10 w-full flex rounded-full bg-white/5 border border-white/10 p-1",
        className,
      )}
    >
      <button
        onClick={() => handleSwitch("0")}
        className={cn(
          "relative z-10 w-full sm:h-14 h-10 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors",
          selected === "0"
            ? "text-white"
            : "text-slate-400 hover:text-white",
        )}
      >
        {selected === "0" && (
          <motion.span
            layoutId={switchLayoutId}
            className="absolute top-0 left-0 sm:h-14 h-10 w-full rounded-full border border-[#fd6b22]/50 shadow-sm shadow-[#fd6b22]/20 bg-[#1F150C]"
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        )}
        <span className="relative">{button1}</span>
      </button>

      <button
        onClick={() => handleSwitch("1")}
        className={cn(
          "relative z-10 w-full sm:h-14 h-10 flex-shrink-0 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors",
          selected === "1"
            ? "text-white"
            : "text-slate-400 hover:text-white",
        )}
      >
        {selected === "1" && (
          <motion.span
            layoutId={switchLayoutId}
            className="absolute top-0 left-0 sm:h-14 h-10 w-full rounded-full border border-[#fd6b22]/50 shadow-sm shadow-[#fd6b22]/20 bg-[#1F150C]"
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        )}
        <span className="relative flex justify-center items-center gap-2">
          {button2}
        </span>
      </button>
    </div>
  );
};

export default function PricingSection1() {
  const [isUpdates, setIsUpdates] = useState(false);
  const [isCorporate, setIsCorporate] = useState(false);
  const pricingRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.3,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };
  const timelineVaraints = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const toggleUpdates = (value: string) =>
    setIsUpdates(Number.parseInt(value) === 1);
  const toggleCorporate = (value: string) =>
    setIsCorporate(Number.parseInt(value) === 1);

  const STRIPE_LINKS: Record<string, string> = {
    'personal_3months':  'https://buy.stripe.com/test_3cI4gs6I83P8aaRcgU2VG03',
    'personal_yearly':   'https://buy.stripe.com/test_eVq14gaYogBU96N4Os2VG02',
    'corporate_3months': 'https://buy.stripe.com/test_dRmeV66I83P8fvb5Sw2VG01',
    'corporate_yearly':  'https://buy.stripe.com/test_4gM8wI9Uk4TcciZbcQ2VG00',
  };

  const getStripeLink = () => {
    const plan = isCorporate ? 'corporate' : 'personal';
    const duration = isUpdates ? 'yearly' : '3months';
    return STRIPE_LINKS[`${plan}_${duration}`];
  };

  const calculatePrice = () => {
    if (!isUpdates && !isCorporate) return 98; // 3 months + personal
    if (isUpdates && !isCorporate) return 400; // yearly + personal
    if (!isUpdates && isCorporate) return 159; // 3 months + corporate
    if (isUpdates && isCorporate) return 650; // yearly + corporate
    return 98;
  };

  const calculateOriginalPrice = () => {
    const currentPrice = calculatePrice();
    return Math.round(currentPrice * 1.45);
  };

  const currentPrice = calculatePrice();
  const originalPrice = calculateOriginalPrice();

  const features = [
    "Connect ad platforms & CRM",
    "Real-time audience segmentation",
    "Predictive performance modeling",
    "Automated creative generation",
    "Continuous budget optimization",
    "Unified cross-channel attribution",
    "Priority 24/7 support",
  ];

  return (
    <div className="px-4 pt-10 w-full min-h-screen mx-auto relative bg-[#0a0a0a] overflow-hidden" ref={pricingRef}>
      <div className="py-16 px-4 relative">
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-40"
          style={{
            background:
              "radial-gradient(125% 125% at 50% 10%, transparent 40%, rgba(253,107,34,0.15) 100%)",
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <TimelineContent
            as="div"
            animationNum={0}
            timelineRef={pricingRef}
            customVariants={revealVariants}
            className="flex items-center justify-center mb-6"
          >
            <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-[#fd6b22]/10 border border-[#fd6b22]/20 text-[#fd6b22] font-medium text-xs sm:text-sm uppercase tracking-widest">
              <Zap className="h-4 w-4 fill-[#fd6b22]" />
              Time to scale
            </span>
          </TimelineContent>

          <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold text-white mb-6 leading-tight">
            <VerticalCutReveal
              splitBy="words"
              staggerDuration={0.15}
              staggerFrom="first"
              reverse={true}
              containerClassName="justify-center"
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 40,
                delay: 0.4,
              }}
            >
              Scale Your Campaign Intelligence.
            </VerticalCutReveal>
          </h1>

          <TimelineContent
            as="p"
            animationNum={1}
            timelineRef={pricingRef}
            customVariants={revealVariants}
            className="text-xl text-slate-400 max-w-2xl mx-auto"
          >
            Start in minutes. Scale when the intelligence pays for itself. Get VixIQ X1, connect, save time and money. Profit!
          </TimelineContent>
        </div>
      </div>

      {/* Product Features */}
      <div className="px-4 pb-12 relative z-10">
        <div className="max-w-6xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <TimelineContent
                as="h3"
                animationNum={2}
                timelineRef={pricingRef}
                customVariants={revealVariants}
                className="text-3xl font-semibold text-white mb-8 border-b border-white/10 pb-4"
              >
                What's included
              </TimelineContent>

              <div className="space-y-5">
                {features.map((feature, index) => (
                  <TimelineContent
                    key={index}
                    as="div"
                    animationNum={3 + index}
                    timelineRef={pricingRef}
                    customVariants={timelineVaraints}
                  >
                    <div className="flex items-start">
                      <div className="w-6 h-6 mt-0.5 bg-[#fd6b22]/20 border border-[#fd6b22]/50 shadow-[0_0_10px_rgba(253,107,34,0.2)] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <CheckCheck className="h-3 w-3 text-[#fd6b22]" />
                      </div>
                      <span className="text-slate-300 text-lg">{feature}</span>
                    </div>
                  </TimelineContent>
                ))}
              </div>
            </div>

            <div className="space-y-10 bg-[#1F150C] p-8 rounded-2xl border border-white/5 shadow-inner">
              <TimelineContent
                as="div"
                animationNum={3}
                timelineRef={pricingRef}
                customVariants={revealVariants}
              >
                <h4 className="font-semibold text-white text-lg mb-1">
                  Access duration
                </h4>
                <p className="text-sm text-slate-400 mb-4">
                  Select how long you need access to the platform
                </p>
                <PricingSwitch
                  button1="3 Months"
                  button2="Yearly"
                  onSwitch={toggleUpdates}
                  className="grid grid-cols-2 w-full"
                />
              </TimelineContent>

              <TimelineContent
                as="div"
                animationNum={4}
                timelineRef={pricingRef}
                customVariants={revealVariants}
              >
                <h4 className="font-semibold text-white text-lg mb-1">
                  License type
                </h4>
                <p className="text-sm text-slate-400 mb-4">
                  Select Corporate if you're part of a larger team
                </p>
                <PricingSwitch
                  button1="Personal"
                  button2="Corporate"
                  onSwitch={toggleCorporate}
                  className="grid grid-cols-2 w-full"
                />
              </TimelineContent>

              <div className="pt-6 border-t border-white/10">
                <TimelineContent
                  as="div"
                  animationNum={5}
                  timelineRef={pricingRef}
                  customVariants={revealVariants}
                  className="flex flex-col sm:flex-row items-center justify-between gap-6"
                >
                  <div className="flex items-baseline">
                    <span className="text-6xl font-bold text-white tracking-tight">
                      $
                      <NumberFlow
                        value={currentPrice}
                        className="text-6xl font-bold"
                      />
                    </span>
                    <span className="text-2xl text-slate-500 line-through ml-3 relative">
                      ${originalPrice}
                    </span>
                  </div>
                  <TimelineContent
                    as="div"
                    animationNum={6}
                    timelineRef={pricingRef}
                    customVariants={revealVariants}
                    className="w-full sm:w-auto"
                  >
                    <a
                      href={getStripeLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0a0a0a] text-lg font-bold h-14 px-8 w-full sm:w-auto rounded-full bg-[#fd6b22] hover:bg-[#fd6b22]/90 hover:shadow-[0_0_20px_rgba(253,107,34,0.4)] transition-all duration-300 flex items-center justify-center text-center gap-2 cursor-pointer"
                    >
                      Get Started
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </TimelineContent>
                </TimelineContent>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
