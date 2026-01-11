import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Play } from 'lucide-react';

const reels = [
  {
    id: 1,
    url: 'https://www.instagram.com/reel/DTILG19EhHl/',
    embedUrl: 'https://www.instagram.com/reel/DTILG19EhHl/embed',
  },
  {
    id: 2,
    url: 'https://www.instagram.com/reel/DPoTmkMEiRm/',
    embedUrl: 'https://www.instagram.com/reel/DPoTmkMEiRm/embed',
  },
  {
    id: 3,
    url: 'https://www.instagram.com/reel/DPoTmkMEiRm/',
    embedUrl: 'https://www.instagram.com/reel/DPoTmkMEiRm/embed',
  },
];

const VideoTestimonials = () => {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Process embeds when script loads
    script.onload = () => {
      if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process();
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 text-pink-400 font-display text-sm font-semibold tracking-wider mb-4">
            <Instagram className="w-4 h-4" />
            VIDEO TESTIMONIALS
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black mb-4">
            Watch Our <span className="gradient-text-gold-cyan">Transformations</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real results from real customers. See the dazzling difference in action!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reels.map((reel, index) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="rounded-2xl overflow-hidden border border-border bg-card aspect-[9/16] relative">
                <iframe
                  src={reel.embedUrl}
                  className="w-full h-full"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency={true}
                  allowFullScreen={true}
                  title={`Instagram Reel ${reel.id}`}
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              {/* View on Instagram button */}
              <motion.a
                href={reel.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white text-sm font-semibold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
              >
                <Play className="w-4 h-4" />
                View on Instagram
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Follow CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://www.instagram.com/sri_dazzling_detailers/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white font-display font-bold tracking-wider hover:shadow-lg hover:shadow-pink-500/30 transition-all"
          >
            <Instagram className="w-5 h-5" />
            FOLLOW @SRI_DAZZLING_DETAILERS
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
