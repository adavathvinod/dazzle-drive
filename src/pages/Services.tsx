import { motion } from 'framer-motion';
import { Shield, Droplets, Sparkles, Car, Brush, Wrench, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingCTAs from '@/components/FloatingCTAs';
import MusicPlayer from '@/components/MusicPlayer';

// Service images
import servicePpf from '@/assets/service-ppf.jpg';
import serviceCeramic from '@/assets/service-ceramic.jpg';
import serviceGraphene from '@/assets/service-graphene.jpg';
import serviceInterior from '@/assets/service-interior.jpg';
import servicePaintCorrection from '@/assets/service-paint-correction.jpg';
import serviceBodywork from '@/assets/service-bodywork.jpg';

const services = [
  {
    id: 'ppf',
    icon: Shield,
    title: 'Paint Protection Film (PPF)',
    shortDesc: 'Invisible armor for your vehicle',
    description: 'Our premium Paint Protection Film provides the ultimate defense against road debris, scratches, and environmental damage. Using the latest self-healing technology, minor scratches disappear with heat.',
    price: 'Starting ₹25,000',
    duration: '2-3 Days',
    warranty: '10 Years',
    image: servicePpf,
    features: [
      'Self-healing technology',
      'Crystal clear finish',
      'UV protection',
      'Stain resistance',
      'Professional installation',
      '10-year manufacturer warranty',
    ],
  },
  {
    id: 'ceramic',
    icon: Sparkles,
    title: 'Ceramic Coating',
    shortDesc: 'Long-lasting gloss and protection',
    description: 'Our 9H ceramic coating creates a permanent bond with your paint, providing years of protection with a stunning glossy finish. Hydrophobic properties make cleaning effortless.',
    price: 'Starting ₹12,000',
    duration: '1-2 Days',
    warranty: '5 Years',
    image: serviceCeramic,
    features: [
      '9H hardness rating',
      'Hydrophobic properties',
      'UV ray protection',
      'Chemical resistance',
      'Enhanced gloss',
      '5-year coating warranty',
    ],
  },
  {
    id: 'graphene',
    icon: Droplets,
    title: 'Graphene Coating',
    shortDesc: 'Next-gen protection technology',
    description: 'Graphene coating represents the future of paint protection. Offering superior durability to ceramic, anti-static properties reduce dust attraction while providing unmatched water beading.',
    price: 'Starting ₹18,000',
    duration: '2 Days',
    warranty: '7 Years',
    image: serviceGraphene,
    features: [
      'Superior heat dissipation',
      'Anti-static properties',
      'Ultra hydrophobic',
      'Increased durability',
      'Reduced water spotting',
      '7-year protection warranty',
    ],
  },
  {
    id: 'interior',
    icon: Car,
    title: 'Interior Detailing',
    shortDesc: 'Complete cabin restoration',
    description: 'Our comprehensive interior detailing service restores your cabin to showroom condition. Deep extraction cleaning, leather conditioning, and complete sanitization included.',
    price: 'Starting ₹3,500',
    duration: '4-6 Hours',
    warranty: '30 Days',
    image: serviceInterior,
    features: [
      'Deep vacuum extraction',
      'Steam cleaning',
      'Leather conditioning',
      'Dashboard treatment',
      'Odor elimination',
      'Fabric protection coating',
    ],
  },
  {
    id: 'paint',
    icon: Brush,
    title: 'Paint Correction',
    shortDesc: 'Restore your paint to perfection',
    description: 'Multi-stage paint correction removes years of swirl marks, scratches, and oxidation. Our expert technicians use professional-grade compounds to restore clarity and depth.',
    price: 'Starting ₹8,000',
    duration: '1-2 Days',
    warranty: '6 Months',
    image: servicePaintCorrection,
    features: [
      'Swirl mark removal',
      'Scratch elimination',
      'Oxidation treatment',
      'Paint decontamination',
      'Machine polishing',
      'Paint thickness measurement',
    ],
  },
  {
    id: 'body',
    icon: Wrench,
    title: 'Auto Body Work',
    shortDesc: 'Professional repair services',
    description: 'From minor dents to major panel repairs, our skilled technicians restore your vehicle\'s body to factory condition using advanced techniques and quality materials.',
    price: 'Starting ₹5,000',
    duration: 'Varies',
    warranty: '1 Year',
    image: serviceBodywork,
    features: [
      'Paintless dent removal',
      'Panel replacement',
      'Touch-up painting',
      'Bumper repair',
      'Rust treatment',
      'Color matching technology',
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingCTAs />
      <MusicPlayer />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-display text-sm font-semibold tracking-wider mb-4">
              THE CATALOG
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-black mb-6">
              Premium <span className="gradient-text-gold-cyan">Detailing</span> Services
            </h1>
            <p className="text-muted-foreground text-lg">
              From protective coatings to complete restorations, explore our comprehensive range of elite auto detailing services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center`}
              >
                {/* Visual */}
                <div className="flex-1 w-full">
                  <div className="relative rounded-3xl overflow-hidden group">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-72 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider">Duration</p>
                          <p className="font-display font-bold text-foreground">{service.duration}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs text-muted-foreground uppercase tracking-wider">Warranty</p>
                          <p className="font-display font-bold text-accent">{service.warranty}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-muted-foreground uppercase tracking-wider">Price</p>
                          <p className="font-display font-bold text-primary">{service.price}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent font-display text-xs font-semibold tracking-wider mb-4">
                    {service.shortDesc.toUpperCase()}
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl font-black mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/booking"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-display font-bold tracking-wider hover:glow-gold transition-all"
                  >
                    BOOK THIS SERVICE
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <h2 className="font-display text-4xl font-black mb-4">
            Not Sure Which Service is Right?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Contact us for a free consultation. Our experts will recommend the perfect solution for your vehicle.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-gradient-gold text-foreground font-display font-bold tracking-wider hover:bg-primary/10 transition-all"
          >
            GET FREE CONSULTATION
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;