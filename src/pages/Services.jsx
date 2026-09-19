import { Link } from 'react-router-dom';
import {
  Wrench, CircuitBoard, HardDrive, Camera, Printer,
  ChevronRight, ArrowRight, CheckCircle, PhoneCall, FileText
} from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';

const services = [
  {
    icon: Wrench,
    title: 'Customised Product Development',
    desc: 'Engineer-to-order electronics, embedded hardware, and firmware tailored to your exact industrial and residential specifications. From schematic conception and rapid 3D prototyping to multi-layer assembly.',
    features: ['Requirements Analysis', 'CAD/CAM Mechanical Design', 'Rapid Prototyping', 'Rigorous Stress Testing', 'Production Scale-up'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=700&h=500&fit=crop&q=80',
  },
  {
    icon: CircuitBoard,
    title: 'Custom PCB Design & Assembly',
    desc: 'Full-cycle custom PCB layout, fabrication, and surface-mount (SMT/THT) component assembly. We engineer high-reliability boards engineered for harsh industrial noise and voltage transients.',
    features: ['Schematic Capture', 'Multi-Layer High Speed Routing', 'Component Sourcing', 'Stencils & Pick-and-Place', 'Functional QA Testing'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&h=500&fit=crop&q=80',
  },
  {
    icon: HardDrive,
    title: 'Industrial Automation & Machinery AMC',
    desc: 'Annual Maintenance Contracts (AMC) providing structured preventive diagnostics, PLC backup, sensor calibration, and emergency breakdown repair to guarantee continuous production uptime.',
    features: ['Preventive Diagnostic Visits', 'Emergency 4-Hour Response', 'Spare Parts Provisioning', 'Firmware Patching', 'Safety Audits'],
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=700&h=500&fit=crop&q=80',
  },
  {
    icon: Camera,
    title: 'CCTV & Security Infrastructure AMC',
    desc: 'Comprehensive annual maintenance contracts for high-definition surveillance networks across commercial complexes, residential townships, and factories across Andhra Pradesh.',
    features: ['Lens Realignment & Cleaning', 'NVR/DVR Hard Drive Health', 'PoE Switch Diagnostics', 'Firmware Security Updates', 'UPS & Battery Verification'],
    image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?w=700&h=500&fit=crop&q=80',
  },
  {
    icon: Printer,
    title: 'Rapid 3D Prototyping & Additive Manufacturing',
    desc: 'High-precision FDM, SLA, and resin 3D printing for functional enclosures, custom brackets, motor mounts, and proof-of-concept industrial prototypes in hours instead of weeks.',
    features: ['Industrial Grade Resins & ABS', 'Tight Dimensional Tolerances', 'Surface Finishing & Threading', 'Functional Snap-Fits', 'Low Volume Runs'],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=700&h=500&fit=crop&q=80',
  },
];

const processSteps = [
  { step: '01', title: 'Consultation & Site Audit', desc: 'Our senior engineers analyze your facility blueprints, wiring layouts, and exact technical goals.' },
  { step: '02', title: 'System Architecture & SLD', desc: 'We deliver single-line diagrams, Bill of Materials (BOM), and transparent cost estimates.' },
  { step: '03', title: 'Fabrication & Programming', desc: 'Custom hardware is assembled, firmware is flashed, and end-to-end QA validation is performed.' },
  { step: '04', title: 'On-Site Commissioning', desc: 'Certified technicians install, calibrate, and conduct comprehensive safety load tests.' },
  { step: '05', title: 'AMC & Dedicated Support', desc: 'Scheduled maintenance visits, 24/7 tele-support, and guaranteed emergency response.' },
];

export default function Services() {
  return (
    <div className="bg-[#F8FAFC] pt-20">
      {/* ─── Hero Banner ─── */}
      <section className="relative pt-20 pb-10 sm:pt-32 sm:pb-20 bg-[#071911] text-white border-b border-[#14452F] overflow-hidden bg-grid-pattern-dark">
        <div className="container-custom relative z-10 text-center">
          <ScrollReveal variant="fade-up">
            <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4">
              Comprehensive Engineering & Maintenance
            </span>
          </ScrollReveal>

          <ScrollReveal variant="blur-up" delay={0.1}>
            <h1 className="font-heading font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-3 sm:mb-6 max-w-3xl mx-auto">
              Professional Engineering & AMC Services
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="blur-up" delay={0.2}>
            <p className="text-slate-300 text-xs sm:text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-5 sm:mb-8">
              From custom PCB fabrication and hardware prototyping to mission-critical industrial equipment AMC — our engineering team keeps your systems running flawlessly.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.3}>
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4">
              <Link to="/contact" className="btn-accent">
                <span>Book Service Engineer</span>
                <ArrowRight size={14} />
              </Link>
              <a
                href="tel:+918919890010"
                className="px-3 py-1.5 sm:px-6 sm:py-3 rounded-md sm:rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold text-[11px] sm:text-sm border border-white/20 transition-all inline-flex items-center gap-1 sm:gap-2"
              >
                <PhoneCall size={13} className="text-emerald-400" />
                <span>Call Helpline: +91 8919890010</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Tech Division Line ─── */}
      <div className="tech-divider" />

      {/* ─── Services Detailed List ─── */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-custom">
          <div className="space-y-6 sm:space-y-12">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} variant={i % 2 === 0 ? 'slide-right' : 'fade-right'} delay={0.05}>
                <div className={`card-tech overflow-hidden flex flex-col ${
                  i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } hover:shadow-xl`}>
                  
                  {/* Image - Compact on mobile */}
                  <div className="lg:w-1/2 h-44 sm:h-72 lg:h-auto relative overflow-hidden bg-slate-100">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="lg:w-1/2 p-4 sm:p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2.5 sm:gap-3 mb-2.5 sm:mb-4">
                        <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-emerald-50 border border-emerald-100 text-[#0D5C3A] flex items-center justify-center shrink-0">
                          <s.icon size={24} />
                        </div>
                        <h3 className="font-heading font-bold text-slate-900 text-xl sm:text-2xl">
                          {s.title}
                        </h3>
                      </div>

                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                        {s.desc}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 mb-3">
                          Key Deliverables & Specifications:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {s.features.map((f) => (
                            <div key={f} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                              <CheckCircle size={14} className="text-[#0D5C3A] shrink-0" />
                              <span>{f}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-4">
                      <Link
                        to="/contact"
                        className="btn-primary py-2.5 px-5 text-xs"
                      >
                        <span>Request Service Quote</span>
                        <ArrowRight size={14} />
                      </Link>

                      <a
                        href={`https://wa.me/918919890010?text=Hi%20MK%20Security%20Systems,%20I%20need%20information%20on%20${encodeURIComponent(s.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-[#0D5C3A] hover:underline"
                      >
                        Discuss on WhatsApp →
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Tech Division Line ─── */}
      <div className="tech-divider" />

      {/* ─── Process Flow (High Contrast Dark Section) ─── */}
      <section className="section-padding bg-[#071911] text-white bg-grid-pattern-dark">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold uppercase tracking-widest mb-3">
              Standard Operating Procedure
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight mb-4">
              How We Deliver Projects On Time & On Spec
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Every deployment follows our structured 5-stage quality assurance protocol to eliminate surprises and ensure zero downtime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((p, i) => (
              <ScrollReveal key={p.step} variant="fade-up" delay={i * 0.08}>
                <div className="card-tech-dark p-6 h-full flex flex-col justify-between border-t-2 border-t-emerald-500">
                  <div>
                    <div className="font-mono text-2xl font-black text-emerald-400 mb-3">
                      {p.step}
                    </div>
                    <h4 className="font-heading font-bold text-white text-base mb-2">
                      {p.title}
                    </h4>
                    <p className="text-slate-300 text-xs leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Bottom CTA ─── */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="container-custom text-center max-w-3xl">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 mb-4">
            Need An Emergency Breakdown Repair or AMC Renewal?
          </h2>
          <p className="text-slate-600 text-base mb-8 leading-relaxed">
            Our Visakhapatnam based field service vans are equipped with diagnostic equipment and common replacement boards for rapid site turnarounds.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              <span>Book Emergency Technician</span>
              <ArrowRight size={16} />
            </Link>
            <a
              href="tel:+918919890010"
              className="btn-secondary"
            >
              <span>Direct Hotline: +91 8919890010</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
