import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mic, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { number: '7+', label: 'Institutions', description: 'Sessions conducted across Mumbai campuses' },
  { number: '130+', label: 'Students Mentored', description: 'CMA (US) aspirants guided personally' },
  { number: '1', label: 'Podcast Hosted', description: 'CMA US focused series for students' },
];

const SPEAKING_TOPICS = [
  'CMA (US) Certification',
  'FP&A Careers',
  'Supply Chain Finance',
  'Cost Management',
  'Finance for Students',
  'Career in Management Accounting',
];

export default function LeadershipSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stats entrance
      const statItems = sectionRef.current?.querySelectorAll('.stat-item');
      if (statItems) {
        gsap.fromTo(
          statItems,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current?.querySelector('.stats-row'),
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Left column
      const leftCol = sectionRef.current?.querySelector('.leadership-left');
      if (leftCol) {
        gsap.fromTo(
          leftCol,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: leftCol,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Speaking topics stagger from right
      const topics = sectionRef.current?.querySelectorAll('.topic-item');
      if (topics) {
        gsap.fromTo(
          topics,
          { x: 30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: topics[0],
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="leadership"
      className="w-full py-20 md:py-32"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Stats Row */}
        <div className="stats-row grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20 md:mb-28">
          {STATS.map((stat, i) => (
            <div key={i} className="stat-item flex flex-col opacity-0">
              <span className="text-mono-lg accent-burgundy mb-2">
                {stat.number}
              </span>
              <span className="text-heading-sm text-[var(--text-primary)] mb-2">
                {stat.label}
              </span>
              <span className="text-sm text-[var(--text-muted)] leading-relaxed max-w-[280px]">
                {stat.description}
              </span>
            </div>
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          {/* Left Column - 55% */}
          <div className="leadership-left md:w-[55%] opacity-0">
            <p
              className="text-caption mb-6"
              style={{ color: 'var(--accent-burgundy)' }}
            >
              THE LEADERSHIP
            </p>
            <h2 className="text-display-md text-[var(--text-primary)] mb-6">
              Building the next generation of finance professionals
            </h2>
            <p className="text-body text-[var(--text-secondary)] mb-5">
              Alongside my finance career, I actively work to build awareness around
              the CMA (US) certification across college campuses in India, a
              designation that remains underrepresented despite its global value in
              management accounting and FP&amp;A.
            </p>
            <p className="text-body text-[var(--text-secondary)]">
              I am available for guest lectures, career guidance sessions, and panel
              discussions, particularly for commerce departments and L&amp;D programs
              looking for an industry perspective on finance careers, cost management,
              and professional certifications.
            </p>
          </div>

          {/* Right Column - Speaking Topics */}
          <div className="md:w-[40%] md:ml-auto">
            <div className="flex items-center gap-2 mb-6">
              <Mic size={16} style={{ color: 'var(--accent-burgundy)' }} />
              <span className="text-heading-sm text-[var(--text-primary)]">
                Speaking Topics
              </span>
            </div>

            <div className="divide-y divide-[var(--border-light)]">
              {SPEAKING_TOPICS.map((topic, i) => (
                <div
                  key={i}
                  className="topic-item flex items-center justify-between py-4 group cursor-default opacity-0"
                >
                  <span className="text-[15px] text-[var(--text-primary)] transition-colors duration-200 group-hover:text-[var(--accent-burgundy)]">
                    {topic}
                  </span>
                  <ArrowRight
                    size={16}
                    className="text-[var(--text-muted)] transition-all duration-200 group-hover:text-[var(--accent-burgundy)] group-hover:translate-x-1"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
