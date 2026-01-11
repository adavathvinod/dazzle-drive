import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingCTAs from '@/components/FloatingCTAs';
import MusicPlayer from '@/components/MusicPlayer';

// Real gallery images
import galleryBmwRed from '@/assets/gallery-bmw-red.png';
import galleryRoyalEnfield from '@/assets/gallery-royal-enfield.png';
import galleryPolishing from '@/assets/gallery-polishing.png';
import galleryDefender from '@/assets/gallery-defender.png';
import galleryHyundai from '@/assets/gallery-hyundai.png';

// Before/After transformation items
const transformationItems = [
  {
    id: 1,
    before: galleryBmwRed,
    after: galleryBmwRed,
    title: 'BMW 3 Series',
    service: 'Ceramic Coating',
    description: 'Full exterior ceramic coating with paint correction for mirror-like finish',
    beforeLabel: 'Before Wash',
    afterLabel: 'After Detailing',
  },
  {
    id: 2,
    before: galleryRoyalEnfield,
    after: galleryRoyalEnfield,
    title: 'Royal Enfield Classic',
    service: 'Premium Bike Detailing',
    description: 'Complete motorcycle detailing with chrome polishing',
    beforeLabel: 'Before Polish',
    afterLabel: 'After Polish',
  },
  {
    id: 3,
    before: galleryDefender,
    after: galleryDefender,
    title: 'Land Rover Defender',
    service: 'PPF Installation',
    description: 'Full body paint protection film for ultimate protection',
    beforeLabel: 'Before PPF',
    afterLabel: 'After PPF',
  },
  {
    id: 4,
    before: galleryHyundai,
    after: galleryHyundai,
    title: 'Hyundai Creta',
    service: 'Interior Detailing',
    description: 'Deep interior cleaning with leather conditioning',
    beforeLabel: 'Before Clean',
    afterLabel: 'After Clean',
  },
];

// Showcase gallery items
const showcaseItems = [
  {
    id: 1,
    image: galleryBmwRed,
    title: 'BMW 3 Series - Ceramic Coated',
    category: 'Ceramic Coating',
  },
  {
    id: 2,
    image: galleryRoyalEnfield,
    title: 'Royal Enfield - Premium Detail',
    category: 'Bike Detailing',
  },
  {
    id: 3,
    image: galleryPolishing,
    title: 'Expert Polishing in Action',
    category: 'Paint Correction',
  },
  {
    id: 4,
    image: galleryDefender,
    title: 'Land Rover Defender - PPF',
    category: 'PPF Installation',
  },
  {
    id: 5,
    image: galleryHyundai,
    title: 'Hyundai Creta - Studio Finish',
    category: 'Full Detail',
  },
];

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState<typeof transformationItems[0] | null>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [activeTab, setActiveTab] = useState<'transformations' | 'showcase'>('transformations');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, x)));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, x)));
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
              THE DAZZLE GALLERY
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-black mb-6">
              Before & <span className="gradient-text-gold-cyan">After</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Witness the incredible transformations. Real work from our Hyderabad studio.
            </p>

            {/* Tab Switcher */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setActiveTab('transformations')}
                className={`px-6 py-3 rounded-full font-display text-sm font-semibold tracking-wider transition-all ${
                  activeTab === 'transformations'
                    ? 'bg-primary text-primary-foreground glow-gold'
                    : 'bg-card border border-border text-muted-foreground hover:text-foreground'
                }`}
              >
                <Sparkles className="w-4 h-4 inline mr-2" />
                Transformations
              </button>
              <button
                onClick={() => setActiveTab('showcase')}
                className={`px-6 py-3 rounded-full font-display text-sm font-semibold tracking-wider transition-all ${
                  activeTab === 'showcase'
                    ? 'bg-primary text-primary-foreground glow-gold'
                    : 'bg-card border border-border text-muted-foreground hover:text-foreground'
                }`}
              >
                Showcase
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Transformations Section */}
      {activeTab === 'transformations' && (
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {transformationItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  onClick={() => {
                    setSelectedItem(item);
                    setSliderPosition(50);
                  }}
                  className="group cursor-pointer"
                >
                  <div className="relative rounded-2xl overflow-hidden border border-border bg-card">
                    {/* Before/After Preview */}
                    <div className="relative h-72 overflow-hidden">
                      {/* After (Full) */}
                      <img
                        src={item.after}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      {/* Before Overlay (Left half) */}
                      <div className="absolute inset-0 w-1/2 overflow-hidden border-r-2 border-primary">
                        <img
                          src={item.before}
                          alt={`${item.title} before`}
                          className="w-[200%] h-full object-cover filter grayscale brightness-75"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" />
                      </div>

                      {/* Labels */}
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/90 text-xs font-semibold">
                        {item.beforeLabel}
                      </div>
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                        {item.afterLabel}
                      </div>

                      {/* Divider Line */}
                      <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-primary" />
                      
                      {/* Click to Compare */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background/40">
                        <span className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                          Click to Compare
                        </span>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-5">
                      <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold mb-2">
                        {item.service}
                      </span>
                      <h3 className="font-display text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Showcase Section */}
      {activeTab === 'showcase' && (
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {showcaseItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <div className="relative h-80 rounded-2xl overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block px-2 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold mb-2">
                        {item.category}
                      </span>
                      <h3 className="font-display text-lg font-bold">{item.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox with Before/After Slider */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute -top-12 right-0 p-2 rounded-full bg-card border border-border hover:border-primary transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Title */}
              <div className="text-center mb-6">
                <h3 className="font-display text-2xl font-bold">{selectedItem.title}</h3>
                <p className="text-accent">{selectedItem.service}</p>
              </div>

              {/* Before/After Slider */}
              <div
                className="relative h-[60vh] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-border"
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onMouseMove={handleMouseMove}
                onTouchStart={() => setIsDragging(true)}
                onTouchEnd={() => setIsDragging(false)}
                onTouchMove={handleTouchMove}
              >
                {/* After Image (Background - Full color) */}
                <img
                  src={selectedItem.after}
                  alt="After"
                  className="absolute inset-0 w-full h-full object-cover"
                  draggable={false}
                />

                {/* Before Image (Clipped - Grayscale effect) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={selectedItem.before}
                    alt="Before"
                    className="absolute inset-0 w-full h-full object-cover filter grayscale brightness-75"
                    style={{ width: `${100 / (sliderPosition / 100)}%` }}
                    draggable={false}
                  />
                </div>

                {/* Slider Handle */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-primary cursor-ew-resize"
                  style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-gold">
                    <ChevronLeft className="w-4 h-4 text-primary-foreground" />
                    <ChevronRight className="w-4 h-4 text-primary-foreground" />
                  </div>
                </div>

                {/* Labels */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/80 text-sm font-semibold">
                  {selectedItem.beforeLabel}
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                  {selectedItem.afterLabel}
                </div>
              </div>

              <p className="text-center text-muted-foreground mt-4 text-sm">
                Drag the slider to compare {selectedItem.beforeLabel.toLowerCase()} and {selectedItem.afterLabel.toLowerCase()}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Gallery;
