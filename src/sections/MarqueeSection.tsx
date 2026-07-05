import { useEffect, useRef, useState } from 'react';
import {
  Atom,
  Boxes,
  Braces,
  Cloud,
  Container,
  Database,
  FlaskConical,
  GitBranch,
  Layers,
  Network,
  Server,
  Workflow,
} from 'lucide-react';

const row1 = [
  { label: 'React.js', Icon: Atom },
  { label: 'Next.js', Icon: Layers },
  { label: 'TypeScript', Icon: Braces },
  { label: 'Redux Saga', Icon: Workflow },
];

const row2 = [
  { label: 'Node.js', Icon: Server },
  { label: 'Micro Frontends', Icon: Boxes },
  { label: 'Go', Icon: FlaskConical },
];

const row3 = [
  { label: 'Docker', Icon: Container },
  { label: 'Kubernetes', Icon: Network },
  { label: 'OpenShift', Icon: Cloud },
];

const row4 = [
  { label: 'MongoDB', Icon: Database },
  { label: 'Apache Kafka', Icon: Workflow },
  { label: 'Git', Icon: GitBranch },
];

function Chip({ label, Icon }: { label: string; Icon: typeof Atom }) {
  return (
    <div className="flex items-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl border border-[#D7E2EA]/15 bg-[#141414] px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-8 w-[180px] sm:w-[220px] md:w-[260px] h-[90px] sm:h-[110px] md:h-[140px]">
      <Icon className="text-[#D7E2EA] w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 shrink-0" strokeWidth={1.5} />
      <span className="text-[#D7E2EA] font-medium uppercase tracking-wide text-xs sm:text-sm md:text-base">
        {label}
      </span>
    </div>
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [screenSize, setScreenSize] = useState<'small' | 'medium' | 'large'>('large');

  useEffect(() => {
    function onScroll() {
      const el = sectionRef.current;
      if (!el) return;
      const sectionTop = el.getBoundingClientRect().top + window.scrollY;
      const value = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(value);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setScreenSize('small');
      } else if (width < 1024) {
        setScreenSize('medium');
      } else {
        setScreenSize('large');
      }
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const rowA = [...row1, ...row1, ...row1];
  const rowB = [...row2, ...row2, ...row2];
  const rowC = [...row3, ...row3, ...row3];
  const rowD = [...row4, ...row4, ...row4];

  return (
    <section ref={sectionRef} className="bg-ink pt-24 sm:pt-32 md:pt-40 pb-10">
      <div className="flex flex-col gap-2 sm:gap-3">
        {/* Row 1 - Always visible */}
        <div
          className="flex gap-2 sm:gap-3"
          style={{ transform: `translateX(${offset - 200}px)`, willChange: 'transform' }}
        >
          {rowA.map((item, i) => (
            <Chip key={`r1-${i}`} {...item} />
          ))}
        </div>
        
        {/* Row 2 - Always visible */}
        <div
          className="flex gap-2 sm:gap-3"
          style={{ transform: `translateX(${-(offset - 200)}px)`, willChange: 'transform' }}
        >
          {rowB.map((item, i) => (
            <Chip key={`r2-${i}`} {...item} />
          ))}
        </div>
        
        {/* Row 3 - Visible on medium and small screens */}
        {(screenSize === 'small' || screenSize === 'medium') && (
          <div
            className="flex gap-2 sm:gap-3"
            style={{ transform: `translateX(${offset - 200}px)`, willChange: 'transform' }}
          >
            {rowC.map((item, i) => (
              <Chip key={`r3-${i}`} {...item} />
            ))}
          </div>
        )}
        
        {/* Row 4 - Visible only on small screens */}
        {screenSize === 'small' && (
          <div
            className="flex gap-2 sm:gap-3"
            style={{ transform: `translateX(${-(offset - 200)}px)`, willChange: 'transform' }}
          >
            {rowD.map((item, i) => (
              <Chip key={`r4-${i}`} {...item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
