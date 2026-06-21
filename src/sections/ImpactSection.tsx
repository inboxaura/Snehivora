import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const IMPACT_METRICS = [
  {
    number: '800+',
    label: 'SKUs Managed',
    subtext: 'Across 4 Co-pack Plants + 1 Commercial Plant',
  },
  {
    number: '5+ hrs/mo',
    label: 'Time Saved',
    subtext: 'Through VBA \u0026 Excel Macro automation',
  },
  {
    number: '5',
    label: 'Plants',
    subtext: 'PPV reporting across the division',
  },
  {
    number: '8.7',
    label: 'CGPA',
    subtext: 'Bachelor of Accountancy \u0026 Finance',
  },
];

export default function ImpactSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll('.impact-card');
      if (!cards) return;

      gsap.fromTo(
        cards,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="impact"
      className="w-full py-20 md:py-32"
      style={{ backgroundColor: 'var(--bg-warm)' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {IMPACT_METRICS.map((metric, i) => (
            <div
              key={i}
              className={`impact-card flex flex-col items-center text-center py-8 px-4 md:px-6 ${
                i > 0 ? 'border-l border-[var(--border-light)]' : ''
              }`}
            >
              <span className="text-mono-lg accent-burgundy mb-2">
                {metric.number}
              </span>
              <span className="text-heading-sm text-[var(--text-primary)] mb-2">
                {metric.label}
              </span>
              <span className="text-sm text-[var(--text-muted)] max-w-[200px] leading-relaxed">
                {metric.subtext}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
