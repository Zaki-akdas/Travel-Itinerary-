import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Globe, X, User, Users, Calendar, MessageSquare, Send } from 'lucide-react';
import { bookingInfo } from '../data/tourData';

interface FormData {
  name: string;
  phone: string;
  email: string;
  institution: string;
  students: string;
  teachers: string;
  date: string;
  customization: string;
}

export default function Booking() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    institution: '',
    students: '',
    teachers: '',
    date: '',
    customization: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const message = `New Booking Request - Paryatan Holidays\n\n` +
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email}\n` +
      `Institution: ${formData.institution || 'N/A'}\n` +
      `Students: ${formData.students}\n` +
      `Teachers: ${formData.teachers}\n` +
      `Preferred Date: ${formData.date || 'Flexible'}\n` +
      `Customization / Special Requests:\n${formData.customization || 'None'}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919039033571?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');

    try {
      await fetch('https://script.google.com/macros/s/AKfycbx.../exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    } catch {
      // silent fail for sheets webhook
    }

    setFormData({
      name: '',
      phone: '',
      email: '',
      institution: '',
      students: '',
      teachers: '',
      date: '',
      customization: '',
    });
    setIsOpen(false);
  };

  return (
    <section id="booking" className="relative overflow-hidden bg-royal-950 py-24">
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

          <button
            onClick={() => setIsOpen(true)}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold-400 px-10 py-4 font-heading text-lg font-bold text-royal-950 shadow-xl shadow-gold-500/30 transition-colors hover:bg-gold-300"
          >
            <Send className="h-5 w-5" />
            Book Your Seat
          </button>
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

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-royal-900 p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-400/15 ring-1 ring-gold-400/40">
                    <img src="/images/logo.png" alt="Paryatan Holidays" className="h-9 w-9 object-contain" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-white">Book Your Seat</h3>
                    <p className="text-sm text-white/60">Fill in details to confirm your booking</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-white/80">Full Name *</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Student / Contact Person"
                        className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-gold-400/50 focus:bg-white/10"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-white/80">Phone Number *</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 00000 00000"
                        className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-gold-400/50 focus:bg-white/10"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-white/80">Email ID</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-gold-400/50 focus:bg-white/10"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-white/80">Institution / School</label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                      <input
                        type="text"
                        name="institution"
                        value={formData.institution}
                        onChange={handleChange}
                        placeholder="School / College Name"
                        className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-gold-400/50 focus:bg-white/10"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-white/80">Number of Students *</label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                      <input
                        type="number"
                        name="students"
                        required
                        min="1"
                        max="50"
                        value={formData.students}
                        onChange={handleChange}
                        placeholder="45"
                        className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-gold-400/50 focus:bg-white/10"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-white/80">Number of Teachers</label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                      <input
                        type="number"
                        name="teachers"
                        min="1"
                        max="10"
                        value={formData.teachers}
                        onChange={handleChange}
                        placeholder="5"
                        className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-gold-400/50 focus:bg-white/10"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-white/80">Preferred Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-sm text-white outline-none transition-colors focus:border-gold-400/50 focus:bg-white/10 [color-scheme:dark]"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-white/80">
                    Customization / Special Requests
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-white/40" />
                    <textarea
                      name="customization"
                      rows={4}
                      value={formData.customization}
                      onChange={handleChange}
                      placeholder="Dietary requirements, accessibility needs, extra sightseeing, hotel preferences..."
                      className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-gold-400/50 focus:bg-white/10 resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-gold-400 py-4 font-heading text-lg font-bold text-royal-950 shadow-xl shadow-gold-500/30 transition-colors hover:bg-gold-300"
                >
                  Send Booking Request via WhatsApp
                </button>

                <p className="text-center text-xs text-white/40">
                  By submitting, you agree to be contacted by Paryatan Holidays regarding your booking.
                </p>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
