'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLoading } from '@/contexts/LoadingContext';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const { isLoadingComplete } = useLoading();
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLParagraphElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    if (!contentRef.current || !titleRef.current || !imageRef.current || !heroRef.current) return;
    if (!isLoadingComplete) return;

    let masterTl: gsap.core.Timeline | null = null;

    const startAnimations = () => {
      if (!titleRef.current || !imageRef.current || !locationRef.current ||
          !subtitleRef.current || !introRef.current || !buttonsRef.current ||
          !scrollRef.current || !heroRef.current) return;

      masterTl = gsap.timeline({ defaults: { ease: "power3.out" } });

      masterTl.to(imageRef.current, {
        opacity: 0.8,
        scale: 1,
        duration: 1.8,
        ease: "power2.out"
      })
      .to(locationRef.current, {
        y: 0, opacity: 1, duration: 1.2, ease: "power3.out"
      }, "-=1.2")
      .to(titleRef.current.children, {
        y: 0, opacity: 1, duration: 1.6,
        stagger: { amount: 0.3, ease: "power2.out" },
        ease: "power4.out"
      }, "-=0.6")
      .to(subtitleRef.current, {
        y: 0, opacity: 1, duration: 1.2, ease: "power3.out"
      }, "-=0.8")
      .to(introRef.current, {
        y: 0, opacity: 1, duration: 1.2, ease: "power3.out"
      }, "-=1.0")
      .to(buttonsRef.current.children, {
        y: 0, opacity: 1, duration: 0.9,
        stagger: 0.12,
        ease: "back.out(1.7)"
      }, "-=0.8")
      .to(scrollRef.current, {
        y: 0, opacity: 1, duration: 1, ease: "back.out(2)"
      }, "-=0.5");

      gsap.to(imageRef.current, {
        yPercent: 20, ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top", end: "bottom top", scrub: 1.2
        }
      });

      gsap.to(titleRef.current, {
        y: -30, ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top", end: "bottom top", scrub: 1.5
        }
      });
    };

    const animationTimer = setTimeout(startAnimations, 200);

    return () => {
      clearTimeout(animationTimer);
      if (masterTl) masterTl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [isLoadingComplete]);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a] text-white"
    >
      {/* Background image with parallax */}
      <div
        ref={imageRef}
        className="absolute inset-0 z-0 opacity-0"
        style={{ transform: 'scale(1.1)' }}
      >
        <div className="relative h-full w-full">
          <Image
            src="/images/hero-erik.png"
            alt="Logistics Operations"
            fill
            priority
            quality={95}
            className="object-cover object-center"
          />
          {/* Multi-layer gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-px h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent z-10" />
      <div className="absolute bottom-1/3 left-10 w-px h-20 bg-gradient-to-b from-transparent via-white/15 to-transparent z-10" />

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen flex-col justify-between px-0 pt-40 pb-20">
        {/* Top bar */}
        <div ref={contentRef} className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-20 flex items-center justify-between">
          <p
            ref={locationRef}
            className="text-sm font-light text-white/70 uppercase tracking-widest opacity-0"
            style={{ transform: 'translateY(-30px)' }}
          >
            Barcelona, Spain · DHL eCommerce
          </p>
        </div>

        {/* Title block */}
        <div className="relative mt-auto mb-10 flex flex-col w-full">
          <div className="mx-auto w-full max-w-7xl">
            <div ref={titleRef} className="flex flex-wrap px-6 md:px-12 lg:px-20">
              <h1
                className="text-5xl font-bold leading-[0.9] md:text-7xl lg:text-[110px] xl:text-[148px] tracking-[-0.03em] text-white opacity-0"
                style={{ transform: 'translateY(150px)', transformOrigin: 'bottom left' }}
              >
                Erik
              </h1>
              <h1
                className="text-5xl font-bold leading-[0.9] md:text-7xl lg:text-[110px] xl:text-[148px] tracking-[-0.03em] text-white ml-4 opacity-0"
                style={{ transform: 'translateY(150px)', transformOrigin: 'bottom left' }}
              >
                Majada
              </h1>
            </div>
          </div>

          {/* Subtitle + intro + buttons */}
          <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-20 mt-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              {/* Left: role + intro */}
              <div className="flex flex-col gap-4 max-w-xl">
                <p
                  ref={subtitleRef}
                  className="text-xl md:text-2xl font-light text-white/90 opacity-0"
                  style={{ transform: 'translateY(40px)' }}
                >
                  Logistics Operations Leader
                </p>
                <p
                  ref={introRef}
                  className="text-sm md:text-base font-light text-white/60 leading-relaxed opacity-0"
                  style={{ transform: 'translateY(40px)' }}
                >
                  9+ years leading high-volume logistics operations at DHL eCommerce Spain.
                </p>
              </div>

              {/* Right: CTA buttons */}
              <div
                ref={buttonsRef}
                className="flex flex-wrap gap-3"
              >
                {/* Download CV */}
                <a
                  href="/cv-erik-majada.pdf"
                  download
                  className="group flex items-center gap-2 px-6 py-3 bg-white text-[#1a1a1a] rounded-full text-sm font-semibold hover:bg-white/90 transition-all duration-300 opacity-0 hover:scale-105 hover:shadow-lg hover:shadow-white/20"
                  style={{ transform: 'translateY(40px)' }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download CV
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/erik-majada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300 opacity-0 hover:scale-105"
                  style={{ transform: 'translateY(40px)' }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>

                {/* Contact Me */}
                <button
                  onClick={scrollToContact}
                  className="group flex items-center gap-2 px-6 py-3 border border-white/30 text-white rounded-full text-sm font-medium hover:bg-white/10 transition-all duration-300 opacity-0 hover:scale-105 cursor-pointer"
                  style={{ transform: 'translateY(40px)' }}
                >
                  Contact Me
                  <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          ref={scrollRef}
          className="absolute bottom-10 left-6 md:left-12 lg:left-20 flex items-center space-x-3 opacity-0"
          style={{ transform: 'translateY(30px)' }}
        >
          <div className="flex flex-col gap-1 items-center">
            <div className="w-px h-8 bg-white/40 animate-pulse" />
          </div>
          <span className="text-xs text-white/50 uppercase tracking-widest">Scroll</span>
        </div>
      </div>
    </section>
  );
}
