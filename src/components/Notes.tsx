import { motion } from 'framer-motion';
import { notes } from '../data/tourData';

export default function Notes() {
  return (
    <section id="notes" className="relative bg-royal-900 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <p className="font-heading text-sm font-bold uppercase tracking-[0.3em] text-gold-400">
            Important Notes
          </p>
          <h2 className="mt-3 font-heading text-4xl font-extrabold text-white sm:text-5xl">
            Please Read Before You Travel
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {notes.map((note, i) => {
            const Icon = note.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group flex gap-5 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-transparent p-6 backdrop-blur-sm"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-400/15 ring-1 ring-gold-400/40 transition-colors group-hover:bg-gold-400/25">
                  <Icon className="h-6 w-6 text-gold-300" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-white">{note.title}</h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-white/70">{note.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
