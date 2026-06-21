import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Linkedin, ArrowUp, Phone, Youtube } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.46h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function FutureSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      });

      // Reset values first to avoid flash of unstyled content
      gsap.set(['.future-overline', '.future-headline', '.future-body', '.cta-btn', '.contact-icon-btn', '.scroll-top-btn'], {
        opacity: 0,
      });

      tl.fromTo(
        '.future-overline',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
      )
        .fromTo(
          '.future-headline',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' },
          '-=0.35'
        )
        .fromTo(
          '.future-body',
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
          '-=0.45'
        )
        .fromTo(
          '.cta-btn',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.15, ease: 'power2.out' },
          '-=0.4'
        )
        .fromTo(
          '.contact-icon-btn',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out' },
          '-=0.3'
        )
        .fromTo(
          '.scroll-top-btn',
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.7)' },
          '-=0.2'
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      id="connect"
      className="w-full py-20 md:py-32"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="text-center flex flex-col items-center">
          {/* Overline label */}
          <p
            className="future-overline text-caption mb-8 opacity-0"
            style={{ color: 'var(--accent-burgundy)' }}
          >
            LET'S CONNECT
          </p>

          {/* Large Serif Title */}
          <h2 className="future-headline text-display-lg text-[var(--text-primary)] mb-6 opacity-0">
            Let's Connect
          </h2>

          {/* Description */}
          <p className="future-body text-body-lg text-[var(--text-secondary)] max-w-[600px] mx-auto mb-10 opacity-0">
            Open to FP&amp;A, costing, and finance analyst roles and available for
            guest lecture invitations from colleges and institutions looking for an
            industry perspective on management accounting and finance careers.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
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
          </div>
        </div>

        {/* Contact Info Footer Row */}
        <div
          className="border-t pt-16 mt-8 relative flex justify-center"
          style={{ borderColor: 'var(--border-light)' }}
        >
          <div className="flex items-center justify-center gap-8 max-w-[600px] w-full">
            {/* Phone Icon Link */}
            <a
              href="tel:+919321421361"
              aria-label="Phone"
              className="contact-icon-btn w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 text-[var(--text-muted)] hover:text-[var(--accent-burgundy)] hover:border-[var(--accent-burgundy)] bg-transparent"
              style={{ borderColor: 'var(--border-light)' }}
            >
              <Phone size={20} />
            </a>

            {/* WhatsApp Icon Link */}
            <a
              href="https://wa.me/919321421361"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="contact-icon-btn w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 text-[var(--text-muted)] hover:text-[var(--accent-burgundy)] hover:border-[var(--accent-burgundy)] bg-transparent"
              style={{ borderColor: 'var(--border-light)' }}
            >
              <WhatsAppIcon className="w-5 h-5" />
            </a>

            {/* YouTube Icon Link */}
            <a
              href="https://www.youtube.com/@SnehiVora"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="contact-icon-btn w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 text-[var(--text-muted)] hover:text-[var(--accent-burgundy)] hover:border-[var(--accent-burgundy)] bg-transparent"
              style={{ borderColor: 'var(--border-light)' }}
            >
              <Youtube size={20} />
            </a>
          </div>

          {/* Back to top circular button */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="scroll-top-btn absolute right-4 md:right-0 bottom-1 w-10 h-10 rounded-full border flex items-center justify-center bg-transparent transition-all duration-300 group cursor-pointer opacity-0 text-[var(--text-muted)] hover:text-[var(--accent-burgundy)] hover:border-[var(--accent-burgundy)]"
            style={{ borderColor: 'var(--border-light)' }}
          >
            <ArrowUp
              size={16}
              strokeWidth={1.5}
              className="group-hover:translate-y-[-2px] transition-transform duration-300"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
