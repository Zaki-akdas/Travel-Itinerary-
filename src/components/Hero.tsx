import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* Parallax background */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 bg-cover bg-center"
      >
        <img
          src="/images/hero-hawamahal.jpg"
          alt="Hawa Mahal Jaipur"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-royal-950/70 via-royal-900/50 to-royal-950/80" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: yText, opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white"
      >
        {/* Logo emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <div className="relative">
            {/* glow */}
            <div className="absolute inset-0 -z-10 scale-125 rounded-full bg-gold-400/20 blur-2xl" />
            <img
              src="/LOGO.png"
              alt="Paryatan Holidays logo"
              className="h-28 w-28 object-contain drop-shadow-[0_4px_20px_rgba(245,185,66,0.35)] sm:h-32 sm:w-32"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-4 flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-400/10 px-5 py-2 text-sm font-semibold tracking-widest text-gold-300 uppercase backdrop-blur-sm"
        >
          Paryatan Holidays
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-heading text-5xl font-extrabold leading-tight drop-shadow-lg sm:text-6xl md:text-7xl"
        >
          Paryatan Welcomes You
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-3 font-heading text-2xl font-semibold text-gold-300 sm:text-3xl"
        >
          Miles to Go…
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-4 max-w-xl font-body text-lg text-white/85"
        >
          Educational & Leisure Tour to the Pink City — Jaipur
        </motion.p>

        <motion.a
          href="#highlights"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold-400 px-8 py-3.5 font-heading font-bold text-royal-950 shadow-xl shadow-gold-500/30 transition-colors hover:bg-gold-300"
        >
          View Itinerary
          <ChevronDown className="h-5 w-5" />
        </motion.a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/60 p-1.5"
        >
          <span className="h-2 w-1 rounded-full bg-white/80" />
        </motion.div>
      </motion.div>
    </section>
  );
}
