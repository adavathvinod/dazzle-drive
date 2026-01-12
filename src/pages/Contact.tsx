import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingCTAs from '@/components/FloatingCTAs';
import MusicPlayer from '@/components/MusicPlayer';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [feedbackForm, setFeedbackForm] = useState({
    name: '',
    phone: '',
    type: 'feedback',
    message: '',
  });

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFeedbackSubmitted(true);
    toast({
      title: feedbackForm.type === 'complaint' ? "Complaint Received" : "Feedback Received",
      description: "We value your input and will respond within 24 hours.",
    });
  };

  const handleFeedbackChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFeedbackForm({ ...feedbackForm, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingCTAs />
      <MusicPlayer />

      {/* Hero */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-display text-sm font-semibold tracking-wider mb-4">
              GET IN TOUCH
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-black mb-6">
              Contact <span className="gradient-text-gold-cyan">Us</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Visit our studio in Karmanghat or reach out through any of our channels.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Map */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Cards */}
            <div className="space-y-4">
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                href="https://maps.google.com/?q=Hotel+Shubham+Palace+Karmanghat+Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:glow-gold transition-all">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold mb-1">Our Location</h3>
                  <p className="text-muted-foreground text-sm">
                    Near Hotel Shubham Palace, Karmanghat<br />
                    Saroornagar, Vijaypuri Colony<br />
                    Hyderabad, Telangana
                  </p>
                  <span className="text-primary text-sm font-semibold mt-2 inline-block">
                    Get Directions →
                  </span>
                </div>
              </motion.a>

              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                href="tel:+919666665968"
                className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:glow-cyan transition-all">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-bold mb-1">Call Us</h3>
                  <p className="text-muted-foreground text-sm">+91 96666 65968</p>
                  <span className="text-accent text-sm font-semibold mt-2 inline-block">
                    Tap to Call →
                  </span>
                </div>
              </motion.a>

              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                href="mailto:info@sridazzlingdetailers.com"
                className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold mb-1">Email Us</h3>
                  <p className="text-muted-foreground text-sm">info@sridazzlingdetailers.com</p>
                </div>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-bold mb-1">Working Hours</h3>
                  <p className="text-muted-foreground text-sm">
                    Monday - Sunday<br />
                    9:00 AM - 8:00 PM
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="h-[400px] lg:h-full min-h-[400px] rounded-2xl overflow-hidden border border-border"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.4076882453014!2d78.53191497493368!3d17.344104683535736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99000b813643%3A0xff86a4fcbab19ed8!2sSri%20Dazzling%20Detailers!5e0!3m2!1sen!2sin!4v1768130478431!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feedback / Complaint Box */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent font-display text-sm font-semibold tracking-wider mb-4">
              CLIENT VOICE
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black mb-4">
              Share Your <span className="gradient-text-gold-cyan">Experience</span>
            </h2>
            <p className="text-muted-foreground">
              Your feedback helps us improve. Let us know how we did or report any concerns.
            </p>
          </motion.div>

          {feedbackSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center p-12 rounded-3xl bg-card border border-border"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle className="w-10 h-10 text-accent" />
              </motion.div>
              <h3 className="font-display text-2xl font-bold mb-2">Thank You!</h3>
              <p className="text-muted-foreground">
                Your {feedbackForm.type} has been received. We'll respond within 24 hours.
              </p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleFeedbackSubmit}
              className="p-8 rounded-3xl bg-card border border-border"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={feedbackForm.name}
                    onChange={handleFeedbackChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={feedbackForm.phone}
                    onChange={handleFeedbackChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm text-muted-foreground mb-2">Type *</label>
                <select
                  name="type"
                  value={feedbackForm.type}
                  onChange={handleFeedbackChange}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                >
                  <option value="feedback">Feedback / Suggestion</option>
                  <option value="complaint">Complaint</option>
                  <option value="inquiry">General Inquiry</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm text-muted-foreground mb-2">Message *</label>
                <textarea
                  name="message"
                  value={feedbackForm.message}
                  onChange={handleFeedbackChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                  placeholder="Share your experience or concern..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 rounded-xl bg-accent text-accent-foreground font-display font-bold tracking-wider flex items-center justify-center gap-2 hover:glow-cyan transition-all"
              >
                <Send className="w-5 h-5" />
                SUBMIT
              </motion.button>
            </motion.form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
