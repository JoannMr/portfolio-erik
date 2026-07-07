'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '9+', label: 'Years in Logistics' },
  { value: '20+', label: 'Team Members Led' },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const statsBarRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current || !bodyRef.current || !detailRef.current || !statsBarRef.current || !ctaRef.current) return;

    ScrollTrigger.getAll().forEach(t => {
      if (t.trigger === sectionRef.current) t.kill();
    });

    gsap.set(titleRef.current.children, { y: 60, opacity: 0 });
    gsap.set(bodyRef.current.children, { y: 30, opacity: 0 });
    gsap.set(detailRef.current.children, { y: 28, opacity: 0 });
    gsap.set(ctaRef.current.children, { y: 20, opacity: 0 });
    gsap.set(statsBarRef.current.children, { y: 24, opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 78%',
        toggleActions: 'play none none none',
        refreshPriority: -1,
      },
    });

    tl.to(titleRef.current.children, {
      y: 0, opacity: 1, duration: 1.1, stagger: 0.18, ease: 'power3.out',
    })
    .to(bodyRef.current.children, {
      y: 0, opacity: 1, duration: 0.9, stagger: 0.14, ease: 'power3.out',
    }, '-=0.6')
    .to(detailRef.current.children, {
      y: 0, opacity: 1, duration: 0.85, stagger: 0.16, ease: 'power3.out',
    }, '-=0.6')
    .to(ctaRef.current.children, {
      y: 0, opacity: 1, duration: 0.75, ease: 'power3.out',
    }, '-=0.4')
    .to(statsBarRef.current.children, {
      y: 0, opacity: 1, duration: 0.7, stagger: 0.14, ease: 'power3.out',
    }, '-=0.35');

    const refreshTimeout = setTimeout(() => { ScrollTrigger.refresh(); }, 100);

    return () => {
      clearTimeout(refreshTimeout);
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="bg-[#f0f0f0] text-[#333333] overflow-hidden"
    >
      {/* ── Top block: title + body ── */}
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32 pt-24 md:pt-36 pb-20 md:pb-28">

        {/* Label + headline */}
        <div ref={titleRef} className="mb-14 md:mb-20">
          <div className="flex items-center space-x-4 mb-5">
            <div className="h-0.5 w-12 bg-[#333333]" />
            <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#333333]/55">About Me</span>
          </div>
          <h2 className="text-5xl font-bold tracking-tight leading-[1.06] md:text-6xl lg:text-7xl">
            Operations built<br className="hidden sm:block" />
            through people
          </h2>
        </div>

        {/* Body — two-column asymmetric prose */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-0">

          {/* Col 1 — primary paragraph */}
          <div ref={bodyRef} className="space-y-0">
            <p className="text-2xl md:text-3xl font-semibold leading-[1.45] text-[#333333] max-w-xl">
              9+ years shaping logistics operations and high-performance teams at{' '}
              <span className="relative inline-block">
                DHL eCommerce Spain
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#333333]/30 rounded-full" />
              </span>
              .
            </p>
          </div>

          {/* Vertical divider */}
          <div className="hidden lg:block w-px bg-[#333333]/12 mx-16 xl:mx-20 self-stretch" />

          {/* Col 2 — detail paragraphs + CTA */}
          <div className="mt-10 lg:mt-0 flex flex-col justify-between gap-8">
            <div ref={detailRef} className="space-y-5 text-base md:text-lg leading-[1.78] text-[#333333]/68 max-w-lg">
              <p>
                I believe the strongest operations are built through people.
                I have focused on creating strong professional and personal relationships
                within teams to maximize performance, commitment and operational success.
              </p>
              <p>
                My leadership style combines <strong className="text-[#333333]/85 font-semibold">communication, trust and high standards</strong> to build
                efficient teams capable of performing under pressure while maintaining
                a positive work environment.
              </p>
            </div>

            <div ref={ctaRef}>
              <div className="inline-flex flex-col gap-2">
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#333333]/45">
                  Open to international opportunities
                </p>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 text-lg font-semibold hover:text-[#5F6F64] transition-colors duration-300"
                >
                  <span className="border-b-2 border-current pb-px">Let&apos;s connect</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats bar — full-width strip ── */}
      <div className="border-t border-[#333333]/12">
        <div
          ref={statsBarRef}
          className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32
                     flex flex-col sm:flex-row"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className={[
                'flex flex-col gap-2 py-10 md:py-14',
                // horizontal divider between items on mobile
                i > 0 ? 'border-t sm:border-t-0 border-[#333333]/12' : '',
                // vertical divider + padding on sm+
                i > 0 ? 'sm:border-l sm:border-[#333333]/12 sm:pl-14 md:pl-20' : 'sm:pr-14 md:pr-20',
                // equal flex width on sm+
                'sm:flex-1',
              ].join(' ')}
            >
              <p className="font-heading text-[clamp(3.2rem,8vw,5.5rem)] sm:text-[clamp(2.8rem,4.5vw,5rem)] font-bold leading-none tracking-tight">
                {stat.value}
              </p>
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#333333]/50 leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
