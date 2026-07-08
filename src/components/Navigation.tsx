import { useState } from 'react';
import FadeIn from './FadeIn';

const navLinks = [
  { label: 'About', href: '#about', clickable: true },
  { label: 'Skills', href: '#skills', clickable: true },
  { label: 'Experience', href: '#experience', clickable: true },
  { label: 'Contact', href: '#contact', clickable: true },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    
    if (isMenuOpen) {
      closeMenu();
    }
  };

  return (
    <>
      <FadeIn as="nav" delay={0} y={-20} className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8">
        {/* Logo/Brand - optional, can be added here */}
        <div className="flex-1"></div>

        {/* Desktop Menu - Right Aligned */}
        <div className="hidden lg:flex gap-8 xl:gap-12">
          {navLinks.map((link) =>
            link.clickable ? (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-lg xl:text-[1.4rem] font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70"
              >
                {link.label}
              </a>
            ) : (
              <span
                key={link.label}
                className="text-lg xl:text-[1.4rem] font-medium uppercase tracking-wider text-[#D7E2EA] cursor-default opacity-50"
              >
                {link.label}
              </span>
            )
          )}
        </div>

        {/* Hamburger Menu Button - Mobile Only */}
        <button
          onClick={toggleMenu}
          className="lg:hidden z-50 relative w-10 h-10 flex flex-col justify-center items-center gap-1.5 group"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span
            className={`w-6 h-0.5 bg-[#D7E2EA] transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-[#D7E2EA] transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-[#D7E2EA] transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></span>
        </button>
      </FadeIn>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-ink/95 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      >
        <div
          className={`flex flex-col items-center justify-center h-full gap-8 transition-transform duration-300 ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-4'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {navLinks.map((link, index) =>
            link.clickable ? (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-3xl sm:text-4xl font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70"
                style={{
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms',
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? 'translateY(0)' : 'translateY(-10px)',
                }}
              >
                {link.label}
              </a>
            ) : (
              <span
                key={link.label}
                className="text-3xl sm:text-4xl font-medium uppercase tracking-wider text-[#D7E2EA] cursor-default opacity-50"
                style={{
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms',
                  opacity: isMenuOpen ? 0.5 : 0,
                  transform: isMenuOpen ? 'translateY(0)' : 'translateY(-10px)',
                }}
              >
                {link.label}
              </span>
            )
          )}
        </div>
      </div>
    </>
  );
}

// Made with Bob
