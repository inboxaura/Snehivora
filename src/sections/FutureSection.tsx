import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Linkedin, Youtube } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function FutureSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline entrance
      const headline = sectionRef.current?.querySelector('.future-headline');
      if (headline) {
        gsap.fromTo(
          headline,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headline,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Body entrance
      const body = sectionRef.current?.querySelector('.future-body');
      if (body) {
        gsap.fromTo(
          body,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: body,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // CTA buttons stagger
      const ctas = sectionRef.current?.querySelectorAll('.cta-btn');
      if (ctas) {
        gsap.fromTo(
          ctas,
          { y: 15, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            delay: 0.3,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: ctas[0],
              start: 'top 90%',
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
      id="connect"
      className="w-full"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Future Direction */}
      <div className="py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
          <p
            className="text-caption mb-8"
            style={{ color: 'var(--accent-burgundy)' }}
          >
            THE FUTURE
          </p>

          <h2 className="future-headline text-display-lg text-[var(--text-primary)] mb-6 opacity-0">
            On a path to Finance Director.
            <br />
            One insight at a time.
          </h2>

          <p className="future-body text-body-lg text-[var(--text-secondary)] max-w-[600px] mx-auto mb-10 opacity-0">
            Open to FP&amp;A, costing, and finance analyst roles where I can drive
            strategic decisions, build automated reporting systems, and mentor the
            next wave of finance talent.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:snehivora06@gmail.com"
              className="cta-btn inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white rounded-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg opacity-0"
              style={{ backgroundColor: 'var(--accent-burgundy)' }}
            >
              <Mail size={16} />
              Send an Email
            </a>
            <a
              href="https://www.linkedin.com/in/snehivora/"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-sm border transition-all duration-300 hover:-translate-y-0.5 opacity-0"
              style={{
                borderColor: 'var(--border-light)',
                color: 'var(--text-primary)',
              }}
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href="https://www.youtube.com/@SnehiVora"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-sm border transition-all duration-300 hover:-translate-y-0.5 opacity-0"
              style={{
                borderColor: 'var(--border-light)',
                color: 'var(--text-primary)',
              }}
            >
              <Youtube size={16} />
              YouTube
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        className="w-full py-10 border-t"
        style={{
          borderColor: 'var(--border-light)',
          backgroundColor: 'var(--bg-primary)',
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          {/* Top row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <span className="text-caption text-[var(--text-muted)]">
              &copy; 2025 Snehi Vora
            </span>
            <span className="text-caption text-[var(--text-muted)]">
              Mumbai, India
            </span>
            <a
              href="mailto:snehivora06@gmail.com"
              className="text-caption text-[var(--text-muted)] hover:text-[var(--accent-burgundy)] transition-colors duration-300"
            >
              snehivora06@gmail.com
            </a>
          </div>

          {/* Bottom row - social links */}
          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/snehivora/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-caption text-[var(--text-muted)] hover:text-[var(--accent-burgundy)] transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="mailto:snehivora06@gmail.com"
              className="text-caption text-[var(--text-muted)] hover:text-[var(--accent-burgundy)] transition-colors duration-300"
            >
              Email
            </a>
            <a
              href="https://www.youtube.com/@SnehiVora"
              target="_blank"
              rel="noopener noreferrer"
              className="text-caption text-[var(--text-muted)] hover:text-[var(--accent-burgundy)] transition-colors duration-300"
            >
              YouTube
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}
