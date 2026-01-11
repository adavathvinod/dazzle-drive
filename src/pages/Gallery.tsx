import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingCTAs from '@/components/FloatingCTAs';
import MusicPlayer from '@/components/MusicPlayer';

import heroMercedes from '@/assets/hero-mercedes.jpg';
import heroBmw from '@/assets/hero-bmw-ppf.jpg';
import heroPorsche from '@/assets/hero-porsche.jpg';

const galleryItems = [
  {
    id: 1,
    before: heroBmw,
    after: heroMercedes,
    title: 'Mercedes AMG GT',
    service: 'Ceramic Coating',
    description: 'Full ceramic coating with paint correction',
  },
  {
    id: 2,
    before: heroPorsche,
    after: heroBmw,
    title: 'BMW M4',
    service: 'PPF Installation',
    description: 'Full body paint protection film',
  },
  {
    id: 3,
    before: heroMercedes,
    after: heroPorsche,
    title: 'Porsche 911 Turbo',
    service: 'Graphene Coating',
    description: 'Advanced graphene protection',
  },
  {
    id: 4,
    before: heroBmw,
    after: heroPorsche,
    title: 'Audi RS7',
    service: 'Paint Correction',
    description: 'Multi-stage paint correction',
  },
  {
    id: 5,
    before: heroMercedes,
    after: heroBmw,
    title: 'Range Rover Sport',
    service: 'Interior Detailing',
    description: 'Complete interior restoration',
  },
  {
    id: 6,
    before: heroPorsche,
    after: heroMercedes,
    title: 'Jaguar F-Type',
    service: 'Full Detail Package',
    description: 'Exterior and interior deep clean',
  },
];

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

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
            <p className="text-muted-foreground text-lg">
              Witness the incredible transformations. Drag the slider to see the difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                onClick={() => {
                  setSelectedItem(item);
                  setSliderPosition(50);
                }}
                className="group cursor-pointer"
              >
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <img
                    src={item.after}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-2 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold mb-2">
                      {item.service}
                    </span>
                    <h3 className="font-display text-xl font-bold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>

                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to Compare
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
                className="relative h-[60vh] rounded-2xl overflow-hidden cursor-ew-resize select-none"
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onMouseMove={handleMouseMove}
                onTouchStart={() => setIsDragging(true)}
                onTouchEnd={() => setIsDragging(false)}
                onTouchMove={handleTouchMove}
              >
                {/* After Image (Background) */}
                <img
                  src={selectedItem.after}
                  alt="After"
                  className="absolute inset-0 w-full h-full object-cover"
                  draggable={false}
                />

                {/* Before Image (Clipped) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={selectedItem.before}
                    alt="Before"
                    className="absolute inset-0 w-full h-full object-cover"
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
                  BEFORE
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                  AFTER
                </div>
              </div>

              <p className="text-center text-muted-foreground mt-4 text-sm">
                Drag the slider to compare before and after
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
