import { motion } from 'framer-motion';
import fullLogo from '@/assets/logo-full-source.png';
import carSilhouette from '@/assets/logo-car-silhouette.png';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const Logo = ({ size = 'md', showText = true }: LogoProps) => {
  const sizes = {
    sm: { full: 'w-40 h-10', car: 'w-28 h-8' },
    md: { full: 'w-52 h-12', car: 'w-36 h-10' },
    lg: { full: 'w-72 h-16', car: 'w-56 h-16' },
  } as const;

  return (
    <motion.div
      className="flex flex-col items-center"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Uses your exact signboard image so it looks 1:1 same */}
      <img
        src={showText ? fullLogo : carSilhouette}
        alt={
          showText
            ? 'Dazzling Detailers logo (car silhouette with text)'
            : 'Dazzling Detailers car silhouette logo'
        }
        className={`${showText ? sizes[size].full : sizes[size].car} object-contain select-none`}
        draggable={false}
        decoding="async"
      />
    </motion.div>
  );
};

export default Logo;
