import { Boxes, Cloud, Code2, GitBranch } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';

const summary =
  "With over seven years of experience across react.js, next.js, node.js, and go, i focus on scalable micro frontend architecture and high-performance web applications. i truly enjoy working with cross-functional teams that aim to ship clean, reliable software. let's build something incredible together!";

function Corner({
  Icon,
  className,
  delay,
  x,
}: {
  Icon: typeof Boxes;
  className: string;
  delay: number;
  x: number;
}) {
  return (
    <FadeIn delay={delay} x={x} y={0} duration={0.9} className={`absolute hidden sm:flex ${className}`}>
      <div className="flex items-center justify-center rounded-full border border-[#D7E2EA]/15 w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] md:w-[180px] md:h-[180px]">
        <Icon className="text-[#D7E2EA]/70 w-[40%] h-[40%]" strokeWidth={1.2} />
      </div>
    </FadeIn>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20"
    >
      <Corner Icon={Code2} className="top-[4%] left-[1%] sm:left-[2%] md:left-[4%]" delay={0.1} x={-80} />
      <Corner Icon={Boxes} className="bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]" delay={0.25} x={-80} />
      <Corner Icon={Cloud} className="top-[4%] right-[1%] sm:right-[2%] md:right-[4%]" delay={0.15} x={80} />
      <Corner Icon={GitBranch} className="bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]" delay={0.3} x={80} />

      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading text-center font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <AnimatedText
          text={summary}
          className="max-w-[560px] text-center font-medium leading-relaxed text-[#D7E2EA]"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
        />
      </div>

      <div className="mt-16 sm:mt-20 md:mt-24">
        <ContactButton />
      </div>
    </section>
  );
}
