import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  price: string;
  features: string[];
  delay?: number;
}

const ServiceCard = ({ icon: Icon, title, description, price, features, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      {/* Icon */}
      <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:glow-gold transition-all">
        <Icon className="w-7 h-7 text-primary" />
      </div>

      {/* Content */}
      <div className="relative">
        <h3 className="font-display text-xl font-bold mb-2 group-hover:gradient-text-gold transition-all">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-foreground/80">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Price & CTA */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs text-muted-foreground">Starting from</span>
            <p className="font-display text-2xl font-bold text-primary">{price}</p>
          </div>
          <Link
            to="/booking"
            className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-display text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
          >
            BOOK
          </Link>
        </div>
      </div>

      {/* Corner Accent */}
      <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
        <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary opacity-50 group-hover:opacity-100 transition-opacity" />
      </div>
    </motion.div>
  );
};

export default ServiceCard;
