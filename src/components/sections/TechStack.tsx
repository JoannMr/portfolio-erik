'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const certs = [
  {
    index: '01',
    title: 'Lean Six Sigma',
    area: 'Process Improvement',
  },
  {
    index: '02',
    title: 'Power BI & KPI Reporting',
    area: 'Data & Analytics',
  },
  {
    index: '03',
    title: 'Operations & Process Optimization',
    area: 'Operations Management',
  },
  {
    index: '04',
    title: 'Health & Safety Compliance',
    area: 'Compliance',
  },
  {
    index: '05',
    title: 'Supply Chain Operations',
    area: 'Supply Chain',
  },
];

const destinations = ['UK', 'Germany', 'Netherlands', 'France', 'Belgium', 'Switzerland'];

export default function TechStack() {
  const sectionRef = useRef<HTMLElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
  const certsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Vision section
      const vTl = gsap.timeline({
        scrollTrigger: {
          trigger: visionRef.current,
          start: 'top 78%',
          toggleActions: 'play none none reverse',
        }
      });
      vTl
        .from('.vis-tag-line', { scaleX: 0, transformOrigin: 'left', duration: 0.7, ease: 'power3.out' })
        .from('.vis-tag', { opacity: 0, x: 10, duration: 0.5, ease: 'power3.out' }, '-=0.3')
        .from('.vis-big-line', {
          opacity: 0, y: 50,
          duration: 0.8, stagger: 0.12, ease: 'power4.out',
        }, '-=0.2')
        .from('.vis-copy-p', {
          opacity: 0, y: 20,
          duration: 0.7, stagger: 0.15, ease: 'power3.out',
        }, '-=0.3')
        .from('.vis-pill', {
          opacity: 0, scale: 0.9,
          duration: 0.4, stagger: 0.06, ease: 'back.out(1.5)',
        }, '-=0.3');

      // Certs section
      const cTl = gsap.timeline({
        scrollTrigger: {
          trigger: certsRef.current,
          start: 'top 78%',
          toggleActions: 'play none none reverse',
        }
      });
      cTl
        .from('.certs-header > *', {
          opacity: 0, y: 30,
          duration: 0.7, stagger: 0.12, ease: 'power3.out',
        })
        .from('.cert-row', {
          opacity: 0, x: -20,
          duration: 0.55, stagger: 0.1, ease: 'power3.out',
        }, '-=0.3');

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden">

      {/* ══════════════════════════════════
          VISION — editorial statement section
      ══════════════════════════════════ */}
      <div ref={visionRef} id="vision" className="bg-[#f0f0f0] border-t border-[#333]/10 pt-24 pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32">

          {/* Tag */}
          <div className="flex items-center gap-3 mb-14">
            <div className="vis-tag-line h-px w-8 bg-[#333]/30" />
            <span className="vis-tag text-[11px] uppercase tracking-[0.2em] text-[#333]/45">Vision</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 lg:gap-20">

            {/* LEFT: Big statement */}
            <div>
              {/* Headline — large editorial */}
              <div className="overflow-hidden mb-12">
                {[
                  { text: 'International', style: 'text-[#1a1a1a]' },
                  { text: 'career,', style: 'text-[#1a1a1a]' },
                  { text: 'global mindset.', style: 'text-[#3B5BFE]' },
                ].map(({ text, style }) => (
                  <p
                    key={text}
                    className={`vis-big-line text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-[-0.03em] leading-[1.05] ${style}`}
                  >
                    {text}
                  </p>
                ))}
              </div>

              {/* Copy from Erik */}
              <div className="space-y-5 max-w-lg mb-12">
                <p className="vis-copy-p text-lg text-[#333]/65 leading-relaxed">
                  Passionate about logistics operations and team leadership in fast-paced, international environments.
                </p>
                <p className="vis-copy-p text-lg text-[#333]/65 leading-relaxed">
                  Focused on continuous growth and building a long-term career within global logistics and supply chain operations.
                </p>
              </div>

              {/* Countries of interest */}
              <div>
                <p className="vis-copy-p text-[11px] uppercase tracking-[0.2em] text-[#333]/35 mb-4">
                  Markets of Interest
                </p>
                <div className="flex flex-wrap gap-2">
                  {destinations.map(d => (
                    <span
                      key={d}
                      className="vis-pill px-4 py-1.5 rounded-full border border-[#333]/15 text-sm text-[#333]/60 hover:border-[#3B5BFE] hover:text-[#3B5BFE] transition-colors duration-300 cursor-default"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: Key aspiration blocks */}
            <div className="flex flex-col gap-4">
              {[
                {
                  icon: '→',
                  title: 'Operational Leadership',
                  desc: 'Bringing hands-on experience from DHL eCommerce Spain to international markets.',
                },
                {
                  icon: '→',
                  title: 'People-first Approach',
                  desc: 'Building high-performing teams through trust, communication and high standards.',
                },
                {
                  icon: '→',
                  title: 'Continuous Growth',
                  desc: 'Actively developing expertise in Lean Six Sigma, data analytics and supply chain strategy.',
                },
              ].map((block, i) => (
                <motion.div
                  key={i}
                  className="bg-white rounded-2xl p-7 border border-[#333]/8 hover:border-[#333]/18 transition-colors duration-300"
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-[#3B5BFE] text-lg font-bold shrink-0 mt-0.5">{block.icon}</span>
                    <div>
                      <h3 className="text-base font-semibold text-[#1a1a1a] mb-2">{block.title}</h3>
                      <p className="text-sm text-[#333]/55 leading-relaxed">{block.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* CTA */}
              <a
                href="#contact"
                className="group mt-2 inline-flex items-center justify-between bg-[#1a1a1a] text-white rounded-2xl px-7 py-5 hover:bg-[#3B5BFE] transition-colors duration-400"
              >
                <span className="text-base font-semibold">Open to opportunities</span>
                <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════
          CERTIFICATIONS — dark section, clearly visible
      ══════════════════════════════════ */}
      <div ref={certsRef} id="certifications" className="bg-[#1a1a1a]">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32 py-24">

          {/* Header */}
          <div className="certs-header flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 pb-12 border-b border-white/10">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-white/25" />
                <span className="text-[11px] uppercase tracking-[0.2em] text-white/40">Development</span>
              </div>
              <h2 className="text-[clamp(2.4rem,6vw,4.5rem)] font-bold tracking-[-0.02em] leading-[1.05] text-white">
                Certifications &<br />Professional Development
              </h2>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs md:text-right pb-1">
              Actively investing in new skills to grow toward international leadership roles in logistics and supply chain.
            </p>
          </div>

          {/* Cert rows */}
          <div>
            {certs.map((cert, i) => (
              <motion.div
                key={i}
                className="cert-row group flex items-center gap-6 md:gap-10 py-6 border-b border-white/8 hover:border-white/20 cursor-default"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              >
                {/* Number */}
                <span className="text-white/20 font-mono text-sm tabular-nums w-6 shrink-0 group-hover:text-white/40 transition-colors duration-200">
                  {cert.index}
                </span>

                {/* Area label — desktop only */}
                <span className="hidden md:block text-white/30 text-xs uppercase tracking-widest w-40 shrink-0 group-hover:text-white/50 transition-colors duration-200">
                  {cert.area}
                </span>

                {/* Title */}
                <span className="flex-1 text-white text-lg md:text-xl font-medium">
                  {cert.title}
                </span>

                {/* Status badge */}
                <span className="shrink-0 text-[11px] font-mono uppercase tracking-widest text-white/30 border border-white/10 px-3 py-1 rounded-full group-hover:text-[#3B5BFE] group-hover:border-[#3B5BFE]/40 transition-all duration-200">
                  In progress
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}