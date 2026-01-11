import { motion } from 'framer-motion';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const Logo = ({ size = 'md', showText = true }: LogoProps) => {
  const sizes = {
    sm: { icon: 'w-8 h-8', text: 'text-sm', subtext: 'text-[10px]' },
    md: { icon: 'w-10 h-10', text: 'text-lg', subtext: 'text-xs' },
    lg: { icon: 'w-16 h-16', text: 'text-2xl', subtext: 'text-sm' },
  };

  return (
    <div className="flex items-center gap-3">
      {/* Custom Car Logo Icon */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        <svg
          viewBox="0 0 120 60"
          className={`${sizes[size].icon}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Glow Effect */}
          <defs>
            <linearGradient id="carGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="hsl(var(--accent))" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Sleek Sports Car Silhouette */}
          <path
            d="M10 38 L25 38 L30 30 L50 25 L75 22 L95 25 L105 30 L110 38 L115 38"
            stroke="url(#carGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            filter="url(#glow)"
          />
          
          {/* Car Roof Line */}
          <path
            d="M45 30 L55 20 L80 18 L90 22"
            stroke="url(#carGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            filter="url(#glow)"
          />
          
          {/* Front Wheel */}
          <circle
            cx="32"
            cy="40"
            r="8"
            stroke="url(#carGradient)"
            strokeWidth="2"
            fill="none"
            filter="url(#glow)"
          />
          <circle
            cx="32"
            cy="40"
            r="3"
            fill="hsl(var(--primary))"
          />
          
          {/* Rear Wheel */}
          <circle
            cx="88"
            cy="40"
            r="8"
            stroke="url(#carGradient)"
            strokeWidth="2"
            fill="none"
            filter="url(#glow)"
          />
          <circle
            cx="88"
            cy="40"
            r="3"
            fill="hsl(var(--primary))"
          />
          
          {/* Speed Lines */}
          <path
            d="M5 32 L15 32"
            stroke="hsl(var(--accent))"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.7"
          />
          <path
            d="M2 36 L12 36"
            stroke="hsl(var(--accent))"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.5"
          />
        </svg>
        
        {/* Ambient Glow */}
        <div className="absolute inset-0 blur-xl bg-primary/20 -z-10" />
      </motion.div>

      {/* Text Logo */}
      {showText && (
        <div className="flex flex-col leading-tight">
          <span className={`font-display ${sizes[size].text} font-black gradient-text-gold tracking-wider`}>
            DAZZLING
          </span>
          <span className={`font-display ${sizes[size].subtext} font-semibold text-accent tracking-[0.35em]`}>
            DETAILERS
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
