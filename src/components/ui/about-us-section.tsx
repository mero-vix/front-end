"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import {
  Pen,
  PaintBucket,
  Home,
  Ruler,
  PenTool,
  Building2,
  Award,
  Users,
  Calendar,
  CheckCircle,
  Sparkles,
  Star,
  ArrowRight,
  Zap,
  TrendingUp,
} from "lucide-react"
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion"

export default function AboutUsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50])
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const services = [
    {
      icon: <img src="/images/Strategy.svg" alt="Strategy" className="w-8 h-8" style={{ filter: "drop-shadow(0px 0px 1px rgba(253, 107, 34, 0.5))" }} />,
      secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-sand/60" />,
      title: "Strategy",
      description:
        "Transform your business intelligence with our expert strategy services. We blend data and creativity to build actionable insights that drive growth.",
      position: "left",
    },
    {
      icon: <img src="/images/Architecture.svg" alt="Architecture" className="w-8 h-8" style={{ filter: "drop-shadow(0px 0px 1px rgba(253, 107, 34, 0.5))" }} />,
      secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-sand/60" />,
      title: "Architecture",
      description:
        "Make a lasting impression with stunning digital infrastructure that enhances performance and creates harmonious connections between systems.",
      position: "left",
    },
    {
      icon: <img src="/images/Design.svg" alt="Design" className="w-8 h-8" style={{ filter: "drop-shadow(0px 0px 1px rgba(253, 107, 34, 0.5))" }} />,
      secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-sand/60" />,
      title: "Design",
      description:
        "Our innovative design process combines creativity with practicality, resulting in interfaces that are both beautiful and highly functional.",
      position: "left",
    },
    {
      icon: <img src="/images/Deployment.svg" alt="Deployment" className="w-8 h-8" style={{ filter: "drop-shadow(0px 0px 1px rgba(253, 107, 34, 0.5))" }} />,
      secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-sand/60" />,
      title: "Deployment",
      description:
        "Elevate your operations with our curated integration services. From complex workflows to simple triggers, we perfect every detail to life.",
      position: "right",
    },
    {
      icon: <img src="/images/Planning.svg" alt="Planning" className="w-8 h-8" style={{ filter: "drop-shadow(0px 0px 1px rgba(253, 107, 34, 0.5))" }} />,
      secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-sand/60" />,
      title: "Planning",
      description:
        "Our meticulous planning process ensures every project runs smoothly from concept to completion, with careful attention to timelines and budgets.",
      position: "right",
    },
    {
      icon: <img src="/images/Execution.svg" alt="Execution" className="w-8 h-8" style={{ filter: "drop-shadow(0px 0px 1px rgba(253, 107, 34, 0.5))" }} />,
      secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-sand/60" />,
      title: "Execution",
      description:
        "Watch your intelligence layer come to life through our flawless execution. Our skilled team handles every aspect with precision and care.",
      position: "right",
    },
  ]

  const stats = [
    { icon: <Award />, value: 150, label: "Pipelines Built", suffix: "+" },
    { icon: <Users />, value: 1200, label: "Happy Clients", suffix: "+" },
    { icon: <Calendar />, value: 12, label: "Years Experience", suffix: "" },
    { icon: <TrendingUp />, value: 98, label: "Satisfaction Rate", suffix: "%" },
  ]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-full py-24 px-4 bg-background text-foreground overflow-hidden relative"
    >
      {/* Decorative background blobs */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-sand/5 blur-3xl pointer-events-none"
        style={{ y: y1, rotate: rotate1 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-white/[0.03] blur-3xl pointer-events-none"
        style={{ y: y2, rotate: rotate2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-sand/30 pointer-events-none"
        animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-white/10 pointer-events-none"
        animate={{ y: [0, 20, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <motion.div
        className="container mx-auto max-w-6xl relative z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div className="flex flex-col items-center mb-6" variants={itemVariants}>
          <motion.span
            className="text-orange-500 font-sub text-sm uppercase tracking-[0.25em] font-semibold mb-4 flex items-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Zap className="w-4 h-4" />
            DISCOVER OUR STORY
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-heading mb-4 text-center">Why MeroVix Exists</h2>
          <motion.div
            className="h-1 bg-sand rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <motion.p
          className="text-center max-w-2xl mx-auto mb-16 text-muted-foreground leading-relaxed"
          variants={itemVariants}
        >
          We are a passionate team of engineers and strategists dedicated to creating beautiful, functional intelligence
          layers that inspire and elevate your business. With attention to detail and commitment to excellence, we
          transform data into reality.
        </motion.p>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
          {/* Left Column */}
          <div className="space-y-6">
            {services
              .filter((s) => s.position === "left")
              .map((service, index) => (
                <ServiceItem
                  key={`left-${index}`}
                  icon={service.icon}
                  secondaryIcon={service.secondaryIcon}
                  title={service.title}
                  description={service.description}
                  variants={itemVariants}
                  delay={index * 0.2}
                  direction="left"
                />
              ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center items-stretch order-first md:order-none mb-8 md:mb-0">
            <motion.div className="relative w-full" variants={itemVariants}>
              <motion.div
                className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 h-full min-h-[500px]"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                <img
                  src="/images/About us miidle page.svg"
                  alt="AI Intelligence Platform"
                  className="w-full h-full object-cover"
                  style={{ minHeight: "500px" }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end justify-center p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  <motion.button
                    className="bg-white/10 backdrop-blur-sm border border-white/20 text-foreground hover:border-sand/50 hover:bg-white/20 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Our Solutions <ArrowRight className="w-4 h-4 text-sand" />
                  </motion.button>
                </motion.div>
              </motion.div>

              {/* Glowing border frame */}
              <motion.div
                className="absolute inset-0 border-2 border-sand/20 rounded-2xl -m-3 z-[-1]"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />

              {/* Floating circles */}
              <motion.div
                className="absolute -top-4 -right-8 w-16 h-16 rounded-full bg-sand/10 border border-white/5 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
                style={{ y: y1 }}
              />
              <motion.div
                className="absolute -bottom-6 -left-10 w-20 h-20 rounded-full bg-white/5 border border-white/5 backdrop-blur-sm"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.1 }}
                style={{ y: y2 }}
              />
              <motion.div
                className="absolute -top-10 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-sand"
                animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white/50"
                animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {services
              .filter((s) => s.position === "right")
              .map((service, index) => (
                <ServiceItem
                  key={`right-${index}`}
                  icon={service.icon}
                  secondaryIcon={service.secondaryIcon}
                  title={service.title}
                  description={service.description}
                  variants={itemVariants}
                  delay={index * 0.2}
                  direction="right"
                />
              ))}
          </div>
        </div>

      </motion.div>
    </section>
  )
}

interface ServiceItemProps {
  icon: React.ReactNode
  secondaryIcon?: React.ReactNode
  title: string
  description: string
  variants: {
    hidden: { opacity: number; y?: number }
    visible: { opacity: number; y?: number; transition: { duration: number; ease: string } }
  }
  delay: number
  direction: "left" | "right"
}

function ServiceItem({ icon, secondaryIcon, title, description, variants, delay, direction }: ServiceItemProps) {
  return (
    <motion.div
      className="flex flex-col group border border-orange-500/25 hover:border-orange-500/60 transition-colors duration-300 rounded-2xl p-5"
      variants={variants}
      transition={{ delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="flex items-center gap-3 mb-3"
        initial={{ x: direction === "left" ? -20 : 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        <motion.div
          className="text-orange-500 bg-orange-500/10 p-3 rounded-xl transition-colors duration-300 group-hover:bg-orange-500/20 relative border border-white/5"
          whileHover={{ rotate: [0, -10, 10, -5, 0], transition: { duration: 0.5 } }}
        >
          {icon}
          {secondaryIcon}
        </motion.div>
        <h3 className="text-xl font-medium text-foreground group-hover:text-sand transition-colors duration-300">
          {title}
        </h3>
      </motion.div>
      <motion.p
        className="text-sm text-muted-foreground leading-relaxed pl-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.4 }}
      >
        {description}
      </motion.p>
    </motion.div>
  )
}

interface StatCounterProps {
  icon: React.ReactNode
  value: number
  label: string
  suffix: string
  delay: number
}

function StatCounter({ icon, value, label, suffix, delay }: StatCounterProps) {
  const countRef = useRef(null)
  const isInView = useInView(countRef, { once: false })
  const [hasAnimated, setHasAnimated] = useState(false)

  const springValue = useSpring(0, { stiffness: 50, damping: 10 })

  useEffect(() => {
    if (isInView && !hasAnimated) {
      springValue.set(value)
      setHasAnimated(true)
    } else if (!isInView && hasAnimated) {
      springValue.set(0)
      setHasAnimated(false)
    }
  }, [isInView, value, springValue, hasAnimated])

  const displayValue = useTransform(springValue, (latest) => Math.floor(latest))

  return (
    <motion.div
      className="glass border border-orange-500/30 p-6 rounded-2xl flex flex-col items-center text-center group hover:border-orange-500/60 transition-all duration-300"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
      }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="w-14 h-14 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center mb-4 text-orange-500 group-hover:bg-orange-500/10 transition-colors duration-300"
        whileHover={{ rotate: 360, transition: { duration: 0.8 } }}
      >
        {icon}
      </motion.div>
      <motion.div ref={countRef} className="text-3xl font-bold text-foreground flex items-center font-heading">
        <motion.span>{displayValue}</motion.span>
        <span>{suffix}</span>
      </motion.div>
      <p className="text-muted-foreground text-sm mt-1">{label}</p>
      <motion.div className="w-10 h-0.5 bg-sand mt-3 group-hover:w-16 transition-all duration-300 rounded-full" />
    </motion.div>
  )
}
