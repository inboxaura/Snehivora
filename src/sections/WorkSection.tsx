import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CURRENT_ROLE_BULLETS = [
  'Manage finance operations for 4 Co-pack Plants (800+ SKUs) and 1 Commercial Plant (1,000+ SKUs)',
  'Automated recurring reports using SAP, VBA, and Excel Macros, with 3+ scripts saving 5+ hours per month',
  'Prepare consolidated PPV reports for 5 plants; deliver monthly plant performance reporting for Hill\'s Division',
  'Perform inventory costing, variance analysis, MEC, SOX testing, and fixed asset capitalization',
];

const CURRENT_SKILLS = [
  'SAP', 'VBA/Macros', 'Variance Analysis', 'MEC', 'PPV Reporting', 'SOX', 'Inventory Costing',
];

const PREV_ROLE_BULLETS = [
  'Reviewed financial records and supported GST return filing across multiple client portfolios',
  'Handled bookkeeping and financial statement preparation for diverse client types',
  'Performed bank reconciliations using Tally ERP and Tally Prime',
];

const PREV_SKILLS = ['Tally ERP', 'GST Filing', 'Bookkeeping', 'Bank Reconciliation'];

export default function WorkSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Card 1 slide from left
      const card1 = sectionRef.current?.querySelector('.work-card-1');
      if (card1) {
        gsap.fromTo(
          card1,
          { x: -40, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card1,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Card 2 slide from right
      const card2 = sectionRef.current?.querySelector('.work-card-2');
      if (card2) {
        gsap.fromTo(
          card2,
          { x: 40, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            delay: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card2,
              start: 'top 80%',
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
      id="work"
      className="w-full py-20 md:py-32"
      style={{ backgroundColor: 'var(--bg-warm)' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Philosophy Statement */}
        <div className="mb-20 md:mb-28">
          <p
            className="text-caption text-center mb-8"
            style={{ color: 'var(--accent-burgundy)' }}
          >
            THE WORK
          </p>

          {/* Philosophy Statement Text */}
          <div className="text-center max-w-[800px] mx-auto">
            <h2 className="text-display-lg text-[var(--text-primary)]">
              I don't just close books. I open conversations.
            </h2>
          </div>

          {/* Decorative line */}
          <div className="flex justify-center mt-8">
            <div
              className="w-[60px] h-[1px]"
              style={{ backgroundColor: 'var(--accent-burgundy)' }}
            />
          </div>
        </div>

        {/* Experience Cards */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Card 1 - Current Role (larger) */}
          <div
            className="work-card-1 md:w-[60%] rounded-sm p-8 md:p-10 opacity-0 relative"
            style={{
              backgroundColor: 'var(--bg-primary)',
              borderLeft: '3px solid var(--accent-burgundy)',
            }}
          >
            <p className="text-heading-sm text-[var(--text-muted)] mb-2">
              Cost Trainee, Supply Chain Finance
            </p>
            <h3 className="font-display text-[28px] font-normal text-[var(--text-primary)] mb-1">
              Colgate Global Business Services
            </h3>
            <p className="text-mono-sm text-[var(--text-muted)] mb-1">
              Jun 2024 - Present
            </p>
            <p
              className="text-body mb-6"
              style={{ color: 'var(--accent-burgundy)' }}
            >
              North America &amp; Hill's Pet Nutrition
            </p>

            <ul className="space-y-3 mb-8">
              {CURRENT_ROLE_BULLETS.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: 'var(--accent-burgundy)' }}
                  />
                  <span className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>

            {/* Skill tags */}
            <div className="flex flex-wrap gap-2">
              {CURRENT_SKILLS.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-[11px] font-medium uppercase tracking-wide rounded-sm border transition-all duration-200 hover:bg-[var(--bg-warm)] cursor-default"
                  style={{
                    borderColor: 'var(--border-light)',
                    color: 'var(--text-muted)',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2 - Previous Role */}
          <div
            className="work-card-2 md:w-[40%] rounded-sm p-8 md:p-10 opacity-0 self-start"
            style={{ backgroundColor: 'var(--bg-primary)' }}
          >
            <p className="text-heading-sm text-[var(--text-muted)] mb-2">
              Accounts Intern
            </p>
            <h3 className="font-display text-[24px] font-normal text-[var(--text-primary)] mb-1">
              Pankaj B Mehta
            </h3>
            <p className="text-mono-sm text-[var(--text-muted)] mb-6">
              Feb 2023 - Sep 2023
            </p>

            <ul className="space-y-3 mb-8">
              {PREV_ROLE_BULLETS.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: 'var(--accent-burgundy)' }}
                  />
                  <span className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>

            {/* Skill tags */}
            <div className="flex flex-wrap gap-2">
              {PREV_SKILLS.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-[11px] font-medium uppercase tracking-wide rounded-sm border transition-all duration-200 hover:bg-[var(--bg-warm)] cursor-default"
                  style={{
                    borderColor: 'var(--border-light)',
                    color: 'var(--text-muted)',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
