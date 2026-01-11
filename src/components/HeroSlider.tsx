import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Shield, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroMercedes from '@/assets/hero-mercedes.jpg';
import heroBmw from '@/assets/hero-bmw-ppf.jpg';
import heroPorsche from '@/assets/hero-porsche.jpg';

const slides = [
  {
    image: heroMercedes,
    title: 'CERAMIC COATING',
    subtitle: 'PERFECTION',
    description: 'Ultimate gloss and protection for your luxury vehicle',
  },
  {
    image: heroBmw,
    title: 'PPF PROTECTION',
    subtitle: 'INVISIBLE SHIELD',
    description: 'Crystal-clear paint protection film for flawless finish',
  },
  {
    image: heroPorsche,
    title: 'GRAPHENE COATING',
    subtitle: 'NEXT LEVEL',
    description: 'Advanced graphene technology for superior durability',
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full container mx-auto px-4 flex items-center">
        <div className="max-w-2xl">
          {/* Rating Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold mb-6"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <span className="font-display text-sm font-semibold text-primary">4.9</span>
            <span className="text-muted-foreground text-sm">• 10+ Reviews</span>
          </motion.div>

          {/* Title */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-display text-5xl md:text-7xl font-black tracking-tight mb-2">
                <span className="text-foreground">{slides[currentSlide].title}</span>
              </h1>
              <h2 className="font-display text-4xl md:text-6xl font-black gradient-text-gold-cyan mb-6">
                {slides[currentSlide].subtitle}
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
                {slides[currentSlide].description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/booking"
              className="group flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-display font-bold tracking-wider hover:glow-gold-intense transition-all duration-300"
            >
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              BOOK APPOINTMENT
            </Link>
            <Link
              to="/services"
              className="flex items-center gap-2 px-8 py-4 rounded-full border-gradient-gold text-foreground font-display font-bold tracking-wider hover:bg-primary/10 transition-all duration-300"
            >
              <Shield className="w-5 h-5 text-accent" />
              VIEW SERVICES
            </Link>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-6 mt-10"
          >
            {['Premium Quality', 'Expert Team', 'Lifetime Warranty'].map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-1/2 translate-y-1/2 left-4 right-4 flex justify-between z-20 pointer-events-none">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
          className="pointer-events-auto p-3 rounded-full glass hover:glow-gold transition-all"
        >
          <ChevronLeft className="w-6 h-6 text-primary" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          className="pointer-events-auto p-3 rounded-full glass hover:glow-gold transition-all"
        >
          <ChevronRight className="w-6 h-6 text-primary" />
        </motion.button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'w-10 bg-primary' : 'w-4 bg-muted-foreground/50'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:block"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-primary" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSlider;
