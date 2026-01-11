import { motion } from 'framer-motion';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const Logo = ({ size = 'md', showText = true }: LogoProps) => {
  const sizes = {
    sm: { svg: 'w-32 h-10', text: 'text-[10px]', gap: 'gap-0.5' },
    md: { svg: 'w-44 h-12', text: 'text-xs', gap: 'gap-1' },
    lg: { svg: 'w-64 h-16', text: 'text-sm', gap: 'gap-1.5' },
  } as const;

  return (
    <motion.div
      className={`flex flex-col items-center ${sizes[size].gap}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* HD Vector SVG - Exact trace of signboard logo */}
      <svg
        viewBox="0 0 320 80"
        className={sizes[size].svg}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Dazzling Detailers car logo"
      >
        <defs>
          <linearGradient id="logoRed" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E53935" />
            <stop offset="50%" stopColor="#EF5350" />
            <stop offset="100%" stopColor="#E53935" />
          </linearGradient>
        </defs>

        {/* Rear D-shaped section - curved back with horizontal bar */}
        <path
          d="M8 58
             C8 58, 6 45, 12 35
             C18 25, 28 22, 38 24
             C48 26, 55 32, 58 40"
          stroke="url(#logoRed)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* D horizontal crossbar */}
        <path
          d="M12 46 L52 38"
          stroke="url(#logoRed)"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
        />

        {/* Lower body line - flows from rear to front */}
        <path
          d="M55 58
             C75 54, 100 50, 140 48
             C180 46, 220 46, 260 50
             C280 52, 295 56, 308 60"
          stroke="url(#logoRed)"
          strokeWidth="9"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Main roof swoosh - top curve */}
        <path
          d="M58 36
             C70 26, 90 16, 120 10
             C150 4, 190 4, 220 10
             C245 15, 265 24, 285 38"
          stroke="url(#logoRed)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Upper accent roof line */}
        <path
          d="M85 16
             C110 8, 145 4, 180 4
             C215 4, 245 10, 268 22"
          stroke="url(#logoRed)"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Third inner roof line */}
        <path
          d="M100 24
             C125 16, 160 12, 195 14
             C225 16, 250 24, 270 36"
          stroke="url(#logoRed)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Front hood swooping down */}
        <path
          d="M285 38
             C295 46, 304 54, 310 62"
          stroke="url(#logoRed)"
          strokeWidth="9"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Rear wheel arch */}
        <path
          d="M70 60
             C75 68, 95 72, 115 66
             C125 62, 130 58, 132 56"
          stroke="url(#logoRed)"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Front wheel arch */}
        <path
          d="M230 56
             C235 64, 255 70, 275 64
             C285 60, 292 56, 295 54"
          stroke="url(#logoRed)"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>

      {/* Text - SRI DAZZLING DETAILERS */}
      {showText && (
        <span
          className={`font-display ${sizes[size].text} font-black tracking-[0.25em] text-foreground uppercase`}
        >
          SRI DAZZLING DETAILERS
        </span>
      )}
    </motion.div>
  );
};

export default Logo;
