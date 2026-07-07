'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

/* ─── data ────────────────────────────────────────────────── */
const groups = [
  {
    index: '01',
    title: 'Leadership\n& Operations',
    items: [
      'Leading teams of 20+ employees in high-volume logistics operations.',
      'Coordinating workflows and national LH shipping routes across Spain.',
      'Managing operations under strict delivery deadlines and peak workloads.',
    ],
  },
  {
    index: '02',
    title: 'Performance\n& Optimization',
    items: [
      'KPI monitoring and operational performance tracking.',
      'Workflow optimization and efficient resource allocation.',
      'Fast decision-making in high-pressure environments.',
    ],
  },
  {
    index: '03',
    title: 'Specialized\nLogistics',
    items: [
      'Experience handling Pharma logistics and sensitive goods operations.',
      'Ensuring Health & Safety compliance and operational standards.',
      'Maintaining operational continuity during unforeseen situations.',
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from('.exp-kicker', {
        opacity: 0, y: 14, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: '.exp-kicker', start: 'top 85%', toggleActions: 'play none none none' },
      });

      gsap.from('.exp-headline > *', {
        opacity: 0, y: 44, duration: 0.9, stagger: 0.12, ease: 'power4.out',
        scrollTrigger: { trigger: '.exp-headline', start: 'top 84%', toggleActions: 'play none none none' },
      });

      gsap.from('.exp-intro', {
        opacity: 0, y: 20, duration: 0.75, ease: 'power3.out',
        scrollTrigger: { trigger: '.exp-intro', start: 'top 84%', toggleActions: 'play none none none' },
      });

      gsap.from('.exp-company', {
        opacity: 0, y: 18, duration: 0.65, ease: 'power3.out',
        scrollTrigger: { trigger: '.exp-company', start: 'top 85%', toggleActions: 'play none none none' },
      });

      gsap.from('.exp-row', {
        opacity: 0, y: 28, scale: 0.98, duration: 0.65, stagger: 0.14, ease: 'power3.out',
        scrollTrigger: { trigger: '.exp-row-list', start: 'top 80%', toggleActions: 'play none none none' },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="overflow-hidden bg-[#f0f0f0]">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-32 lg:px-20 xl:px-24 2xl:px-32">

        {/* ── KICKER + HEADLINE ── */}
        <div className="exp-kicker mb-8 flex items-center gap-3">
          <div className="h-px w-8 bg-[#333]/25" />
          <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#333]/45">
            Professional Experience
          </span>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_0.52fr] lg:gap-20 xl:gap-28 lg:items-end mb-16 md:mb-20">
          <div className="exp-headline">
            <h2 className="text-[clamp(2.8rem,6.5vw,5.2rem)] font-bold leading-[1.04] tracking-normal text-[#1a1a1a]">
              Professional<br />Experience
            </h2>
          </div>
          <p className="exp-intro text-base leading-[1.78] text-[#333]/55 md:text-lg lg:pb-2">
            Operational leadership experience within high-volume logistics environments
          </p>
        </div>

        {/* ── DHL COMPANY ROW ── */}
        <div className="exp-company border-t border-[#333]/12 pt-7 pb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-4">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#333]/38 mb-1">Company</p>
              <p className="text-xl md:text-2xl font-bold text-[#1a1a1a] tracking-tight leading-none">
                DHL eCommerce Spain
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 sm:gap-7">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#333]/38 mb-1">Role</p>
              <p className="text-sm font-semibold text-[#1a1a1a]/70">Operations Team Leader</p>
            </div>
            <div className="h-6 w-px bg-[#333]/12" />
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#333]/38 mb-1">Since</p>
              <p className="text-sm font-semibold text-[#1a1a1a]/70">2018 — Present</p>
            </div>
          </div>
        </div>

        {/* ── 3 AREAS — editorial rows ── */}
        <div className="exp-row-list">

          {/* "Areas of responsibility" sub-label */}
          <div className="flex items-center gap-4 py-4 border-t border-[#333]/8">
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#333]/32">
              Areas of responsibility
            </span>
          </div>

          {groups.map((group, i) => (
            <motion.div
              key={group.index}
              className="exp-row group border-t border-[#333]/10 last:border-b last:border-[#333]/10"
              initial={false}
              whileHover="hovered"
            >
              {/* Clickable / hoverable row */}
              <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6 lg:gap-12 py-8 md:py-10">

                {/* LEFT — number + title */}
                <div className="flex items-start gap-5 lg:flex-col lg:gap-3">
                  <motion.span
                    className="text-[11px] font-mono tabular-nums text-[#333]/28 mt-1 lg:mt-0"
                    variants={{ hovered: { color: '#5F6F64' } }}
                    transition={{ duration: 0.2 }}
                  >
                    {group.index}
                  </motion.span>
                  <motion.h3
                    className="text-[1.35rem] md:text-[1.55rem] font-bold leading-[1.12] whitespace-pre-line text-[#1a1a1a]"
                    variants={{ hovered: { x: 4 } }}
                    transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                  >
                    {group.title}
                  </motion.h3>
                </div>

                {/* RIGHT — bullet items */}
                <ul className="space-y-3.5 lg:pt-0.5 lg:max-w-2xl">
                  {group.items.map((item, j) => (
                    <motion.li
                      key={j}
                      className="flex gap-4 items-start"
                      variants={{ hovered: { x: 4 } }}
                      transition={{ type: 'spring', stiffness: 380, damping: 28, delay: j * 0.04 }}
                    >
                      {/* dot */}
                      <motion.span
                        className="mt-[0.55rem] w-1 h-1 rounded-full shrink-0 bg-[#333]/25"
                        variants={{ hovered: { backgroundColor: '#5F6F64', scale: 1.4 } }}
                        transition={{ duration: 0.2 }}
                      />
                      <span className="text-[0.95rem] leading-[1.75] text-[#333]/60 md:text-base">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>

              </div>

              {/* bottom accent line — grows on hover */}
              <motion.div
                className="h-px bg-[#5F6F64] origin-left"
                variants={{ hovered: { scaleX: 1 } }}
                initial={{ scaleX: 0 }}
                transition={{ duration: 0.4, ease: 'power3.out' as any }}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
