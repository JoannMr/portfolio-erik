'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useLoading } from '@/contexts/LoadingContext';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const [gsapReady, setGsapReady] = useState(false);
  const { setLoadingComplete } = useLoading();
  const loaderRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLParagraphElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      hasStarted ||
      !loaderRef.current ||
      !nameRef.current ||
      !roleRef.current ||
      !counterRef.current ||
      !percentRef.current ||
      !progressRef.current
    ) {
      return;
    }

    setHasStarted(true);

    gsap.set(nameRef.current, { y: 36, opacity: 0 });
    gsap.set(roleRef.current, { y: 18, opacity: 0 });
    gsap.set(counterRef.current, { y: 18, opacity: 0 });
    gsap.set(progressRef.current, { scaleX: 0 });

    setGsapReady(true);

    const progressTween = gsap.to({ value: 0 }, {
      value: 100,
      duration: 3,
      ease: 'power2.out',
      onUpdate: function () {
        const currentProgress = Math.round(this.targets()[0].value);

        gsap.set(progressRef.current, { scaleX: currentProgress / 100 });

        if (percentRef.current) {
          percentRef.current.textContent = currentProgress.toString().padStart(3, '0');
        }
      },
    });

    const tl = gsap.timeline();

    tl.to(nameRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.75,
      ease: 'power3.out',
    })
      .to(roleRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.55,
        ease: 'power3.out',
      }, '-=0.42')
      .to(counterRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.55,
        ease: 'power3.out',
      }, '-=0.18')
      .add(progressTween, '-=0.08')
      .to({}, { duration: 0.45 })
      .to(counterRef.current, {
        y: -18,
        opacity: 0,
        duration: 0.35,
        ease: 'power3.in',
      })
      .to([nameRef.current, roleRef.current], {
        y: -22,
        opacity: 0,
        duration: 0.48,
        stagger: 0.03,
        ease: 'power3.in',
      }, '-=0.2')
      .call(() => {
        setLoadingComplete(true);
      })
      .to({}, { duration: 0.1 })
      .to(loaderRef.current, {
        opacity: 0,
        duration: 0.65,
        ease: 'power3.out',
        onComplete: () => {
          setIsLoading(false);
        },
      });
  }, [hasStarted, setLoadingComplete]);

  if (!isLoading) return null;

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex min-h-svh items-center justify-center bg-[#f0f0f0] px-5 py-8 text-[#333333] sm:px-6 md:px-14"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        <h1
          ref={nameRef}
          className={`font-heading text-5xl font-bold leading-[1] tracking-normal sm:text-6xl md:text-8xl lg:text-9xl ${!gsapReady ? 'opacity-0' : ''}`}
        >
          <span className="block md:inline">Erik</span>
          <span className="block md:ml-6 md:inline">Majada</span>
        </h1>

        <p
          ref={roleRef}
          className={`mt-5 max-w-[18rem] text-[11px] font-medium uppercase leading-5 tracking-[0.16em] text-[#333333]/58 sm:max-w-none sm:text-xs md:mt-8 md:text-sm md:tracking-[0.2em] ${!gsapReady ? 'opacity-0' : ''}`}
        >
          Logistics Operations Leader
        </p>

        <div
          ref={counterRef}
          className={`mt-14 w-full max-w-[330px] sm:max-w-md md:mt-24 md:max-w-xl ${!gsapReady ? 'opacity-0' : ''}`}
        >
          <div className="mb-4 flex items-center justify-between gap-6">
            <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#333333]/35">
              Loading
            </p>
            <p className="text-xs font-semibold tabular-nums tracking-[0.12em] text-[#333333] sm:text-sm">
              <span ref={percentRef}>000</span>
            </p>
          </div>

          <div className="relative h-px w-full overflow-hidden bg-[#333333]/16">
            <div
              ref={progressRef}
              className="h-px w-full origin-left bg-[#333333]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
