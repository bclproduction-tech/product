import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';
import hesabuSafiImg from '../../assets/img/Hesabu_safi.png';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Screenshots', href: '#screenshots' },
    { label: 'Why Hesabu Safi', href: '#why' },
    { label: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/40 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img
              src={hesabuSafiImg}
              alt="Hesabu Safi"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex items-center gap-0.5">
              <span className="text-xl font-bold bg-gradient-to-r from-[#E8E8E8] via-[#F5F5F5] to-[#D3D3D3] bg-clip-text text-transparent">
                Hesabu
              </span>
              <span className="text-xl font-bold text-yellow-400">
                Safi
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://bcl.co.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-gradient-to-r from-[#8B1538] to-[#C1164A] text-white rounded-full hover:shadow-lg hover:shadow-maroon-500/50 transition-all duration-300 text-sm"
            >
              Back to BCL
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-gray-300 hover:text-white transition-colors duration-200 py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    const element = document.querySelector(link.href);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://bcl.co.ke"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-5 py-3 bg-gradient-to-r from-[#4a90e2] to-[#6ba3e8] text-white rounded-full text-center hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
              >
                Back to BCL
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}