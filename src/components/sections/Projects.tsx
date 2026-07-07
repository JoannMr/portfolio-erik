'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

/* ─── skill data ─────────────────────────────────────────── */
const secondarySkills = [
  'Dispatch & Route Coordination',
  'Operational Efficiency',
  'Workflow Optimization',
  'Resource Planning',
  'Health & Safety Compliance',
  'Continuous Improvement',
  'High-Volume Operations',
  'Pharma Logistics',
];

/* ─── icon accent shapes (pure CSS SVG-less) ─────────────── */
const AccentShape = ({ dark }: { dark: boolean }) => (
  <div
    className="absolute top-5 right-5 w-8 h-8 rounded-full border-2 transition-transform duration-500 group-hover:scale-125"
    style={{ borderColor: dark ? 'rgba(255,255,255,0.18)' : 'rgba(51,51,51,0.15)' }}
  />
);

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef    = useRef<HTMLDivElement>(null);
  const gridRef    = useRef<HTMLDivElement>(null);
  const tagsRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // --- headline
      gsap.from('.bento-headline > *', {
        opacity: 0, y: 48,
        duration: 1, stagger: 0.14, ease: 'power4.out',
        scrollTrigger: { trigger: headRef.current, start: 'top 82%', toggleActions: 'play none none reverse' },
      });

      // --- bento cards cascade
      gsap.from('.bento-card', {
        opacity: 0, y: 36, scale: 0.97,
        duration: 0.7, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
      });

      // --- secondary tags
      gsap.from('.bento-tag', {
        opacity: 0, y: 16, scale: 0.95,
        duration: 0.5, stagger: 0.06, ease: 'power3.out',
        scrollTrigger: { trigger: tagsRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="work" className="bg-[#f0f0f0] overflow-hidden">

      {/* ── HEADLINE ── */}
      <div ref={headRef} className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32 pt-24 pb-14">
        <div className="bento-headline flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#333333]/30" />
              <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#333333]/45">Capabilities</span>
            </div>
            <h2 className="text-[clamp(3.2rem,7vw,5.5rem)] font-bold tracking-normal leading-[1.02] text-[#1a1a1a]">
              Core Skills
            </h2>
          </div>
          <p className="max-w-xs pb-2 text-sm leading-[1.7] text-[#333]/50">
            Built through real operational experience in high-volume logistics environments.
          </p>
        </div>
      </div>

      {/* ── BENTO GRID ── */}
      <div
        ref={gridRef}
        className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32 pb-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[minmax(180px,auto)]">

          {/* CARD 1 — large (col-span-2 on lg) */}
          <motion.div
            className="bento-card group relative col-span-1 md:col-span-2 bg-[#1a1a1a] rounded-2xl p-7 md:p-9 flex flex-col justify-between overflow-hidden cursor-default"
            whileHover={{ scale: 1.015 }}
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
          >
            <AccentShape dark={true} />
            {/* background decoration */}
            <div className="pointer-events-none absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-[#5F6F64]/20 blur-2xl" />
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/35">Core</span>
            <div className="mt-4">
              <p className="text-[2rem] md:text-[2.6rem] font-bold leading-[1.1] text-white whitespace-pre-line">
                Logistics{'\n'}Operations
              </p>
              <p className="mt-3 text-sm text-white/40 leading-relaxed max-w-xs">
                9+ years managing end-to-end logistics at DHL eCommerce Spain — from sorting hubs to last-mile delivery.
              </p>
            </div>
          </motion.div>

          {/* CARD 2 — medium */}
          <motion.div
            className="bento-card group relative col-span-1 bg-white rounded-2xl p-7 flex flex-col justify-between overflow-hidden cursor-default"
            whileHover={{ scale: 1.018 }}
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
          >
            <AccentShape dark={false} />
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#333]/35">People</span>
            <div className="mt-4">
              <p className="text-[1.25rem] sm:text-[1.4rem] md:text-[1.9rem] font-bold leading-[1.12] text-[#1a1a1a]">
                Team Leadership
              </p>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-xs text-[#333]/40">20+ members led</span>
              </div>
            </div>
          </motion.div>

          {/* CARD 3 — medium */}
          <motion.div
            className="bento-card group relative col-span-1 bg-[#5F6F64] rounded-2xl p-7 flex flex-col justify-between overflow-hidden cursor-default"
            whileHover={{ scale: 1.018 }}
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
          >
            <AccentShape dark={true} />
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/50">Operations</span>
            <div className="mt-4">
              <p className="text-[1.25rem] sm:text-[1.4rem] md:text-[1.9rem] font-bold leading-[1.12] text-white">
                Warehouse Management
              </p>
            </div>
          </motion.div>

          {/* CARD 4 — wide (col-span-2) */}
          <motion.div
            className="bento-card group relative col-span-1 md:col-span-2 bg-[#EBEBEB] border border-[#333]/8 rounded-2xl p-7 md:p-9 flex flex-col justify-between overflow-hidden cursor-default"
            whileHover={{ scale: 1.012 }}
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
          >
            <AccentShape dark={false} />
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#333]/35">Analytics</span>
            <div className="mt-4 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <p className="text-[1.6rem] md:text-[2.1rem] font-bold leading-[1.1] text-[#1a1a1a] whitespace-pre-line">
                KPI Monitoring{'\n'}& Reporting
              </p>
              <p className="text-sm text-[#333]/45 leading-relaxed max-w-[200px]">
                Power BI dashboards and operational metrics tracking.
              </p>
            </div>
          </motion.div>

          {/* CARD 5 — medium dark */}
          <motion.div
            className="bento-card group relative col-span-1 bg-[#1a1a1a] rounded-2xl p-7 flex flex-col justify-between overflow-hidden cursor-default"
            whileHover={{ scale: 1.018 }}
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
          >
            <AccentShape dark={true} />
            <div className="pointer-events-none absolute -top-4 -right-4 w-24 h-24 rounded-full bg-[#5F6F64]/15 blur-xl" />
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/35">Leadership</span>
            <div className="mt-4">
              <p className="text-[1.25rem] sm:text-[1.4rem] md:text-[1.75rem] font-bold leading-[1.12] text-white">
                Decision Making
              </p>
              <p className="mt-2 text-xs text-white/35">Under high-pressure conditions</p>
            </div>
          </motion.div>

          {/* CARD 6 — medium */}
          <motion.div
            className="bento-card group relative col-span-1 bg-white rounded-2xl p-7 flex flex-col justify-between overflow-hidden cursor-default"
            whileHover={{ scale: 1.018 }}
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
          >
            <AccentShape dark={false} />
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#333]/35">Logistics</span>
            <div className="mt-4">
              <p className="text-[1.25rem] sm:text-[1.4rem] md:text-[1.75rem] font-bold leading-[1.12] text-[#1a1a1a]">
                Supply Chain Coordination
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── SECONDARY SKILLS TAGS ── */}
      <div ref={tagsRef} className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32 pb-16">
        <div className="flex flex-wrap gap-2.5 md:gap-3">
          {secondarySkills.map((skill) => (
            <motion.span
              key={skill}
              className="bento-tag inline-flex items-center px-4 py-2 rounded-full border border-[#333]/12 bg-white text-sm font-medium text-[#333]/65 cursor-default"
              whileHover={{ backgroundColor: '#1a1a1a', color: '#fff', borderColor: '#1a1a1a', scale: 1.04 }}
              transition={{ duration: 0.18 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>

    </section>
  );
}
