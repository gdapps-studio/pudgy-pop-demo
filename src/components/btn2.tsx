'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export const Btn2 = ({ children }: { children: ReactNode }) => (
  <motion.button
    className="max-w-max bg-emerald-400 text-white font-bold py-4 px-8 rounded-full shadow-lg border-4 border-green-800"
    whileHover={{
      scale: 1.1,
      boxShadow: '0px 0px 8px rgb(52,211,153)',
    }}
    whileTap={{
      scale: 0.9,
      rotate: -5,
    }}
    transition={{
      type: 'spring',
      stiffness: 300,
      damping: 10,
    }}
  >
    {children}
  </motion.button>
);
