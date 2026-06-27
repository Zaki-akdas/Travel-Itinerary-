import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Highlights', href: '#highlights' },
  { label: 'About', href: '#about' },
  { label: 'Transport', href: '#transport' },
  { label: 'Itinerary', href: '#itinerary' },
  { label: 'Package', href: '#package' },
  { label: 'Notes', href: '#notes' },
  { label: 'Book', href: '#booking' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-royal-950/90 py-3 shadow-lg shadow-black/30 backdrop-blur-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2.5">
          <img
            src="/LOGO.png"
            alt="Paryatan Holidays"
            className="h-10 w-10 object-contain drop-shadow-[0_2px_8px_rgba(245,185,66,0.3)] transition-transform duration-300 hover:scale-110 sm:h-11 sm:w-11"
          />
          <span className="font-heading text-lg font-extrabold text-white">
            Paryatan<span className="text-gold-400"> Holidays</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 font-body text-sm font-medium text-white/75 transition-colors hover:bg-white/10 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="overflow-hidden bg-royal-950/95 backdrop-blur-md lg:hidden"
        >
          <div className="flex flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 font-body text-sm font-medium text-white/80 transition-colors hover:bg-white/10"
              >
                {l.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
