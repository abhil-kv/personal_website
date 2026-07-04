import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';
import OrbitCore from '../components/OrbitCore';
import Navigation from '../components/Navigation';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  
  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640); // sm breakpoint
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  
  // Track scroll progress of the hero section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  });

  // Heading rotation: rotates clockwise from right (like toll gate barrier)
  // Right side is fixed (transform-origin: right), left side rotates up
  const headingRotate = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  // 3D depth effect: reduce font size and weight as it rotates away
  const headingScale = useTransform(scrollYProgress, [0, 1], [1, 0.3]); // Shrink to 70%

  // OrbitCore orbital motion: starts from top-right, moves counterclockwise to left
  // Starting angle: -45° (top-right), ending: -225° (bottom-left) for counterclockwise motion
  const orbitAngle = useTransform(scrollYProgress, [0, 1], [-45, -180]);
  
  // Calculate x and y positions for circular orbit
  // Use smaller radius on small screens or disable orbital motion
  const orbitRadius = isSmallScreen ? 0 : 600; // No orbital motion on small screens
  const orbitX = useTransform(orbitAngle, (angle) => Math.cos((angle * Math.PI) / 180) * orbitRadius);
  const orbitY = useTransform(orbitAngle, (angle) => Math.sin((angle * Math.PI) / 180) * orbitRadius);

  // Sunlight gradient reflection based on orbit position
  // The gradient direction follows where the "sun" (OrbitCore) is positioned
  // When orbit is at -45° (top-right), light comes from top-right
  // When orbit moves counterclockwise, light direction follows
  const gradientBackground = useTransform(
    orbitAngle,
    (angle: number) => {
      // Convert orbit angle to gradient angle
      // The gradient should point FROM the orbit position TO the opposite side
      const gradientAngle = angle + 180; // Opposite direction for light source effect
      
      // Calculate color intensity based on position
      // When orbit is on right (near L in "ABHIL"), more light on right side
      // When orbit moves left, light shifts accordingly
      const normalizedAngle = ((angle + 45) / 135); // Normalize from 0 to 1
      
      // Bright purple when orbit is close (right side), darker when far (left side)
      const brightColor = '#c4b5fd'; // Light purple
      const midColor = '#a78bfa';    // Medium purple
      const darkColor = '#8b5cf6';   // Darker purple
      const baseColor = '#D7E2EA';   // Light gray-blue
      
      return `linear-gradient(${gradientAngle}deg, ${brightColor} 0%, ${midColor} 40%, ${darkColor} 70%, ${baseColor} 100%)`;
    }
  );

  return (
    <section ref={sectionRef} className="relative flex h-screen flex-col" style={{ overflowX: 'clip' }}>
      <Navigation />

      <div className="relative flex flex-1 flex-col justify-start sm:justify-end">
        <div className="z-20">
          <FadeIn delay={0.15} y={40}>
            <motion.h1
              className="hero-heading mt-6 sm:mt-4 md:-mt-5 w-full whitespace-nowrap text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] font-black uppercase leading-none tracking-tight text-center"
              style={{
                rotateZ: headingRotate,
                opacity: headingOpacity,
                scale: headingScale,
                transformOrigin: 'right center',
                backgroundImage: gradientBackground,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundSize: '200% 200%'
              }}
            >
              hi, i'm abhil
            </motion.h1>
          </FadeIn>
        </div>

        {/* signature orbit visual, standing in for a portrait */}
        <motion.div
          className="pointer-events-auto absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
          style={{
            x: orbitX,
            y: orbitY,
            rotate: orbitAngle
          }}
        >
          <FadeIn delay={0.6} y={30}>
            <OrbitCore />
          </FadeIn>
        </motion.div>

        <div className="relative z-20 flex items-end justify-between pb-7 sm:pb-8 md:pb-10 px-6 md:px-10">
          <FadeIn delay={0.35} y={20} className="max-w-[160px] sm:max-w-[220px] md:max-w-[260px]">
            <p
              className="font-light uppercase tracking-wide leading-snug text-[#D7E2EA]"
              style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
            >
              a software engineer driven by building scalable, high-performance web & mobile applications
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

// Made with Bob
