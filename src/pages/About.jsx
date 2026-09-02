import { Link } from 'react-router-dom';
import {
  Shield, CheckCircle, Award, Calendar,
  Rocket, Handshake, ArrowRight, ExternalLink,
  Cpu, Wrench, Clock, Users, PhoneCall, ChevronRight
} from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

const milestones = [
  { year: '2015', title: 'Company Founded', desc: 'Inception in Visakhapatnam with focus on custom embedded hardware, microcontroller programming, and security electronics.' },
  { year: '2017', title: 'First Large Automation', desc: 'Successfully completed premier multi-zone residential automation and intelligent lighting retrofit.' },
  { year: '2019', title: 'Industrial Expansion', desc: 'Expanded into heavy-duty automatic gates, boom barriers, and custom PLC industrial control panels.' },
  { year: '2021', title: 'Additive 3D Lab & AMC', desc: 'Established internal rapid 3D prototyping facility and formalized 24/7 dedicated maintenance contracts.' },
  { year: '2024–26', title: 'Regional Industry Leader', desc: 'Surpassed 500+ successful deployments across Andhra Pradesh, trusted by architects and builders.' },
];

const pillars = [
  {
    icon: Award,
    title: '100% Genuine Hardware',
    desc: 'Authorized system integrator offering authentic OEM products backed by comprehensive 1-to-3 year manufacturer warranties.',
    tag: 'Authentic OEM',
  },
  {
    icon: Calendar,
    title: 'A Decade of Field Expertise',
    desc: 'Over 10 years of hands-on embedded engineering, tackling complex architectural challenges with fail-safe wiring standards.',
    tag: 'Since 2015',
  },
  {
    icon: Cpu,
    title: 'In-House Hardware & IoT',
    desc: 'Proprietary PCB design, micro-soldering, PLC logic programming, and rapid 3D resin enclosure prototyping under one roof.',
    tag: 'R&D Lab',
  },
  {
    icon: Handshake,
    title: '24/7 Dedicated AMC Support',
    desc: 'Scheduled preventive inspections, optical lens calibration, battery health checks, and priority emergency response teams.',
    tag: 'Certified AMC',
  },
];

const stats = [
  { value: 500, suffix: '+', label: 'Projects Completed', icon: Rocket },
  { value: 350, suffix: '+', label: 'Satisfied Clients', icon: Users },
  { value: 10, suffix: '+', label: 'Years in Engineering', icon: Clock },
  { value: 100, suffix: '%', label: 'Genuine Hardware', icon: Shield },
];

export default function About() {
  return (
    <div className="bg-[#F8FAFC]">
      {/* ─── Hero Banner (Compact & High Contrast) ─── */}
      <section className="relative pt-20 pb-10 sm:pt-28 sm:pb-16 bg-[#071911] text-white border-b border-[#14452F] overflow-hidden bg-grid-pattern-dark">
        <div className="container-custom text-center relative z-10">
          <ScrollReveal variant="fade-up">
            <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4">
              Authorized Integrator • Shri MK Embedded Solutions
            </span>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.1}>
            <h1 className="font-heading font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-3 sm:mb-4 max-w-3xl mx-auto leading-tight">
              Engineering Trust, Security & Smart Living Since 2015
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.2}>
            <p className="text-slate-300 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed mb-6">
              Headquartered in Dwarka Nagar, Visakhapatnam, we design, fabricate, and commission intelligent security, motorized entrance automation, and custom embedded systems for premium residences and industrial plants.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.3}>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[10px] sm:text-xs text-slate-300 font-mono">
              <span className="flex items-center gap-1.5"><CheckCircle size={13} className="text-emerald-400" /> Visakhapatnam HQ</span>
              <span className="flex items-center gap-1.5"><CheckCircle size={13} className="text-emerald-400" /> 500+ Certified Installations</span>
              <span className="flex items-center gap-1.5"><CheckCircle size={13} className="text-emerald-400" /> In-House PCB & 3D Lab</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Tech Division Line ─── */}
      <div className="tech-divider" />

      {/* ─── Executive Overview & Milestones (Combined Tight Section) ─── */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Leadership & Company Profile (7 cols) */}
            <div className="lg:col-span-7">
              <ScrollReveal variant="fade-up">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 mb-3 sm:mb-4">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#0D5C3A]">
                    Executive Profile
                  </span>
                </div>

                <h2 className="font-heading font-black text-xl sm:text-3xl text-slate-900 tracking-tight mb-4">
                  Built by Engineers for Demanding Environments
                </h2>

                <div className="space-y-3 text-slate-700 text-xs sm:text-sm leading-relaxed mb-6">
                  <p>
                    <strong className="text-slate-900 font-bold">Shri MK Embedded Solutions</strong> was established in 2015 under the leadership of founder <strong className="text-[#0D5C3A] font-bold">Manikanta</strong>. What began as a dedicated embedded systems lab focused on circuit design and microcontroller logic has grown into one of Andhra Pradesh’s most trusted technical contractors for smart home automation, CCTV surveillance, and motorized entrance automation.
                  </p>
                  <p>
                    Unlike ordinary sales dealers, we are certified electronics and firmware engineers. We configure Single Line Diagrams (SLD), evaluate power factor surges, design custom relay PCB interfaces, and thoroughly bench-test every system before on-site installation.
                  </p>
                </div>

                {/* Founder Quote Card */}
                <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#071911] text-white border border-[#14452F] relative overflow-hidden shadow-md">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#0D5C3A] flex items-center justify-center font-heading font-black text-white text-base sm:text-lg border border-emerald-500/40 shrink-0">
                      MK
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-sm sm:text-base text-white">Manikanta</h4>
                      <p className="text-emerald-400 font-mono text-[10px] sm:text-xs">Founder & Principal Systems Engineer</p>
                    </div>
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm italic leading-relaxed">
                    “Our standard is zero-compromise engineering: no unsightly exposed cables, fail-safe optical sensors on motorized gates, and robust hardware that withstands coastal humidity and industrial power surges.”
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Milestones Timeline (5 cols) */}
            <div className="lg:col-span-5 bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-200">
              <ScrollReveal variant="fade-left">
                <div className="flex items-center justify-between mb-5 border-b border-slate-200 pb-3">
                  <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900">
                    Growth Milestones
                  </h3>
                  <span className="text-[10px] font-mono font-bold text-[#0D5C3A] bg-emerald-100/70 px-2 py-0.5 rounded">
                    2015 – 2026
                  </span>
                </div>

                <div className="space-y-4">
                  {milestones.map((m, idx) => (
                    <div key={m.year} className="flex gap-3 relative">
                      {/* Left Year & Line */}
                      <div className="flex flex-col items-center shrink-0 w-12">
                        <span className="font-mono text-[11px] font-bold text-[#0D5C3A] bg-white border border-emerald-200 px-1.5 py-0.5 rounded shadow-2xs text-center w-full">
                          {m.year}
                        </span>
                        {idx !== milestones.length - 1 && (
                          <div className="w-0.5 flex-1 bg-emerald-200/80 my-1" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="pb-1.5 flex-1">
                        <h4 className="font-heading font-bold text-xs sm:text-sm text-slate-900 mb-0.5">
                          {m.title}
                        </h4>
                        <p className="text-slate-600 text-[11px] sm:text-xs leading-relaxed">
                          {m.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Tech Division Line ─── */}
      <div className="tech-divider" />

      {/* ─── Core Engineering Capabilities (Tight 2x2 Grid) ─── */}
      <section className="py-10 sm:py-16 bg-[#F8FAFC]">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <span className="text-[10px] sm:text-xs font-mono font-bold text-[#0D5C3A] uppercase tracking-wider block mb-1">
              Why Shri MK Embedded Solutions
            </span>
            <h2 className="font-heading font-black text-xl sm:text-3xl text-slate-900 tracking-tight mb-2">
              Our Core Engineering Guarantees
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              We eliminate typical installer guesswork with disciplined blueprints, verified component provenance, and structured life-cycle support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {pillars.map((p, i) => (
              <ScrollReveal key={p.title} variant="fade-up" delay={i * 0.08}>
                <div className="card-tech p-4 sm:p-6 h-full flex flex-col justify-between group hover:border-[#0D5C3A]">
                  <div>
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#0D5C3A] group-hover:scale-105 group-hover:bg-[#0D5C3A] group-hover:text-white transition-all duration-300">
                        <p.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700 uppercase">
                        {p.tag}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-slate-900 text-sm sm:text-base mb-1.5">
                      {p.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Compact Live Stats Strip ─── */}
      <section className="py-8 sm:py-12 bg-[#071911] text-white border-y border-[#14452F]">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} variant="fade-up" delay={i * 0.08}>
                <div className="p-2 sm:p-3 rounded-xl hover:bg-white/5 transition-colors">
                  <s.icon className="w-4 h-4 sm:w-6 sm:h-6 mx-auto mb-1.5 text-emerald-400" />
                  <div className="font-heading text-xl sm:text-3xl lg:text-4xl font-black text-white mb-0.5">
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

      {/* ─── Compact CTA Banner ─── */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="container-custom">
          <ScrollReveal variant="scale-up">
            <div className="rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#0D5C3A] via-[#094028] to-[#062417] p-5 sm:p-10 text-center text-white shadow-lg border border-emerald-600/30 max-w-3xl mx-auto">
              <span className="inline-block px-3 py-0.5 rounded-full bg-white/10 border border-white/20 text-emerald-300 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider mb-3">
                Direct Engineering Engagement
              </span>

              <h2 className="font-heading font-black text-lg sm:text-2xl text-white mb-2 leading-snug">
                Have a Technical Project in Mind?
              </h2>

              <p className="text-slate-200 text-xs sm:text-sm mb-5 max-w-xl mx-auto leading-relaxed">
                Connect directly with our engineering team for on-site feasibility inspections, architectural SLD diagrams, and itemized quotations.
              </p>

              <div className="flex flex-wrap gap-2.5 sm:gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 sm:px-6 sm:py-3 bg-white text-[#0D5C3A] font-bold text-[11px] sm:text-xs rounded-lg hover:bg-slate-100 transition-all shadow-xs"
                >
                  <span>Book Free Site Survey</span>
                  <ArrowRight size={13} />
                </Link>

                <a
                  href="https://wa.me/918919890010?text=Hello%20MK%20Security%20Systems,%20I%20would%20like%20to%20consult%20with%20an%20engineer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 sm:px-6 sm:py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-[11px] sm:text-xs rounded-lg transition-all shadow-xs"
                >
                  <PhoneCall size={13} />
                  <span>Call or WhatsApp: +91 8919890010</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
