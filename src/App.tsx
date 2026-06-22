import { Analytics } from '@vercel/analytics/react';
import { useDarkMode } from './hooks/useDarkMode';
import { useLenis } from './hooks/useLenis';
import Header from './sections/Header';
import HeroSection from './sections/HeroSection';
import ImpactSection from './sections/ImpactSection';
import AboutSection from './sections/AboutSection';
import WorkSection from './sections/WorkSection';
import LeadershipSection from './sections/LeadershipSection';
import FutureSection from './sections/FutureSection';

export default function App() {
  useDarkMode();
  useLenis(true);

  return (
    <div
      className="relative min-h-screen"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <Header />
      <main>
        <HeroSection />
        <ImpactSection />
        <AboutSection />
        <WorkSection />
        <LeadershipSection />
        <FutureSection />
      </main>
      <Analytics />
    </div>
  );
}
