import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, User, GraduationCap, Hash, Calendar, AlertCircle, CheckCircle } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

// Mock intern data
const mockInterns = {
  'MK2024001': { name: 'Ravi Kumar', college: 'GITAM University, Visakhapatnam', pin: '20BCE7124', year: '3rd Year' },
  'MK2024002': { name: 'Priya Sharma', college: 'Andhra University, Visakhapatnam', pin: '21CSE4567', year: '2nd Year' },
  'MK2024003': { name: 'Aditya Reddy', college: 'JNTU Kakinada', pin: '20ECE3421', year: '4th Year' },
  'MK2024004': { name: 'Sneha Patel', college: 'Centurion University, Vizag', pin: '22ME1098', year: '1st Year' },
  'MK2024005': { name: 'Vikram Singh', college: 'GITAM University, Visakhapatnam', pin: '21EEE5432', year: '3rd Year' },
};

export default function Verify() {
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
      setError('Please enter an Intern ID.');
      return;
    }

    setIsSearching(true);

    // Simulate API call
    setTimeout(() => {
      const found = mockInterns[trimmedId];
      if (found) {
        setResult({ id: trimmedId, ...found });
      } else {
        setError('No intern found with this ID. Please check the ID and try again.');
      }
      setIsSearching(false);
    }, 800);
  };

  return (
    <div className="bg-[#F8FAFC] pt-20">
      {/* ─── Hero Banner ─── */}
      <section className="relative pt-20 pb-10 sm:pt-32 sm:pb-20 bg-[#071911] text-white border-b border-[#14452F] overflow-hidden bg-grid-pattern-dark">
        <div className="container-custom text-center relative z-10">
          <ScrollReveal variant="fade-up">
            <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4">
              Official Certification Check
            </span>
          </ScrollReveal>
          <ScrollReveal variant="blur-up" delay={0.1}>
            <h1 className="font-heading font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-3 sm:mb-6 max-w-3xl mx-auto">
              Credential & Intern Verification
            </h1>
          </ScrollReveal>
          <ScrollReveal variant="blur-up" delay={0.2}>
            <p className="text-slate-300 text-xs sm:text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Authenticate authorized intern credentials and training certificates issued by Shri MK Embedded Solutions.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Tech Division Line ─── */}
      <div className="tech-divider" />

      {/* ─── Verification Form ─── */}
      <section className="section-padding bg-bg">
        <div className="container-custom">
          <div className="max-w-lg mx-auto">
            <ScrollReveal variant="scale-up">
              <div className="bg-surface rounded-2xl p-6 md:p-8 card-shadow">
                <form onSubmit={handleVerify} className="space-y-5">
                  <div>
                    <label htmlFor="intern-id" className="block text-sm font-medium text-text-primary mb-2">
                      Enter your Intern ID
                    </label>
                    <div className="relative">
                      <Hash size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted" />
                      <input
                        id="intern-id"
                        type="text"
                        value={internId}
                        onChange={(e) => setInternId(e.target.value)}
                        placeholder="e.g. MK2024001"
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-bg text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all font-body placeholder:text-text-muted"
                        autoComplete="off"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSearching}
                    className="w-full btn-primary justify-center cursor-hover disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSearching ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
                          <path d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" fill="currentColor" className="opacity-75" />
                        </svg>
                        Verifying...
                      </span>
                    ) : (
                      <>
                        <Search size={18} />
                        Verify Intern
                      </>
                    )}
                  </button>
                </form>

                {/* Error */}
                <AnimatePresence mode="wait">
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-5 flex items-start gap-3 p-4 rounded-lg bg-error/8 border border-error/20"
                    >
                      <AlertCircle size={18} className="text-error shrink-0 mt-0.5" />
                      <p className="text-error text-sm">{error}</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Result */}
                <AnimatePresence mode="wait">
                  {result && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="mt-6"
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <CheckCircle size={18} className="text-success" />
                        <span className="text-sm font-medium text-success">Intern Verified Successfully</span>
                      </div>
                      <div className="bg-bg rounded-xl p-5 space-y-4 border border-border">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-brand-light text-brand flex items-center justify-center">
                            <User size={22} />
                          </div>
                          <div>
                            <p className="font-heading font-semibold text-text-primary">{result.name}</p>
                            <p className="text-text-muted text-xs">{result.id}</p>
                          </div>
                        </div>
                        <div className="h-px bg-border" />
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="flex items-start gap-2.5">
                            <GraduationCap size={16} className="text-text-muted shrink-0 mt-0.5" />
                            <div>
                              <p className="text-text-muted text-xs mb-0.5">College</p>
                              <p className="text-text-primary text-sm font-medium">{result.college}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2.5">
                            <Hash size={16} className="text-text-muted shrink-0 mt-0.5" />
                            <div>
                              <p className="text-text-muted text-xs mb-0.5">Pin No.</p>
                              <p className="text-text-primary text-sm font-medium">{result.pin}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2.5">
                            <Calendar size={16} className="text-text-muted shrink-0 mt-0.5" />
                            <div>
                              <p className="text-text-muted text-xs mb-0.5">Year</p>
                              <p className="text-text-primary text-sm font-medium">{result.year}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Sample IDs Hint */}
                <div className="mt-6 p-3 rounded-lg bg-bg border border-border">
                  <p className="text-text-muted text-xs mb-2">Sample Intern IDs for testing:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {Object.keys(mockInterns).map((id) => (
                      <button
                        key={id}
                        onClick={() => { setInternId(id); setError(''); setResult(null); }}
                        className="text-xs px-2.5 py-1 rounded-md bg-brand-light text-brand hover:bg-brand hover:text-white transition-colors cursor-hover font-mono"
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
    </div>
  );
}
