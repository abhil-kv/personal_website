import FadeIn from '../components/FadeIn';

const skills = [
  {
    number: '01',
    name: 'Frontend Engineering',
    description:
      'Building scalable, high-performance interfaces with React.js, Next.js, Redux, and Redux-Saga, optimized for reusability and speed.',
  },
  {
    number: '02',
    name: 'Micro Frontend Architecture',
    description:
      'Designing modular, independently deployable frontends using Webpack Module Federation across large multi-product platforms.',
  },
  {
    number: '03',
    name: 'Backend & APIs',
    description:
      'Building REST APIs and SSR-based services with Node.js and Express.js, tuned for performance and SEO.',
  },
  {
    number: '04',
    name: 'Cloud & DevOps',
    description:
      'Containerizing and deploying applications with Docker, Kubernetes, OpenShift, and Azure DevOps pipelines.',
  },
  {
    number: '05',
    name: 'Testing & Quality',
    description:
      'Ensuring reliability at scale with Jest, Enzyme, and React Testing Library, backed by disciplined Agile practice.',
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] bg-white px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn>
        <h2
          className="mb-16 sm:mb-20 md:mb-28 text-center font-black uppercase text-[#0C0C0C]"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Skills
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {skills.map((skill, i) => (
          <FadeIn key={skill.number} delay={i * 0.1}>
            <div
              className="flex items-center gap-6 sm:gap-10 py-8 sm:py-10 md:py-12"
              style={{ borderBottom: '1px solid rgba(12,12,12,0.15)' }}
            >
              <span
                className="font-black text-[#0C0C0C] shrink-0"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {skill.number}
              </span>
              <div className="flex flex-col gap-2">
                <h3
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {skill.name}
                </h3>
                <p
                  className="max-w-2xl font-light leading-relaxed text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', opacity: 0.6 }}
                >
                  {skill.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
