import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const roles = [
  {
    number: '01',
    category: 'Jun 2019 — Sep 2022',
    company: 'KeyValue Software Systems Pvt. Ltd.',
    title: 'Software Engineer',
    project: 'Onboarding Tool, Pet Care Platform, Employee Mobile App',
    bullets: [
      'Developed a Progressive Web App for a Singapore-based client combining ecommerce and healthcare domains.',
      'Delivered React-based OMS/WMS/CMS components integrated with Shopify for a pet ecommerce platform.',
      'Built and maintained React Native mobile applications for financial institutions to securely manage customer data.',
      'Contributed to Shopify-based websites using Liquid and jQuery.',
    ],
    tags: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
  },
  {
    number: '02',
    category: 'Oct 2022 — Oct 2023',
    company: 'Wissen Technology Pvt. Ltd.',
    title: 'Senior Software Engineer',
    project: 'Payment App & Admin UI',
    bullets: [
      "Built support screens allowing users to raise tickets, upload documents, and track issue resolution.",
      "Designed and implemented an admin dashboard with responsive design, integrated with the client's SSO-enabled framework.",
      'Leveraged micro frontend architecture with Webpack Module Federation for modular app integration.',
    ],
    tags: ['JavaScript', 'TypeScript', 'Webpack', 'Node.js'],
  },

    {
    number: '03',
    category: 'Oct 2023 — Present',
    company: 'IBM India Software Labs',
    title: 'Software Developer',
    project: 'MultiCloud SaaS Platform (MCSP)',
    bullets: [
      'Developed and maintained UI components for SOLIS-UI, a central hub for IBM SaaS products built on micro frontend architecture.',
      'Integrated React.js with Docker, Kubernetes, and OpenShift to create scalable, containerized applications.',
      'Improved UI performance and modularity by implementing optimized, reusable components.',
      'Built and maintained RESTful APIs with Express.js and implemented an SSR-based dashboard for improved performance and SEO.',
    ],
    tags: ['JavaScript', 'TypeScript', 'Go', 'MongoDB', 'PostgreSQL', 'Micro Frontend'],
  },
];

function RoleCard({
  role,
  index,
  total,
}: {
  role: (typeof roles)[number];
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={ref}
      className="sticky top-24 md:top-32 h-[85vh]"
      style={{ top: `${index * 28}px` }}
    >
      <motion.div
        style={{ scale }}
        className="h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-ink p-4 sm:p-6 md:p-8 flex flex-col gap-6 md:gap-8"
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="font-black text-[#D7E2EA]"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)', lineHeight: 1 }}
            >
              {role.number}
            </span>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA]/60">
                {role.category} · {role.company}
              </span>
              <span
                className="font-medium uppercase text-[#D7E2EA]"
                style={{ fontSize: 'clamp(1.1rem, 3vw, 2.2rem)' }}
              >
                {role.title}
              </span>
            </div>
          </div>
          <span className="rounded-full border-2 border-[#D7E2EA] px-6 py-2 text-xs sm:text-sm font-medium uppercase tracking-widest text-[#D7E2EA]">
            {role.project}
          </span>
        </div>

        <div className="flex flex-1 flex-col md:flex-row gap-6 md:gap-8 overflow-hidden">
          <div className="flex-[1.2] flex flex-col justify-center gap-4">
            {role.bullets.map((b, i) => (
              <div key={i} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D7E2EA]/60" />
                <p className="text-sm sm:text-base leading-relaxed text-[#D7E2EA]/85">{b}</p>
              </div>
            ))}
          </div>
          <div className="flex-1 flex flex-col justify-center gap-3 rounded-[30px] sm:rounded-[40px] border border-[#D7E2EA]/15 p-6 sm:p-8">
            <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/50">
              Tech stack
            </span>
            <div className="flex flex-wrap gap-2">
              {role.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#D7E2EA]/25 px-4 py-1.5 text-xs sm:text-sm text-[#D7E2EA]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] bg-ink px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-32"
    >
      <h2
        className="hero-heading mb-16 sm:mb-20 md:mb-28 text-center font-black uppercase leading-none tracking-tight"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Experience
      </h2>

      <div className="mx-auto max-w-5xl flex flex-col gap-8">
        {roles.map((role, i) => (
          <RoleCard key={role.number} role={role} index={i} total={roles.length} />
        ))}
      </div>
    </section>
  );
}
