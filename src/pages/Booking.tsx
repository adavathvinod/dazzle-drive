import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Car, User, Phone, Mail, MessageSquare, Sparkles, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingCTAs from '@/components/FloatingCTAs';
import MusicPlayer from '@/components/MusicPlayer';
import { useToast } from '@/hooks/use-toast';

const services = [
  { id: 'ppf', name: 'Paint Protection Film (PPF)', price: '₹25,000+' },
  { id: 'ceramic', name: 'Ceramic Coating', price: '₹12,000+' },
  { id: 'graphene', name: 'Graphene Coating', price: '₹18,000+' },
  { id: 'interior', name: 'Interior Detailing', price: '₹3,500+' },
  { id: 'paint', name: 'Paint Correction', price: '₹8,000+' },
  { id: 'body', name: 'Auto Body Work', price: '₹5,000+' },
  { id: 'wash', name: 'Premium Car Wash', price: '₹500+' },
];

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM',
];

const carTypes = [
  'Hatchback', 'Sedan', 'SUV', 'Luxury Sedan', 'Sports Car', 'Premium SUV', 'Other'
];

const Booking = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    carType: '',
    carBrand: '',
    carModel: '',
    service: '',
    date: '',
    time: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setIsSubmitted(true);
    toast({
      title: "Booking Request Sent!",
      description: "We'll contact you shortly to confirm your appointment.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <FloatingCTAs />
        <MusicPlayer />
        
        <section className="pt-32 pb-20 min-h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center max-w-md mx-auto px-4"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-12 h-12 text-primary" />
            </motion.div>
            <h2 className="font-display text-3xl font-black mb-4">
              Booking <span className="gradient-text-gold">Confirmed!</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Thank you for choosing Sri Dazzling Detailers. We'll call you at <strong className="text-foreground">{formData.phone}</strong> to confirm your appointment.
            </p>
            <div className="p-6 rounded-2xl bg-card border border-border text-left">
              <h3 className="font-display font-bold mb-4 text-primary">Booking Details</h3>
              <div className="space-y-2 text-sm">
                <p><span className="text-muted-foreground">Service:</span> <span className="text-foreground">{services.find(s => s.id === formData.service)?.name}</span></p>
                <p><span className="text-muted-foreground">Date:</span> <span className="text-foreground">{formData.date}</span></p>
                <p><span className="text-muted-foreground">Time:</span> <span className="text-foreground">{formData.time}</span></p>
                <p><span className="text-muted-foreground">Vehicle:</span> <span className="text-foreground">{formData.carBrand} {formData.carModel}</span></p>
              </div>
            </div>
          </motion.div>
        </section>
        
        <Footer />
      </div>
    );
  }

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
              BOOKING ENGINE
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-black mb-6">
              Schedule Your <span className="gradient-text-gold-cyan">Appointment</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Book your preferred service and time slot. We'll confirm your appointment within 2 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="p-8 rounded-3xl bg-card border border-border"
          >
            {/* Personal Info */}
            <div className="mb-8">
              <h3 className="font-display text-xl font-bold mb-6 flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
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
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm text-muted-foreground mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
            </div>

            {/* Vehicle Info */}
            <div className="mb-8">
              <h3 className="font-display text-xl font-bold mb-6 flex items-center gap-2">
                <Car className="w-5 h-5 text-accent" />
                Vehicle Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Vehicle Type *</label>
                  <select
                    name="carType"
                    value={formData.carType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  >
                    <option value="">Select type</option>
                    {carTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Brand *</label>
                  <input
                    type="text"
                    name="carBrand"
                    value={formData.carBrand}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="e.g., Mercedes"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Model *</label>
                  <input
                    type="text"
                    name="carModel"
                    value={formData.carModel}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="e.g., E-Class"
                  />
                </div>
              </div>
            </div>

            {/* Service Selection */}
            <div className="mb-8">
              <h3 className="font-display text-xl font-bold mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                Select Service
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {services.map((service) => (
                  <label
                    key={service.id}
                    className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                      formData.service === service.id
                        ? 'border-primary bg-primary/10'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="service"
                        value={service.id}
                        checked={formData.service === service.id}
                        onChange={handleChange}
                        className="w-4 h-4 accent-primary"
                      />
                      <span className="text-foreground">{service.name}</span>
                    </div>
                    <span className="text-sm text-primary font-semibold">{service.price}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Date & Time */}
            <div className="mb-8">
              <h3 className="font-display text-xl font-bold mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-accent" />
                Preferred Date & Time
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Date *</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Time Slot *</label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  >
                    <option value="">Select time</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Notes */}
            <div className="mb-8">
              <h3 className="font-display text-xl font-bold mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                Additional Notes
              </h3>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                placeholder="Any specific requirements or concerns..."
              />
            </div>

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-display font-bold tracking-wider text-lg hover:glow-gold transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              CONFIRM BOOKING
            </motion.button>

            <p className="text-center text-sm text-muted-foreground mt-4">
              We'll call you within 2 hours to confirm your appointment
            </p>
          </motion.form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Booking;
