import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Shield, DoorOpen, Factory, Tv,
  ChevronRight, Cpu, Wifi, Smartphone,
  Zap, Users, Award, Clock, PhoneCall, CheckCircle,
  ExternalLink, ArrowRight, Lock, Eye, Play, Sparkles, MessageSquare
} from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

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

export default function Home() {
  return (
    <div className="bg-[#F8FAFC]">
      {/* ─── Hero Section (Full Viewport Height Side-by-Side on Desktop, Compact on Mobile) ─── */}
      <section className="relative min-h-0 lg:min-h-[calc(100vh-4.5rem)] flex items-center justify-center bg-white overflow-hidden bg-grid-pattern pt-20 pb-12 sm:pt-24 sm:pb-16 lg:py-0">
        {/* Subtle Ambient Radial Glows */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/8 rounded-full blur-3xl pointer-events-none" />

        <div className="container-custom relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16">
            
            {/* Left Column: High-Contrast Copy & Actions */}
            <div className="flex-1 max-w-2xl text-center lg:text-left">
              {/* Trust Pill */}
              <ScrollReveal variant="fade-up" delay={0.05}>
                <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 mb-4 sm:mb-6 shadow-xs">
                  <span className="flex h-1.5 w-1.5 sm:h-2 sm:w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-emerald-600"></span>
                  </span>
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#0D5C3A]">
                    Authorized Automation & Security Integrator • Since 2015
                  </span>
                </div>
              </ScrollReveal>

              {/* Main Headline */}
              <ScrollReveal variant="fade-up" delay={0.15}>
                <h1 className="font-heading font-black text-slate-900 text-2xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-tight leading-[1.15] mb-4 sm:mb-6">
                  Intelligent Security & Smart Automation for{' '}
                  <span className="gradient-text block mt-0.5 sm:mt-1">Modern Living</span>
                </h1>
              </ScrollReveal>

              {/* High-Contrast Description */}
              <ScrollReveal variant="fade-up" delay={0.25}>
                <p className="text-slate-700 font-medium text-xs sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
                  From biometric security and AI-powered 4K surveillance to heavy-duty motorized gates and custom industrial automation — we engineer robust systems that safeguard and elevate your living and working spaces.
                </p>
              </ScrollReveal>

              {/* Action Buttons Row */}
              <ScrollReveal variant="fade-up" delay={0.35}>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-4 mb-6 sm:mb-10">
                  <Link to="/products" className="btn-primary">
                    <span>Explore Products</span>
                    <ChevronRight size={15} />
                  </Link>

                  <Link to="/contact" className="btn-secondary">
                    <span>Book Free Site Survey</span>
                  </Link>

                  <a
                    href="tel:+918919890010"
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 sm:px-4 sm:py-3 rounded-md sm:rounded-lg text-slate-800 font-semibold text-[11px] sm:text-sm hover:text-[#0D5C3A] hover:bg-slate-100 transition-colors"
                  >
                    <PhoneCall size={13} className="text-[#0D5C3A]" />
                    <span>+91 8919890010</span>
                  </a>
                </div>
              </ScrollReveal>

              {/* Quick Trust Credentials */}
              <ScrollReveal variant="fade-up" delay={0.45}>
                <div className="pt-4 sm:pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-2 sm:gap-4 text-left">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <CheckCircle size={14} className="text-[#0D5C3A] shrink-0" />
                    <span className="text-[10px] sm:text-xs font-semibold text-slate-800">500+ Projects in AP</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <CheckCircle size={14} className="text-[#0D5C3A] shrink-0" />
                    <span className="text-[10px] sm:text-xs font-semibold text-slate-800">100% Genuine Hardware</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <CheckCircle size={14} className="text-[#0D5C3A] shrink-0" />
                    <span className="text-[10px] sm:text-xs font-semibold text-slate-800">24/7 AMC Support</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Square Video Container (Compact on mobile) */}
            <ScrollReveal variant="fade-left" delay={0.2} className="flex-1 w-full max-w-[260px] sm:max-w-[340px] lg:max-w-[480px] mx-auto">
              <div className="relative group">
                {/* Tech Glowing Frame Accent */}
                <div className="absolute -inset-1.5 sm:-inset-2 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-2xl sm:rounded-3xl blur-md sm:blur-lg opacity-25 group-hover:opacity-40 transition duration-500 pointer-events-none" />

                {/* Square Container */}
                <div className="relative aspect-square w-full rounded-xl sm:rounded-2xl overflow-hidden bg-slate-950 border-1.5 sm:border-2 border-emerald-600/40 shadow-xl sm:shadow-2xl flex items-center justify-center">
                  
                  {/* Status Overlay Header */}
                  <div className="absolute top-2.5 left-2.5 right-2.5 sm:top-4 sm:left-4 sm:right-4 z-20 flex items-center justify-between pointer-events-none">
                    
                    
                  </div>

                  {/* The Video (Square View) */}
                  <video
                    src="/mk_logo_video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    disablePictureInPicture
                    controlsList="nodownload nofullscreen noremoteplayback"
                    className="w-full h-full object-cover"
                    aria-label="MK Security Systems brand video presentation"
                  />

                  {/* Tech Corner Decorative Brackets */}
                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-l-2 border-emerald-400 pointer-events-none" />
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-r-2 border-emerald-400 pointer-events-none" />
                  <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-l-2 border-emerald-400 pointer-events-none" />
                  <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-r-2 border-emerald-400 pointer-events-none" />

                  {/* Subtle Bottom Gradient for Caption */}
                  <div className="absolute bottom-0 inset-x-0 p-2 sm:p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-between text-white z-20">
                    
                    <Link
                      to="/gallery"
                      className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] text-emerald-400 hover:text-emerald-300 font-semibold shrink-0"
                    >
                      <span>Gallery</span>
                      <ExternalLink size={10} />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Tech Division Line ─── */}
      <div className="tech-divider" />

      {/* ─── Core Architecture & Features Strip ─── */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-custom">
          <SectionHeading
            label="Integrated Architecture"
            title="Engineered for Precision & Absolute Security"
            description="Every component is thoroughly tested and configured to communicate seamlessly over high-reliability wireless protocols."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {corePillars.map((p, i) => (
              <ScrollReveal key={p.title} variant="fade-up" delay={i * 0.08}>
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
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── High-Contrast Dark Showcase Section ─── */}
      <section className="py-12 sm:py-20 bg-[#071911] text-white relative overflow-hidden bg-grid-pattern-dark">
        <div className="container-custom relative z-10">
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

          {/* 4 Feature Spec Cards in Dark Mode */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="card-tech-dark p-4 sm:p-6">
              <div className="text-emerald-400 font-mono text-[10px] sm:text-xs font-bold mb-1.5 sm:mb-2">01 / SECURITY</div>
              <h4 className="text-white font-bold text-base sm:text-lg mb-1.5 sm:mb-2">Biometric Verification</h4>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                False acceptance rate under 0.0001% with 3D optical and capacitive live finger scanners.
              </p>
              <span className="text-[11px] sm:text-xs text-emerald-400 font-mono">0.3s Unlock Speed</span>
            </div>

            <div className="card-tech-dark p-4 sm:p-6">
              <div className="text-emerald-400 font-mono text-[10px] sm:text-xs font-bold mb-1.5 sm:mb-2">02 / VISION</div>
              <h4 className="text-white font-bold text-base sm:text-lg mb-1.5 sm:mb-2">AI Color Night Vision</h4>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                F1.0 super-aperture lenses capturing full color in complete darkness with human shape filtering.
              </p>
              <span className="text-[11px] sm:text-xs text-emerald-400 font-mono">24/7 Chromatic Fidelity</span>
            </div>

            <div className="card-tech-dark p-4 sm:p-6">
              <div className="text-emerald-400 font-mono text-[10px] sm:text-xs font-bold mb-1.5 sm:mb-2">03 / GATES</div>
              <h4 className="text-white font-bold text-base sm:text-lg mb-1.5 sm:mb-2">Industrial Gate Motors</h4>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                Oil-bath lubricated gearboxes for heavy iron gates up to 2000kg with optical encoder anti-crush safety.
              </p>
              <span className="text-[11px] sm:text-xs text-emerald-400 font-mono">Continuous Duty Cycle</span>
            </div>

            <div className="card-tech-dark p-4 sm:p-6">
              <div className="text-emerald-400 font-mono text-[10px] sm:text-xs font-bold mb-1.5 sm:mb-2">04 / ELECTRONICS</div>
              <h4 className="text-white font-bold text-base sm:text-lg mb-1.5 sm:mb-2">In-House PCB & IoT</h4>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                Custom circuit boards and firmware for proprietary industrial PLC triggers, relays, and robotics.
              </p>
              <span className="text-[11px] sm:text-xs text-emerald-400 font-mono">FR4 Multi-Layer Quality</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Tech Division Line ─── */}
      <div className="tech-divider" />

      {/* ─── Featured Products Showcase (Working Stock Images) ─── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            label="Engineered Hardware"
            title="Explore Our Core Product Lines"
            description="Discover field-tested smart hardware installed in over 500 prestigious homes and commercial enterprises across Andhra Pradesh."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {featuredProducts.map((prod, i) => (
              <ScrollReveal key={prod.name} variant="fade-up" delay={i * 0.08}>
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
              </ScrollReveal>
            ))}
          </div>

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

      {/* ─── Animated Live Stats Strip ─── */}
      <section className="py-10 sm:py-16 bg-[#071911] text-white border-y border-[#14452F]">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 text-center">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} variant="fade-up" delay={i * 0.1}>
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
        </div>
      </section>

      {/* ─── Bottom CTA Banner ─── */}
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
