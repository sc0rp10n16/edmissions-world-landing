'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = React.useState({
    x: 0,
    y: 0
  });

  React.useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <>
      {/* Main cursor with globe */}
      <motion.div
        className="fixed w-8 h-8 pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 200,
          mass: 0.5
        }}
      >
        <motion.div
          className="relative w-full h-full flex items-center justify-center bg-white rounded-full shadow-lg"
          animate={{ rotate: 360 }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          <Globe className="w-5 h-5 text-indigo-600" />
        </motion.div>
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="fixed w-12 h-12 pointer-events-none z-40"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 150,
          mass: 0.8
        }}
      >
        <motion.div 
          className="w-full h-full rounded-full border-2 border-indigo-400/30"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </>
  );
};