'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Detectar si estamos en una página de proyecto
  const isProjectPage = pathname.startsWith('/project/');

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Manejar el scroll cuando el menú está abierto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  // Función para Gmail Compose
  const handleGmailCompose = () => {
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=erik.majada4@gmail.com&su=${encodeURIComponent('Hello Erik - Contact from your Portfolio')}&body=${encodeURIComponent('Hello Erik,\n\nI am reaching out to you from your portfolio.\n\n[Write your message here]\n\nBest regards,')}`;
    window.open(gmailComposeUrl, '_blank');
    setMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    setMenuOpen(false);
    
    // Si estamos en la página principal, hacemos scroll directo
    if (pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      // Si estamos en otra página, navegamos a la principal con el hash
      router.push(`/#${sectionId}`);
    }
  };

  // Colores dinámicos basados en la página
  const textColor = isProjectPage ? 'text-[#333333]' : 'text-white';
  const buttonBg = 'bg-black/80';
  const buttonBorder = 'border-white/30';
  const buttonHoverBg = 'hover:bg-black/90';
  const buttonIconColor = 'bg-white';
  const menuTextColor = 'text-white';

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
          scrolled ? 'py-4' : 'py-6'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32">
          {/* Logo - solo visible cuando no hay scroll */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ 
              opacity: scrolled ? 0 : 1, 
              x: scrolled ? -20 : 0,
              pointerEvents: scrolled ? 'none' : 'auto'
            }}
            transition={{ duration: 0.4 }}
            className="absolute"
          >
            <Link 
              href="/" 
              className={`font-heading text-lg font-semibold tracking-normal ${textColor}`}
            >
              Erik Majada
            </Link>
          </motion.div>

          {/* Navegación - solo visible cuando no hay scroll y no es móvil */}
          <motion.nav
            initial={{ opacity: 0, x: 20 }}
            animate={{ 
              opacity: (scrolled || isMobile) ? 0 : 1, 
              x: (scrolled || isMobile) ? 20 : 0,
              pointerEvents: (scrolled || isMobile) ? 'none' : 'auto'
            }}
            transition={{ duration: 0.4 }}
            className="ml-auto flex space-x-10"
          >
            {[
              { label: 'About', id: 'about' },
              { label: 'Experience', id: 'experience' },
              { label: 'Skills', id: 'work' },
              { label: 'Contact', id: 'contact' },
            ].map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative font-medium text-[15px] leading-none tracking-normal ${textColor} transition-colors duration-300 group overflow-hidden`}
                whileHover="hover"
              >
                <motion.span
                  className="relative z-10"
                  variants={{ hover: { y: -20 } }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {item.label}
                </motion.span>
                <motion.span
                  className={`absolute top-0 left-0 ${textColor}`}
                  initial={{ y: 20 }}
                  variants={{ hover: { y: 0 } }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {item.label}
                </motion.span>
                <motion.div
                  className={`absolute bottom-0 left-0 h-0.5 ${isProjectPage ? 'bg-[#333333]' : 'bg-white'}`}
                  initial={{ width: 0 }}
                  variants={{ hover: { width: "100%" } }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </motion.button>
            ))}
          </motion.nav>

          {/* Botón de menú elegante - visible cuando hay scroll O es móvil */}
          <motion.button
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ 
              opacity: (scrolled || isMobile) ? 1 : 0, 
              scale: (scrolled || isMobile) ? 1 : 0,
              rotate: (scrolled || isMobile) ? 0 : -180,
              pointerEvents: (scrolled || isMobile) ? 'auto' : 'none'
            }}
            transition={{ 
              duration: 0.6, 
              delay: (scrolled || isMobile) ? 0.2 : 0,
              type: "spring",
              stiffness: 100 
            }}
            onClick={() => setMenuOpen(true)}
            className={`fixed top-6 right-6 md:right-12 lg:right-20 w-14 h-14 ${buttonBg} backdrop-blur-md border ${buttonBorder} rounded-full flex items-center justify-center ${buttonHoverBg} hover:scale-110 transition-all duration-300 group shadow-xl`}
          >
            <div className="relative">
              {/* Texto "Menu" elegante */}
              <span className={`text-xs font-medium ${menuTextColor} tracking-[0.08em] opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap`}>
                Menu
              </span>
              
              {/* Icono de hamburguesa moderno */}
              <div className="flex flex-col items-center justify-center space-y-1.5">
                <div className={`w-5 h-0.5 ${buttonIconColor} rounded-full transform transition-all duration-300 group-hover:rotate-45 group-hover:translate-y-2`}></div>
                <div className={`w-5 h-0.5 ${buttonIconColor} rounded-full transform transition-all duration-300 group-hover:opacity-0`}></div>
                <div className={`w-5 h-0.5 ${buttonIconColor} rounded-full transform transition-all duration-300 group-hover:-rotate-45 group-hover:-translate-y-2`}></div>
              </div>
            </div>
          </motion.button>
        </div>
      </header>

      {/* Overlay del menú - estilo Dennis */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Fondo oscuro */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            
            {/* Panel de menú */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30 
              }}
              className="fixed top-0 right-0 z-[9999] w-full md:w-[480px] h-full bg-[#1a1a1a] shadow-2xl"
            >
              {/* Header del panel */}
              <div className="relative h-full flex flex-col">
                {/* Botón de cerrar */}
                <div className="absolute top-6 right-6">
                  <motion.button
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    onClick={() => setMenuOpen(false)}
                    className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
                  >
                    <div className="relative w-5 h-5">
                      <span className="absolute top-1/2 left-1/2 w-5 h-0.5 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 rotate-45"></span>
                      <span className="absolute top-1/2 left-1/2 w-5 h-0.5 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></span>
                    </div>
                  </motion.button>
                </div>

                {/* Contenido del menú */}
                <div className="flex-1 flex flex-col justify-center px-12">
                  {/* Título del menú */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-12"
                  >
                    <h3 className="text-[11px] font-medium text-white/50 tracking-[0.16em] uppercase">
                      Navigation
                    </h3>
                  </motion.div>

                  {/* Navigation links */}
                  <nav className="space-y-8">
                    {[
                      { name: 'Home', id: 'hero' },
                      { name: 'About', id: 'about' },
                      { name: 'Experience', id: 'experience' },
                      { name: 'Skills', id: 'work' },
                      { name: 'Contact', id: 'contact' }
                    ].map((item, index) => (
                      <motion.button
                        key={item.name}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        onClick={() => scrollToSection(item.id)}
                        className="group block text-left w-full"
                      >
                        <div className="flex items-center justify-between py-2 border-b border-white/10 group-hover:border-white/30 transition-colors duration-300">
                          <span className="font-heading text-3xl font-medium leading-tight text-white group-hover:text-white/80 transition-colors duration-300 md:text-4xl">
                            {item.name}
                          </span>
                          <span className="text-white/40 transform transition-transform duration-300 group-hover:translate-x-2">
                            →
                          </span>
                        </div>
                      </motion.button>
                    ))}
                  </nav>

                  {/* Información adicional */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-16 pt-8 border-t border-white/10"
                  >
                    <div className="mb-8">
                      <h4 className="mb-4 text-[11px] font-medium text-white/50 tracking-[0.16em] uppercase">
                        Contact
                      </h4>
                      <button 
                        onClick={handleGmailCompose}
                        className="group relative cursor-pointer text-left text-white/80 transition-all duration-300 hover:scale-[1.02] hover:text-white"
                      >
                        <span className="relative z-10">erik.majada4@gmail.com</span>
                        
                        {/* Línea animada debajo */}
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white/60 group-hover:w-full transition-all duration-300"></div>
                        
                        {/* Icono de enlace externo */}
                        <span className="inline-block ml-2 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300 text-sm">
                          ↗
                        </span>
                        
                        {/* Efecto de brillo sutil */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300 rounded"></div>
                      </button>
                    </div>

                    <div>
                      <h4 className="mb-4 text-[11px] font-medium text-white/50 tracking-[0.16em] uppercase">
                        Socials
                      </h4>
                      <div className="space-y-2">
                        <Link 
                          href="https://www.linkedin.com/in/erik-majada-067511237/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-white/80 hover:text-white transition-colors duration-300"
                          onClick={() => setMenuOpen(false)}
                        >
                          LinkedIn
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Footer del panel */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="p-12 border-t border-white/10"
                >
                  <p className="text-xs leading-relaxed text-white/40 tracking-[0.08em]">
                    © 2025 Erik Majada · Logistics Operations Leader
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
} 
