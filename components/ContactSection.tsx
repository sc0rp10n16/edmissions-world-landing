'use client'

import { motion, useScroll, useTransform } from 'framer-motion';
import { PhoneCall, Mail, MapPin, Send, Clock } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from 'react';

interface ContactInfo {
  icon: any;
  title: string;
  value: string;
  link?: string;
  gradient: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: PhoneCall,
    title: "Contact Number",
    value: "+91 9202382023",
    link: "tel:+91 9202382023",
    gradient: "from-blue-600 to-indigo-600"
  },
  {
    icon: Mail,
    title: "Email Address",
    value: "info@edmissionsworld.com",
    link: "mailto:info@edmissionsworld.com",
    gradient: "from-indigo-600 to-violet-600"
  },
  {
    icon: MapPin,
    title: "Office Location",
    value: "Hyderabad, India",
    link: "https://maps.app.goo.gl/T9CfbKf4pBRt2Ru77",
    gradient: "from-violet-600 to-purple-600"
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Mon - Sat: 9AM - 7PM",
    gradient: "from-purple-600 to-pink-600"
  }
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background Pattern */}
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
              <span className="text-indigo-600 text-sm font-medium">Get in Touch</span>
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-4xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's Start Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600 ml-2">
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
            Have questions? We're here to help. Send us a message and we'll respond as soon as possible.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info Cards */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {info.link ? (
                    <a 
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block"
                    >
                      <ContactCard info={info} />
                    </a>
                  ) : (
                    <ContactCard info={info} />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                      className="rounded-lg"
                      required
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="rounded-lg"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="rounded-lg"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="rounded-lg min-h-[150px]"
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg py-6 hover:shadow-lg transition-shadow"
                >
                  <span className="flex items-center justify-center">
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </span>
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Contact Card Component
const ContactCard = ({ info }: { info: ContactInfo }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="relative overflow-hidden rounded-xl"
    >
      <div className="bg-white/80 backdrop-blur-md p-6 border border-white/50 rounded-xl">
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${info.gradient} mb-4 flex items-center justify-center`}>
          <info.icon className="h-6 w-6 text-white" />
        </div>
        <h4 className="text-gray-900 font-medium mb-1">{info.title}</h4>
        <p className="text-gray-600">{info.value}</p>
      </div>
    </motion.div>
  );
};