import { motion } from 'framer-motion';
import { Sparkles, Target, Heart, Shield, Users, Award, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingCTAs from '@/components/FloatingCTAs';
import MusicPlayer from '@/components/MusicPlayer';

const values = [
  {
    icon: Target,
    title: 'Precision',
    description: 'Every detail matters. We approach each vehicle with surgical precision and meticulous care.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'We love cars as much as you do. Our passion drives us to deliver exceptional results.',
  },
  {
    icon: Shield,
    title: 'Quality',
    description: 'Only premium products and techniques. We never compromise on quality or durability.',
  },
  {
    icon: Users,
    title: 'Trust',
    description: 'Building lasting relationships through transparency, honesty, and consistent excellence.',
  },
];

const achievements = [
  { number: '500+', label: 'Cars Detailed' },
  { number: '5+', label: 'Years Experience' },
  { number: '4.9★', label: 'Google Rating' },
  { number: '100%', label: 'Satisfaction' },
];

const About = () => {
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
              ABOUT US
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-black mb-6">
              The <span className="gradient-text-gold-cyan">Dazzling</span> Story
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Sri Dazzling Detailers was born from a simple belief: every vehicle deserves to look its absolute best. 
              What started as a passion project has grown into Hyderabad's premier auto detailing destination.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent font-display text-sm font-semibold tracking-wider mb-4">
                OUR MISSION
              </span>
              <h2 className="font-display text-4xl font-black mb-6">
                Bringing the <span className="gradient-text-gold">Dazzling Finish</span> Your Car Deserves
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At Sri Dazzling Detailers, we don't just clean cars – we transform them. Our mission is to provide 
                world-class detailing services that protect your investment and restore that showroom shine you fell 
                in love with.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Using cutting-edge techniques, premium products, and unmatched attention to detail, we've become the 
                trusted choice for luxury vehicle owners across Hyderabad. From ceramic coatings to complete PPF 
                installations, every service is executed with precision and care.
              </p>
              <div className="flex flex-wrap gap-4">
                {['Premium Products', 'Expert Team', 'Guaranteed Results'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-6 rounded-2xl bg-card border border-border text-center"
                  >
                    <h3 className="font-display text-3xl font-black gradient-text-gold-cyan mb-2">
                      {stat.number}
                    </h3>
                    <p className="text-muted-foreground text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-display text-sm font-semibold tracking-wider mb-4">
              OUR VALUES
            </span>
            <h2 className="font-display text-4xl font-black">
              What <span className="gradient-text-gold-cyan">Drives</span> Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-card border border-border text-center hover:border-primary/50 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:glow-gold transition-all">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
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
              WHY US
            </span>
            <h2 className="font-display text-4xl font-black">
              The Sri Dazzling <span className="gradient-text-gold">Advantage</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Premium Products Only', desc: 'We use only certified, top-tier products from trusted brands worldwide.' },
              { title: 'Trained Professionals', desc: 'Our team undergoes rigorous training to master the latest techniques.' },
              { title: 'Climate-Controlled Studio', desc: 'Temperature and humidity controlled environment for perfect results.' },
              { title: 'Comprehensive Warranties', desc: 'Industry-leading warranties on all our coating and PPF services.' },
              { title: 'Transparent Pricing', desc: 'No hidden fees. Get detailed quotes before any work begins.' },
              { title: 'Customer-First Approach', desc: 'Your satisfaction is our priority. Period.' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border"
              >
                <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display font-bold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
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
          <h2 className="font-display text-4xl font-black mb-6">
            Experience the <span className="gradient-text-gold-cyan">Dazzling</span> Difference
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Join hundreds of satisfied customers who've trusted us with their prized vehicles.
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-primary text-primary-foreground font-display font-bold tracking-wider text-lg hover:glow-gold-intense transition-all"
          >
            <Sparkles className="w-6 h-6" />
            BOOK YOUR APPOINTMENT
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
