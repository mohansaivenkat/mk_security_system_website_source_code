import { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import {
  ChevronLeft, ChevronRight, Pause, Play,
  Home, DoorOpen, Shield, Tv, Volume2, Radio,
} from 'lucide-react';

const slides = [
  {
    icon: Home,
    badge: 'Smart Living & IoT',
    headline: 'Home Automation',
    sub: 'Transform your living space with luxury capacitive touch switches, smart lighting scenes, climate regulation, automated curtains, and voice control.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=1920&h=1080&fit=crop&q=85',
    mobileImage: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=750&h=1334&fit=crop&q=80',
    cta: '/products#automation',
  },
  {
    icon: DoorOpen,
    badge: 'Motorized Entrance Systems',
    headline: 'Gate Automation',
    sub: 'Heavy-duty Italian sliding and swing gate motors engineered for smooth operation up to 2000kg with obstacle infrared safety sensors and wireless remotes.',
    image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=1920&h=1080&fit=crop&q=85',
    mobileImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=750&h=1334&fit=crop&q=80',
    cta: '/products#entrance',
  },
  {
    icon: Shield,
    badge: '24/7 AI Perimeter Defense',
    headline: 'CCTV & Security',
    sub: 'Ultra-HD 4K full-color night vision surveillance, human & vehicle AI classification, perimeter boundary tripwires, and smart biometric access locks.',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1920&h=1080&fit=crop&q=85',
    mobileImage: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=750&h=1334&fit=crop&q=85',
    cta: '/products#security',
  },
  {
    icon: Tv,
    badge: 'Acoustic Cinema Engineering',
    headline: 'Home Theaters',
    sub: 'Bespoke private cinema rooms engineered with 4K UHD laser projection, acoustic fabric panelling, and calibrated 7.2.4 Dolby Atmos surround sound.',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=1920&h=1080&fit=crop&q=85',
    mobileImage: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=750&h=1334&fit=crop&q=80',
    cta: '/products#theaters',
  },
  {
    icon: Volume2,
    badge: 'Synchronized Whole-Home Audio',
    headline: 'Multiroom Audio',
    sub: 'Stream high-fidelity, synchronized music throughout every room with architectural in-ceiling speakers, multi-zone amplifiers, and smartphone streaming.',
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=1920&h=1080&fit=crop&q=85',
    mobileImage: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=750&h=1334&fit=crop&q=80',
    cta: '/products#theaters',
  },
  {
    icon: Radio,
    badge: 'Intelligent Environmental Safety',
    headline: 'Different Standalone Sensors',
    sub: 'Comprehensive wireless safety sensors including PIR motion detectors, LPG gas leak monitors, smoke alarms, door/window contacts, and water flood alerts.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=1080&fit=crop&q=85',
    mobileImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=750&h=1334&fit=crop&q=80',
    cta: '/products#sensors',
  },
];

const SLIDE_DURATION = 4000; // 4 seconds per slide

/** Detects mobile viewport (≤ 768px) */
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 768 : false
  );
  useEffect(() => {
    const mql = window.matchMedia('(max-width: 768px)');
    const handler = (e) => setIsMobile(e.matches);
    mql.addEventListener('change', handler);
    setIsMobile(mql.matches);
    return () => mql.removeEventListener('change', handler);
  }, []);
  return isMobile;
}

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const intervalRef = useRef(null);
  const containerRef = useRef(null);
  const isMobile = useIsMobile();

  // Parallax on scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.45, 0.85]);

  const goTo = useCallback((index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  }, [current]);

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Auto-advance
  useEffect(() => {
    if (isPaused) {
      clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(goNext, SLIDE_DURATION);
    return () => clearInterval(intervalRef.current);
  }, [isPaused, goNext]);

  const slide = slides[current];
  const SlideIcon = slide.icon;
  const currentImageSrc = isMobile ? slide.mobileImage : slide.image;

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? '8%' : '-8%',
      opacity: 0,
      scale: 1.08,
    }),
    center: {
      x: '0%',
      opacity: 1,
      scale: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? '-8%' : '8%',
      opacity: 0,
      scale: 0.95,
    }),
  };

  const textVariants = {
    enter: { opacity: 0, y: 30, filter: 'blur(6px)' },
    center: { opacity: 1, y: 0, filter: 'blur(0px)' },
    exit: { opacity: 0, y: -20, filter: 'blur(4px)' },
  };

  return (
    <section
      ref={containerRef}
      className="hero-carousel relative w-full overflow-hidden bg-slate-950"
      style={{ height: 'calc(100vh - 0rem)' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="Featured products showcase"
    >
      {/* ─── Background Image Layer with Parallax ─── */}
      <AnimatePresence custom={direction} mode="sync">
        <motion.div
          key={`bg-${current}-${isMobile ? 'm' : 'd'}`}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="absolute inset-0 z-0"
        >
          <motion.img
            src={currentImageSrc}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
            style={{ y: bgY }}
            loading={current === 0 ? 'eager' : 'lazy'}
          />
        </motion.div>
      </AnimatePresence>

      {/* ─── Cinematic Gradient Overlay ─── */}
      <motion.div
        className="absolute inset-0 z-[1]"
        style={{ opacity: overlayOpacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-slate-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40" />
      </motion.div>

      {/* ─── Grid Pattern Overlay ─── */}
      <div className="absolute inset-0 z-[2] bg-grid-pattern-dark opacity-30 pointer-events-none" />

      {/* ─── Ambient Glow ─── */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/8 rounded-full blur-[120px] pointer-events-none z-[2]" />
      <div className="absolute top-1/4 right-[10%] w-[300px] h-[300px] bg-emerald-400/6 rounded-full blur-[100px] pointer-events-none z-[2]" />

      {/* ─── Content ─── */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="container-custom w-full">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`content-${current}`}
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
              className="max-w-2xl"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/8 border border-white/15 backdrop-blur-md mb-4 sm:mb-6">
                <SlideIcon size={14} className="text-emerald-400" />
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-emerald-400 font-mono">
                  {slide.badge}
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-heading font-black text-white text-3xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-[1.08] mb-4 sm:mb-6">
                {slide.headline}
              </h1>

              {/* Sub-copy */}
              <p className="text-slate-300 font-medium text-sm sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8 max-w-xl">
                {slide.sub}
              </p>

              {/* CTA Row */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <Link
                  to={slide.cta}
                  className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-7 sm:py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm rounded-lg sm:rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-400/30 transition-all hover:-translate-y-0.5"
                >
                  <span>Explore Product</span>
                  <ChevronRight size={15} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-7 sm:py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm rounded-lg sm:rounded-xl border border-white/20 backdrop-blur-sm transition-all hover:-translate-y-0.5"
                >
                  <span>Get Free Quote</span>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ─── Slide Counter ─── */}
      <div className="absolute top-28 sm:top-32 right-6 sm:right-10 z-20 text-right">
        <span className="font-heading font-black text-5xl sm:text-7xl text-white/10">
          {String(current + 1).padStart(2, '0')}
        </span>
        <div className="h-px w-12 bg-white/20 ml-auto mt-1 mb-1" />
        <span className="font-mono text-xs text-white/40">
          / {String(slides.length).padStart(2, '0')}
        </span>
      </div>

      {/* ─── Bottom Controls Bar ─── */}
      <div className="absolute bottom-0 inset-x-0 z-20">
        {/* Progress bar */}
        <div className="w-full h-0.5 bg-white/10">
          <motion.div
            className="h-full bg-emerald-400"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{
              duration: isPaused ? 99999 : SLIDE_DURATION / 1000,
              ease: 'linear',
            }}
            key={`progress-${current}-${isPaused}`}
          />
        </div>

        <div className="bg-gradient-to-t from-slate-950/90 to-transparent pt-8 pb-6 sm:pb-8 px-6 sm:px-10">
          <div className="container-custom flex items-center justify-between">
            {/* Pagination Dots */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`carousel-dot transition-all duration-300 cursor-pointer ${i === current
                      ? 'w-8 sm:w-10 h-1.5 sm:h-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/40'
                      : 'w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-white/30 hover:bg-white/50'
                    }`}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === current ? 'true' : undefined}
                />
              ))}
            </div>

            {/* Arrow Controls + Play/Pause */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Play / Pause */}
              <button
                onClick={() => setIsPaused((p) => !p)}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-all cursor-pointer"
                aria-label={isPaused ? 'Play carousel' : 'Pause carousel'}
              >
                {isPaused ? <Play size={14} /> : <Pause size={14} />}
              </button>

              {/* Previous */}
              <button
                onClick={goPrev}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-all cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft size={16} />
              </button>

              {/* Next */}
              <button
                onClick={goNext}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-all cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Trust Strip at very bottom ─── */}
      <div className="absolute bottom-[4.5rem] sm:bottom-[5.5rem] left-0 right-0 z-20">
        <div className="container-custom">
          <div className="flex flex-wrap items-center gap-x-5 sm:gap-x-8 gap-y-1 text-[10px] sm:text-xs text-white/50 font-mono">
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-emerald-400 inline-block" />
              500+ Projects in AP
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-emerald-400 inline-block" />
              100% Genuine Hardware
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-emerald-400 inline-block" />
              24/7 AMC Support
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-emerald-400 inline-block" />
              Since 2015
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
