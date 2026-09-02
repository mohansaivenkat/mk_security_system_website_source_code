import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, Shield, CheckCircle, Clock } from 'lucide-react';
import BrandLogo from '../ui/BrandLogo';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Products Catalog', path: '/products' },
  { name: 'Services & Support', path: '/services' },
  { name: 'Verify Products', path: '/verify' },
  { name: 'Project Gallery', path: '/gallery' },
  { name: 'Contact Us', path: '/contact' },
];

const productLinks = [
  { name: 'Smart Home Automation', path: '/products#home-automation' },
  { name: 'Biometric & Digital Locks', path: '/products#digital-locks' },
  { name: 'CCTV Surveillance Systems', path: '/products#cctv' },
  { name: 'Automatic Sliding & Swing Gates', path: '/products#entrance' },
  { name: 'Boom Barriers & Parking Access', path: '/products#entrance' },
  { name: 'Industrial PLC Automation', path: '/products#industrial' },
  { name: 'Dolby Atmos Home Theaters', path: '/products#theaters' },
];

export default function Footer() {
  return (
    <footer className="bg-[#071911] text-white border-t border-[#14452F]">
      {/* Top Banner with Quick Actions */}
      <div className="border-b border-[#14452F] py-4 sm:py-6 bg-[#092217]">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-6 text-center md:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-4">
              <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h4 className="text-white font-bold text-xs sm:text-base">Ready to Secure & Automate Your Space?</h4>
                <p className="text-slate-300 text-[10px] sm:text-xs">Schedule a free on-site engineering survey with our certified team in Vizag & AP.</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              <Link
                to="/contact"
                className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-md sm:rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-[10px] sm:text-xs tracking-wide transition-all shadow-xs"
              >
                Book Free Survey
              </Link>
              <a
                href="https://wa.me/918919890010?text=Hi%20MK%20Security%20Systems,%20I%20would%20like%20to%20inquire%20about%20your%20products"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-md sm:rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-[10px] sm:text-xs border border-white/15 transition-all"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom py-8 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-3 sm:mb-4">
              <BrandLogo variant="light" size="small" className="sm:hidden" />
              <BrandLogo variant="light" size="default" className="hidden sm:flex" />
            </Link>
            <p className="text-slate-300 text-[11px] sm:text-xs leading-relaxed mb-4">
              <strong className="text-white font-semibold">Shri MK Embedded Solutions</strong> — Transforming residences, commercial complexes, and industrial plants with intelligent automation, CCTV, and embedded robotics since 2015.
            </p>
            <div className="flex items-center gap-2 text-[10px] sm:text-xs text-emerald-400 font-mono">
              <CheckCircle size={13} />
              <span>Certified Partner & System Integrator</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-heading font-bold text-white text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4 border-l-2 border-emerald-500 pl-2.5">
              Navigation
            </h5>
            <ul className="space-y-1.5 sm:space-y-2 text-[11px] sm:text-xs">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-300 hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span className="text-emerald-500/60 text-[10px]">›</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions & Products */}
          <div>
            <h5 className="font-heading font-bold text-white text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4 border-l-2 border-emerald-500 pl-2.5">
              Core Solutions
            </h5>
            <ul className="space-y-1.5 sm:space-y-2 text-[11px] sm:text-xs">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-300 hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span className="text-emerald-500/60 text-[10px]">›</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h5 className="font-heading font-bold text-white text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4 border-l-2 border-emerald-500 pl-2.5">
              Contact & HQ
            </h5>
            <ul className="space-y-2.5 sm:space-y-3.5 text-[11px] sm:text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                <span>404, ELR Vision, 3rd Lane, Dwarka Nagar, Visakhapatnam, AP - 530016</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-emerald-400 shrink-0" />
                <a href="tel:+918919890010" className="hover:text-emerald-400 text-white font-medium">
                  +91 8919890010
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-emerald-400 shrink-0" />
                <a href="mailto:info@smkes.in" className="hover:text-emerald-400 text-slate-300">
                  info@smkes.in
                </a>
              </li>
              <li className="flex items-center gap-2 text-[10px] sm:text-xs text-slate-400">
                <Clock size={13} className="text-emerald-400 shrink-0" />
                <span>Mon – Sat: 9:00 AM – 7:30 PM IST</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Tech Divider */}
        <div className="my-6 sm:my-10 tech-divider-dark" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] sm:text-xs text-slate-400 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Shri MK Embedded Solutions (MK Security Systems). All rights reserved.</p>
          <div className="flex items-center gap-4 sm:gap-6">
            <Link to="/verify" className="hover:text-emerald-400 transition-colors">Verify Authenticity</Link>
            <Link to="/contact" className="hover:text-emerald-400 transition-colors">Support & Warranty</Link>
            <a href="https://smkes.in" className="hover:text-emerald-400 transition-colors">smkes.in</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
