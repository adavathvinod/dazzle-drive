import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Car, Sparkles, ChevronRight } from 'lucide-react';

const vehicleTypes = [
  { id: 'hatchback', name: 'Hatchback', multiplier: 1.0 },
  { id: 'sedan', name: 'Sedan', multiplier: 1.15 },
  { id: 'suv', name: 'SUV', multiplier: 1.35 },
  { id: 'luxury', name: 'Luxury Sedan', multiplier: 1.5 },
  { id: 'sports', name: 'Sports Car', multiplier: 1.6 },
  { id: 'premium-suv', name: 'Premium SUV', multiplier: 1.75 },
];

const services = [
  { id: 'wash', name: 'Premium Car Wash', basePrice: 500, icon: '🚿' },
  { id: 'interior', name: 'Interior Detailing', basePrice: 3500, icon: '🧹' },
  { id: 'exterior', name: 'Exterior Polish', basePrice: 2500, icon: '✨' },
  { id: 'paint', name: 'Paint Correction', basePrice: 8000, icon: '🎨' },
  { id: 'ceramic', name: 'Ceramic Coating', basePrice: 12000, icon: '💎' },
  { id: 'graphene', name: 'Graphene Coating', basePrice: 18000, icon: '⚡' },
  { id: 'ppf', name: 'Paint Protection Film', basePrice: 25000, icon: '🛡️' },
];

const PriceEstimator = () => {
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const estimatedPrice = useMemo(() => {
    if (!selectedVehicle || selectedServices.length === 0) return null;

    const vehicleMultiplier = vehicleTypes.find((v) => v.id === selectedVehicle)?.multiplier || 1;
    const servicesTotal = selectedServices.reduce((total, serviceId) => {
      const service = services.find((s) => s.id === serviceId);
      return total + (service?.basePrice || 0);
    }, 0);

    const minPrice = Math.round(servicesTotal * vehicleMultiplier);
    const maxPrice = Math.round(minPrice * 1.25);

    return { min: minPrice, max: maxPrice };
  }, [selectedVehicle, selectedServices]);

  const handleWhatsAppBooking = () => {
    const vehicleName = vehicleTypes.find((v) => v.id === selectedVehicle)?.name || 'Vehicle';
    const serviceNames = selectedServices
      .map((id) => services.find((s) => s.id === id)?.name)
      .filter(Boolean)
      .join(', ');
    
    const message = `Hi! I'd like to book an appointment.\n\nVehicle: ${vehicleName}\nServices: ${serviceNames}\nEstimated Price: ₹${estimatedPrice?.min?.toLocaleString()} - ₹${estimatedPrice?.max?.toLocaleString()}\n\nPlease confirm availability.`;
    
    const whatsappUrl = `https://wa.me/918019130798?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-6 md:p-8 rounded-3xl bg-card border border-border"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
          <Calculator className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="font-display text-xl font-bold">Price Estimator</h3>
          <p className="text-sm text-muted-foreground">Get an instant quote</p>
        </div>
      </div>

      {/* Vehicle Selection */}
      <div className="mb-6">
        <label className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <Car className="w-4 h-4" />
          Select Your Vehicle Type
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {vehicleTypes.map((vehicle) => (
            <button
              key={vehicle.id}
              onClick={() => setSelectedVehicle(vehicle.id)}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                selectedVehicle === vehicle.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-background border border-border hover:border-primary/50'
              }`}
            >
              {vehicle.name}
            </button>
          ))}
        </div>
      </div>

      {/* Service Selection */}
      <div className="mb-6">
        <label className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <Sparkles className="w-4 h-4" />
          Select Services (Multiple)
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => toggleService(service.id)}
              className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm transition-all ${
                selectedServices.includes(service.id)
                  ? 'bg-accent/20 border border-accent text-foreground'
                  : 'bg-background border border-border hover:border-accent/50'
              }`}
            >
              <span className="flex items-center gap-2">
                <span>{service.icon}</span>
                <span>{service.name}</span>
              </span>
              <span className="text-muted-foreground text-xs">₹{service.basePrice.toLocaleString()}+</span>
            </button>
          ))}
        </div>
      </div>

      {/* Price Display */}
      {estimatedPrice && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/30 mb-4"
        >
          <p className="text-sm text-muted-foreground mb-2">Estimated Price Range</p>
          <div className="flex items-baseline gap-2">
            <span className="font-display text-3xl md:text-4xl font-black gradient-text-gold">
              ₹{estimatedPrice.min.toLocaleString()}
            </span>
            <span className="text-muted-foreground">-</span>
            <span className="font-display text-2xl md:text-3xl font-bold text-accent">
              ₹{estimatedPrice.max.toLocaleString()}
            </span>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            * Final price may vary based on vehicle condition and specific requirements
          </p>
        </motion.div>
      )}

      {/* Book Now Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleWhatsAppBooking}
        disabled={!estimatedPrice}
        className={`w-full py-4 rounded-xl font-display font-bold tracking-wider flex items-center justify-center gap-2 transition-all ${
          estimatedPrice
            ? 'bg-[#25D366] text-white hover:bg-[#128C7E]'
            : 'bg-muted text-muted-foreground cursor-not-allowed'
        }`}
      >
        Book via WhatsApp
        <ChevronRight className="w-5 h-5" />
      </motion.button>
    </motion.div>
  );
};

export default PriceEstimator;
