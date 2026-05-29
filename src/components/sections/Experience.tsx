'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    id: 'leadership',
    index: '01',
    label: 'Leadership',
    title: 'Leadership\n& Operations',
    items: [
      'Leading teams of 20+ employees in high-volume logistics operations',
      'Coordinating workflows and national LH shipping routes across Spain',
      'Managing operations under strict delivery deadlines and peak workloads',
    ],
  },
  {
    id: 'performance',
    index: '02',
    label: 'Performance',
    title: 'Performance\n& Optimization',
    items: [
      'KPI monitoring and operational performance tracking',
      'Workflow optimization and efficient resource allocation',
      'Fast decision-making in high-pressure environments',
    ],
  },
  {
    id: 'specialized',
    index: '03',
    label: 'Specialized',
    title: 'Specialized\nLogistics',
    items: [
      'Pharma logistics and sensitive goods operations',
      'Health & Safety compliance and operational standards',
      'Maintaining operational continuity during unforeseen situations',
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro text
      gsap.from('.exp-intro > *', {
        opacity: 0, y: 40,
        duration: 1, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.exp-intro', start: 'top 82%', toggleActions: 'play none none reverse' }
      });

      // Company badge
      gsap.from('.exp-badge', {
        opacity: 0, scale: 0.9,
        duration: 0.7, ease: 'back.out(1.4)',
        scrollTrigger: { trigger: '.exp-badge', start: 'top 88%', toggleActions: 'play none none reverse' }
      });

      // Panels
      gsap.from('.exp-panel', {
        opacity: 0, y: 60,
        duration: 0.9, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.exp-panels', start: 'top 82%', toggleActions: 'play none none reverse' }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="bg-[#f0f0f0] overflow-hidden">

      {/* ── TOP: section intro, full-bleed dark strip ── */}
      <div className="bg-[#1a1a1a] pt-20 pb-0">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32">

          {/* Tag */}
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px w-8 bg-white/20" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-white/40">
              Professional Experience
            </span>
          </div>

          <div className="exp-intro flex flex-col md:flex-row md:items-end md:justify-between gap-8 pb-16 border-b border-white/8">
            {/* Large headline */}
            <h2 className="text-[clamp(3rem,8vw,6rem)] font-bold tracking-[-0.03em] leading-[0.95] text-white">
              Experience<br /><span className="text-white/25">&</span> Leadership
            </h2>

            {/* Right side: description + company pill */}
            <div className="max-w-sm space-y-6">
              <p className="text-white/50 text-lg font-light leading-relaxed">
                Operational leadership within high-volume logistics environments across Spain.
              </p>
              <div className="exp-badge inline-flex items-center gap-3 bg-white/8 border border-white/10 rounded-full px-5 py-2.5">
                <div className="w-2 h-2 rounded-full bg-[#3B5BFE]" />
                <span className="text-white text-sm font-medium">DHL eCommerce Spain</span>
                <span className="text-white/30 text-xs">Since 2018</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM: 3 panels, half dark / half light ── */}
      <div className="exp-panels grid grid-cols-1 md:grid-cols-3">
        {pillars.map((p, i) => (
          <div
            key={p.id}
            className={`exp-panel group relative overflow-hidden
              ${i === 1 ? 'bg-[#3B5BFE]' : i === 0 ? 'bg-[#242424]' : 'bg-[#f0f0f0]'}
              ${i === 2 ? 'border-l border-[#333]/10' : ''}
            `}
          >
            {/* Index — giant decorative number */}
            <div className={`absolute top-6 right-6 text-[7rem] font-bold leading-none select-none
              ${i === 2 ? 'text-[#333]/6' : 'text-white/5'}
            `}>
              {p.index}
            </div>

            <div className="relative p-10 md:p-12 pt-12 flex flex-col min-h-[420px]">
              {/* Label */}
              <span className={`text-[11px] uppercase tracking-[0.18em] mb-8 font-medium
                ${i === 2 ? 'text-[#333]/45' : 'text-white/40'}
              `}>
                {p.label}
              </span>

              {/* Title */}
              <h3 className={`text-2xl md:text-3xl font-bold leading-tight mb-8 whitespace-pre-line
                ${i === 2 ? 'text-[#1a1a1a]' : 'text-white'}
              `}>
                {p.title}
              </h3>

              {/* Divider */}
              <div className={`h-px mb-8 ${i === 2 ? 'bg-[#333]/12' : 'bg-white/12'}`} />

              {/* Items */}
              <ul className="space-y-4 mt-auto">
                {p.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className={`mt-[6px] shrink-0 w-[5px] h-[5px] rounded-full
                      ${i === 1 ? 'bg-white/60' : i === 2 ? 'bg-[#3B5BFE]' : 'bg-white/40'}
                    `} />
                    <span className={`text-sm leading-relaxed
                      ${i === 2 ? 'text-[#333]/65' : 'text-white/65'}
                    `}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}