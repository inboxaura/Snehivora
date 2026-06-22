import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const METRICS = [
  { value: 420, label: 'CMA PART I', suffix: '' },
  { value: 390, label: 'CMA PART II', suffix: '' },
  { value: 130, label: 'STUDENTS MENTORED', suffix: '+' },
  { value: 4, label: 'LINKEDIN FOLLOWERS', suffix: 'K+' },
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const overlineRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const portraitImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Overline fade in
      tl.fromTo(
        overlineRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        0.2
      );

      // Headline word-by-word reveal
      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll('.word');
        tl.fromTo(
          words,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.08 },
          0.5
        );
      }

      // Subheadline
      tl.fromTo(
        subheadRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        1.0
      );

      // CTA row
      tl.fromTo(
        ctaRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        1.2
      );

      // Metric counters
      if (metricsRef.current) {
        const numberEls = metricsRef.current.querySelectorAll('.metric-number');
        numberEls.forEach((el, i) => {
          const target = parseInt(el.getAttribute('data-target') || '0');
          const proxy = { value: 0 };
          tl.to(
            proxy,
            {
              value: target,
              duration: 1.5,
              ease: 'power2.out',
              onUpdate: () => {
                el.textContent = Math.round(proxy.value).toString();
              },
            },
            1.4 + i * 0.1
          );
        });

        // Fade in metric labels
        const labelEls = metricsRef.current.querySelectorAll('.metric-label');
        tl.fromTo(
          labelEls,
          { opacity: 0 },
          { opacity: 1, duration: 0.4, stagger: 0.1 },
          1.6
        );
      }

      // Portrait clip-path reveal
      if (portraitRef.current) {
        tl.fromTo(
          portraitRef.current,
          { clipPath: 'inset(100% 0 0 0)' },
          {
            clipPath: 'inset(0% 0 0 0)',
            duration: 1.2,
            ease: 'cubic-bezier(0.77, 0, 0.175, 1)',
          },
          0.4
        );
      }

      // Subtle image scale
      if (portraitImgRef.current) {
        tl.fromTo(
          portraitImgRef.current,
          { scale: 1.1 },
          { scale: 1, duration: 2, ease: 'power2.out' },
          0.4
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const headlineWords = 'Where Operational Data Meets Financial Insight'.split(' ');

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center overflow-hidden"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Left content column */}
      <div className="relative z-10 w-full md:w-[55%] px-6 md:px-12 lg:px-16 pt-[100px] pb-16 md:py-0 flex flex-col justify-center min-h-screen">
        {/* Overline */}
        <p
          ref={overlineRef}
          className="text-caption text-[var(--text-muted)] mb-6 opacity-0 flex items-center gap-2 flex-wrap"
        >
          <span>CMA (US)</span>
          <span className="w-1 h-1 rounded-full bg-[var(--accent-burgundy)]" />
          <span>Supply Chain Finance</span>
          <span className="w-1 h-1 rounded-full bg-[var(--accent-burgundy)]" />
          <span>FP&amp;A</span>
        </p>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="text-display-xl text-[var(--text-primary)] mb-6 max-w-[600px]"
        >
          {headlineWords.map((word, i) => (
            <span key={i} className="word inline-block mr-[0.3em] opacity-0">
              {word}
            </span>
          ))}
        </h1>

        {/* Subheadline */}
        <p
          ref={subheadRef}
          className="text-body-lg text-[var(--text-secondary)] max-w-[480px] mb-8 opacity-0"
        >
          Snehi Vora is a CMA (US) professional at Colgate Global Business Services,
          transforming complex supply chain operations into clear financial decisions
          across North America.
        </p>

        {/* CTA Row */}
        <div ref={ctaRef} className="flex flex-wrap gap-4 mb-12 opacity-0">
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center px-6 py-3 text-sm font-medium text-white rounded-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            style={{ backgroundColor: 'var(--accent-burgundy)' }}
          >
            View My Work
          </a>
          <a
            href="/Snehi_Vora_Finance_Resume.pdf"
            download="Snehi_Vora_Finance_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 text-sm font-medium rounded-sm border transition-all duration-300 hover:-translate-y-0.5"
            style={{
              borderColor: 'var(--border-light)',
              color: 'var(--text-primary)',
              backgroundColor: 'transparent',
            }}
          >
            Download CV
          </a>
        </div>

        {/* Metrics */}
        <div ref={metricsRef} className="flex flex-wrap gap-8 md:gap-10">
          {METRICS.map((metric, i) => (
            <div key={i} className="flex flex-col">
              <div className="flex items-baseline gap-0.5">
                <span
                  className="text-mono-lg accent-burgundy metric-number"
                  data-target={metric.value}
                >
                  0
                </span>
                <span className="text-mono-lg accent-burgundy">
                  {metric.suffix}
                </span>
              </div>
              <span className="text-mono-sm text-[var(--text-muted)] mt-1 metric-label opacity-0">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right portrait column */}
      <div
        ref={portraitRef}
        className="hidden md:block absolute right-0 top-0 w-[45%] h-full"
        style={{ clipPath: 'inset(100% 0 0 0)' }}
      >
        {/* Left border accent */}
        <div
          className="absolute left-0 top-0 bottom-0 w-[3px] z-10"
          style={{ backgroundColor: 'var(--accent-burgundy)' }}
        />
        <img
          ref={portraitImgRef}
          src="/snehi_hero.jpg"
          alt="Snehi Vora - CMA (US) Professional"
          className="w-full h-full object-cover object-top"
          style={{ willChange: 'transform' }}
        />
      </div>

      {/* Mobile portrait */}
      <div className="md:hidden absolute inset-0 z-0 opacity-10">
        <img
          src="/snehi_hero.jpg"
          alt=""
          className="w-full h-full object-cover object-top"
        />
      </div>
    </section>
  );
}
