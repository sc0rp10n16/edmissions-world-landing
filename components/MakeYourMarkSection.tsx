'use client'

import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, Stethoscope, GraduationCap, Globe, Users, Book } from 'lucide-react';
import Image from 'next/image';

interface Feature {
  title: string;
  description: string;
  icon: any;
  delay: number;
}

const features: Feature[] = [
  {
    title: "Expert Guidance",
    description: "Our team of QEAC certified education consultants provides personalized support for course and university selection, managing all study and visa-related applications.",
    icon: GraduationCap,
    delay: 0.2
  },
  {
    title: "Personalized Journey",
    description: "Custom-made processes based on your requirements. We analyze your profile and goals to suggest the best-matching universities and programs.",
    icon: Target,
    delay: 0.4
  },
  {
    title: "Global Network",
    description: "Access to a vast network of international universities and educational institutions across multiple countries.",
    icon: Globe,
    delay: 0.6
  }
];

export const MakeYourMarkSection = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-blue-50"
        style={{ y }}
      >
        <motion.div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.05) 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}
        />
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-indigo-200/20 to-blue-200/20 rounded-full blur-3xl"
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
        <motion.div
          className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-purple-200/20 to-indigo-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [45, 0, 45],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Make Your Mark,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
              Globally!
            </span>
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            From Your Native School to International University, Study Abroad with Edmissionsworld.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: feature.delay }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl -z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              />
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg space-y-4 border border-indigo-50">
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-xl flex items-center justify-center"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <feature.icon className="h-6 w-6 text-indigo-600" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Complete Support Section */}
        <motion.div 
          className="bg-white rounded-2xl p-8 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex items-center space-x-4 mb-6">
            <motion.div 
              className="p-3 bg-indigo-50 rounded-lg"
              whileHover={{ rotate: 10, scale: 1.1 }}
            >
              <Target className="h-6 w-6 text-indigo-600" />
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-900">Complete Support</h3>
          </div>
          <p className="text-gray-600 leading-relaxed">
            From processing your application, receiving the offer letter to finally sending the visa applications, 
            we'll help arrange everything. Edmissionsworld – your very own study abroad education consultancy!
          </p>
        </motion.div>
      </div>
    </section>
  );
};