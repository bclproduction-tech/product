import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Slider from 'react-slick';
import {
  BookOpen,
  Calculator,
  Download,
  Lightbulb,
  Users,
  Zap,
  CheckCircle,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Globe,
  Shield,
  Wifi,
  WifiOff,
  Award,
  TrendingUp,
  Target,
  BookMarked,
  GraduationCap,
  Laptop,
  Smartphone,
  Tablet,
  Play,
  Star,
  Code,
  Brain,
} from 'lucide-react';
import { ParticleBackground } from './components/ParticleBackground';
import { MathParticleBackground } from './components/MathParticleBackground';
import hesabuImg from '../assets/img/Hesabu_safi.png';
import classImg from '../assets/img/class.png';
import screenshot1Img from '../assets/img/screenshot1.png';
import screenshot2Img from '../assets/img/screenshot2.png';
import screenshot3Img from '../assets/img/screenshot3.png';
import studentsImg from '../assets/img/students.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Navigation } from './components/Navigation';
import { FlipCard } from './components/FlipCard';
import { StatCard } from './components/AnimatedComponents';
import { FeatureShowcase } from './components/FeatureShowcase';
import { FAQItem } from './components/FAQItem';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function App() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const sliderRef = useRef<Slider>(null);
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const whyHesabuData = [
    {
      image: 'https://images.unsplash.com/photo-1667844141324-61585c18b0df?w=800',
      title: 'Built for CBC System',
      description:
        'Specifically designed for African education systems, aligned with the CBC curriculum for high school and junior secondary students.',
    },
    {
      image: 'https://images.unsplash.com/photo-1528901166007-3784c7dd3653?w=800',
      title: 'Works Offline',
      description:
        'No internet required. Perfect for areas with limited connectivity, ensuring uninterrupted learning anytime, anywhere.',
    },
    {
      image: 'https://images.unsplash.com/photo-1744809482817-9a9d4fc280af?w=800',
      title: 'Privacy First',
      description:
        'We don\'t track student progress or collect data. Your educational journey remains private and secure.',
    },
    {
      image: 'https://images.unsplash.com/photo-1758685848174-e061c6486651?w=800',
      title: 'Teacher Empowerment',
      description:
        'Designed to help teachers teach better with visual aids, step-by-step solutions, and comprehensive teaching resources.',
    },
  ];

  const screenshots = [
    {
      image: screenshot1Img,
      title: 'Interactive Problem Solving',
    },
    {
      image: screenshot2Img,
      title: 'Step-by-Step Solutions',
    },
    {
      image: screenshot3Img,
      title: 'Dark Premium Interface',
    },
    {
      image: 'https://images.unsplash.com/photo-1764720572930-eb63afd14b06?w=1200',
      title: 'Modern Learning Tools',
    },
  ];

  const features = [
    {
      icon: <Calculator className="w-8 h-8" />,
      title: 'Comprehensive Curriculum',
      description: 'Full CBC-aligned mathematics content for all levels',
      color: 'from-[#8B1538] to-[#C1164A]',
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Interactive Lessons',
      description: 'Engaging visual explanations and demonstrations',
      color: 'from-[#4a90e2] to-[#6ba3e8]',
    },
    {
      icon: <WifiOff className="w-8 h-8" />,
      title: 'Offline Access',
      description: 'Learn without internet connectivity',
      color: 'from-[#8B1538] to-[#C1164A]',
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Concept Mastery',
      description: 'Deep understanding through practical examples',
      color: 'from-[#4a90e2] to-[#6ba3e8]',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'For Teachers & Students',
      description: 'Tools designed for both teaching and learning',
      color: 'from-[#8B1538] to-[#C1164A]',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Fast & Efficient',
      description: 'Optimized performance on all devices',
      color: 'from-[#4a90e2] to-[#6ba3e8]',
    },
  ];

  const testimonials = [
    {
      name: 'Amina Mwangi',
      role: 'Mathematics Teacher',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200',
      quote:
        'Hesabu Safi has transformed how I teach mathematics. My students are more engaged and understand concepts faster.',
      rating: 5,
    },
    {
      name: 'David Ochieng',
      role: 'High School Student',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
      quote:
        'Finally, a math tool that actually helps me understand! The offline feature means I can study anywhere.',
      rating: 5,
    },
    {
      name: 'Grace Njeri',
      role: 'School Principal',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200',
      quote:
        'An essential tool for our school. It supports our CBC curriculum perfectly and works even without internet.',
      rating: 5,
    },
  ];

  const curriculumTopics = [
    { category: 'Algebra', topics: ['Linear Equations', 'Quadratics', 'Polynomials', 'Functions'] },
    { category: 'Geometry', topics: ['Triangles', 'Circles', 'Transformations', '3D Shapes'] },
    { category: 'Statistics', topics: ['Data Analysis', 'Probability', 'Graphs', 'Mean & Median'] },
    { category: 'Trigonometry', topics: ['Sine & Cosine', 'Angles', 'Wave Functions', 'Applications'] },
  ];

  const faqs = [
    {
      question: 'Does Hesabu Safi require internet connection?',
      answer:
        'No! Hesabu Safi works completely offline. Once installed, you can access all features without any internet connection, making it perfect for areas with limited connectivity.',
    },
    {
      question: 'Is Hesabu Safi aligned with the CBC curriculum?',
      answer:
        'Yes, absolutely. Hesabu Safi is specifically designed and aligned with the Competency-Based Curriculum (CBC) for both junior secondary and high school mathematics.',
    },
    {
      question: 'Does the software track student progress or collect data?',
      answer:
        'No, we prioritize privacy. Hesabu Safi does not track student progress or collect any personal data. All learning happens locally on your device.',
    },
    {
      question: 'Can teachers use Hesabu Safi for classroom instruction?',
      answer:
        'Yes! Hesabu Safi is designed for both students and teachers. Teachers can use it to demonstrate concepts, create lessons, and provide visual explanations to enhance classroom instruction.',
    },
    {
      question: 'What devices can run Hesabu Safi?',
      answer:
        'Hesabu Safi is specifically optimized for desktop and laptop computers (Windows and MacOS). The software is designed to provide a full-featured experience on these platforms, perfect for both classroom projection and personal study.',
    },
  ];

  const screenshotSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section
        id="hero"
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <MathParticleBackground />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <motion.div
                className="inline-block"
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="bg-gradient-to-r from-[#8B1538]/20 to-[#4a90e2]/20 backdrop-blur-lg border border-white/20 rounded-full px-6 py-2 inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#C1164A] to-[#4a90e2] animate-pulse" />
                  <span className="text-sm text-gray-300">CBC-Aligned • Offline-First • Privacy-Focused</span>
                </div>
              </motion.div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Master Mathematics with{' '}
                <span className="bg-gradient-to-r from-[#E8E8E8] via-[#C1164A] to-[#4a90e2] bg-clip-text text-transparent">
                  Hesabu Safi
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-xl">
                AI intergrated mathematics software designed for the Kenyan education system. Built
                for CBC curriculum, works offline, and empowers both students and teachers to
                excel in mathematics.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="#features"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-[#8B1538] to-[#C1164A] text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-maroon-500/50 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Explore Features
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#8B1538] to-[#C1164A] bg-clip-text text-transparent">
                    100%
                  </div>
                  <div className="text-xs text-gray-400 mt-1">Offline</div>
                </motion.div>
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#4a90e2] to-[#6ba3e8] bg-clip-text text-transparent">
                    CBC
                  </div>
                  <div className="text-xs text-gray-400 mt-1">Aligned</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Video/Logo Showcase */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative group">
                {/* Glowing background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#8B1538] via-[#4a90e2] to-[#8B1538] rounded-3xl blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse" />
                
                {/* Video container */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border-2 border-white/20 rounded-3xl overflow-hidden aspect-square shadow-2xl"
                >
                  {/* Video placeholder - replace with actual video */}
                  <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
                    {/* Animated gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]" />
                    
                    {/* Mathematical symbols decoration */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    >
                      <div className="text-[200px] text-[#8B1538] opacity-10 font-bold">∑</div>
                    </motion.div>
                    
                    {/* Logo/Video area */}
                    <div className="relative z-10 text-center p-12">
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, 0, -5, 0],
                        }}

                      >
                        {/* Replace this div with your video element */}
                        <div className="relative">
                          
                          {/* Display static logo/image instead of video */}
                          <img
                            src={hesabuImg}
                            alt="Hesabu Safi"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Corner decorations */}
                    <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-[#C1164A] rounded-tl-2xl" />
                    <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-[#4a90e2] rounded-tr-2xl" />
                    <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-[#4a90e2] rounded-bl-2xl" />
                    <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-[#C1164A] rounded-br-2xl" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-1.5 bg-white/60 rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#141414] to-[#0a0a0a]" />
        <ParticleBackground />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Trusted by{' '}
              <span className="bg-gradient-to-r from-[#C1164A] to-[#4a90e2] bg-clip-text text-transparent">
                Thousands
              </span>
            </h2>
            <p className="text-gray-400 text-lg">Making mathematics education accessible across Africa</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard number="10" suffix="+" label="Schools Using" delay={0} />
            <StatCard number="10" suffix="+" label="Active Students" delay={0.1} />
            <StatCard number="40" suffix="+" label="Teachers Empowered" delay={0.2} />
            <StatCard number="90" suffix="%" label="Satisfaction Rate" delay={0.3} />
          </div>
        </div>
      </section>

      {/* Feature Showcase 1 */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-[#141414]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FeatureShowcase
            title="Offline-First Architecture"
            description="Learn mathematics anywhere, anytime without worrying about internet connectivity. Hesabu Safi is built from the ground up to work seamlessly offline."
            image={classImg}
            features={[
              'No internet required after installation',
              'All content stored locally on device',
              'Perfect for rural and remote areas',
              'Zero data costs for students',
            ]}
            Icon={WifiOff}
          />
        </div>
      </section>

      {/* Feature Showcase 2 */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-[#141414] to-[#0a0a0a]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FeatureShowcase
            title="Interactive Learning Experience"
            description="Engage with mathematics through visual demonstrations, step-by-step solutions, and interactive problem-solving tools designed for the CBC curriculum."
            image={studentsImg}
            features={[
              'Visual explanations for complex concepts',
              'Interactive graphing and calculations',
              'Practice problems with instant feedback',
              'Comprehensive topic coverage',
            ]}
            Icon={Brain}
            reverse
          />
        </div>
      </section>

      {/* Why Hesabu Safi Section */}
      <section id="why" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#141414] to-[#0a0a0a]" />
        <ParticleBackground />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Why{' '}
              <span className="bg-gradient-to-r from-[#E8E8E8] via-[#C1164A] to-[#4a90e2] bg-clip-text text-transparent">
                Hesabu Safi
              </span>
              ?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Designed specifically for the Kenyan education landscape with unique features
            </p>
          </motion.div>

          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-8 px-4 snap-x snap-mandatory scrollbar-hide">
              {whyHesabuData.map((card, index) => (
                <div key={index} className={activeCard !== null && activeCard !== index ? 'blur-sm opacity-50' : ''}>
                  <FlipCard
                    image={card.image}
                    title={card.title}
                    description={card.description}
                    isActive={activeCard === index}
                    onClick={() => setActiveCard(activeCard === index ? null : index)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Coverage Section */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-[#141414]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Complete{' '}
              <span className="bg-gradient-to-r from-[#4a90e2] to-[#6ba3e8] bg-clip-text text-transparent">
                CBC Coverage
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              All mathematics topics aligned with the Competency-Based Curriculum
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {curriculumTopics.map((curriculum, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:border-[#C1164A]/50 transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-[#8B1538] to-[#C1164A] rounded-2xl p-3 inline-block mb-4">
                  <BookMarked className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{curriculum.category}</h3>
                <ul className="space-y-2">
                  {curriculum.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-center gap-2 text-gray-400">
                      <CheckCircle className="w-4 h-4 text-[#4a90e2]" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-[#141414] to-[#0a0a0a]" />
        <ParticleBackground />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              See It In{' '}
              <span className="bg-gradient-to-r from-[#C1164A] to-[#4a90e2] bg-clip-text text-transparent">
                Action
              </span>
            </h2>
            <p className="text-gray-400 text-lg">Explore the premium interface and powerful features</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <Slider ref={sliderRef} {...screenshotSettings}>
              {screenshots.map((screenshot, index) => (
                <div key={index} className="px-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden p-6 hover:border-[#C1164A]/50 transition-all duration-300 group"
                  >
                    <div className="relative overflow-hidden rounded-2xl mb-4">
                      <img
                        src={screenshot.image}
                        alt={screenshot.title}
                        className="w-full h-40 sm:h-60 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Play className="w-16 h-16 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-center text-white">
                      {screenshot.title}
                    </h3>
                  </motion.div>
                </div>
              ))}
            </Slider>

            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full p-3 hover:bg-white/20 transition-all duration-300 z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full p-3 hover:bg-white/20 transition-all duration-300 z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section id="features" className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-[#141414]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Powerful{' '}
              <span className="bg-gradient-to-r from-[#E8E8E8] via-[#C1164A] to-[#4a90e2] bg-clip-text text-transparent">
                Features
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Everything you need for mathematics excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:border-white/30 transition-all duration-300 group relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`bg-gradient-to-br ${feature.color} rounded-2xl p-4 inline-block mb-6 group-hover:shadow-lg transition-all duration-300`}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-white relative z-10">{feature.title}</h3>
                <p className="text-gray-400 relative z-10">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Device Compatibility Section */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-[#141414] to-[#0a0a0a]" />
        <ParticleBackground />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Optimized for{' '}
              <span className="bg-gradient-to-r from-[#4a90e2] to-[#6ba3e8] bg-clip-text text-transparent">
                Desktop Computing
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Designed specifically for desktop and laptop computers
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-12 text-center hover:border-[#4a90e2]/50 transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="inline-block mb-6"
              >
                <Laptop className="w-20 h-20 text-[#4a90e2]" />
              </motion.div>
              <h3 className="text-3xl font-bold mb-3 text-white">Desktop & Laptop</h3>
              <p className="text-gray-400 mb-6">
                Full-featured mathematics software experience with powerful desktop capabilities
              </p>
              <div className="flex flex-col gap-3 max-w-md mx-auto">
                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#4a90e2]" />
                  <span>Windows & MacOS compatible</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#4a90e2]" />
                  <span>Optimized for classroom projection</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#4a90e2]" />
                  <span>Comprehensive feature access</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-[#141414]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              What Users{' '}
              <span className="bg-gradient-to-r from-[#C1164A] to-[#4a90e2] bg-clip-text text-transparent">
                Say
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Trusted by teachers and students across Kenya.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:border-white/30 transition-all duration-300"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#C1164A] text-[#C1164A]" />
                  ))}
                </div>
                
                <p className="text-gray-300 leading-relaxed italic mb-6">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#C1164A]"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-[#141414]" />
        <ParticleBackground />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-[#8B1538]/20 via-[#4a90e2]/20 to-[#8B1538]/20 backdrop-blur-lg border border-white/20 rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#8B1538]/10 to-[#4a90e2]/10 animate-pulse" />
            
            <motion.div
              className="relative z-10"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Award className="w-20 h-20 mx-auto mb-6 text-[#C1164A]" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">
              Ready to Transform Your{' '}
              <span className="bg-gradient-to-r from-[#E8E8E8] via-[#C1164A] to-[#4a90e2] bg-clip-text text-transparent">
                Math Journey
              </span>
              ?
            </h2>
            
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto relative z-10">
              Join thousands of students and teachers already using Hesabu Safi to master mathematics
            </p>
            

          </motion.div>
        </div>
      </section>

            {/* FAQ Section */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-[#141414] to-[#0a0a0a]" />
        <ParticleBackground />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-[#4a90e2] to-[#6ba3e8] bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-gray-400 text-lg">Everything you need to know about Hesabu Safi</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#141414] to-[#0a0a0a]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={hesabuImg}
                  alt="Hesabu Safi"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <span className="text-xl font-bold bg-gradient-to-r from-[#E8E8E8] to-[#D3D3D3] bg-clip-text text-transparent">
                  Hesabu Safi
                </span>
              </div>
              <p className="text-gray-400 max-w-md mb-6">
                Ai mathematics software designed for the Kenyan education system.
                Empowering students and teachers with CBC-aligned, offline-first learning
                tools.
              </p>
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  href="#"
                  className="w-10 h-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
                >
                  <Globe className="w-5 h-5" />
                </motion.a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="text-gray-400 hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#screenshots" className="text-gray-400 hover:text-white transition-colors">
                    Screenshots
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#why" className="text-gray-400 hover:text-white transition-colors">
                    Why Hesabu Safi
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://bcl.co.ke"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    BCL Website
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 Hesabu Safi by BCL. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}