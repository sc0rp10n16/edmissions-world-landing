'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, GraduationCap, Globe, Users, Phone } from 'lucide-react';

const navItems = [
  {
    name: "Programs",
    icon: GraduationCap,
    href: "/programs",
    dropdownItems: [
      { name: "MBBS", href: "/programs/mbbs" },
      { name: "Engineering", href: "/programs/engineering" },
      { name: "Management", href: "/programs/management" },
    ]
  },
  {
    name: "Destinations",
    icon: Globe,
    href: "/destinations",
    dropdownItems: [
      { name: "USA", href: "/destinations/usa" },
      { name: "UK", href: "/destinations/uk" },
      { name: "Canada", href: "/destinations/canada" },
    ]
  },
  {
    name: "About Us",
    icon: Users,
    href: "/about",
  },
  {
    name: "Contact",
    icon: Phone,
    href: "/contact",
  }
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed w-full z-50 transition-colors duration-300 ${
          isScrolled ? 'py-4' : 'py-6'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Glassmorphism Background */}
        <div className={`absolute inset-0 backdrop-blur-lg transition-all duration-300 ${
          isScrolled ? 'bg-white/80' : 'bg-white/50'
        }`} />

        {/* Border Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <motion.div
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
                  Edmissions World
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <motion.div
                    className="relative"
                    onHoverStart={() => setActiveDropdown(item.name)}
                    onHoverEnd={() => setActiveDropdown(null)}
                  >
                    <Link href={item.href}>
                      <motion.div
                        className={`px-4 py-2 rounded-lg flex items-center space-x-1 text-gray-600 hover:text-gray-900 ${
                          pathname === item.href ? 'text-indigo-600' : ''
                        }`}
                        whileHover={{ y: -2 }}
                      >
                        <item.icon className="w-4 h-4" />
                        <span>{item.name}</span>
                        {item.dropdownItems && (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </motion.div>
                    </Link>

                    {/* Dropdown Menu */}
                    {item.dropdownItems && (
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 backdrop-blur-lg overflow-hidden"
                          >
                            <div className="py-2">
                              {item.dropdownItems.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                >
                                  <motion.div
                                    className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                                    whileHover={{ x: 4 }}
                                  >
                                    {dropdownItem.name}
                                  </motion.div>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[72px] z-40 md:hidden bg-white/90 backdrop-blur-lg border-b border-gray-200"
          >
            <div className="p-4 space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link href={item.href}>
                    <motion.div
                      className={`flex items-center space-x-2 p-2 rounded-lg ${
                        pathname === item.href ? 'text-indigo-600 bg-indigo-50' : 'text-gray-600'
                      }`}
                      whileHover={{ x: 4 }}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </motion.div>
                  </Link>
                  {item.dropdownItems && (
                    <div className="pl-7 mt-2 space-y-2">
                      {item.dropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                        >
                          <motion.div
                            className="p-2 text-gray-600 rounded-lg"
                            whileHover={{ x: 4 }}
                          >
                            {dropdownItem.name}
                          </motion.div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};