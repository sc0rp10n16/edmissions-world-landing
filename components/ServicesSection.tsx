'use client'

import { motion, useScroll, useTransform } from 'framer-motion';
import { BookOpen, Globe, Users, FileCheck, Building2, Plane, CalendarDays } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  message: string;
}

const services = [
  {
    icon: BookOpen,
    title: "Course Selection",
    description: "Expert guidance in choosing the right program and university based on your academic profile and career goals.",
    gradient: "from-blue-600 to-indigo-600",
    lightGradient: "from-blue-50 to-indigo-50"
  },
  {
    icon: Globe,
    title: "Visa Assistance",
    description: "End-to-end support for visa application and interview preparation with high success rate.",
    gradient: "from-indigo-600 to-violet-600",
    lightGradient: "from-indigo-50 to-violet-50"
  },
  {
    icon: Users,
    title: "Career Support",
    description: "Comprehensive placement assistance and career counseling services for your future growth.",
    gradient: "from-violet-600 to-purple-600",
    lightGradient: "from-violet-50 to-purple-50"
  },
  {
    icon: FileCheck,
    title: "Document Assistance",
    description: "Professional help with document preparation and verification for smooth application process.",
    gradient: "from-purple-600 to-fuchsia-600",
    lightGradient: "from-purple-50 to-fuchsia-50"
  },
  {
    icon: Building2,
    title: "University Selection",
    description: "Strategic university selection based on your preferences, budget, and career aspirations.",
    gradient: "from-fuchsia-600 to-pink-600",
    lightGradient: "from-fuchsia-50 to-pink-50"
  },
  {
    icon: Plane,
    title: "Travel Support",
    description: "Complete assistance with travel arrangements, accommodation, and initial settlement.",
    gradient: "from-pink-600 to-rose-600",
    lightGradient: "from-pink-50 to-rose-50"
  }
];

const ConsultationDialog = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Button 
            className="px-8 py-6 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Schedule a Free Consultation
            <CalendarDays className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Schedule Your Free Consultation</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter your name"
              className="rounded-lg"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Enter your email"
              className="rounded-lg"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="Enter your phone number"
              className="rounded-lg"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="date">Preferred Date</Label>
            <Input
              id="date"
              type="datetime-local"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="rounded-lg"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message (Optional)</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Any specific queries or requirements?"
              className="rounded-lg min-h-[100px]"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-full py-6"
          >
            Book Consultation
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export const ServicesSection = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section className="py-24 relative overflow-hidden bg-gray-50">
      {/* Background animations */}
      <motion.div 
        className="absolute inset-0"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-blue-50/50" />
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
            <span className="px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium">
              Our Services
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive Support for Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
              Education Journey
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            From course selection to career support, we provide end-to-end assistance 
            to make your international education journey smooth and successful.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
  {services.map((service, index) => (
    <motion.div
      key={service.title}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        className="group h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
        whileHover={{ y: -5 }}
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br from-indigo-600 to-blue-600" />
        
        {/* Icon Container */}
        <motion.div 
          className="mb-6 relative"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          {/* Icon Background */}
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.lightGradient} flex items-center justify-center`}>
            {/* Icon with Gradient */}
            <div className={`w-8 h-8 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center`}>
              <service.icon className="h-5 w-5 text-white" />
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className={`absolute -inset-1 bg-gradient-to-br ${service.gradient} opacity-20 blur-lg group-hover:opacity-30 transition-opacity duration-300 rounded-2xl`} />
        </motion.div>

        {/* Content */}
        <motion.h3 
          className="text-xl font-semibold text-gray-900 mb-3"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
        >
          {service.title}
        </motion.h3>
        <p className="text-gray-600 leading-relaxed">{service.description}</p>

        {/* Bottom Gradient Line */}
        <motion.div 
          className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  ))}
</div>
        {/* Consultation Dialog */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <ConsultationDialog />
        </motion.div>
      </div>
    </section>
  );
};