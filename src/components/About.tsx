import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ShieldCheck, Heart, GraduationCap } from 'lucide-react';

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);

  return (
    <section id="about" ref={ref} className="relative overflow-hidden bg-royal-900 py-24">
      {/* parallax bg image */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-cover bg-center opacity-20"
      >
        <img
          src="/images/students-travel.jpg"
          alt="Students traveling"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-royal-950 via-royal-950/85 to-royal-900/70" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-heading text-sm font-bold uppercase tracking-[0.3em] text-gold-400">
            About Paryatan Holidays
          </p>
          <h2 className="mt-3 font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Crafting Safe, Memorable Student Journeys
          </h2>
          <p className="mt-6 font-body text-lg leading-relaxed text-white/80">
            At Paryatan Holidays, we believe travel is the best classroom. Our mission is to
            deliver educational tours that blend discovery, culture, and fun — all wrapped in
            uncompromising safety and comfort for every student.
          </p>
          <p className="mt-4 font-body text-base leading-relaxed text-white/70">
            From curated itineraries to experienced tour managers, we handle every detail so
            young travellers can focus on learning, exploring, and making memories that last a
            lifetime.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="grid gap-5"
        >
          {[
            { icon: ShieldCheck, title: 'Safety First', text: 'Trained tour managers, first aid kits, and 24x7 helpline on every trip.' },
            { icon: GraduationCap, title: 'Educational Focus', text: 'Itineraries designed to enrich classroom learning with real-world context.' },
            { icon: Heart, title: 'Memorable Experiences', text: 'Thoughtful touches — caps, bag tags, and curated meals for every student.' },
          ].map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-400/15 ring-1 ring-gold-400/40">
                  <Icon className="h-6 w-6 text-gold-300" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-white">{f.title}</h3>
                  <p className="mt-1 font-body text-sm text-white/70">{f.text}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
