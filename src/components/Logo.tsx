import { motion } from 'framer-motion';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const Logo = ({ size = 'md', showText = true }: LogoProps) => {
  const sizes = {
    sm: { icon: 'w-28 h-14', text: 'text-xs', gap: 'gap-0.5' },
    md: { icon: 'w-40 h-18', text: 'text-sm', gap: 'gap-1' },
    lg: { icon: 'w-56 h-24', text: 'text-xl', gap: 'gap-2' },
  };

  return (
    <motion.div 
      className={`flex flex-col items-center ${sizes[size].gap}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Exact Sports Car Silhouette - Matching the signboard exactly */}
      <div className="relative">
        <svg
          viewBox="0 0 280 80"
          className={sizes[size].icon}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Solid red fill for the car shape */}
          <defs>
            <linearGradient id="carRedSolid" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E53935" />
              <stop offset="100%" stopColor="#D32F2F" />
            </linearGradient>
          </defs>

          {/* Main car body - thick solid red curves matching signboard */}
          {/* Rear section with D lettermark */}
          <path
            d="M25 55
               C25 55, 25 40, 35 35
               C45 30, 50 35, 55 40
               C60 45, 60 55, 60 55"
            stroke="#E53935"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          
          {/* D horizontal bar */}
          <path
            d="M28 45 L55 45"
            stroke="#E53935"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
          />

          {/* Lower body line - rear to front */}
          <path
            d="M55 55
               C70 55, 85 52, 100 50
               C130 46, 160 44, 190 44
               C210 44, 230 46, 250 52
               L260 55"
            stroke="#E53935"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Roof swoosh - the distinctive curved roof line */}
          <path
            d="M60 38
               C75 28, 95 18, 120 12
               C145 6, 175 6, 200 12
               C215 16, 225 22, 235 30"
            stroke="#E53935"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Upper roof accent line */}
          <path
            d="M85 18
               C105 10, 135 6, 165 6
               C190 6, 210 10, 225 18"
            stroke="#E53935"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Front hood swooping down */}
          <path
            d="M235 30
               C245 38, 255 48, 260 55"
            stroke="#E53935"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Rear wheel arch curve */}
          <path
            d="M70 55
               C72 62, 85 68, 100 62
               C108 58, 110 55, 110 55"
            stroke="#E53935"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Front wheel arch curve */}
          <path
            d="M200 55
               C202 62, 215 68, 230 62
               C238 58, 240 55, 240 55"
            stroke="#E53935"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Small accent line at rear */}
          <path
            d="M35 52 L45 48"
            stroke="#E53935"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>

      {/* Text Logo - Clean white text matching signboard */}
      {showText && (
        <div className="flex items-center justify-center">
          <span className={`font-display ${sizes[size].text} font-bold tracking-[0.25em] text-foreground uppercase`}>
            Dazzling Detailers
          </span>
        </div>
      )}
    </motion.div>
  );
};

export default Logo;
