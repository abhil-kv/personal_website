import { Mail, MapPin, Phone } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';

export default function ContactSection() {
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

      <FadeIn delay={0.2}>
        <ContactButton label="Email Me" href="mailto:abhilkv.official@gmail.com" />
      </FadeIn>

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
