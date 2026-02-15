import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface FeatureShowcaseProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  Icon: LucideIcon;
  reverse?: boolean;
}

export function FeatureShowcase({
  title,
  description,
  image,
  features,
  Icon,
  reverse = false,
}: FeatureShowcaseProps) {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
        reverse ? 'lg:flex-row-reverse' : ''
      }`}
    >
      <motion.div
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={reverse ? 'lg:order-2' : ''}
      >
        <div className="bg-gradient-to-br from-[#8B1538]/20 to-[#4a90e2]/10 rounded-2xl p-4 inline-block mb-6">
          <Icon className="w-12 h-12 text-[#C1164A]" />
        </div>
        
        <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#E8E8E8] to-[#C1164A] bg-clip-text text-transparent">
          {title}
        </h3>
        
        <p className="text-gray-400 text-lg mb-6 leading-relaxed">
          {description}
        </p>
        
        <div className="space-y-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#C1164A] to-[#4a90e2]" />
              <span className="text-gray-300">{feature}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: reverse ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={reverse ? 'lg:order-1' : ''}
      >
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-[#8B1538] to-[#4a90e2] rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
          
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden p-4">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
