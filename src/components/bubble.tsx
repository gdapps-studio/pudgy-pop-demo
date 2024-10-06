'use client';

import { motion } from 'framer-motion';

export const Bubble = () => (
  <motion.img
    src="/bubble.png"
    alt="Bubble"
    className="absolute"
    style={{
      width: Math.random() * 100 + 50,
      height: 'auto',
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }}
    animate={{
      y: [0, -20, 0],
      x: [0, Math.random() * 10 - 5, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: Math.random() * 3 + 2,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
);
