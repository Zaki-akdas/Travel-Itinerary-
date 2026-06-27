import { motion } from 'framer-motion';

const gallery = [
  { src: '/images/hero-hawamahal.jpg', alt: 'Hawa Mahal', label: 'Hawa Mahal', span: 'lg:col-span-2 lg:row-span-2' },
  { src: '/images/amer-fort.jpg', alt: 'Amer Fort', label: 'Amer Fort', span: '' },
  { src: '/images/city-palace.jpg', alt: 'City Palace', label: 'City Palace', span: '' },
  { src: '/images/jantar-mantar.jpg', alt: 'Jantar Mantar', label: 'Jantar Mantar', span: '' },
  { src: '/images/albert-hall.jpg', alt: 'Albert Hall', label: 'Albert Hall Museum', span: '' },
  { src: '/images/birla-temple.jpg', alt: 'Birla Temple', label: 'Birla Temple', span: '' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-royal-950 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <p className="font-heading text-sm font-bold uppercase tracking-[0.3em] text-gold-400">
            Destination Gallery
          </p>
          <h2 className="mt-3 font-heading text-4xl font-extrabold text-white sm:text-5xl">
            Sights of the Pink City
          </h2>
        </motion.div>

        <div className="grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] lg:grid-cols-4">
          {gallery.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl ${item.span}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute bottom-4 left-4 font-heading text-lg font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
