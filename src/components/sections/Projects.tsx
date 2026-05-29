'use client';

import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'Logistics Operations', pct: 98 },
  { name: 'High-Volume Operations', pct: 97 },
  { name: 'Team Leadership', pct: 95 },
  { name: 'Warehouse Operations', pct: 95 },
  { name: 'Decision-Making Under Pressure', pct: 96 },
  { name: 'Logistics Coordination', pct: 93 },
  { name: 'Operational Efficiency', pct: 92 },
  { name: 'Workflow Optimization', pct: 90 },
  { name: 'Dispatch & Route Coordination', pct: 90 },
  { name: 'KPI Monitoring & Reporting', pct: 88 },
  { name: 'Resource Planning', pct: 88 },
  { name: 'Health & Safety Compliance', pct: 87 },
  { name: 'Continuous Improvement', pct: 85 },
  { name: 'Pharma Logistics', pct: 82 },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  // Skill names for the scrolling marquee
  const marqueeSkills = skills.map(s => s.name);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section title
      gsap.from('.sk-headline > *', {
        opacity: 0, y: 50,
        duration: 1, stagger: 0.12, ease: 'power4.out',
        scrollTrigger: { trigger: '.sk-headline', start: 'top 82%', toggleActions: 'play none none reverse' }
      });

      // Rows appear
      gsap.from('.sk-row', {
        opacity: 0, y: 20,
        duration: 0.6, stagger: 0.05, ease: 'power3.out',
        scrollTrigger: { trigger: '.sk-list', start: 'top 82%', toggleActions: 'play none none reverse' }
      });

      // Bar fills
      document.querySelectorAll('.sk-bar-fill').forEach((el) => {
        const elem = el as HTMLElement;
        const pct = elem.dataset.pct ?? '0%';
        gsap.fromTo(elem,
          { width: '0%' },
          {
            width: pct,
            duration: 1.2, ease: 'power3.out',
            scrollTrigger: { trigger: elem, start: 'top 90%', toggleActions: 'play none none reverse' }
          }
        );
      });

      // Marquee infinite scroll
      if (marqueeRef.current) {
        gsap.to(marqueeRef.current, {
          x: '-50%',
          duration: 28,
          ease: 'none',
          repeat: -1,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="work" className="bg-[#f0f0f0] overflow-hidden">

      {/* ── HEADLINE BLOCK ── */}
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32 pt-24 pb-16">
        <div className="sk-headline flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#333333]/30" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#333333]/45">Capabilities</span>
            </div>
            <h2 className="text-[clamp(3.2rem,7vw,5.5rem)] font-bold tracking-[-0.03em] leading-[0.95] text-[#1a1a1a]">
              Core Skills
            </h2>
          </div>
          {/* Stats cluster */}
          <div className="pb-2">
            <p className="text-sm text-[#333]/45 leading-relaxed max-w-xs">
              Built through real operational experience in high-volume logistics environments.
            </p>
          </div>
        </div>
      </div>

      {/* ── SKILLS LIST ── */}
      <div className="sk-list mx-auto max-w-7xl px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32 pb-10">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="sk-row group border-t border-[#333333]/10 py-4 flex items-center gap-6 cursor-default"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Index */}
            <span className="text-[11px] font-mono text-[#333]/25 w-5 shrink-0 tabular-nums">
              {String(i + 1).padStart(2, '0')}
            </span>

            {/* Skill name */}
            <span className={`flex-1 text-base md:text-lg font-medium transition-colors duration-200
              ${hovered === i ? 'text-[#3B5BFE]' : 'text-[#1a1a1a]'}
            `}>
              {skill.name}
            </span>

            {/* Bar */}
            <div className="w-24 md:w-40 lg:w-56 h-[3px] bg-[#333333]/10 rounded-full overflow-hidden shrink-0">
              <div
                className={`sk-bar-fill h-full rounded-full transition-colors duration-200
                  ${hovered === i ? 'bg-[#3B5BFE]' : 'bg-[#333333]'}
                `}
                data-pct={`${skill.pct}%`}
                style={{ width: '0%' }}
              />
            </div>

            {/* Percentage */}
            <span className={`text-xs font-mono tabular-nums w-8 text-right shrink-0 transition-colors duration-200
              ${hovered === i ? 'text-[#3B5BFE]' : 'text-[#333]/40'}
            `}>
              {skill.pct}
            </span>
          </div>
        ))}
        <div className="border-t border-[#333333]/10" />
      </div>

      {/* ── MARQUEE STRIP ── */}
      <div className="bg-[#1a1a1a] py-5 overflow-hidden mt-8">
        <div ref={marqueeRef} className="flex gap-0 w-max">
          {[...marqueeSkills, ...marqueeSkills].map((s, i) => (
            <span key={i} className="flex items-center">
              <span className="text-sm font-medium text-white/50 whitespace-nowrap px-6 uppercase tracking-widest">
                {s}
              </span>
              <span className="text-white/15 text-xs">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}