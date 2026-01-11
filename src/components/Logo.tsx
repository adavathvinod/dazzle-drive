import { motion } from 'framer-motion';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const Logo = ({ size = 'md', showText = true }: LogoProps) => {
  const sizes = {
    sm: { icon: 'w-24 h-12', text: 'text-[11px]', gap: 'gap-1' },
    md: { icon: 'w-32 h-14', text: 'text-sm', gap: 'gap-1.5' },
    lg: { icon: 'w-48 h-20', text: 'text-lg', gap: 'gap-2' },
  };

  return (
    <motion.div 
      className={`flex flex-col items-center ${sizes[size].gap}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Exact Sports Car Silhouette - Matching the signboard */}
      <div className="relative">
        <svg
          viewBox="0 0 200 70"
          className={sizes[size].icon}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Red gradient matching the signboard */}
            <linearGradient id="carRedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#DC2626" />
              <stop offset="50%" stopColor="#EF4444" />
              <stop offset="100%" stopColor="#F97316" />
            </linearGradient>
            
            {/* Glow effect */}
            <filter id="redGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Main Car Body - Sleek flowing curves */}
          <path
            d="M15 48 
               C20 48, 25 46, 30 42
               C35 38, 45 32, 55 28
               C65 24, 80 20, 95 18
               C110 16, 125 16, 140 18
               C155 20, 165 24, 175 30
               C180 34, 185 38, 188 42
               C190 45, 192 47, 195 48"
            stroke="url(#carRedGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            filter="url(#redGlow)"
          />

          {/* Roof Line - Distinctive curve */}
          <path
            d="M55 28
               C60 22, 70 16, 85 12
               C100 8, 120 8, 135 12
               C145 15, 155 20, 165 28"
            stroke="url(#carRedGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            filter="url(#redGlow)"
          />

          {/* Top flowing line */}
          <path
            d="M75 14
               C85 10, 100 8, 115 8
               C130 8, 145 12, 155 18"
            stroke="url(#carRedGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            filter="url(#redGlow)"
          />

          {/* Front hood line */}
          <path
            d="M165 28 C175 32, 182 38, 188 44"
            stroke="url(#carRedGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            filter="url(#redGlow)"
          />

          {/* Rear trunk line */}
          <path
            d="M30 42 C25 44, 20 46, 18 47"
            stroke="url(#carRedGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            filter="url(#redGlow)"
          />

          {/* Front wheel arch hint */}
          <path
            d="M160 45 C165 50, 175 52, 180 48"
            stroke="url(#carRedGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.7"
          />

          {/* Rear wheel arch hint */}
          <path
            d="M35 45 C40 50, 50 52, 55 48"
            stroke="url(#carRedGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.7"
          />
        </svg>

        {/* Ambient glow */}
        <div className="absolute inset-0 blur-xl bg-red-500/20 -z-10" />
      </div>

      {/* Text Logo - Matching the signboard style */}
      {showText && (
        <div className="flex items-center justify-center">
          <span className={`font-display ${sizes[size].text} font-black tracking-[0.2em] text-foreground`}>
            DAZZLING DETAILERS
          </span>
        </div>
      )}
    </motion.div>
  );
};

export default Logo;
