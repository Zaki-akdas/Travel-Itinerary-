import { motion } from 'framer-motion';
import { transportSteps } from '../data/tourData';

export default function Transport() {
  return (
    <section id="transport" className="relative bg-royal-950 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="font-heading text-sm font-bold uppercase tracking-[0.3em] text-gold-400">
            Transport & Seat Confirmation
          </p>
          <h2 className="mt-3 font-heading text-4xl font-extrabold text-white sm:text-5xl">
            The Journey, Leg by Leg
          </h2>
        </motion.div>

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-6 top-2 h-full w-0.5 bg-gradient-to-b from-gold-400 via-gold-500/50 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-10">
            {transportSteps.map((step, i) => {
              const Icon = step.icon;
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative flex items-center gap-6 sm:gap-0 ${
                    isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
                >
                  {/* node */}
                  <div className="absolute left-6 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-2 border-gold-400 bg-royal-900 shadow-lg shadow-gold-500/20 sm:left-1/2 sm:-translate-x-1/2">
                    <Icon className="h-6 w-6 text-gold-300" />
                  </div>

                  {/* card */}
                  <div className="ml-16 w-full sm:ml-0 sm:w-1/2 sm:px-8">
                    <div
                      className={`rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-transparent p-6 backdrop-blur-sm ${
                        isLeft ? 'sm:text-right' : 'sm:text-left'
                      }`}
                    >
                      <span className="inline-block rounded-full bg-gold-400/15 px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-gold-300">
                        {step.mode}
                      </span>
                      <h3 className="mt-3 font-heading text-xl font-bold text-white">
                        {step.route}
                      </h3>
                      <p className="mt-2 font-body text-sm text-white/70">{step.detail}</p>
                    </div>
                  </div>

                  {/* spacer for other side */}
                  <div className="hidden sm:block sm:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
