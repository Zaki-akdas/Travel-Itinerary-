import { motion } from 'framer-motion';
import { Phone, Mail, Globe } from 'lucide-react';
import { bookingInfo } from '../data/tourData';

export default function Booking() {
  return (
    <section id="booking" className="relative overflow-hidden bg-royal-950 py-24">
      {/* bg accent */}
      <div className="absolute inset-0 opacity-15">
        <img src="/images/amer-fort.jpg" alt="" className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-royal-950 via-royal-950/90 to-royal-950" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gold-400/10 ring-1 ring-gold-400/30">
            <img
              src="/images/logo.png"
              alt="Paryatan Holidays"
              className="h-16 w-16 object-contain drop-shadow-[0_2px_12px_rgba(245,185,66,0.3)]"
            />
          </div>
          <p className="font-heading text-sm font-bold uppercase tracking-[0.3em] text-gold-400">
            Ready to Travel?
          </p>
          <h2 className="mt-3 font-heading text-4xl font-extrabold text-white sm:text-5xl">
            Book Now with Paryatan Holidays
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-body text-lg text-white/75">
            Secure your spot on the Jaipur Educational Tour. Limited seats for 45 students —
            reserve early to avoid disappointment.
          </p>

          <motion.a
            href="tel:+919039033571"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold-400 px-10 py-4 font-heading text-lg font-bold text-royal-950 shadow-xl shadow-gold-500/30 transition-colors hover:bg-gold-300"
          >
            <Phone className="h-5 w-5" />
            Book Your Seat
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-14 grid max-w-2xl gap-4 sm:grid-cols-3"
        >
          {bookingInfo.map((info) => {
            const Icon = info.icon;
            return (
              <a
                key={info.label}
                href={info.href}
                className="group flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-sm transition-colors hover:border-gold-400/40 hover:bg-white/[0.08]"
              >
                <Icon className="h-6 w-6 text-gold-300 transition-transform group-hover:scale-110" />
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-gold-400">
                  {info.label}
                </span>
                <span className="font-body text-sm text-white/85">{info.value}</span>
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
