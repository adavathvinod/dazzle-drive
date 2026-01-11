import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Music } from 'lucide-react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element with a free-to-use phonk/bass track
    audioRef.current = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(console.error);
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="fixed bottom-6 left-6 z-50"
    >
      <motion.button
        onClick={toggleMusic}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`relative flex items-center gap-3 px-5 py-3 rounded-full transition-all duration-300 ${
          isPlaying 
            ? 'bg-primary glow-gold-intense' 
            : 'glass border-gradient-gold'
        }`}
      >
        <motion.div
          animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
          transition={{ duration: 2, repeat: isPlaying ? Infinity : 0, ease: 'linear' }}
        >
          <Music className={`w-5 h-5 ${isPlaying ? 'text-primary-foreground' : 'text-primary'}`} />
        </motion.div>
        
        <span className={`font-display text-sm font-semibold ${isPlaying ? 'text-primary-foreground' : 'text-primary'}`}>
          {isPlaying ? 'DAZZLE MODE' : 'PLAY MUSIC'}
        </span>
        
        {isPlaying ? (
          <VolumeX className="w-5 h-5 text-primary-foreground" />
        ) : (
          <Volume2 className="w-5 h-5 text-primary" />
        )}

        {/* Animated rings when playing */}
        <AnimatePresence>
          {isPlaying && (
            <>
              <motion.div
                initial={{ scale: 1, opacity: 0.5 }}
                animate={{ scale: 2, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-primary"
              />
              <motion.div
                initial={{ scale: 1, opacity: 0.3 }}
                animate={{ scale: 2.5, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                className="absolute inset-0 rounded-full bg-primary"
              />
            </>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {showTooltip && !isPlaying && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-full left-0 mb-2 px-3 py-2 rounded-lg bg-card border border-border shadow-lg"
          >
            <p className="text-sm text-muted-foreground whitespace-nowrap">
              🎵 Activate Dazzle Mode with bass-heavy beats
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default MusicPlayer;
