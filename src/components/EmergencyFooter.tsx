import { useState } from 'react';
import { Phone, X, Headphones, UserCog } from 'lucide-react';
import { contacts } from '../data/tourData';

export default function EmergencyFooter() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Sticky floating button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-gold-400 px-5 py-3 font-heading text-sm font-bold text-royal-950 shadow-xl shadow-gold-500/40 transition-transform hover:scale-105"
      >
        <Headphones className="h-4 w-4" />
        Emergency Contacts
      </button>

      {/* Slide-up panel */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-sm sm:items-center"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-t-3xl border border-white/10 bg-royal-900 p-6 shadow-2xl sm:rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-6 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gold-400/15 ring-1 ring-gold-400/40">
                <Headphones className="h-6 w-6 text-gold-300" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-white">Emergency Contacts</h3>
              <p className="mt-1 font-body text-sm text-white/60">Available 24x7 during the tour</p>
            </div>

            <div className="space-y-3">
              {/* Tour managers */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                <div className="mb-3 flex items-center gap-2">
                  <UserCog className="h-4 w-4 text-gold-300" />
                  <span className="font-heading text-xs font-bold uppercase tracking-wider text-gold-400">
                    Tour Managers
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {contacts
                    .filter((c) => c.role === 'Tour Manager')
                    .map((c) => (
                      <span
                        key={c.name}
                        className="rounded-full bg-white/10 px-3 py-1 font-body text-sm text-white/85"
                      >
                        {c.name}
                      </span>
                    ))}
                </div>
              </div>

              {/* Phone contacts */}
              {contacts
                .filter((c) => c.phone)
                .map((c) => (
                  <a
                    key={c.name}
                    href={`tel:${c.phone?.replace(/\s/g, '')}`}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4 transition-colors hover:border-gold-400/40 hover:bg-white/[0.08]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-400/15 ring-1 ring-gold-400/40">
                      <Phone className="h-5 w-5 text-gold-300" />
                    </div>
                    <div className="flex-1">
                      <p className="font-heading text-xs font-bold uppercase tracking-wider text-gold-400">
                        {c.role}
                      </p>
                      <p className="font-body text-sm text-white/85">{c.name}</p>
                    </div>
                    <span className="font-heading text-sm font-bold text-white">{c.phone}</span>
                  </a>
                ))}
            </div>
          </div>
        </div>
      )}

      {/* Footer bar */}
      <footer className="border-t border-white/10 bg-royal-950 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <img
              src="/images/logo.png"
              alt="Paryatan Holidays"
              className="h-12 w-12 object-contain drop-shadow-[0_2px_8px_rgba(245,185,66,0.25)]"
            />
            <div>
              <p className="font-heading text-lg font-bold text-gold-300">Paryatan Holidays</p>
              <p className="font-body text-xs text-white/50">
                Educational & Leisure Tours • Miles to Go…
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 font-body text-sm text-white/60">
            <a href="tel:+919039033571" className="hover:text-gold-300">+91 9039033571</a>
            <span className="text-white/20">|</span>
            <a href="mailto:info@paryatanholidays.com" className="hover:text-gold-300">Email</a>
          </div>
        </div>
      </footer>
    </>
  );
}
