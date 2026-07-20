'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLoading } from '@/contexts/LoadingContext';

gsap.registerPlugin(ScrollTrigger);

const tickerItems = [
  'Logistics Operations',
  'Team Leadership',
  'DHL eCommerce Spain',
  'Warehouse Management',
  'KPI Monitoring',
  'Operational Excellence',
  'Supply Chain',
  'Barcelona',
];

export default function Hero() {
  const { isLoadingComplete } = useLoading();

  const heroRef    = useRef<HTMLDivElement>(null);
  const photoRef   = useRef<HTMLDivElement>(null);
  const erikRef    = useRef<HTMLSpanElement>(null);
  const majadaRef  = useRef<HTMLSpanElement>(null);
  const roleRef    = useRef<HTMLParagraphElement>(null);
  const btnsRef    = useRef<HTMLDivElement>(null);
  const scrollRef  = useRef<HTMLDivElement>(null);
  const tickerRef  = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    if (!isLoadingComplete) return;

    const isMobile = window.innerWidth < 640;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl
      .fromTo(photoRef.current,
        { y: 40, opacity: 0, scale: 1.06 },
        { y: 0, opacity: 1, scale: 1, duration: 1.6, ease: 'power2.out' }
      )
      .fromTo(erikRef.current,
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.1, ease: 'power4.out' },
        isMobile ? '-=0.65' : '-=1.3'
      )
      .fromTo(majadaRef.current,
        { x: 60, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.1, ease: 'power4.out' },
        '<'
      )
      .fromTo(roleRef.current,
        { y: 14, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        isMobile ? '-=0.25' : '-=0.5'
      )
      .fromTo(btnsRef.current,
        { opacity: 0 },
        { opacity: 1, duration: isMobile ? 0.9 : 0.75, ease: 'power2.out' },
        isMobile ? '-=0.2' : '-=0.45'
      )
      .fromTo(scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8 },
        '-=0.2'
      );

    // Ticker infinite scroll
    if (tickerRef.current) {
      gsap.to(tickerRef.current, {
        x: '-50%',
        duration: 22,
        ease: 'none',
        repeat: -1,
      });
    }

    // Parallax on photo
    gsap.to(photoRef.current, {
      yPercent: 8, ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top', end: 'bottom top', scrub: 1.2,
      }
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [isLoadingComplete]);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a] text-white flex flex-col"
    >
      {/* ── BACKGROUND ── */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* warm glow centered */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[52%] w-[650px] h-[650px] rounded-full opacity-[0.12]"
          style={{ background: 'radial-gradient(circle, #b8845a 0%, transparent 68%)' }}
        />
        {/* green tint top-left */}
        <div
          className="absolute -top-40 -left-40 w-[480px] h-[480px] rounded-full opacity-[0.07]"
          style={{ background: 'radial-gradient(circle, #5F6F64 0%, transparent 70%)' }}
        />
        {/* grain */}
        <div
          className="absolute inset-0 opacity-[0.032]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '128px 128px',
          }}
        />
      </div>

      {/* ── CENTER BLOCK ── */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-3 md:gap-7 px-4 pt-16 md:pt-0">

        {/* ERIK [FOTO] MAJADA */}
        <div className="flex w-full max-w-7xl flex-row flex-wrap items-center justify-center gap-x-3 gap-y-5 sm:flex-nowrap sm:gap-4 md:gap-7 lg:gap-10 xl:gap-12">

          <span
            ref={erikRef}
            className="order-1 w-auto text-[clamp(3.5rem,15vw,5.5rem)] sm:order-none sm:text-[clamp(2.25rem,10vw,4.5rem)] md:text-[clamp(3.8rem,9.5vw,12rem)] font-bold leading-none tracking-[-0.04em] text-white opacity-0 select-none"
          >
            Erik
          </span>

          {/* PHOTO CARD — below both names on mobile */}
          <div ref={photoRef} className="relative order-3 flex w-full shrink-0 justify-center opacity-0 sm:order-none sm:w-auto">
            {/* glow ring */}
            <div
              className="absolute left-1/2 top-1/2 size-[196px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-sm sm:size-[181px] md:size-[246px] lg:size-[286px] xl:size-[321px]"
              style={{ background: 'linear-gradient(160deg, #b8845a 0%, #5F6F64 100%)' }}
            />
            <div className="relative size-[190px] sm:size-[175px] md:size-[240px] lg:size-[280px] xl:size-[315px] overflow-hidden rounded-full border border-white/10">
              <Image
                src="/images/hero.png"
                alt="Erik Majada"
                fill
                priority
                quality={95}
                className="object-cover"
                style={{ transform: 'translate(20%, 20%) scale(1.85)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            </div>
          </div>

          {/* MAJADA — right-aligned, appears second on mobile */}
          <span
            ref={majadaRef}
            className="order-2 w-auto text-[clamp(3.5rem,15vw,5.5rem)] sm:order-none sm:text-[clamp(2.25rem,10vw,4.5rem)] md:text-[clamp(3.8rem,9.5vw,12rem)] font-bold leading-none tracking-[-0.04em] text-white opacity-0 select-none"
          >
            Majada
          </span>
        </div>

        {/* ROLE */}
        <p
          ref={roleRef}
          className="text-xs md:text-sm font-medium uppercase tracking-[0.22em] text-white/42 opacity-0 mt-4 md:mt-8"
        >
          Logistics Operations Leader
        </p>

        {/* BUTTONS */}
        <div ref={btnsRef} className="flex flex-wrap items-center justify-center gap-2 opacity-0 md:gap-3 md:mt-4 mt-3">
          <a
            href="/cv-erik-majada.pdf"
            download
            className="flex items-center gap-1.5 rounded-full bg-white px-5 h-[40px] md:h-[53px] md:px-7 text-xs md:text-sm font-semibold text-[#0a0a0a] leading-none transition-all duration-300 hover:bg-white/92 hover:scale-[1.03] hover:shadow-xl hover:shadow-white/10"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download CV
          </a>

          <a
            href="https://linkedin.com/in/erik-majada"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-5 h-[40px] md:h-[53px] md:px-7 text-xs md:text-sm font-medium text-white/80 leading-none backdrop-blur-sm transition-all duration-300 hover:bg-white/12 hover:border-white/28 hover:scale-[1.03]"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>

          <button
            onClick={scrollToContact}
            className="group flex items-center gap-1.5 rounded-full border border-white/15 px-5 h-[40px] md:h-[53px] md:px-7 text-xs md:text-sm font-medium text-white/80 leading-none transition-all duration-300 hover:bg-white/8 hover:border-white/28 hover:scale-[1.03] cursor-pointer"
          >
            Contact Me
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>

      {/* SCROLL HINT — pegado al fondo antes del ticker */}
      <div ref={scrollRef} className="relative z-10 flex items-center justify-center gap-3 opacity-0 pt-2 pb-6 md:pt-3 md:pb-8">
        <div className="w-px h-5 bg-white/18 animate-pulse" />
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/22">Scroll</span>
      </div>

      {/* ── TICKER MARQUEE — bottom ── */}
      <div className="relative z-10 w-full overflow-hidden border-t border-white/6 py-2 md:py-3">
        <div ref={tickerRef} className="flex w-max gap-0">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="flex items-center">
              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/22 whitespace-nowrap px-7">
                {item}
              </span>
              <span className="text-white/12 text-[8px]">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
