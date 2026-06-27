import { motion } from 'framer-motion';
import { highlights } from '../data/tourData';

export default function Highlights() {
  return (
    <section id="highlights" className="relative bg-royal-950 py-24">
      {/* decorative top border */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <p className="font-heading text-sm font-bold uppercase tracking-[0.3em] text-gold-400">
            Tour Highlights
          </p>
          <h2 className="mt-3 font-heading text-4xl font-extrabold text-white sm:text-5xl">
            Your Journey at a Glance
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => {
            const Icon = h.icon;
            return (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-transparent p-7 text-center backdrop-blur-sm"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gold-400/15 ring-1 ring-gold-400/40 transition-colors group-hover:bg-gold-400/25">
                  <Icon className="h-8 w-8 text-gold-300" />
                </div>
                <p className="font-heading text-xs font-semibold uppercase tracking-widest text-gold-400/80">
                  {h.label}
                </p>
                <p className="mt-2 font-heading text-lg font-bold text-white">{h.value}</p>
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gold-400/5 blur-2xl transition-all group-hover:bg-gold-400/10" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
