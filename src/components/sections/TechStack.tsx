'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const certifications = [
  {
    title: 'Lean Six Sigma',
    focus: 'Process improvement',
  },
  {
    title: 'Power BI & KPI Reporting',
    focus: 'Operational visibility',
  },
  {
    title: 'Operations & Process Optimization',
    focus: 'Workflow efficiency',
  },
  {
    title: 'Health & Safety Compliance',
    focus: 'Safe operations',
  },
  {
    title: 'Supply Chain Operations',
    focus: 'End-to-end logistics',
  },
];

export default function TechStack() {
  const sectionRef = useRef<HTMLElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
  const certsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const vTl = gsap.timeline({
        scrollTrigger: {
          trigger: visionRef.current,
          start: 'top 78%',
          toggleActions: 'play none none none',
        },
      });

      vTl
        .from('.vis-title', { opacity: 0, y: 34, duration: 0.8, ease: 'power4.out' })
        .from('.vis-copy', { opacity: 0, y: 18, duration: 0.65, stagger: 0.12, ease: 'power3.out' }, '-=0.35');

      const cTl = gsap.timeline({
        scrollTrigger: {
          trigger: certsRef.current,
          start: 'top 78%',
          toggleActions: 'play none none none',
        },
      });

      cTl
        .from('.certs-header > *', {
          opacity: 0,
          y: 30,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
        })
        .from('.cert-row', {
          opacity: 0,
          y: 20,
          duration: 0.65,
          stagger: 0.1,
          ease: 'power3.out',
        }, '-=0.3');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden">
      <div ref={visionRef} id="vision" className="relative overflow-hidden bg-[#f0f0f0] border-t border-[#333]/10 py-18 sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32">
          <div className="mb-10 flex items-center gap-3 md:mb-12">
            <div className="h-px w-8 bg-[#333]/25" />
            <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#333]/45">Vision</span>
          </div>

          <div className="grid grid-cols-1 gap-9 md:gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-18 xl:gap-24">
            <div className="flex flex-col justify-start">
              <div>
                <h2 className="vis-title max-w-[14rem] text-[1.85rem] font-bold leading-[1.12] tracking-normal text-[#1a1a1a] sm:max-w-[16rem] sm:text-[2.2rem] md:max-w-[18rem] md:text-[3rem] lg:text-[3.25rem]">
                  International <span className="text-[#5F6F64]">Career Vision</span>
                </h2>
              </div>
            </div>

            <div className="max-w-4xl">
              <p className="vis-copy font-heading text-[1.5rem] font-medium leading-[1.3] tracking-normal text-[#1a1a1a] sm:text-[1.82rem] md:text-[2.24rem] lg:text-[2.55rem] xl:text-[2.85rem]">
                Passionate about logistics operations, team leadership and operational excellence in fast-paced international environments.
              </p>

              <p className="vis-copy mt-7 max-w-3xl text-base leading-[1.8] text-[#333]/62 sm:text-lg md:mt-9 md:text-xl md:leading-[1.7] lg:mt-10 lg:text-[1.25rem]">
                Focused on continuous growth and building a long-term international career within global logistics and supply chain operations across international markets.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div ref={certsRef} id="certifications" className="bg-[#1a1a1a]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28 lg:px-20 xl:px-24 2xl:px-32">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div className="certs-header">
              <div className="mb-8 flex items-center gap-3">
                <div className="h-px w-8 bg-white/25" />
                <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/40">Development</span>
              </div>

              <h2 className="max-w-xl text-[2.5rem] font-bold leading-[1.08] tracking-normal text-white sm:text-[3.2rem] md:text-[4.4rem]">
                Professional Development Roadmap
              </h2>

              <p className="mt-8 max-w-md text-base leading-[1.75] text-white/52 md:text-lg">
                Focused on strengthening operational leadership through process improvement, analytics and supply chain knowledge.
              </p>
            </div>

            <div className="self-end">
              <div className="border-t border-white/12">
                {certifications.map((certification) => (
                  <motion.div
                    key={certification.title}
                    className="cert-row group grid grid-cols-1 gap-2 border-b border-white/12 py-5 md:grid-cols-[1fr_220px] md:items-center md:gap-8 md:py-6"
                    whileHover={{ x: 6 }}
                    transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                  >
                    <span className="text-lg font-medium leading-snug text-white/88 transition-colors duration-300 group-hover:text-white md:text-2xl">
                      {certification.title}
                    </span>
                    <span className="text-sm leading-relaxed text-white/35 transition-colors duration-300 group-hover:text-[#5F6F64] md:text-right">
                      {certification.focus}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
