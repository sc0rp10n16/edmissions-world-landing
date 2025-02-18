// components/HeroSection.tsx
'use client'
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Star, Globe, GraduationCap, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Animated Gradient Orbs */}
        <motion.div 
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-purple-200/40 to-blue-200/40 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-pink-200/40 to-purple-200/40 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Animated Grid */}
        <motion.div 
          className="absolute inset-0"
          style={{ 
            backgroundImage: `linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px), 
                             linear-gradient(0deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px)`,
            backgroundSize: '4rem 4rem',
            y
          }}
        />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-screen flex items-center">
          <div className="w-full grid lg:grid-cols-2 gap-16 items-center py-20">
            {/* Left Column - Text Content */}
            <motion.div 
              className="relative z-10 space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Floating Badge */}
              <motion.div 
                className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <Star className="h-5 w-5 text-yellow-500 mr-2" />
                <span className="text-gray-800 font-medium">
                  Trusted by 5,000+ Students
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Unlock your global potential with<br/>
                  <motion.span 
                    className="relative inline-block"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  >
                    <span className="relative z-10 text-4xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                      Edmissions World
                    </span>
                    <motion.span 
                      className="absolute -bottom-2 left-0 w-full h-3 bg-indigo-200/50 rounded-full blur-sm"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.span>
                </h1>
                
                <motion.p 
                  className="text-xl text-gray-600 max-w-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Your trusted partner in navigating the path to international education. 
                  From course selection to visa assistance, we guide you every step of the way.
                </motion.p>
              </motion.div>

              {/* CTAs */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Link
                  href="/contact"
                  className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <motion.div 
                    className="absolute inset-0 bg-white/20 transform -skew-x-12"
                    initial={{ x: "100%" }}
                    whileHover={{ x: "-100%" }}
                    transition={{ duration: 0.7 }}
                  />
                  <span className="relative flex items-center justify-center">
                    Start Your Journey
                    <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </Link>
                
                <Link
                  href="/courses"
                  className="group px-8 py-4 bg-white text-gray-900 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300 flex items-center justify-center"
                >
                  <motion.span 
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    Explore Programs
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </motion.span>
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div 
                className="pt-8 flex flex-wrap gap-8 items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {[
                  { icon: GraduationCap, number: "5000+", label: "Learners" },
                  { icon: Globe, number: "15+", label: "Countries" },
                  { icon: CheckCircle, number: "98%", label: "Success Rate" }
                ].map((stat) => (
                  <motion.div 
                    key={stat.label}
                    className="flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <stat.icon className="h-6 w-6 text-indigo-600" />
                    <div className="text-sm">
                      <div className="font-semibold text-gray-900">{stat.number}</div>
                      <div className="text-gray-500">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column will be added next */}
          </div>
        </div>
      </div>
    </section>
  );
};