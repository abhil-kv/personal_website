import { useRef, useState, useEffect, type MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { Braces, Boxes, Cloud, GitBranch, Layers, Terminal } from 'lucide-react';

const satellites = [
  { Icon: Braces, label: 'TS', radius: 1, angle: 0, duration: 22 },
  { Icon: Boxes, label: 'Micro Frontends', radius: 1, angle: 60, duration: 26 },
  { Icon: Cloud, label: 'Cloud', radius: 1, angle: 120, duration: 24 },
  { Icon: GitBranch, label: 'CI/CD', radius: 1, angle: 180, duration: 28 },
  { Icon: Layers, label: 'React', radius: 1, angle: 240, duration: 23 },
  { Icon: Terminal, label: 'Node', radius: 1, angle: 300, duration: 25 },
];

export default function OrbitCore() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640); // sm breakpoint
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: px * 16, y: py * -16 });
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 });
  }

  return (
    <div
      ref={wrapRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[440px] md:h-[440px] lg:w-[520px] lg:h-[520px]"
      style={{ willChange: 'transform' }}
    >
      {/* orbit rings */}
      <div className="absolute inset-[6%] rounded-full border border-[#D7E2EA]/15" />
      <div className="absolute inset-[18%] rounded-full border border-[#D7E2EA]/10" />

      {/* gradient core */}
      <motion.div
        animate={{ x: tilt.x, y: tilt.y }}
        transition={{ type: 'spring', stiffness: 120, damping: 14 }}
        className="relative w-[46%] h-[46%] rounded-full"
        style={{
          background:
            'radial-gradient(circle at 32% 28%, #BBCCD7 0%, #7621B0 42%, #18011F 100%)',
          boxShadow:
            '0 0 80px rgba(182,0,168,0.35), 0 0 140px rgba(118,33,176,0.25), inset -20px -20px 60px rgba(0,0,0,0.5)',
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="hero-heading font-black text-[clamp(2rem,6vw,3.4rem)] tracking-tight">
            
          </span>
        </div>
      </motion.div>

      {/* orbiting satellites */}
      {satellites.map(({ Icon, label, duration, angle }, i) => (
        <motion.div
          key={label}
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, ease: 'linear', duration }}
          style={{ rotate: angle }}
        >
          <div
            className="absolute left-1/2 top-1/2 flex items-center justify-center rounded-full border border-[#D7E2EA]/25 bg-[#0C0C0C]"
            style={{
              width: 'clamp(34px, 6vw, 52px)',
              height: 'clamp(34px, 6vw, 52px)',
              transform: `translate(-50%, -50%) translate(${44 + (i % 2) * 0}%, 0) translateX(${
                (isSmallScreen ? 85 : 140) + (i % 3) * 10
              }px) rotate(${-angle}deg)`,
            }}
          >
            <Icon className="text-[#D7E2EA] w-[45%] h-[45%]" strokeWidth={1.6} />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
