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
  { label: 'Node.js', Icon: Server },
  { label: 'Micro Frontends', Icon: Boxes },
  { label: 'Go', Icon: FlaskConical },
];

const row2 = [
  { label: 'Docker', Icon: Container },
  { label: 'Kubernetes', Icon: Network },
  { label: 'OpenShift', Icon: Cloud },
  { label: 'MongoDB', Icon: Database },
  { label: 'Apache Kafka', Icon: Workflow },
  { label: 'Git', Icon: GitBranch },
];

function Chip({ label, Icon }: { label: string; Icon: typeof Atom }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-[#D7E2EA]/15 bg-[#141414] px-6 py-6 sm:px-8 sm:py-8" style={{ width: 260, height: 140 }}>
      <Icon className="text-[#D7E2EA] w-7 h-7 sm:w-8 sm:h-8 shrink-0" strokeWidth={1.5} />
      <span className="text-[#D7E2EA] font-medium uppercase tracking-wide text-sm sm:text-base">
        {label}
      </span>
    </div>
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

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

  const rowA = [...row1, ...row1, ...row1];
  const rowB = [...row2, ...row2, ...row2];

  return (
    <section ref={sectionRef} className="bg-ink pt-24 sm:pt-32 md:pt-40 pb-10">
      <div className="flex flex-col gap-3">
        <div
          className="flex gap-3"
          style={{ transform: `translateX(${offset - 200}px)`, willChange: 'transform' }}
        >
          {rowA.map((item, i) => (
            <Chip key={`r1-${i}`} {...item} />
          ))}
        </div>
        <div
          className="flex gap-3"
          style={{ transform: `translateX(${-(offset - 200)}px)`, willChange: 'transform' }}
        >
          {rowB.map((item, i) => (
            <Chip key={`r2-${i}`} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
