import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { inclusions, exclusions } from '../data/tourData';

export default function Package() {
  return (
    <section id="package" className="relative bg-royal-950 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <p className="font-heading text-sm font-bold uppercase tracking-[0.3em] text-gold-400">
            Package Details
          </p>
          <h2 className="mt-3 font-heading text-4xl font-extrabold text-white sm:text-5xl">
            What's Included & Excluded
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Inclusions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-gold-400/20 bg-gradient-to-br from-gold-400/[0.08] to-transparent p-8"
          >
            <h3 className="mb-6 font-heading text-2xl font-bold text-gold-300">Inclusions</h3>
            <ul className="space-y-4">
              {inclusions.map((inc, i) => {
                const Icon = inc.icon;
                return (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="flex items-center gap-3"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold-400/15 ring-1 ring-gold-400/30">
                      <Icon className="h-4 w-4 text-gold-300" />
                    </span>
                    <span className="font-body text-sm text-white/85">{inc.text}</span>
                    <Check className="ml-auto h-4 w-4 shrink-0 text-emerald-400" />
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>

          {/* Exclusions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-8"
          >
            <h3 className="mb-6 font-heading text-2xl font-bold text-white/80">Exclusions</h3>
            <ul className="space-y-4">
              {exclusions.map((ex, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex items-center gap-3"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
                    <X className="h-4 w-4 text-rose-400" />
                  </span>
                  <span className="font-body text-sm text-white/70">{ex}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
