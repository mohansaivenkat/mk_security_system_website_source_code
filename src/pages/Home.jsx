import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Shield, DoorOpen, Factory, Tv,
  ChevronRight, Cpu, Wifi, Smartphone,
  Zap, Users, Award, Clock, PhoneCall, CheckCircle,
  ArrowRight, Lock, Eye, Sparkles, MessageSquare,
  ClipboardCheck, PenTool, Wrench, HeadphonesIcon,
  Star, BadgeCheck, Globe, TrendingUp,
} from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import HeroCarousel from '@/components/ui/HeroCarousel';
import ParallaxSection from '@/components/ui/ParallaxSection';
import StaggerContainer, { staggerItemVariants } from '@/components/ui/StaggerContainer';

/* ─── Data ─── */

const corePillars = [
  {
    icon: Cpu,
    title: 'Centralized Smart Hub',
    desc: 'Orchestrate lighting, climate, security cameras, and motorized gates from a unified intuitive dashboard.',
    badge: 'IoT Cloud + Offline',
  },
  {
    icon: Wifi,
    title: 'Zero-Lag Wireless Mesh',
    desc: 'Industrial-grade Zigbee, Matter & RF wireless protocols that eliminate ugly wall channelling and cable clutter.',
    badge: 'Ultra-Low Latency',
  },
  {
    icon: Shield,
    title: 'Bank-Grade Physical Security',
    desc: 'Tamper-proof biometric locks, 4K AI facial recognition CCTV, and instant perimeter intrusion sirens.',
    badge: '256-Bit Encrypted',
  },
  {
    icon: Factory,
    title: 'Embedded System Engineering',
    desc: 'In-house PCB prototyping, PLC industrial panels, and custom firmware for specialized automation workflows.',
    badge: 'Custom Hardware',
  },
];

const featuredProducts = [
  {
    icon: Lock,
    name: 'Biometric & Smart Door Locks',
    tag: 'Home & Commercial Access',
    desc: 'Fingerprint, RFID card, PIN code, mechanical key, and smartphone app remote unlock with auto-relocking.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=700&h=500&fit=crop&q=80',
    link: '/products#digital-locks',
  },
  {
    icon: Eye,
    name: '4K AI CCTV Surveillance',
    tag: 'Full Color Night Vision',
    desc: 'High-definition optical zoom cameras with human/vehicle classification, perimeter boundary tripwires, and cloud recording.',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=700&h=500&fit=crop&q=80',
    link: '/products#cctv',
  },
  {
    icon: DoorOpen,
    name: 'Automatic Sliding & Swing Gates',
    tag: 'Heavy Duty Motors',
    desc: 'Italian motor gate automation supporting up to 2000kg with infrared safety obstacle sensors and wireless remote control.',
    image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=700&h=500&fit=crop&q=80',
    link: '/products#entrance',
  },
  {
    icon: Zap,
    name: 'Boom Barriers & RFID Access',
    tag: 'Gated Communities & Factories',
    desc: 'High-speed automated boom barriers with FASTag / RFID long-range vehicle readers and solar backup capability.',
    image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=700&h=500&fit=crop&q=80',
    link: '/products#entrance',
  },
  {
    icon: Smartphone,
    name: 'Smart Touch Switches & IoT',
    tag: 'Capacitive Glass Panels',
    desc: 'Tempered luxury glass capacitive touch panels with multi-scene dimming, Alexa & Google Assistant voice control.',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=700&h=500&fit=crop&q=80',
    link: '/products#home-automation',
  },
  {
    icon: Tv,
    name: 'Dolby Atmos Home Theaters',
    tag: 'Acoustic Cinema Engineering',
    desc: 'Custom acoustic wall panels, 4K laser projection, and calibrated 7.2.4 Dolby Atmos surround sound engineering.',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=700&h=500&fit=crop&q=80',
    link: '/products#theaters',
  },
];

const stats = [
  { label: 'Years of Engineering', value: 10, suffix: '+', icon: Clock },
  { label: 'Completed Deployments', value: 500, suffix: '+', icon: Zap },
  { label: 'Satisfied Clients', value: 350, suffix: '+', icon: Users },
  { label: 'Custom PCB & IoT Builds', value: 80, suffix: '+', icon: Award },
];

const processSteps = [
  {
    icon: ClipboardCheck,
    step: '01',
    title: 'Site Survey',
    desc: 'Our senior engineers visit your property, assess entry points, wiring, and architectural constraints.',
  },
  {
    icon: PenTool,
    step: '02',
    title: 'Custom Design',
    desc: 'We architect a bespoke system blueprint with a transparent bill of materials and 3D layout previews.',
  },
  {
    icon: Wrench,
    step: '03',
    title: 'Professional Install',
    desc: 'Certified technicians deploy and configure all hardware with concealed wiring and clean finish.',
  },
  {
    icon: HeadphonesIcon,
    step: '04',
    title: '24/7 Support',
    desc: 'Lifetime AMC, remote monitoring, firmware updates, and same-day on-site support across AP.',
  },
];

const trustBadges = [
  { icon: Star, text: '500+ Homes Secured' },
  { icon: BadgeCheck, text: 'Hikvision Authorized' },
  { icon: Shield, text: 'Dahua Certified Partner' },
  { icon: Lock, text: 'Yale Certified Installer' },
  { icon: Globe, text: '10+ Years in Vizag' },
  { icon: Award, text: 'ISO Quality Standards' },
  { icon: TrendingUp, text: 'AMC Renewal Rate 96%' },
  { icon: CheckCircle, text: '100% Genuine Hardware' },
];

export default function Home() {
  return (
    <div className="bg-[#F8FAFC]">
      {/* ═══════════════════════════════════════════════════════════════
          1. IMMERSIVE HERO CAROUSEL
      ═══════════════════════════════════════════════════════════════ */}
      <HeroCarousel />

      {/* ─── Tech Division Line ─── */}
      <div className="tech-divider" />

      {/* ═══════════════════════════════════════════════════════════════
          2. CORE ARCHITECTURE (Staggered Cards)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-custom">
          <SectionHeading
            label="Integrated Architecture"
            title="Engineered for Precision & Absolute Security"
            description="Every component is thoroughly tested and configured to communicate seamlessly over high-reliability wireless protocols."
          />

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {corePillars.map((p) => (
              <motion.div key={p.title} variants={staggerItemVariants}>
                <div className="card-tech p-4 sm:p-6 h-full flex flex-col justify-between group hover:border-[#0D5C3A]">
                  <div>
                    <div className="flex items-center justify-between mb-3 sm:mb-5">
                      <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#0D5C3A] group-hover:scale-110 group-hover:bg-[#0D5C3A] group-hover:text-white transition-all duration-300">
                        <p.icon className="w-4 h-4 sm:w-6 sm:h-6" />
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700 uppercase">
                        {p.badge}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-slate-900 text-base sm:text-lg mb-1.5 sm:mb-2">
                      {p.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {p.desc}
                    </p>
                  </div>

                  <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-slate-100">
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0D5C3A] hover:text-[#084028] group-hover:gap-2 transition-all"
                    >
                      <span>Learn Specifications</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          3. HOW IT WORKS — Process Timeline
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-white relative overflow-hidden">
        <div className="container-custom">
          <SectionHeading
            label="Our Process"
            title="From Survey to 24/7 Protection in 4 Steps"
            description="A streamlined, transparent workflow built on a decade of field experience across Andhra Pradesh."
          />

          <div className="relative">
            {/* Animated Connector Line (hidden on mobile, visible on lg+) */}
            <div className="hidden lg:block timeline-connector" />

            <StaggerContainer
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
              stagger={0.12}
            >
              {processSteps.map((step) => (
                <motion.div key={step.step} variants={staggerItemVariants} className="timeline-step">
                  <div className="text-center group">
                    {/* Step Circle */}
                    <div className="relative mx-auto mb-5 sm:mb-6">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-emerald-50 border-2 border-emerald-200/80 flex items-center justify-center mx-auto group-hover:bg-[#0D5C3A] group-hover:border-[#0D5C3A] transition-all duration-500">
                        <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#0D5C3A] group-hover:text-white transition-colors duration-500" />
                      </div>
                      <span className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0D5C3A] text-white text-[10px] sm:text-xs font-mono font-bold flex items-center justify-center shadow-md shadow-emerald-800/20">
                        {step.step}
                      </span>
                    </div>

                    <h4 className="font-heading font-bold text-slate-900 text-base sm:text-lg mb-2">
                      {step.title}
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xs mx-auto">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* ─── Tech Division Line ─── */}
      <div className="tech-divider" />

      {/* ═══════════════════════════════════════════════════════════════
          4. DARK SHOWCASE SECTION (with Parallax)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-12 sm:py-20 bg-[#071911] text-white relative overflow-hidden bg-grid-pattern-dark">
        <div className="container-custom relative z-10">
          <ParallaxSection speed={0.08}>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-12 mb-8 sm:mb-16">
              <div className="max-w-xl text-center lg:text-left">
                <span className="inline-block px-3 py-0.5 sm:px-3.5 sm:py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4">
                  Enterprise & Industrial Grade
                </span>
                <h2 className="font-heading font-black text-xl sm:text-3xl lg:text-4xl text-white tracking-tight mb-2 sm:mb-4">
                  Uncompromising Protection & Seamless Control
                </h2>
                <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
                  Whether retrofitting a heritage villa or automating a high-throughput industrial facility, Shri MK Embedded Solutions delivers robust, fault-tolerant infrastructure built for 24/7 operation.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4">
                <Link to="/contact" className="btn-accent">
                  <span>Request Custom Quote</span>
                  <ArrowRight size={15} />
                </Link>
                <Link
                  to="/verify"
                  className="px-3 py-1.5 sm:px-6 sm:py-3 rounded-md sm:rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold text-[11px] sm:text-sm border border-white/20 transition-all"
                >
                  Verify Authenticity
                </Link>
              </div>
            </div>
          </ParallaxSection>

          {/* 4 Feature Spec Cards in Dark Mode */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6" stagger={0.1}>
            <motion.div variants={staggerItemVariants}>
              <div className="card-tech-dark p-4 sm:p-6">
                <div className="text-emerald-400 font-mono text-[10px] sm:text-xs font-bold mb-1.5 sm:mb-2">01 / SECURITY</div>
                <h4 className="text-white font-bold text-base sm:text-lg mb-1.5 sm:mb-2">Biometric Verification</h4>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                  False acceptance rate under 0.0001% with 3D optical and capacitive live finger scanners.
                </p>
                <span className="text-[11px] sm:text-xs text-emerald-400 font-mono">0.3s Unlock Speed</span>
              </div>
            </motion.div>

            <motion.div variants={staggerItemVariants}>
              <div className="card-tech-dark p-4 sm:p-6">
                <div className="text-emerald-400 font-mono text-[10px] sm:text-xs font-bold mb-1.5 sm:mb-2">02 / VISION</div>
                <h4 className="text-white font-bold text-base sm:text-lg mb-1.5 sm:mb-2">AI Color Night Vision</h4>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                  F1.0 super-aperture lenses capturing full color in complete darkness with human shape filtering.
                </p>
                <span className="text-[11px] sm:text-xs text-emerald-400 font-mono">24/7 Chromatic Fidelity</span>
              </div>
            </motion.div>

            <motion.div variants={staggerItemVariants}>
              <div className="card-tech-dark p-4 sm:p-6">
                <div className="text-emerald-400 font-mono text-[10px] sm:text-xs font-bold mb-1.5 sm:mb-2">03 / GATES</div>
                <h4 className="text-white font-bold text-base sm:text-lg mb-1.5 sm:mb-2">Industrial Gate Motors</h4>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                  Oil-bath lubricated gearboxes for heavy iron gates up to 2000kg with optical encoder anti-crush safety.
                </p>
                <span className="text-[11px] sm:text-xs text-emerald-400 font-mono">Continuous Duty Cycle</span>
              </div>
            </motion.div>

            <motion.div variants={staggerItemVariants}>
              <div className="card-tech-dark p-4 sm:p-6">
                <div className="text-emerald-400 font-mono text-[10px] sm:text-xs font-bold mb-1.5 sm:mb-2">04 / ELECTRONICS</div>
                <h4 className="text-white font-bold text-base sm:text-lg mb-1.5 sm:mb-2">In-House PCB & IoT</h4>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                  Custom circuit boards and firmware for proprietary industrial PLC triggers, relays, and robotics.
                </p>
                <span className="text-[11px] sm:text-xs text-emerald-400 font-mono">FR4 Multi-Layer Quality</span>
              </div>
            </motion.div>
          </StaggerContainer>
        </div>
      </section>

      {/* ─── Tech Division Line ─── */}
      <div className="tech-divider" />

      {/* ═══════════════════════════════════════════════════════════════
          5. FEATURED PRODUCTS SHOWCASE
      ═══════════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            label="Engineered Hardware"
            title="Explore Our Core Product Lines"
            description="Discover field-tested smart hardware installed in over 500 prestigious homes and commercial enterprises across Andhra Pradesh."
          />

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8" stagger={0.08}>
            {featuredProducts.map((prod) => (
              <motion.div key={prod.name} variants={staggerItemVariants}>
                <div className="card-tech overflow-hidden flex flex-col h-full group hover:shadow-xl">
                  {/* Stock Photo Container with High Quality Unsplash Photo */}
                  <div className="relative h-40 sm:h-48 lg:h-56 overflow-hidden bg-slate-100">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                    
                    {/* Category Tag */}
                    <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 px-2 py-0.5 sm:px-3 sm:py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/15 text-emerald-400 text-[10px] sm:text-xs font-mono font-semibold">
                      {prod.tag}
                    </div>

                    <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 flex items-center gap-2 text-white">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-md sm:rounded-lg bg-[#0D5C3A] flex items-center justify-center shrink-0 shadow-xs">
                        <prod.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                      <span className="font-heading font-bold text-sm sm:text-base text-white truncate">
                        {prod.name}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                      {prod.desc}
                    </p>

                    <div className="flex items-center justify-between pt-2.5 sm:pt-4 border-t border-slate-100">
                      <Link
                        to={prod.link}
                        className="btn-primary py-1 px-2.5 sm:py-2 sm:px-4 text-[10px] sm:text-xs"
                      >
                        <span>View Models</span>
                        <ChevronRight size={12} />
                      </Link>

                      <Link
                        to="/contact"
                        className="text-[10px] sm:text-xs font-bold text-slate-700 hover:text-[#0D5C3A] transition-colors"
                      >
                        Get Price Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>

          <div className="mt-8 sm:mt-12 text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 px-4 py-2 sm:px-8 sm:py-3.5 rounded-lg sm:rounded-xl bg-[#0D5C3A] hover:bg-[#084028] text-white font-bold text-[11px] sm:text-sm shadow-xs hover:shadow-md transition-all"
            >
              <span>View Full 2026 Product Catalog</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          6. TRUSTED BY — Infinite Marquee
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-6 sm:py-10 bg-[#F8FAFC] border-y border-slate-200/80 overflow-hidden">
        <div className="marquee-track">
          {/* Duplicate badges for seamless loop */}
          {[...trustBadges, ...trustBadges].map((badge, i) => (
            <div
              key={`${badge.text}-${i}`}
              className="flex items-center gap-2 sm:gap-2.5 px-5 sm:px-8 py-2 whitespace-nowrap"
            >
              <badge.icon size={16} className="text-[#0D5C3A] shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-slate-700 tracking-wide">
                {badge.text}
              </span>
              <span className="text-slate-300 mx-2 sm:mx-4">•</span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          7. ANIMATED LIVE STATS STRIP (with Parallax)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-10 sm:py-16 bg-[#071911] text-white border-y border-[#14452F]">
        <div className="container-custom">
          <ParallaxSection speed={0.06}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 text-center">
              {stats.map((s, i) => (
                <ScrollReveal key={s.label} variant="blur-up" delay={i * 0.1}>
                  <div className="p-2 sm:p-4 rounded-xl hover:bg-white/5 transition-colors">
                    <s.icon className="w-5 h-5 sm:w-7 sm:h-7 mx-auto mb-2 text-emerald-400" />
                    <div className="font-heading text-2xl sm:text-3xl lg:text-5xl font-black text-white mb-1">
                      <AnimatedCounter end={s.value} suffix={s.suffix} />
                    </div>
                    <p className="text-slate-300 font-medium text-[10px] sm:text-xs uppercase tracking-wider font-mono">
                      {s.label}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ParallaxSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          8. BEFORE & AFTER TRANSFORMATION SHOWCASE
      ═══════════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container-custom">
          <SectionHeading
            label="The MK Transformation"
            title="From Outdated to Intelligent — See the Difference"
            description="Experience the stark contrast between conventional security and our premium smart automation installations."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {/* BEFORE Card */}
            <ScrollReveal variant="slide-right" delay={0}>
              <div className="before-after-card relative h-64 sm:h-80 lg:h-[420px] bg-slate-900 border border-slate-700/50 group">
                <img
                  src="/before_security.jpg"
                  alt="Traditional security setup with exposed wiring and basic padlock"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/20" />

                {/* Label */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/40 text-red-400 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest">
                    Before
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                  <h4 className="text-white font-heading font-bold text-base sm:text-xl mb-1 sm:mb-2">
                    Conventional Security
                  </h4>
                  <p className="text-slate-400 text-[11px] sm:text-sm leading-relaxed max-w-sm">
                    Exposed wiring, basic padlocks, analog cameras with no night vision, and manually operated gates.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* AFTER Card */}
            <ScrollReveal variant="fade-right" delay={0.15}>
              <div className="before-after-card relative h-64 sm:h-80 lg:h-[420px] bg-slate-900 border border-emerald-600/30 group">
                <img
                  src="/after_security.jpg"
                  alt="Modern smart home with biometric locks, 4K cameras, and smart touch panels"
                  className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071911]/90 via-[#071911]/30 to-transparent" />

                {/* Label */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest">
                    <Sparkles size={12} />
                    After
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                  <h4 className="text-white font-heading font-bold text-base sm:text-xl mb-1 sm:mb-2">
                    MK Smart Automation
                  </h4>
                  <p className="text-slate-300 text-[11px] sm:text-sm leading-relaxed max-w-sm">
                    Biometric access, 4K AI cameras, motorized gates, capacitive touch switches — all concealed wiring.
                  </p>
                </div>

                {/* Glow Accent */}
                <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Tech Division Line ─── */}
      <div className="tech-divider" />

      {/* ═══════════════════════════════════════════════════════════════
          9. BOTTOM CTA BANNER
      ═══════════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-custom">
          <ScrollReveal variant="scale-up">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-[#0D5C3A] via-[#094028] to-[#062417] p-5 sm:p-10 lg:p-16 text-center text-white shadow-xl sm:shadow-2xl border border-emerald-600/30">
              
              {/* Background ambient lighting */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 max-w-2xl mx-auto">
                <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/10 border border-white/20 text-emerald-300 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider mb-4 sm:mb-6">
                  Ready To Upgrade Your Infrastructure?
                </span>

                <h2 className="font-heading font-black text-lg sm:text-2xl md:text-4xl text-white mb-3 sm:mb-6 leading-tight">
                  Consult With Our Senior Automation Engineers in Visakhapatnam
                </h2>

                <p className="text-slate-200 text-xs sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed">
                  Get a personalized system architecture, transparent bill of materials, and a site survey for your home, commercial complex, or industrial unit.
                </p>

                <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-4 py-2 sm:px-8 sm:py-4 bg-white text-[#0D5C3A] font-bold text-[11px] sm:text-sm rounded-lg sm:rounded-xl hover:bg-slate-100 hover:shadow-xl transition-all"
                  >
                    <span>Schedule Free Site Survey</span>
                    <ArrowRight size={13} />
                  </Link>

                  <a
                    href="https://wa.me/918919890010?text=Hello%20MK%20Security%20Systems,%20I%20would%20like%20to%20request%20a%20site%20inspection"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-4 py-2 sm:px-8 sm:py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-[11px] sm:text-sm rounded-lg sm:rounded-xl shadow-sm transition-all"
                  >
                    <MessageSquare size={13} />
                    <span>WhatsApp Technical Support</span>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
