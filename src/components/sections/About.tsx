'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const connectRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current || !textRef.current || !imageRef.current || !connectRef.current || !statsRef.current) return;

    ScrollTrigger.getAll().forEach(t => {
      if (t.trigger === sectionRef.current) t.kill();
    });

    gsap.set(titleRef.current.children, { y: 50, opacity: 0 });
    gsap.set(textRef.current.children, { y: 30, opacity: 0 });
    gsap.set(connectRef.current.children, { y: 20, opacity: 0 });
    gsap.set(statsRef.current.children, { y: 30, opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom top",
        toggleActions: "play none none reverse",
        refreshPriority: -1,
      }
    });

    tl.to(titleRef.current.children, {
      y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out"
    })
    .to(textRef.current.children, {
      y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out"
    }, "-=0.5")
    .to(statsRef.current.children, {
      y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: "power3.out"
    }, "-=0.4")
    .to(connectRef.current.children, {
      y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out"
    }, "-=0.4");

    const parallaxST = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        gsap.to(imageRef.current, {
          yPercent: -20 * self.progress,
          duration: 0.3,
          ease: "none"
        });
      }
    });

    const refreshTimeout = setTimeout(() => { ScrollTrigger.refresh(); }, 100);

    return () => {
      clearTimeout(refreshTimeout);
      tl.kill();
      parallaxST.kill();
      if (titleRef.current?.children && textRef.current?.children && connectRef.current?.children) {
        gsap.set([titleRef.current.children, textRef.current.children, connectRef.current.children], {
          clearProps: "all"
        });
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 bg-[#f0f0f0] text-[#333333] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32">
        {/* Section title */}
        <div ref={titleRef} className="mb-16 md:mb-24">
          <div className="flex items-center space-x-4 mb-4">
            <div className="h-0.5 w-12 bg-[#333333]" />
            <span className="text-sm uppercase tracking-wider">About Me</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            Operations built<br className="hidden md:block" />
            through people
          </h2>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          {/* Text column */}
          <div className="order-2 md:order-1">
            <div ref={textRef} className="space-y-7 text-lg md:text-xl">
              <p>
                Operations Team Leader with <strong>9+ years of experience</strong> in logistics operations,
                warehouse management and team leadership within DHL eCommerce Spain.
              </p>
              <p>
                I believe the strongest operations are built through people.
                Throughout my experience, I have focused on creating strong professional
                and personal relationships within teams to maximize performance,
                commitment and operational success.
              </p>
              <p>
                My leadership style combines <strong>communication, trust and high standards</strong> to build
                efficient teams capable of performing under pressure while maintaining
                a positive work environment.
              </p>
            </div>

            {/* Key stats */}
            <div ref={statsRef} className="mt-12 grid grid-cols-3 gap-6">
              <div className="border-t-2 border-[#333333] pt-4">
                <p className="text-3xl md:text-4xl font-bold">9+</p>
                <p className="text-sm text-[#333333]/60 mt-1">Years in Logistics</p>
              </div>
              <div className="border-t-2 border-[#333333] pt-4">
                <p className="text-3xl md:text-4xl font-bold">20+</p>
                <p className="text-sm text-[#333333]/60 mt-1">Team Members Led</p>
              </div>
              <div className="border-t-2 border-[#333333] pt-4">
                <p className="text-3xl md:text-4xl font-bold">DHL</p>
                <p className="text-sm text-[#333333]/60 mt-1">eCommerce Spain</p>
              </div>
            </div>

            {/* CTA */}
            <div ref={connectRef} className="mt-14 border-t border-[#333]/10 pt-8">
              <div className="flex flex-col space-y-4">
                <p className="text-lg md:text-xl font-light">
                  Open to international opportunities
                </p>
                <a
                  href="#contact"
                  className="group inline-flex items-center text-lg md:text-xl hover:text-[#3B5BFE] transition-colors duration-300"
                >
                  <span className="border-b border-current">Let&apos;s connect</span>
                  <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Image column */}
          <div ref={imageRef} className="order-1 md:order-2 h-[420px] md:h-[620px]">
            <div className="relative h-full w-full overflow-hidden">
              <Image
                src="/images/about-logistics.png"
                alt="Erik Majada - Logistics Operations Leader"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#333333]/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}