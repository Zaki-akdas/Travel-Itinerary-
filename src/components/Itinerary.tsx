import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin } from 'lucide-react';
import { itinerary } from '../data/tourData';

export default function Itinerary() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="itinerary" className="relative bg-royal-900 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <p className="font-heading text-sm font-bold uppercase tracking-[0.3em] text-gold-400">
            Day-by-Day Itinerary
          </p>
          <h2 className="mt-3 font-heading text-4xl font-extrabold text-white sm:text-5xl">
            4 Days in the Pink City
          </h2>
        </motion.div>

        <div className="space-y-4">
          {itinerary.map((day, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-transparent backdrop-blur-sm"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center gap-4 p-5 text-left transition-colors hover:bg-white/[0.04]"
                >
                  <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-gold-400/15 ring-1 ring-gold-400/40">
                    <span className="font-heading text-[10px] font-bold uppercase tracking-wider text-gold-400">Day</span>
                    <span className="font-heading text-xl font-extrabold text-white">{i + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-lg font-bold text-white sm:text-xl">
                      {day.title}
                    </h3>
                    <p className="mt-0.5 font-body text-xs text-white/60">{day.items.length} activities</p>
                  </div>
                  <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className="h-5 w-5 text-gold-300" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5">
                        <div className="mb-5 overflow-hidden rounded-xl">
                          <img
                            src={day.image}
                            alt={day.title}
                            className="h-44 w-full object-cover sm:h-56"
                          />
                        </div>
                        <ul className="space-y-3">
                          {day.items.map((item, j) => (
                            <li key={j} className="flex items-start gap-3">
                              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                              <p className="font-body text-sm text-white/80">
                                <span className="font-semibold text-gold-300">{item.time}:</span>{' '}
                                {item.text}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
