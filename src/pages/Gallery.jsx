import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';

const categories = ['All', 'Projects', 'Products', 'Workspace', 'Events'];

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop', category: 'Projects', title: 'Smart Home Installation' },
  { src: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=600&fit=crop', category: 'Products', title: 'Security Camera Setup' },
  { src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop', category: 'Products', title: 'Custom PCB Board' },
  { src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=500&fit=crop', category: 'Workspace', title: 'Engineering Lab' },
  { src: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&h=400&fit=crop', category: 'Projects', title: 'Industrial Automation' },
  { src: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&h=500&fit=crop', category: 'Projects', title: 'Home Theater Setup' },
  { src: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop', category: 'Products', title: '3D Printed Prototype' },
  { src: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=600&h=600&fit=crop', category: 'Projects', title: 'Automatic Gate System' },
  { src: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop', category: 'Events', title: 'Tech Exhibition' },
  { src: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=600&h=500&fit=crop', category: 'Workspace', title: 'Team Collaboration' },
  { src: 'https://images.unsplash.com/photo-1557862921-37829c790f19?w=600&h=400&fit=crop', category: 'Products', title: 'CCTV Systems' },
  { src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop', category: 'Projects', title: 'Robotics Project' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filteredImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="bg-[#F8FAFC]">
      {/* ─── Hero Banner ─── */}
      <section className="relative pt-20 pb-10 sm:pt-32 sm:pb-20 bg-[#071911] text-white border-b border-[#14452F] overflow-hidden bg-grid-pattern-dark">
        <div className="container-custom text-center relative z-10">
          <ScrollReveal variant="fade-up">
            <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4">
              Visual Installation Portfolio
            </span>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={0.1}>
            <h1 className="font-heading font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-3 sm:mb-6 max-w-3xl mx-auto">
              Real-World Deployments & Engineering Gallery
            </h1>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={0.2}>
            <p className="text-slate-300 text-xs sm:text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Explore photographs of our residential smart living spaces, commercial gate automations, and custom industrial PCB solutions across Andhra Pradesh.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Tech Division Line ─── */}
      <div className="tech-divider" />

      {/* ─── Gallery Grid ─── */}
      <section className="section-padding bg-bg">
        <div className="container-custom">
          {/* Category Filter */}
          <ScrollReveal variant="fade-up">
            <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-6 sm:mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-hover cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-brand text-white shadow-sm'
                      : 'bg-surface text-text-secondary hover:bg-brand-light hover:text-brand border border-border'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Masonry-like Grid */}
          <motion.div
            layout
            className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img, i) => (
                <motion.div
                  key={img.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  className="break-inside-avoid"
                >
                  <button
                    onClick={() => setLightbox(img)}
                    className="block w-full rounded-xl overflow-hidden card-shadow hover:card-shadow-hover group transition-shadow cursor-hover relative"
                  >
                    <img
                      src={img.src}
                      alt={img.title}
                      className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div className="text-white text-left">
                        <p className="font-heading font-semibold text-sm">{img.title}</p>
                        <p className="text-white/70 text-xs">{img.category}</p>
                      </div>
                    </div>
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ─── Lightbox ─── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lightbox-overlay"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={lightbox.src} alt={lightbox.title} />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-heading font-semibold text-base">{lightbox.title}</p>
                <p className="text-white/70 text-sm">{lightbox.category}</p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/25 transition-colors cursor-hover"
                aria-label="Close lightbox"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
