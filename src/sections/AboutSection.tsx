import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DETAIL_PILLS = [
  'CMA (US) Certified',
  'IMA Scholarship Recipient',
  'Women for Change Scholar',
  'ILJ Foundation Volunteer',
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left column entrance
      const leftCol = sectionRef.current?.querySelector('.about-left');
      if (leftCol) {
        gsap.fromTo(
          leftCol,
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Right column paragraphs stagger
      const paragraphs = sectionRef.current?.querySelectorAll('.about-para');
      if (paragraphs) {
        gsap.fromTo(
          paragraphs,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Detail pills pop in
      const pills = sectionRef.current?.querySelectorAll('.detail-pill');
      if (pills) {
        gsap.fromTo(
          pills,
          { scale: 0.9, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 60%',
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
      id="about"
      className="w-full py-20 md:py-32"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          {/* Left column - 40% */}
          <div className="about-left md:w-[40%] opacity-0">
            <p
              className="text-caption mb-6"
              style={{ color: 'var(--accent-burgundy)' }}
            >
              THE STORY
            </p>
            <h2 className="text-display-md text-[var(--text-primary)] italic">
              Finance isn't just about reporting numbers. It's about explaining what
              those numbers mean for the business.
            </h2>
          </div>

          {/* Right column - 55% */}
          <div className="md:w-[55%] md:ml-auto">
            <p className="about-para text-body-lg text-[var(--text-secondary)] mb-6 opacity-0">
              I'm a CMA (US) professional with a passion for bridging the gap between
              operational complexity and financial clarity. At Colgate Global Business
              Services, I support manufacturing, commercial, copack, and contract
              manufacturing operations across North America and the Hill's Pet Nutrition
              division.
            </p>
            <p className="about-para text-body text-[var(--text-secondary)] mb-6 opacity-0">
              My work sits at the intersection of data and decision-making, covering
              inventory costing, variance analysis, month-end close, and process
              automation through VBA and SAP. I believe great finance teams don't just
              report numbers; they explain what those numbers mean and drive actionable
              insights.
            </p>
            <p className="about-para text-body text-[var(--text-secondary)] mb-8 opacity-0">
              Beyond my role, I'm passionate about building a stronger finance community
              in India. I've personally mentored 130+ students through their CMA (US)
              journey, conducted sessions at 7+ educational institutions, and built a
              following of 4,000+ professionals on LinkedIn where I share insights on
              finance careers, cost management, and professional certifications.
            </p>

            {/* Detail pills */}
            <div className="flex flex-wrap gap-3">
              {DETAIL_PILLS.map((pill, i) => (
                <span
                  key={i}
                  className="detail-pill inline-block px-4 py-2 text-[13px] font-medium rounded-sm opacity-0"
                  style={{
                    backgroundColor: 'var(--accent-burgundy-light)',
                    color: 'var(--accent-burgundy)',
                  }}
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
