import { motion } from 'framer-motion';
import { Phone, MapPin, MessageCircle } from 'lucide-react';

const FloatingCTAs = () => {
  const ctaItems = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/918019130798',
      bgClass: 'bg-[#25D366]',
      hoverClass: 'hover:bg-[#128C7E]',
    },
    {
      icon: Phone,
      label: 'Call',
      href: 'tel:+918019130798',
      bgClass: 'bg-primary',
      hoverClass: 'hover:bg-gold-dark',
    },
    {
      icon: MapPin,
      label: 'Maps',
      href: 'https://maps.google.com/?q=Hotel+Shubham+Palace+Karmanghat+Hyderabad',
      bgClass: 'bg-accent',
      hoverClass: 'hover:bg-cyan-dark',
    },
    {
      icon: () => (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      label: 'Instagram',
      href: 'https://instagram.com/sri_dazzling_detailers',
      bgClass: 'bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737]',
      hoverClass: 'hover:opacity-80',
    },
  ];

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed right-3 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2"
    >
      {ctaItems.map((item, index) => (
        <motion.a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.1 + index * 0.1 }}
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.95 }}
          className={`group relative flex items-center justify-center w-10 h-10 rounded-full ${item.bgClass} ${item.hoverClass} shadow-lg transition-all duration-300`}
          aria-label={item.label}
        >
          <item.icon className="w-4 h-4 text-primary-foreground" />
          <span className="absolute right-full mr-2 px-2 py-1 rounded-lg bg-card text-foreground text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg border border-border">
            {item.label}
          </span>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default FloatingCTAs;
