'use client'

import { motion, useScroll, useTransform } from 'framer-motion';
import { Building2, Users, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Destination {
  name: string;
  image: string;
  universities: number;
  students: number;
  features: string[];
  gradient: string;
  description: string;
  accentColor: string;
}

const destinations: Destination[] = [
  {
    name: "USA",
    image: "https://images.unsplash.com/photo-1550340499-a6c60fc8287c?auto=format&fit=crop&w=800&q=80",
    universities: 150,
    students: 2500,
    features: ["Ivy League Universities", "Optional Practical Training", "Diverse Programs"],
    gradient: "from-blue-600 to-indigo-600",
    description: "World-class education with diverse opportunities",
    accentColor: "blue"
  },
  {
    name: "UK",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
    universities: 100,
    students: 2000,
    features: ["Top-Ranked Universities", "Post-Study Work Visa", "Research Opportunities"],
    gradient: "from-indigo-600 to-purple-600",
    description: "Excellence in education with rich heritage",
    accentColor: "indigo"
  },
  {
    name: "Canada",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=800&q=80",
    universities: 80,
    students: 1800,
    features: ["Work While Studying", "Immigration Pathways", "Quality Education"],
    gradient: "from-violet-600 to-purple-600",
    description: "Quality education with immigration opportunities",
    accentColor: "violet"
  },
  {
    name: "Australia",
    image: "https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?q=80&w=2666&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    universities: 70,
    students: 1500,
    features: ["World-Class Universities", "Post-Study Work Rights", "High Living Standards"],
    gradient: "from-teal-600 to-emerald-600",
    description: "High-quality life with excellent education",
    accentColor: "teal"
  },
  {
    name: "Germany",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80",
    universities: 90,
    students: 1600,
    features: ["No Tuition Fees", "Strong Economy", "Engineering Excellence"],
    gradient: "from-amber-600 to-orange-600",
    description: "Engineering excellence with affordable education",
    accentColor: "amber"
  },
  {
    name: "Ireland",
    image: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&w=800&q=80",
    universities: 40,
    students: 1000,
    features: ["English-Speaking", "2-Year Stay Back", "Tech Hub"],
    gradient: "from-emerald-600 to-green-600",
    description: "Emerging tech hub with quality education",
    accentColor: "emerald"
  }
];

const DestinationCard = ({ destination, index }: { destination: Destination; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative h-full group"
    >
      {/* Glass Card Container */}
      <motion.div
        className="h-full relative rounded-2xl overflow-hidden"
        whileHover={{ y: -10 }}
      >
        {/* Glassmorphism Background */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-xl" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/20 backdrop-blur-md" />
        <div className={`absolute inset-0 bg-gradient-to-br ${destination.gradient} opacity-[0.02]`} />
        
        {/* Card Border */}
        <div className="absolute inset-0 rounded-2xl border border-white/50" />
        
        {/* Content Container */}
        <div className="relative">
          {/* Image Section */}
          <div className="relative h-64 overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/60 z-10"
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />
            
            <motion.div
              className="relative h-full transform-gpu"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={destination.image}
                alt={destination.name}
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Destination Name Badge */}
            <motion.div 
              className="absolute top-4 left-4 z-20"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="px-4 py-2 rounded-xl bg-white/30 backdrop-blur-md border border-white/50">
                <span className="font-semibold text-white">{destination.name}</span>
              </div>
            </motion.div>

            {/* Stats Overlay */}
            <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
              <motion.div 
                className="px-6 py-4 rounded-xl bg-black/40 backdrop-blur-md border border-white/10"
                initial={{ scale: 0.9, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
              >
                <div className="flex space-x-8 text-white">
                  <div className="flex items-center space-x-2">
                    <Building2 className="h-5 w-5" />
                    <span className="font-medium">{destination.universities}+ Universities</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5" />
                    <span className="font-medium">{destination.students}+ Students</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 space-y-4 bg-white/50 backdrop-blur-sm">
            {/* Description */}
            <p className="text-gray-700">{destination.description}</p>
            
            {/* Features */}
            <div className="space-y-3">
              {destination.features.map((feature, i) => (
                <motion.div 
                  key={i}
                  className="flex items-center space-x-3"
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <motion.div 
                    className={`w-2 h-2 rounded-full bg-gradient-to-r ${destination.gradient}`}
                    whileHover={{ scale: 1.5 }}
                  />
                  <span className="text-gray-600">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Action Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="pt-4"
            >
              <Link 
                href={`/destinations/${destination.name.toLowerCase()}`}
                className="group block w-full"
              >
                <div className={`p-4 rounded-xl bg-gradient-to-r ${destination.gradient} relative overflow-hidden`}>
                  <motion.div 
                    className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">Explore Programs</span>
                    <ArrowRight className="h-5 w-5 text-white group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden">
          <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-br ${destination.gradient} opacity-10 transform rotate-45 translate-x-12 -translate-y-12`} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export const DestinationsSection = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Section Background */}
      <motion.div 
        className="absolute inset-0"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white/50" />
        <motion.div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.05) 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <div className="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-indigo-100">
              <span className="text-indigo-600 text-sm font-medium">Global Destinations</span>
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-4xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Choose Your Perfect
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600 ml-2">
              Study Destination
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Explore top educational destinations worldwide and find the perfect place to pursue your dreams.
          </motion.p>
        </motion.div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <DestinationCard 
              key={destination.name} 
              destination={destination} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};