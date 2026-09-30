import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  GraduationCap, Cpu, Award, BookOpen, Code,
  Laptop, CheckCircle2, ChevronRight, ArrowRight,
  PhoneCall, MessageSquare, Download, Users, Search,
  Calendar, Hash, User, ShieldCheck, Sparkles, AlertCircle
} from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import StaggerContainer, { staggerItemVariants } from '@/components/ui/StaggerContainer';

// Verified intern credential database
const mockInterns = {
  'MK2024001': { name: 'Ravi Kumar', college: 'GITAM University, Visakhapatnam', pin: '20BCE7124', year: '3rd Year', domain: 'IoT & Embedded Systems' },
  'MK2024002': { name: 'Priya Sharma', college: 'Andhra University, Visakhapatnam', pin: '21CSE4567', year: '2nd Year', domain: 'Edge AI & Computer Vision' },
  'MK2024003': { name: 'Aditya Reddy', college: 'JNTU Kakinada', pin: '20ECE3421', year: '4th Year', domain: 'Automated Robotics & STM32' },
  'MK2024004': { name: 'Sneha Patel', college: 'Centurion University, Vizag', pin: '22ME1098', year: '1st Year', domain: 'PCB Design & 3D Prototyping' },
  'MK2024005': { name: 'Vikram Singh', college: 'GITAM University, Visakhapatnam', pin: '21EEE5432', year: '3rd Year', domain: 'EV Battery Management & Power' },
};

const academicPillars = [
  {
    icon: GraduationCap,
    title: 'Final Year Major & Mini Projects',
    desc: 'Turnkey IEEE standard projects for B.Tech, M.Tech, and Diploma students in ECE, EEE, CSE, and Mechatronics. Complete hardware kit, documented source code, schematic, and viva coaching included.',
    badge: 'B.Tech / M.Tech / Diploma',
    topics: ['IEEE Standard Papers', 'Hardware + Simulation', 'Complete Project Documentation', 'Viva Prep & Seminar PPT'],
  },
  {
    icon: Cpu,
    title: 'Hands-On Industrial Internships',
    desc: 'Intensive 2-week to 6-month hands-on internships covering ARM Cortex, STM32, ESP32, Zigbee, MQTT, custom PCB fabrication, and cloud dashboards with real enterprise project exposure.',
    badge: 'Certified Training',
    topics: ['Microcontroller Architectures', 'Industrial Protocols (CAN, RS485)', 'SMD Soldering & Testing', 'Authorized Verification ID'],
  },
  {
    icon: BookOpen,
    title: 'College Workshops & Lab Setup',
    desc: 'Hands-on practical bootcamps, Faculty Development Programs (FDP), and IoT/Robotics laboratory setup MoUs with engineering colleges and polytechnics across Andhra Pradesh.',
    badge: 'Institutional MoUs',
    topics: ['Hands-On Student Kits', 'Expert Guest Lectures', 'Robotics & Drone Bootcamps', 'Department MoUs'],
  },
];

const projectDomains = [
  {
    name: 'Internet of Things (IoT) & Smart Cities',
    desc: 'Cloud-connected environmental monitors, smart agriculture automation, remote energy meters, and MQTT telemetry.',
    tech: 'ESP32 • AWS IoT • MQTT • ThingsBoard',
    color: 'emerald',
  },
  {
    name: 'Embedded Systems & Firmware',
    desc: 'Bare-metal C/C++ firmware, RTOS multitasking, low-power sensor networks, and custom microcontroller hardware.',
    tech: 'ARM Cortex • STM32 • PIC • FreeRTOS',
    color: 'teal',
  },
  {
    name: 'Robotics, RoVers & Drone Tech',
    desc: 'Autonomous obstacle avoidance rovers, robotic arms, quadcopter flight controllers, and mecanum wheel kinematics.',
    tech: 'ROS • Kinematics • BLDC Motors • OpenCV',
    color: 'blue',
  },
  {
    name: 'Edge AI & Computer Vision',
    desc: 'On-device facial recognition, PPE helmet detection, automated license plate recognition, and anomaly detection.',
    tech: 'Raspberry Pi 5 • YOLOv8 • OpenCV • Python',
    color: 'purple',
  },
  {
    name: 'Electric Vehicles (EV) & Power',
    desc: 'Smart Battery Management Systems (BMS), regenerative braking simulators, and solar MPPT charge controllers.',
    tech: 'CAN Bus • Li-ion BMS • Power Electronics',
    color: 'amber',
  },
  {
    name: 'Custom PCB & Additive 3D Prototyping',
    desc: 'Schematic capture, multi-layer routing, gerber verification, SMD stencil fabrication, and rapid 3D enclosures.',
    tech: 'KiCad • EasyEDA • SLA 3D Printing',
    color: 'cyan',
  },
];

export default function Academics() {
  const [internId, setInternId] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleVerify = (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    const trimmedId = internId.trim().toUpperCase();
    if (!trimmedId) {
      setError('Please enter an Intern ID to verify.');
      return;
    }

    setIsSearching(true);
    setTimeout(() => {
      const found = mockInterns[trimmedId];
      if (found) {
        setResult({ id: trimmedId, ...found });
      } else {
        setError('No intern record found for this ID. Please double-check your ID or contact MK Academics.');
      }
      setIsSearching(false);
    }, 700);
  };

  return (
    <div className="bg-[#F8FAFC] pt-20">
      {/* ─── Hero Section ─── */}
      <section className="relative pt-20 pb-12 sm:pt-32 sm:pb-24 bg-[#071911] text-white border-b border-[#14452F] overflow-hidden bg-grid-pattern-dark">
        {/* Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container-custom relative z-10 text-center">
          <ScrollReveal variant="fade-up">
            <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-3 sm:mb-5">
              Academic Division • Shri MK Embedded Solutions
            </span>
          </ScrollReveal>

          <ScrollReveal variant="blur-up" delay={0.1}>
            <h1 className="font-heading font-black text-2xl sm:text-4xl lg:text-5xl xl:text-6xl text-white tracking-tight mb-4 sm:mb-6 max-w-4xl mx-auto leading-tight">
              Academic Projects, Internships & Hands-On Embedded Training
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="blur-up" delay={0.2}>
            <p className="text-slate-300 text-xs sm:text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8">
              Bridge the gap between textbook theory and industry engineering. We mentor engineering students from premier colleges across AP with genuine hardware prototypes, live firmware development, and verifiable certifications.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.3}>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <a
                href="https://wa.me/918919890010?text=Hello%20Shri%20MK%20Embedded%20Solutions,%20I%20am%20interested%20in%20Academic%20Projects%20/%20Internship"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent px-5 py-2.5 sm:px-7 sm:py-3.5 text-xs sm:text-sm"
              >
                <MessageSquare size={16} />
                <span>Discuss Academic Project</span>
              </a>

              <a
                href="#verification"
                className="px-5 py-2.5 sm:px-6 sm:py-3.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all inline-flex items-center gap-2"
              >
                <ShieldCheck size={16} className="text-emerald-400" />
                <span>Verify Student Certificate</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Tech Division Line ─── */}
      <div className="tech-divider" />

      {/* ─── Academic Pillars ─── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            label="Academic Offerings"
            title="Comprehensive Engineering Support for Students & Colleges"
            description="From mini-projects to full-semester industrial internships, our laboratory provides complete mentorship and hardware resources."
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8" stagger={0.12}>
            {academicPillars.map((pillar) => (
              <motion.div key={pillar.title} variants={staggerItemVariants}>
                <div className="card-tech p-5 sm:p-7 h-full flex flex-col justify-between group hover:border-[#0D5C3A]">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#0D5C3A] group-hover:scale-110 group-hover:bg-[#0D5C3A] group-hover:text-white transition-all duration-300">
                        <pillar.icon size={24} />
                      </div>
                      <span className="text-[10px] font-mono font-bold tracking-wider px-2.5 py-1 rounded bg-slate-100 text-slate-700 uppercase">
                        {pillar.badge}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-slate-900 text-lg sm:text-xl mb-2.5">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                      {pillar.desc}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      {pillar.topics.map((t) => (
                        <div key={t} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 size={13} className="text-[#0D5C3A] shrink-0" />
                          <span>{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <a
                      href={`https://wa.me/918919890010?text=Hello%20MK%20Solutions,%20I%20would%20like%20information%20on%20${encodeURIComponent(pillar.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0D5C3A] hover:text-[#084028] group-hover:gap-2 transition-all"
                    >
                      <span>Inquire Details</span>
                      <ArrowRight size={13} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── Tech Division Line ─── */}
      <div className="tech-divider" />

      {/* ─── Project Domains Grid ─── */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-custom">
          <SectionHeading
            label="Specialized Domains"
            title="Cutting-Edge Hardware & Software Project Domains"
            description="Explore major domains where students build industry-ready capstone projects under our engineering guidance."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectDomains.map((domain, i) => (
              <ScrollReveal key={domain.name} variant="blur-up" delay={i * 0.08}>
                <div className="card-tech p-5 sm:p-6 h-full flex flex-col justify-between group hover:shadow-lg">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        Domain 0{i + 1}
                      </span>
                    </div>

                    <h4 className="font-heading font-bold text-slate-900 text-base sm:text-lg mb-2 group-hover:text-[#0D5C3A] transition-colors">
                      {domain.name}
                    </h4>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                      {domain.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] sm:text-xs font-mono font-semibold text-slate-500">
                      {domain.tech}
                    </span>
                    <a
                      href={`https://wa.me/918919890010?text=Hi%20MK%20Solutions,%20I%20am%20looking%20for%20a%20project%20in%20${encodeURIComponent(domain.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-[#0D5C3A] hover:underline"
                    >
                      Choose Topic
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Tech Division Line ─── */}
      <div className="tech-divider" />

      {/* ─── Interactive Credential & Intern Verification Section ─── */}
      <section id="verification" className="section-padding bg-white relative overflow-hidden">
        <div className="container-custom">
          <SectionHeading
            label="Instant Verification"
            title="Authenticate Authorized Intern & Training Certificates"
            description="Enter the unique Intern ID printed on your official Shri MK Embedded Solutions certificate to verify authenticity in real-time."
          />

          <div className="max-w-xl mx-auto">
            <ScrollReveal variant="scale-up">
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                <form onSubmit={handleVerify} className="space-y-4">
                  <div>
                    <label htmlFor="intern-id-academics" className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
                      Enter Intern ID / Certificate Code
                    </label>
                    <div className="relative">
                      <Hash size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        id="intern-id-academics"
                        type="text"
                        value={internId}
                        onChange={(e) => setInternId(e.target.value)}
                        placeholder="e.g. MK2024001"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0D5C3A]/30 focus:border-[#0D5C3A] transition-all placeholder:text-slate-400 uppercase font-mono"
                        autoComplete="off"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSearching}
                    className="w-full btn-primary justify-center cursor-pointer py-3"
                  >
                    {isSearching ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
                          <path d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" fill="currentColor" className="opacity-75" />
                        </svg>
                        Searching Record...
                      </span>
                    ) : (
                      <>
                        <Search size={16} />
                        <span>Verify Certificate Record</span>
                      </>
                    )}
                  </button>
                </form>

                {/* Error */}
                <AnimatePresence mode="wait">
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="mt-4 flex items-start gap-2.5 p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm"
                    >
                      <AlertCircle size={16} className="text-red-500 shrink-0 mt-0.5" />
                      <span>{error}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Verification Result Card */}
                <AnimatePresence mode="wait">
                  {result && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="mt-6 p-5 rounded-xl bg-white border-2 border-emerald-500/40 shadow-md"
                    >
                      <div className="flex items-center gap-2 mb-3 text-emerald-700 font-bold text-xs sm:text-sm">
                        <CheckCircle2 size={18} className="text-emerald-600" />
                        <span>Official Intern Verified Successfully</span>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                          <div className="w-10 h-10 rounded-full bg-emerald-100 text-[#0D5C3A] flex items-center justify-center font-bold">
                            <User size={20} />
                          </div>
                          <div>
                            <p className="font-heading font-bold text-slate-900 text-sm sm:text-base">{result.name}</p>
                            <p className="text-slate-500 text-xs font-mono">{result.id} • {result.domain}</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                          <div>
                            <span className="text-slate-400 block text-[11px]">Institution</span>
                            <span className="font-medium text-slate-800">{result.college}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block text-[11px]">Roll / PIN No.</span>
                            <span className="font-mono font-medium text-slate-800">{result.pin}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block text-[11px]">Academic Year</span>
                            <span className="font-medium text-slate-800">{result.year}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block text-[11px]">Issuing Body</span>
                            <span className="font-semibold text-[#0D5C3A]">Shri MK Embedded Solutions</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Sample IDs */}
                <div className="mt-5 pt-4 border-t border-slate-200">
                  <p className="text-slate-500 text-[11px] mb-2 font-medium">Quick sample IDs for testing:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {Object.keys(mockInterns).map((id) => (
                      <button
                        key={id}
                        type="button"
                        onClick={() => { setInternId(id); setError(''); setResult(null); }}
                        className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-200/80 hover:bg-emerald-100 hover:text-emerald-800 text-slate-700 transition-colors cursor-pointer"
                      >
                        {id}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Tech Division Line ─── */}
      <div className="tech-divider" />

      {/* ─── Bottom CTA Banner ─── */}
      <section className="section-padding bg-[#071911] text-white">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-4">
            <GraduationCap size={24} />
          </div>

          <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-white mb-3">
            Looking for Guidance on Your Final Year Project?
          </h2>

          <p className="text-slate-300 text-xs sm:text-base mb-6 sm:mb-8 leading-relaxed">
            Visit our lab in Dwarka Nagar, Visakhapatnam, or get in touch for topic selection, kit components, code explanation, and project thesis writing.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="https://wa.me/918919890010?text=Hello%20MK%20Solutions,%20I%20would%20like%20to%20visit%20the%20lab%20for%20Project%20Guidance"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent px-5 py-2.5 sm:px-8 sm:py-3.5 text-xs sm:text-sm"
            >
              <MessageSquare size={16} />
              <span>Schedule Lab Visit on WhatsApp</span>
            </a>

            <Link
              to="/contact"
              className="px-5 py-2.5 sm:px-6 sm:py-3.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all inline-flex items-center gap-2"
            >
              <span>Contact Academic Counselor</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
