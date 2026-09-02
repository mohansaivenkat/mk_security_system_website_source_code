import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, PhoneCall, ArrowRight } from 'lucide-react';
import BrandLogo from '../ui/BrandLogo';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Services', path: '/services' },
  { name: 'Verify', path: '/verify' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  const handleLinkClick = () => {
    setIsMobileOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-2.5 sm:top-3.5 left-1/2 -translate-x-1/2 z-[9990] w-[94%] max-w-6xl rounded-xl sm:rounded-2xl transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg border border-slate-200'
            : 'bg-white/90 backdrop-blur-md shadow-sm border border-slate-200/80'
        }`}
      >
        <div className="flex items-center justify-between px-3 py-2 sm:px-5 sm:py-2.5">
          {/* Brand Logo with MK letters */}
          <Link
            to="/"
            onClick={handleLinkClick}
            className="group flex items-center shrink-0"
            aria-label="MK Security Home"
          >
            <BrandLogo variant="dark" size="small" className="sm:hidden" />
            <BrandLogo variant="dark" size="default" className="hidden sm:flex" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3.5 py-1.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-[#0D5C3A] bg-emerald-50'
                      : 'text-slate-700 hover:text-[#0D5C3A] hover:bg-slate-100/80'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 w-5 rounded-full bg-[#0D5C3A]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Action Button & Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#0D5C3A] hover:bg-[#084028] text-white text-xs font-bold tracking-wide uppercase transition-all shadow-xs hover:shadow-sm"
            >
              <span>Get Quote</span>
              <ArrowRight size={13} />
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setIsMobileOpen(prev => !prev)}
              className="lg:hidden flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-slate-100 text-slate-800 hover:text-[#0D5C3A] hover:bg-slate-200 transition-colors cursor-pointer"
              aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <div className="fixed inset-0 z-[9995] lg:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs cursor-pointer"
              onClick={() => setIsMobileOpen(false)}
            />

            {/* Drawer Content */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative top-16 mx-auto w-[92%] max-w-sm bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 bg-slate-50/70">
                <BrandLogo variant="dark" size="small" />
                <button
                  type="button"
                  onClick={() => setIsMobileOpen(false)}
                  className="p-1 rounded-md text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="p-2.5 flex flex-col gap-0.5">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={handleLinkClick}
                      className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                        isActive
                          ? 'text-[#0D5C3A] bg-emerald-50 font-bold'
                          : 'text-slate-700 hover:text-[#0D5C3A] hover:bg-slate-50'
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#0D5C3A]" />}
                    </Link>
                  );
                })}

                {/* Quick Action in Drawer */}
                <div className="mt-1.5 pt-2.5 border-t border-slate-100 flex flex-col gap-1.5">
                  <a
                    href="tel:+918919890010"
                    onClick={handleLinkClick}
                    className="flex items-center justify-center gap-1.5 w-full py-2 rounded-lg bg-slate-100 text-slate-800 text-[11px] font-bold hover:bg-slate-200 transition-colors"
                  >
                    <PhoneCall size={13} className="text-[#0D5C3A]" />
                    <span>Direct Call: +91 8919890010</span>
                  </a>

                  <Link
                    to="/contact"
                    onClick={handleLinkClick}
                    className="flex items-center justify-center gap-1.5 w-full py-2 rounded-lg bg-[#0D5C3A] text-white text-[11px] font-bold tracking-wide shadow-xs hover:bg-[#084028] transition-colors"
                  >
                    <span>Request Free Site Survey</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
