import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ExperienceSection from './sections/ExperienceSection';
import ContactSection from './sections/ContactSection';

export default function App() {
  return (
    <div className="bg-ink" style={{ overflowX: 'clip' }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}
