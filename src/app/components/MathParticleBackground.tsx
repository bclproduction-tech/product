import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface MathParticle {
  id: number;
  x: number;
  y: number;
  symbol: string;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

const mathSymbols = ['∑', '∫', 'π', '√', '∞', 'α', 'β', 'θ', 'Δ', '≈', '±', '÷', '×', '²', '³', 'φ', 'λ', 'μ'];
const colors = ['#C1164A', '#4a90e2', '#F5F5F5']; // Maroon, Blue, White

export function MathParticleBackground() {
  const [particles, setParticles] = useState<MathParticle[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: MathParticle[] = [];
      for (let i = 0; i < 30; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          symbol: mathSymbols[Math.floor(Math.random() * mathSymbols.length)],
          size: Math.random() * 20 + 20,
          duration: Math.random() * 15 + 20,
          delay: Math.random() * 5,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute font-bold"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            fontSize: particle.size,
            color: particle.color,
            textShadow: `0 0 20px ${particle.color}40`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.3, 1],
            rotate: [0, 360],
            color: colors,
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
            color: {
              duration: particle.duration / 3,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
        >
          {particle.symbol}
        </motion.div>
      ))}
    </div>
  );
}
