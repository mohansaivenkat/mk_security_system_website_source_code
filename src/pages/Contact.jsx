import { useState } from 'react';
import { motion } from 'motion/react';
import {
  MapPin, Phone, Mail, Clock,
  Send, CheckCircle
} from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    lines: ['404, ELR Vision, 3rd Lane', 'Dwarka Nagar, Vizag, AP'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    lines: ['+91 8919890010'],
    href: 'tel:+918919890010',
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['info@smkes.in'],
    href: 'mailto:info@smkes.in',
  },
  {
    icon: Clock,
    title: 'Office Hours',
    lines: ['Mon – Sat: 9:00 AM – 6:00 PM', 'Sunday: Closed'],
  },
];

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/smkes.in', color: 'hover:bg-[#E4405F]', svg: '<rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>' },
  { label: 'Facebook', href: 'https://www.facebook.com/smkes.in', color: 'hover:bg-[#1877F2]', svg: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>' },
  { label: 'YouTube', href: 'https://www.youtube.com/@smkes', color: 'hover:bg-[#FF0000]', svg: '<path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/>' },
  { label: 'WhatsApp', href: 'https://wa.me/918919890010', color: 'hover:bg-[#25D366]', svg: '<path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/>' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, this would send to a backend
    setSubmitted(true);
    setTimeout(() => {
      setForm({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="bg-[#F8FAFC] pt-20">
      {/* ─── Hero Banner ─── */}
      <section className="relative pt-20 pb-10 sm:pt-32 sm:pb-20 bg-[#071911] text-white border-b border-[#14452F] overflow-hidden bg-grid-pattern-dark">
        <div className="container-custom text-center relative z-10">
          <ScrollReveal variant="fade-up">
            <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4">
              Direct Engineering Consultation
            </span>
          </ScrollReveal>
          <ScrollReveal variant="blur-up" delay={0.1}>
            <h1 className="font-heading font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-3 sm:mb-6 max-w-3xl mx-auto">
              Get In Touch With Our Technical Team
            </h1>
          </ScrollReveal>
          <ScrollReveal variant="blur-up" delay={0.2}>
            <p className="text-slate-300 text-xs sm:text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Have a question, need an urgent site survey in Visakhapatnam, or looking for custom industrial IoT integration? Connect with our engineers today.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Tech Division Line ─── */}
      <div className="tech-divider" />

      {/* ─── Contact Info Cards ─── */}
      <section className="section-padding bg-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {contactInfo.map((c, i) => (
              <ScrollReveal key={c.title} variant="blur-up" delay={i * 0.1}>
                <div className="bg-surface rounded-xl p-5 card-shadow text-center hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300 cursor-hover h-full">
                  <div className="w-12 h-12 rounded-xl bg-brand-light text-brand mx-auto mb-4 flex items-center justify-center">
                    <c.icon size={22} />
                  </div>
                  <h4 className="font-heading font-semibold text-base mb-2">{c.title}</h4>
                  {c.lines.map((line) =>
                    c.href ? (
                      <a key={line} href={c.href} className="block text-text-secondary text-sm hover:text-brand transition-colors cursor-hover">
                        {line}
                      </a>
                    ) : (
                      <p key={line} className="text-text-secondary text-sm">{line}</p>
                    )
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* ─── Form + Map Row ─── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <ScrollReveal variant="fade-right">
              <div className="bg-surface rounded-2xl p-6 md:p-8 card-shadow h-full">
                <h3 className="font-heading text-xl font-semibold mb-1">Send Us a Message</h3>
                <p className="text-text-secondary text-sm mb-6">Fill out the form and we'll get back to you within 24 hours.</p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <CheckCircle size={48} className="text-success mb-4" />
                    <h4 className="font-heading text-lg font-semibold mb-2">Message Sent!</h4>
                    <p className="text-text-secondary text-sm">Thank you for reaching out. We'll respond soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-name" className="block text-xs font-medium text-text-primary mb-1.5">Name</label>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Your name"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-bg text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all placeholder:text-text-muted"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="block text-xs font-medium text-text-primary mb-1.5">Email</label>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="you@example.com"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-bg text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all placeholder:text-text-muted"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="contact-subject" className="block text-xs font-medium text-text-primary mb-1.5">Subject</label>
                      <input
                        id="contact-subject"
                        type="text"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        required
                        placeholder="How can we help?"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-bg text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all placeholder:text-text-muted"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-medium text-text-primary mb-1.5">Message</label>
                      <textarea
                        id="contact-message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us about your project..."
                        className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-bg text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all resize-none placeholder:text-text-muted"
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full justify-center cursor-hover">
                      <Send size={16} />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>

            {/* Map */}
            <ScrollReveal variant="fade-left">
              <div className="bg-surface rounded-2xl p-3 card-shadow h-full min-h-[400px]">
                <div className="map-container w-full h-full min-h-[380px] rounded-xl overflow-hidden">
                  <iframe
                    title="MK Security Systems Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.263!2d83.32!3d17.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcf15c5c25d0e9b40!2sShri+MK+Embedded+Solutions!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '380px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Social Media ─── */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <SectionHeading
            label="Stay Connected"
            title="Follow Us on Social Media"
            description="Stay updated with our latest projects, products, and behind-the-scenes content."
          />
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((s, i) => (
              <ScrollReveal key={s.label} variant="scale-up" delay={i * 0.1}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl bg-bg border border-border text-text-secondary hover:text-white hover:border-transparent transition-all duration-300 card-shadow hover:card-shadow-hover cursor-hover ${s.color}`}
                  aria-label={`Follow us on ${s.label}`}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: s.svg }} />
                  <span className="font-medium text-sm">{s.label}</span>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
