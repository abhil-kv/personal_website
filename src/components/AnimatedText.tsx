import { useRef, type CSSProperties } from 'react';
import { motion, useScroll, useTransform, type MotionValue, useSpring } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

function Char({
  char,
  index,
  total,
  progress,
}: {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const end = start + 1 / total;
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="invisible">{char === ' ' ? '\u00A0' : char}</span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }}>
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  );
}

export default function AnimatedText({ text, className = '', style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const chars = Array.from(text);

  // Border animation progress (0 to 1)
  const borderProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  
  // Create smooth spring animation for border
  const smoothProgress = useSpring(borderProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001
  });

  // Calculate individual border segment progress
  // Path: mid top → right top → right bottom → left bottom → top left → top mid
  // Total path length divided into 5 segments
  const topRightProgress = useTransform(smoothProgress, [0, 0.2], [0, 1]);
  const rightProgress = useTransform(smoothProgress, [0.2, 0.4], [0, 1]);
  const bottomProgress = useTransform(smoothProgress, [0.4, 0.6], [0, 1]);
  const leftProgress = useTransform(smoothProgress, [0.6, 0.8], [0, 1]);
  const topLeftProgress = useTransform(smoothProgress, [0.8, 1], [0, 1]);

  return (
    <div ref={containerRef} className="relative inline-block overflow-hidden" style={{ padding: '8px' }}>
      {/* Animated border using div elements - Path: mid top → right top → right bottom → left bottom → top left → top mid */}
      
      {/* Top right segment: mid top → right top */}
      <motion.div
        className="absolute top-0 left-1/2 h-[2px] bg-[#D7E2EA]"
        style={{
          width: useTransform(topRightProgress, (v) => `${v * 50}%`),
          opacity: useTransform(topRightProgress, [0, 0.1], [0, 0.7])
        }}
      />
      
      {/* Right segment: right top → right bottom */}
      <motion.div
        className="absolute top-0 right-0 w-[2px] bg-[#D7E2EA]"
        style={{
          height: useTransform(rightProgress, (v) => `${v * 100}%`),
          opacity: useTransform(rightProgress, [0, 0.1], [0, 0.7])
        }}
      />
      
      {/* Bottom segment: right bottom → left bottom */}
      <motion.div
        className="absolute bottom-0 right-0 h-[2px] bg-[#D7E2EA]"
        style={{
          width: useTransform(bottomProgress, (v) => `${v * 100}%`),
          opacity: useTransform(bottomProgress, [0, 0.1], [0, 0.7])
        }}
      />
      
      {/* Left segment: left bottom → top left */}
      <motion.div
        className="absolute bottom-0 left-0 w-[2px] bg-[#D7E2EA]"
        style={{
          height: useTransform(leftProgress, (v) => `${v * 100}%`),
          transformOrigin: 'bottom',
          opacity: useTransform(leftProgress, [0, 0.1], [0, 0.7])
        }}
      />
      
      {/* Top left segment: top left → top mid */}
      <motion.div
        className="absolute top-0 left-0 h-[2px] bg-[#D7E2EA]"
        style={{
          width: useTransform(topLeftProgress, (v) => `${v * 50}%`),
          opacity: useTransform(topLeftProgress, [0, 0.1], [0, 0.7])
        }}
      />
      
      <p ref={ref} className={className} style={style}>
        {chars.map((char, i) => (
          <Char key={i} char={char} index={i} total={chars.length} progress={scrollYProgress} />
        ))}
      </p>
    </div>
  );
}
