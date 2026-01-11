import { motion } from 'framer-motion';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const Logo = ({ size = 'md', showText = true }: LogoProps) => {
  const sizes = {
    sm: { container: 'h-10', icon: 'w-16 h-10', text: 'text-[10px]', subtext: 'text-[8px]', gap: 'gap-1.5' },
    md: { container: 'h-12', icon: 'w-20 h-12', text: 'text-xs', subtext: 'text-[9px]', gap: 'gap-2' },
    lg: { container: 'h-20', icon: 'w-32 h-20', text: 'text-base', subtext: 'text-xs', gap: 'gap-3' },
  };

  return (
    <motion.div 
      className={`flex items-center ${sizes[size].gap}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* HD Sports Car Silhouette */}
      <div className="relative">
        <svg
          viewBox="0 0 180 80"
          className={sizes[size].icon}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Premium Gradient */}
            <linearGradient id="logoGradientPrimary" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="50%" stopColor="hsl(40, 100%, 60%)" />
              <stop offset="100%" stopColor="hsl(var(--accent))" />
            </linearGradient>
            
            <linearGradient id="logoGradientBody" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.9" />
              <stop offset="100%" stopColor="hsl(40, 100%, 70%)" stopOpacity="0.3" />
            </linearGradient>

            {/* Glow Filter */}
            <filter id="logoGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Chrome Effect */}
            <linearGradient id="chromeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="40%" stopColor="#cccccc" stopOpacity="0.7" />
              <stop offset="60%" stopColor="#666666" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#999999" stopOpacity="0.9" />
            </linearGradient>
          </defs>

          {/* Speed Lines Background */}
          <path d="M5 42 L20 42" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
          <path d="M8 46 L18 46" stroke="hsl(var(--accent))" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
          <path d="M3 38 L15 38" stroke="hsl(var(--primary))" strokeWidth="1" strokeLinecap="round" opacity="0.3" />

          {/* Car Body - Main Shape */}
          <path
            d="M25 52 
               L30 52 L32 48 L38 44 
               L55 38 L70 32 L95 28 L125 28 
               L145 32 L155 38 L162 44 L165 48 L168 52 
               L170 52"
            stroke="url(#logoGradientPrimary)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="url(#logoGradientBody)"
            filter="url(#logoGlow)"
          />

          {/* Car Roof / Cabin */}
          <path
            d="M58 38 L68 24 L75 20 L110 18 L125 20 L135 26 L142 34"
            stroke="url(#logoGradientPrimary)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            filter="url(#logoGlow)"
          />

          {/* Window Glass Effect */}
          <path
            d="M70 35 L76 24 L108 22 L120 24 L130 30 L135 35"
            stroke="hsl(var(--accent))"
            strokeWidth="1"
            strokeLinecap="round"
            fill="hsl(var(--accent))"
            fillOpacity="0.15"
          />

          {/* Headlight */}
          <ellipse cx="160" cy="44" rx="4" ry="3" fill="hsl(var(--accent))" opacity="0.9" />
          <ellipse cx="160" cy="44" rx="2" ry="1.5" fill="white" opacity="0.8" />

          {/* Taillight */}
          <ellipse cx="30" cy="46" rx="3" ry="2" fill="hsl(0, 100%, 50%)" opacity="0.8" />

          {/* Front Wheel */}
          <circle cx="145" cy="54" r="12" stroke="url(#logoGradientPrimary)" strokeWidth="2.5" fill="none" filter="url(#logoGlow)" />
          <circle cx="145" cy="54" r="8" stroke="url(#chromeGradient)" strokeWidth="1.5" fill="none" />
          <circle cx="145" cy="54" r="4" fill="hsl(var(--primary))" />
          {/* Wheel Spokes */}
          <path d="M145 46 L145 50" stroke="url(#chromeGradient)" strokeWidth="1" />
          <path d="M145 58 L145 62" stroke="url(#chromeGradient)" strokeWidth="1" />
          <path d="M137 54 L141 54" stroke="url(#chromeGradient)" strokeWidth="1" />
          <path d="M149 54 L153 54" stroke="url(#chromeGradient)" strokeWidth="1" />

          {/* Rear Wheel */}
          <circle cx="50" cy="54" r="12" stroke="url(#logoGradientPrimary)" strokeWidth="2.5" fill="none" filter="url(#logoGlow)" />
          <circle cx="50" cy="54" r="8" stroke="url(#chromeGradient)" strokeWidth="1.5" fill="none" />
          <circle cx="50" cy="54" r="4" fill="hsl(var(--primary))" />
          {/* Wheel Spokes */}
          <path d="M50 46 L50 50" stroke="url(#chromeGradient)" strokeWidth="1" />
          <path d="M50 58 L50 62" stroke="url(#chromeGradient)" strokeWidth="1" />
          <path d="M42 54 L46 54" stroke="url(#chromeGradient)" strokeWidth="1" />
          <path d="M54 54 L58 54" stroke="url(#chromeGradient)" strokeWidth="1" />

          {/* Body Line Details */}
          <path d="M60 45 L130 40" stroke="hsl(var(--primary))" strokeWidth="0.8" opacity="0.5" />
          <path d="M65 48 L125 44" stroke="hsl(var(--accent))" strokeWidth="0.5" opacity="0.4" />

          {/* Mirror */}
          <ellipse cx="68" cy="32" rx="2" ry="1.5" fill="hsl(var(--primary))" opacity="0.8" />
        </svg>

        {/* Ambient Glow */}
        <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-primary/30 via-accent/20 to-primary/30 -z-10" />
      </div>

      {/* Text Logo */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span className="font-display text-[8px] font-bold text-primary/80 tracking-[0.2em] mb-0.5">
            SRI
          </span>
          <span className={`font-display ${sizes[size].text} font-black gradient-text-gold tracking-wider leading-tight`}>
            DAZZLING
          </span>
          <span className={`font-display ${sizes[size].subtext} font-semibold text-accent tracking-[0.25em] leading-tight`}>
            DETAILERS
          </span>
        </div>
      )}
    </motion.div>
  );
};

export default Logo;
