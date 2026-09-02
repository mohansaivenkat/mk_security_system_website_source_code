import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  Home, Shield, DoorOpen, Factory, Tv,
  Smartphone, Layers, Plug, Radio,
  Camera, DoorClosed, Lock, Bell, Fence, Search,
  ArrowRight, CheckCircle, Download, PhoneCall, ExternalLink,
  Filter, Sparkles
} from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';

const categories = [
  {
    id: 'all',
    name: 'All Solutions',
    icon: Sparkles,
  },
  {
    id: 'security',
    name: 'Security & CCTV',
    icon: Shield,
  },
  {
    id: 'locks',
    name: 'Biometric Locks',
    icon: Lock,
  },
  {
    id: 'entrance',
    name: 'Gates & Barriers',
    icon: DoorOpen,
  },
  {
    id: 'automation',
    name: 'Smart Automation',
    icon: Home,
  },
  {
    id: 'industrial',
    name: 'Industrial & Robotics',
    icon: Factory,
  },
  {
    id: 'theaters',
    name: 'Home Theaters',
    icon: Tv,
  },
];

const productCatalog = [
  {
    id: 'cctv-4k-ai',
    category: 'security',
    name: '4K AI Color Night Vision CCTV System',
    subtitle: 'Ultra-HD Optical Surveillance with Human / Vehicle Detection',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=700&h=500&fit=crop&q=80',
    specs: ['4K 8MP Resolution', 'F1.0 Super Aperture', 'ColorVu 24/7', 'Cloud & NVR Backup'],
    desc: 'High-precision security cameras featuring intelligent boundary tripwires, two-way audio talkback, and real-time smartphone intrusion alerts.',
    badge: 'Best Seller',
  },
  {
    id: 'smart-lock-pro',
    category: 'locks',
    name: 'MK Smart Touch Biometric Door Lock',
    subtitle: '6-in-1 Advanced Keyless Residential & Commercial Entry',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=700&h=500&fit=crop&q=80',
    specs: ['0.3s Fingerprint Scanner', 'Anti-Peep Touch PIN', 'RFID Cards', 'Mechanical Fallback Key'],
    desc: 'Heavy-duty mortise lock body built with alloy steel, tamper sensor siren, and remote OTP generation for visiting guests.',
    badge: 'Top Rated',
  },
  {
    id: 'sliding-gate-motor',
    category: 'entrance',
    name: 'Automated Sliding Gate Motor 1500KG',
    subtitle: 'Heavy Duty Italian Drive System with Infrared Safety Eyes',
    image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=700&h=500&fit=crop&q=80',
    specs: ['Max Weight: 1500kg', 'Soft-Start / Soft-Stop', 'Rolling Code RF Remotes', 'Manual Key Release'],
    desc: 'Oil-immersed gear reduction motor engineered for high-frequency residential and commercial driveway entrances with anti-crush sensors.',
    badge: 'Heavy Duty',
  },
  {
    id: 'boom-barrier-fastag',
    category: 'entrance',
    name: 'Automatic High-Speed Boom Barrier',
    subtitle: 'Smart Parking, Toll, & Society Access with RFID / FASTag',
    image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=700&h=500&fit=crop&q=80',
    specs: ['1.5s - 3s Fast Open', 'Telescopic Aluminum Arm', 'Loop Detector Interface', '100% Duty Cycle'],
    desc: 'Brushless DC motor barrier for apartments, gated communities, and industrial shipping yards with automated vehicle authorization.',
    badge: 'Commercial',
  },
  {
    id: 'smart-touch-panel',
    category: 'automation',
    name: 'Capacitive Glass Smart Touch Panels',
    subtitle: 'Architectural Lighting, Fan, & Scene Automation Switchboards',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=700&h=500&fit=crop&q=80',
    specs: ['Tempered Crystal Glass', 'Backlit LED Indicators', 'Zigbee 3.0 / WiFi', 'Voice Assistant Ready'],
    desc: 'Direct retrofit over standard modular wall boxes without rewiring. Enables dimming, scheduling, scene presets, and master kill switches.',
    badge: 'Smart Living',
  },
  {
    id: 'video-door-intercom',
    category: 'security',
    name: 'IP Video Door Phone & Touch Monitor',
    subtitle: 'Two-Way Audio/Video Intercom with Remote Door Release',
    image: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=700&h=500&fit=crop&q=80',
    specs: ['7-Inch HD Touchscreen', '1080p Wide-Angle Camera', 'Mobile App Divert', 'Visitor Snapshot Log'],
    desc: 'Answer your doorbell from anywhere in the world, speak with delivery agents, and unlock your front gate directly from your smartphone.',
    badge: 'Popular',
  },
  {
    id: 'motorized-curtains',
    category: 'automation',
    name: 'Motorized Smart Curtains & Drapery',
    subtitle: 'Ultra-Quiet Heavy Drapery Automation with Sun Tracking',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=700&h=500&fit=crop&q=80',
    specs: ['< 30dB Silent Motor', 'Pull-to-Start Feature', 'Automated Sunrise Timer', 'Up to 50kg Fabric'],
    desc: 'Custom length motorized curtain tracks paired with ambient light sensors for automated thermal management and privacy control.',
    badge: 'Luxury Comfort',
  },
  {
    id: 'industrial-plc-cabinet',
    category: 'industrial',
    name: 'Custom Industrial PLC Automation Panels',
    subtitle: 'Process Automation, SCADA Integration & Robotics Controls',
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=700&h=500&fit=crop&q=80',
    specs: ['Siemens / Delta PLC', 'IP65 Weatherproof Cabinet', 'Modbus / RS485 Comm', 'Emergency E-Stop Logic'],
    desc: 'Turnkey industrial automation panels engineered, wired, and programmed for chemical plants, food processing, packaging, and custom machines.',
    badge: 'Engineered',
  },
  {
    id: 'home-theater-atmos',
    category: 'theaters',
    name: 'Dolby Atmos Custom Private Cinema',
    subtitle: 'Acoustically Calibrated 7.2.4 Cinema Rooms & 4K Laser Projection',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=700&h=500&fit=crop&q=80',
    specs: ['4K HDR Laser Projection', 'Dolby Atmos 7.2.4', 'Soundproof Wall Panelling', 'Motorized Recliner Control'],
    desc: 'Complete acoustic treatment, hidden architectural speakers, fiber-optic star ceilings, and smart lighting synced to film playback.',
    badge: 'Cinema Grade',
  },
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = selectedCategory === 'all'
    ? productCatalog
    : productCatalog.filter(p => p.category === selectedCategory);

  return (
    <div className="bg-[#F8FAFC]">
      {/* ─── Page Hero Banner ─── */}
      <section className="relative pt-20 pb-10 sm:pt-32 sm:pb-20 bg-[#071911] text-white border-b border-[#14452F] overflow-hidden bg-grid-pattern-dark">
        <div className="container-custom relative z-10 text-center">
          <ScrollReveal variant="fade-up">
            <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4">
              Genuine Hardware • 2026 Product Range
            </span>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.1}>
            <h1 className="font-heading font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-3 sm:mb-6 max-w-3xl mx-auto">
              Engineered Security & Smart Living Systems
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.2}>
            <p className="text-slate-300 text-xs sm:text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-5 sm:mb-8">
              Explore our tested hardware portfolio backed by manufacturer warranties, precision installation, and 24/7 dedicated engineering support.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.3}>
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-[10px] sm:text-xs text-slate-300 font-mono">
              <span className="flex items-center gap-1.5"><CheckCircle size={13} className="text-emerald-400" /> Authorized Dealer</span>
              <span className="flex items-center gap-1.5"><CheckCircle size={13} className="text-emerald-400" /> 1-to-3 Year Warranty</span>
              <span className="flex items-center gap-1.5"><CheckCircle size={13} className="text-emerald-400" /> Free On-Site Survey</span>
              <span className="flex items-center gap-1.5"><CheckCircle size={13} className="text-emerald-400" /> Certified AMC</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Tech Division Line ─── */}
      <div className="tech-divider" />

      {/* ─── Filter Category Bar ─── */}
      <section className="py-8 bg-white border-b border-slate-200 sticky top-[72px] z-40 shadow-xs">
        <div className="container-custom">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#0D5C3A] text-white shadow-md'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  <cat.icon size={15} className={isSelected ? 'text-emerald-300' : 'text-slate-500'} />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Products Grid ─── */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900">
                {categories.find(c => c.id === selectedCategory)?.name || 'All Solutions'}
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Showing {filteredProducts.length} certified models with verified stock in Andhra Pradesh.
              </p>
            </div>

            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-[#0D5C3A] text-xs font-bold hover:bg-emerald-100 transition-colors"
            >
              <span>Need Custom Hardware?</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="card-tech flex flex-col h-full overflow-hidden group hover:shadow-xl">
                    {/* Working Stock Photo Container - Compact on mobile */}
                    <div className="relative h-36 sm:h-52 lg:h-60 overflow-hidden bg-slate-200">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />

                      {/* Badge */}
                      <span className="absolute top-2 right-2 sm:top-3 sm:right-3 px-2 py-0.5 sm:px-3 sm:py-1 rounded bg-emerald-600 text-white font-mono text-[9px] sm:text-[11px] font-bold shadow-xs">
                        {product.badge}
                      </span>

                      {/* Title on bottom of image */}
                      <div className="absolute bottom-2 left-2.5 right-2.5 sm:bottom-3 sm:left-4 sm:right-4 text-white">
                        <span className="text-[9px] sm:text-[11px] font-mono text-emerald-300 uppercase tracking-widest block mb-0.5">
                          {product.subtitle}
                        </span>
                        <h3 className="font-heading font-bold text-sm sm:text-lg text-white leading-tight">
                          {product.name}
                        </h3>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-3.5 sm:p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-5">
                          {product.desc}
                        </p>

                        {/* Specs Badges */}
                        <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-4 sm:mb-6">
                          {product.specs.map((spec) => (
                            <span
                              key={spec}
                              className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-slate-100 border border-slate-200/80 text-slate-700 text-[10px] sm:text-xs font-mono font-medium"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="pt-2.5 sm:pt-4 border-t border-slate-100 flex items-center justify-between gap-1.5 sm:gap-3">
                        <Link
                          to="/contact"
                          className="btn-primary py-1 px-2.5 sm:py-2.5 sm:px-4 text-[10px] sm:text-xs flex-1 text-center"
                        >
                          <span>Get Price Quote</span>
                        </Link>

                        <a
                          href={`https://wa.me/918919890010?text=Hello%20MK%20Security%20Systems,%20please%20send%20specifications%20for%20${encodeURIComponent(product.name)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary py-1 px-2 sm:py-2.5 sm:px-3 text-[10px] sm:text-xs text-slate-700 hover:text-[#0D5C3A] inline-flex items-center gap-1"
                          title="Chat on WhatsApp"
                        >
                          <span>Enquire</span>
                          <ExternalLink size={11} />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ─── Tech Division Line ─── */}
      <div className="tech-divider" />

      {/* ─── Bottom CTA Strip ─── */}
      <section className="py-16 bg-white">
        <div className="container-custom text-center max-w-3xl">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#0D5C3A] flex items-center justify-center mx-auto mb-4 border border-emerald-100">
            <PhoneCall size={22} />
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 mb-3">
            Looking for Custom System Integration or Bulk Ordering?
          </h2>
          <p className="text-slate-600 text-base mb-6 leading-relaxed">
            Our engineering team prepares comprehensive technical proposals, single-line diagrams (SLD), and custom pricing for commercial builders, architects, and industrial facilities.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              <span>Contact Senior Sales Engineer</span>
              <ArrowRight size={16} />
            </Link>
            <Link to="/verify" className="btn-secondary">
              <span>Verify Genuine Serial Number</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
