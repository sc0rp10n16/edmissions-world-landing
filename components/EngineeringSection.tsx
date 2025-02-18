'use client'

import { motion, useScroll, useTransform } from 'framer-motion';
import { Cpu, Code, Laptop, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface EngineeringFeature {
  title: string;
  description: string;
  icon: any;
}

interface ImageData {
  src: string;
  alt: string;
  position: string;
}

const engineeringFeatures: EngineeringFeature[] = [
  {
    title: 'Industry-Aligned Programs',
    description: 'Curriculum designed with input from leading tech companies',
    icon: Cpu,
  },
  {
    title: 'Advanced Technologies',
    description: 'Learn cutting-edge technologies and programming languages',
    icon: Code,
  },
  {
    title: 'Practical Experience',
    description: 'Hands-on projects and internship opportunities',
    icon: Laptop,
  },
];

const engineeringImages: ImageData[] = [
  {
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    alt: "Software Engineering",
    position: "translate-y-4"
  },
  {
    src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80",
    alt: "Engineering Lab",
    position: "-translate-y-4"
  },
  {
    src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    alt: "Engineering Design",
    position: "translate-y-8"
  },
  {
    src: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80",
    alt: "Engineering Project",
    position: "-translate-y-8"
  }
];

const stats = [
  { number: '100+', label: 'Engineering Universities' },
  { number: '20+', label: 'Specializations' },
  { number: '2000+', label: 'Students Placed' },
  { number: '95%', label: 'Placement Rate' },
];

export const EngineeringSection = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-blue-50">
      {/* Animated Background Pattern */}
      <motion.div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.05) 1px, transparent 0)',
          backgroundSize: '40px 40px',
          y
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Images */}
          <motion.div 
            className="relative order-2 lg:order-1"
            style={{ rotate }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-blue-200 rounded-3xl blur-3xl opacity-20"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <div className="relative grid grid-cols-2 gap-4">
              {engineeringImages.map((image, index) => (
                <motion.div
                  key={image.alt}
                  className={`relative ${image.position} transition-all duration-500`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <motion.div
                    className="relative overflow-hidden rounded-xl shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent"
                      whileHover={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div 
            className="space-y-8 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Program Badge */}
            <motion.div 
              className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Cpu className="h-5 w-5 text-indigo-600 mr-2" />
              <span className="text-indigo-600 font-medium">Engineering Programs</span>
            </motion.div>
            
            {/* Title */}
            <div>
              <motion.h2 
                className="text-4xl lg:text-5xl font-bold text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Study Engineering
                <motion.span 
                  className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
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
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Launch your engineering career with our comprehensive programs at leading technical universities. 
              Get guidance on specializations, universities, and career paths.
            </motion.p>

            {/* Features */}
            <div className="space-y-6">
              {engineeringFeatures.map((feature, index) => (
                <motion.div 
                  key={feature.title}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                >
                  <motion.div 
                    className="p-3 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl shadow-md"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                    }}
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

            {/* Contact Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
                  <Button 
                    className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-full px-6 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get Free Counseling
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Contact Us</DialogTitle>
                  <DialogDescription>
                    Fill out the form below and our counselors will get back to you shortly.
                  </DialogDescription>
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
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Enter your message"
                      className="rounded-lg min-h-[100px]"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-full"
                  >
                    Submit
                  </Button>
                </form>
              </DialogContent>
            </Dialog>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-12">
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.h3 
                    className="text-2xl lg:text-3xl font-bold text-indigo-600"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};