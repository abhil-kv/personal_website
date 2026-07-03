import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';
import OrbitCore from '../components/OrbitCore';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function HeroSection() {
  return (
    <section className="relative flex h-screen flex-col" style={{ overflowX: 'clip' }}>
      <FadeIn as="nav" delay={0} y={-20} className="flex justify-between px-6 md:px-10 pt-6 md:pt-8">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70"
          >
            {link.label}
          </a>
        ))}
      </FadeIn>

      <div className="relative flex flex-1 flex-col justify-end">
        <div className="overflow-hidden">
          <FadeIn delay={0.15} y={40}>
            <h1 className="hero-heading mt-6 sm:mt-4 md:-mt-5 w-full whitespace-nowrap text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] font-black uppercase leading-none tracking-tight text-center">
              hi, i&apos;m abhil
            </h1>
          </FadeIn>
        </div>

        {/* signature orbit visual, standing in for a portrait */}
        <div className="pointer-events-auto absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 sm:top-auto sm:bottom-0 sm:translate-y-0">
          <FadeIn delay={0.6} y={30}>
            <OrbitCore />
          </FadeIn>
        </div>

        <div className="relative z-20 flex items-end justify-between pb-7 sm:pb-8 md:pb-10 px-6 md:px-10">
          <FadeIn delay={0.35} y={20} className="max-w-[160px] sm:max-w-[220px] md:max-w-[260px]">
            <p
              className="font-light uppercase tracking-wide leading-snug text-[#D7E2EA]"
              style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
            >
              a software engineer driven by building scalable, high-performance web applications
            </p>
          </FadeIn>
          <FadeIn delay={0.5} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
