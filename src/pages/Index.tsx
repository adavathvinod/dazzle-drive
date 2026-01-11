import { motion } from 'framer-motion';
import { Shield, Droplets, Sparkles, Car, Brush, Wrench, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import ServiceCard from '@/components/ServiceCard';
import Footer from '@/components/Footer';
import FloatingCTAs from '@/components/FloatingCTAs';
import MusicPlayer from '@/components/MusicPlayer';
import PriceEstimator from '@/components/PriceEstimator';

const services = [
  {
    icon: Shield,
    title: 'PPF Protection',
    description: 'Crystal-clear paint protection film that shields your car from scratches, chips, and UV damage.',
    price: '₹25,000',
    features: ['Self-healing technology', '10-year warranty', 'Invisible protection'],
  },
  {
    icon: Sparkles,
    title: 'Ceramic Coating',
    description: 'Long-lasting ceramic protection with hydrophobic properties for that showroom shine.',
    price: '₹12,000',
    features: ['9H hardness', '5-year durability', 'Deep gloss finish'],
  },
  {
    icon: Droplets,
    title: 'Graphene Coating',
    description: 'Next-generation graphene technology for superior protection and stunning appearance.',
    price: '₹18,000',
    features: ['Advanced durability', 'Anti-static properties', 'Ultra hydrophobic'],
  },
  {
    icon: Car,
    title: 'Interior Detailing',
    description: 'Complete interior deep cleaning and conditioning for a fresh, luxurious feel.',
    price: '₹3,500',
    features: ['Deep extraction', 'Leather treatment', 'Odor elimination'],
  },
  {
    icon: Brush,
    title: 'Paint Correction',
    description: 'Multi-stage polishing to remove swirls, scratches, and restore paint clarity.',
    price: '₹8,000',
    features: ['Scratch removal', 'Swirl elimination', 'Mirror finish'],
  },
  {
    icon: Wrench,
    title: 'Auto Body Work',
    description: 'Professional dent repair, touch-ups, and bodywork restoration services.',
    price: '₹5,000',
    features: ['Dent removal', 'Paint touch-up', 'Panel repair'],
  },
];

const testimonials = [
  {
    name: 'Rajesh Kumar',
    car: 'Mercedes E-Class',
    text: 'Attention to detail is exceptional! My car looks better than when I bought it.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    car: 'BMW X5',
    text: 'Quality finish that lasts. The ceramic coating still shines after 6 months!',
    rating: 5,
  },
  {
    name: 'Vikram Reddy',
    car: 'Audi A6',
    text: 'Best detailing service in Hyderabad. Professional team and amazing results.',
    rating: 5,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSlider />
      <FloatingCTAs />
      <MusicPlayer />

      {/* Services Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-display text-sm font-semibold tracking-wider mb-4">
              OUR SERVICES
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-black mb-4">
              Premium <span className="gradient-text-gold-cyan">Detailing</span> Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From ceramic coatings to complete PPF protection, we offer comprehensive services to keep your vehicle in pristine condition.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} delay={index * 0.1} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-gradient-gold text-foreground font-display font-bold tracking-wider hover:bg-primary/10 transition-all"
            >
              VIEW ALL SERVICES
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent font-display text-sm font-semibold tracking-wider mb-4">
              WHY CHOOSE US
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-black mb-4">
              The <span className="gradient-text-gold">Dazzling</span> Difference
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '500+', label: 'Cars Detailed', icon: Car },
              { number: '4.9★', label: 'Google Rating', icon: Sparkles },
              { number: '5+', label: 'Years Experience', icon: Shield },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-2xl glass"
              >
                <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-display text-4xl font-black gradient-text-gold-cyan mb-2">
                  {stat.number}
                </h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-display text-sm font-semibold tracking-wider mb-4">
              TESTIMONIALS
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-black mb-4">
              What Our <span className="gradient-text-gold-cyan">Clients</span> Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-card border border-border"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-primary text-lg">★</span>
                  ))}
                </div>
                <p className="text-foreground/90 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-display font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.car}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Estimator Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent font-display text-sm font-semibold tracking-wider mb-4">
              INSTANT QUOTE
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-black mb-4">
              Get Your <span className="gradient-text-gold-cyan">Price</span> Estimate
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Select your vehicle type and services to get an instant price estimate.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <PriceEstimator />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <h2 className="font-display text-4xl md:text-5xl font-black mb-6">
            Ready for the <span className="gradient-text-gold-cyan">Dazzling</span> Experience?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Book your appointment today and give your car the premium treatment it deserves.
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-primary text-primary-foreground font-display font-bold tracking-wider text-lg hover:glow-gold-intense transition-all"
          >
            <Sparkles className="w-6 h-6" />
            BOOK NOW
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
