import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

interface StatCardProps {
  number: string;
  label: string;
  suffix?: string;
  prefix?: string;
  delay?: number;
}

export function StatCard({ number, label, suffix = '', prefix = '', delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="relative group"
    >
      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:border-[#C1164A]/50 transition-all duration-300 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B1538]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <motion.div
          className="relative z-10 text-5xl md:text-6xl font-bold mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: delay + 0.2 }}
        >
          <span className="bg-gradient-to-r from-[#C1164A] via-[#E8E8E8] to-[#4a90e2] bg-clip-text text-transparent">
            {prefix}{number}{suffix}
          </span>
        </motion.div>
        
        <motion.p
          className="relative z-10 text-gray-400 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: delay + 0.4 }}
        >
          {label}
        </motion.p>
      </div>
    </motion.div>
  );
}

export function ParallaxSection({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
}
