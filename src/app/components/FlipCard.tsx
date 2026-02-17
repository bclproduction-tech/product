import { useState } from 'react';
import { motion } from 'motion/react';

interface FlipCardProps {
  image: string;
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}

export function FlipCard({ image, title, description, isActive, onClick }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    onClick();
    setIsFlipped(!isFlipped);
  };

  return (
    <motion.div
      className="relative min-w-[300px] h-[400px] cursor-pointer"
      style={{ perspective: '1000px' }}
      onClick={handleClick}
      whileHover={{ scale: isActive ? 1.05 : 1.02 }}
      animate={{
        scale: isActive ? 1.05 : 1,
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="relative w-full h-full rounded-3xl"
        style={{
          transformStyle: 'preserve-3d',
          willChange: 'transform',
        }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {/* Front of card */}
        <div
          className="absolute inset-0 rounded-3xl overflow-hidden"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          <div className="relative w-full h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden group">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
              <button className="px-4 py-2 bg-gradient-to-r from-[#8B1538] to-[#C1164A] text-white rounded-full text-sm font-medium hover:shadow-lg hover:shadow-maroon-500/50 transition-all duration-300">
                Learn More
              </button>
            </div>
            {isActive && (
              <div className="absolute inset-0 ring-2 ring-[#C1164A] rounded-3xl pointer-events-none" />
            )}
          </div>
        </div>

        {/* Back of card */}
        <div
          className="absolute inset-0 rounded-3xl overflow-hidden"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] backdrop-blur-lg border border-white/20 rounded-3xl p-8 flex flex-col justify-center items-center">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#f4e5c2] to-[#d4af37] bg-clip-text text-transparent mb-6">
              {title}
            </h3>
            <p className="text-gray-300 text-center leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}