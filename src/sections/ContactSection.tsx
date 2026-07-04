import { Mail, MapPin, Phone, Linkedin, Github, Briefcase, Download } from 'lucide-react';
import { useState } from 'react';
import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';

const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/abhil-vidhyadharan-950b65197/',
  naukri: 'https://www.naukri.com/mnjuser/profile?id=&altresid',
  github: 'https://github.com/abhil-kv',
  email: 'abhilkv.official@gmail.com'
};

export default function ContactSection() {
  const [showToast, setShowToast] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(SOCIAL_LINKS.email);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };
  return (
    <section
      id="contact"
      className="bg-ink px-5 sm:px-8 md:px-10 py-24 sm:py-28 md:py-36 flex flex-col items-center gap-14 sm:gap-16"
    >
      <FadeIn>
        <h2
          className="hero-heading text-center font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 130px)' }}
        >
          Let&apos;s talk
        </h2>
      </FadeIn>

      <FadeIn delay={0.1}>
        <p className="max-w-md text-center text-[#D7E2EA]/70 font-light" style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.2rem)' }}>
          Open to Software Engineer roles in React.js, Next.js, and micro frontend
          architecture. Reach out and let&apos;s build something reliable together.
        </p>
      </FadeIn>

      <FadeIn delay={0.2} className="flex flex-col sm:flex-row items-center gap-4">
        <ContactButton label="Email Me" href={`mailto:${SOCIAL_LINKS.email}`} />
        <a
          href="/Abhil_Vidhyadharan_Resume.docx"
          download="Abhil_Vidhyadharan_Resume.docx"
          className="group relative inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] bg-transparent px-8 py-3 font-medium uppercase tracking-widest text-[#D7E2EA] transition-all duration-300 hover:bg-[#D7E2EA] hover:text-[#0A0E27]"
        >
          <Download className="w-4 h-4" strokeWidth={2} />
          <span style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.9rem)' }}>Download Resume</span>
        </a>
      </FadeIn>

      {/* Social Media Icons */}
      <FadeIn delay={0.25} className="flex items-center gap-4 sm:gap-6">
        <a
          href={SOCIAL_LINKS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#D7E2EA]/20 hover:border-[#0077B5] hover:bg-[#0077B5]/10 transition-all duration-300"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-[#D7E2EA]/70 group-hover:text-[#0077B5] transition-colors" strokeWidth={1.5} />
        </a>
        
        <a
          href={SOCIAL_LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#D7E2EA]/20 hover:border-[#D7E2EA] hover:bg-[#D7E2EA]/10 transition-all duration-300"
          aria-label="GitHub"
        >
          <Github className="w-5 h-5 sm:w-6 sm:h-6 text-[#D7E2EA]/70 group-hover:text-[#D7E2EA] transition-colors" strokeWidth={1.5} />
        </a>
        
        <a
          href={SOCIAL_LINKS.naukri}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#D7E2EA]/20 hover:border-[#4A90E2] hover:bg-[#4A90E2]/10 transition-all duration-300"
          aria-label="Naukri"
        >
          <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-[#D7E2EA]/70 group-hover:text-[#4A90E2] transition-colors" strokeWidth={1.5} />
        </a>
        
        <button
          onClick={copyEmailToClipboard}
          className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#D7E2EA]/20 hover:border-[#EA4335] hover:bg-[#EA4335]/10 transition-all duration-300"
          aria-label="Copy Email"
        >
          <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#D7E2EA]/70 group-hover:text-[#EA4335] transition-colors" strokeWidth={1.5} />
        </button>
      </FadeIn>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-[#D7E2EA] text-[#0A0E27] px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
            <Mail className="w-4 h-4" strokeWidth={2} />
            <span className="font-medium text-sm">Email copied to clipboard!</span>
          </div>
        </div>
      )}

      <FadeIn delay={0.3} className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-sm sm:text-base text-[#D7E2EA]/70">
        <span className="flex items-center gap-2">
          <Mail className="w-4 h-4" strokeWidth={1.6} /> abhilkv.official@gmail.com
        </span>
        <span className="flex items-center gap-2">
          <Phone className="w-4 h-4" strokeWidth={1.6} /> +91-7012366845
        </span>
        <span className="flex items-center gap-2">
          <MapPin className="w-4 h-4" strokeWidth={1.6} /> Bangalore, India
        </span>
      </FadeIn>

      <FadeIn delay={0.4} className="w-full max-w-3xl border-t border-[#D7E2EA]/10 pt-10 sm:pt-12">
        <div className="flex flex-col sm:flex-row justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#D7E2EA]/40 mb-1">Education</p>
            <p className="text-sm text-[#D7E2EA]/80">
              B.Tech, Computer Science — Viswajyothi College of Engineering &amp; Technology
            </p>
          </div>
          <p className="text-xs text-[#D7E2EA]/30 self-center">
            © {new Date().getFullYear()} Abhil Vidhyadharan
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
