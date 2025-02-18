// components/MBBSSection.tsx
'use client'
import { motion, useScroll, useTransform } from 'framer-motion';
import { Stethoscope, Globe, Building2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { ContactDialog } from './ContactDialog';

interface MBBSFeature {
  title: string;
  description: string;
  icon: any;
}

const mbbsFeatures: MBBSFeature[] = [
  {
    title: 'Global Recognition',
    description: 'MBBS degrees from our partner universities are recognized worldwide',
    icon: Globe,
  },
  {
    title: 'Top Medical Colleges',
    description: 'Partnerships with prestigious medical institutions globally',
    icon: Building2,
  },
  {
    title: 'Expert Guidance',
    description: 'Personalized counseling from medical education specialists',
    icon: Stethoscope,
  },
];

export const MBBSSection = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [0.3, 0.8, 1]);

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute inset-0"
        style={{ opacity }}
      >
        <motion.div 
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Program Badge */}
            <motion.div 
              className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <Stethoscope className="h-5 w-5 text-indigo-600 mr-2" />
              <span className="text-indigo-600 font-medium">MBBS Program</span>
            </motion.div>
            
            {/* Heading */}
            <div>
              <motion.h2 
                className="text-4xl lg:text-5xl font-bold text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Study MBBS
                <motion.span 
                  className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Worldwide
                </motion.span>
              </motion.h2>
            </div>
            
            <motion.p 
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Begin your medical career with our comprehensive MBBS programs at prestigious universities worldwide. 
              Get expert guidance on admissions, documentation, and visa processes.
            </motion.p>

            {/* Features */}
            <div className="space-y-6">
              {mbbsFeatures.map((feature, index) => (
                <motion.div 
                  key={feature.title}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                >
                  <motion.div 
                    className="p-3 bg-white rounded-lg shadow-md"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <feature.icon className="h-6 w-6 text-indigo-600" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <ContactDialog/>
            </motion.div>
          </motion.div>

          {/* Right Images Grid */}
          <motion.div 
            className="relative"
            style={{ y }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-violet-100 rounded-3xl blur-3xl opacity-20" />
            <div className="relative grid grid-cols-2 gap-4">
              {[
                {
                  src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
                  alt: "Medical Education",
                  translate: "hover:translate-y-2"
                },
                {
                  src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
                  alt: "Medical Students",
                  translate: "hover:-translate-y-2"
                },
                {
                  src: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=800&q=80",
                  alt: "Medical Facilities",
                  translate: "hover:translate-x-2"
                },
                {
                  src: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=800&q=80",
                  alt: "Medical Laboratory",
                  translate: "hover:-translate-x-2"
                },
              ].map((image, index) => (
                <motion.div
                  key={image.alt}
                  className={`relative overflow-hidden rounded-2xl shadow-lg ${image.translate}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {[
            { number: '50+', label: 'Medical Universities' },
            { number: '15+', label: 'Countries' },
            { number: '1000+', label: 'MBBS Students Placed' },
            { number: '98%', label: 'Success Rate' },
          ].map((stat, index) => (
            <motion.div 
              key={stat.label} 
              className="text-center space-y-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.h3 
                className="text-3xl lg:text-4xl font-bold text-indigo-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                {stat.number}
              </motion.h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};