'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const contactLinks = [
  {
    id: 'cv',
    label: 'Download CV',
    sub: 'PDF Â· Erik Majada',
    href: '/cv-erik-majada.pdf',
    download: true,
    external: false,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    sub: 'linkedin.com/in/erik-majada',
    href: 'https://linkedin.com/in/erik-majada',
    external: true,
    download: false,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    id: 'email',
    label: 'Email',
    sub: 'erik.majada@gmail.com',
    href: 'mailto:erik.majada@gmail.com',
    external: false,
    download: false,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    sub: 'Send a message',
    href: 'https://wa.me/34600000000',
    external: true,
    download: false,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '6%']);

  return (
    <section ref={sectionRef} id="contact" className="relative bg-[#f0f0f0] overflow-hidden">

      {/* â”€â”€ BIG STATEMENT AREA â”€â”€ */}
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32 pt-28 pb-20 border-t border-[#333]/10">

        {/* Tag */}
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px w-8 bg-[#333]/25" />
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#333]/45">Contact</span>
        </div>

        {/* Headline â€” big and confident */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[clamp(3rem,9vw,7rem)] font-bold tracking-[-0.03em] leading-[1] text-[#1a1a1a] mb-16">
            Let&apos;s<br />work<br />together
          </h2>
        </motion.div>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left: description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-xl text-[#333]/65 leading-relaxed max-w-md">
              Looking for a Logistics Operations Leader to drive your team forward?
              I&apos;m open to new international opportunities and ready to bring
              hands-on experience to your operation.
            </p>

            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#3B5BFE] animate-pulse" />
              <span className="text-sm text-[#333]/50">Barcelona Â· Available for relocation</span>
            </div>
          </motion.div>

          {/* Right: contact links as rows */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
          >
            {contactLinks.map((link, i) => {
              const El = (link.download || !link.external) ? motion.a : motion.a;
              return (
                <El
                  key={link.id}
                  href={link.href}
                  {...(link.download ? { download: true } : {})}
                  {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className={`group flex items-center justify-between py-5
                    ${i === 0 ? 'border-t border-b border-[#333]/10' : 'border-b border-[#333]/10'}
                    hover:pl-2 transition-all duration-300 cursor-pointer`}
                  whileHover={{ paddingLeft: '8px' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center shrink-0 group-hover:bg-[#3B5BFE] transition-colors duration-300">
                      {link.icon}
                    </div>
                    <div>
                      <p className="text-base font-semibold text-[#1a1a1a]">{link.label}</p>
                      <p className="text-xs text-[#333]/40 mt-0.5">{link.sub}</p>
                    </div>
                  </div>
                  <span className="text-[#333]/25 group-hover:text-[#3B5BFE] transition-colors duration-300 text-lg">â†—</span>
                </El>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* â”€â”€ FOOTER STRIP â€” dark, full width â”€â”€ */}
      <motion.div
        style={{ y: bgY }}
        className="bg-[#1a1a1a] py-14"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-white font-bold text-2xl tracking-tight">Erik Majada</p>
          <p className="text-white/30 text-sm uppercase tracking-widest">
            Logistics Operations Leader Â· DHL eCommerce Spain Â· Barcelona
          </p>
          <p className="text-white/20 text-xs">&copy; 2025</p>
        </div>
      </motion.div>
    </section>
  );
}
