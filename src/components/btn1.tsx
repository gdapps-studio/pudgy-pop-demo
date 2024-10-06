'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export const Btn1 = ({ children }: { children: ReactNode }) => (
  <motion.button
    className="max-w-max bg-emerald-400 text-white font-semibold py-3 px-6 rounded-lg shadow-md"
    whileHover={{
      scale: 1.05,
    }}
    whileTap={{
      scale: 0.95,
    }}
    transition={{
      type: 'spring',
      stiffness: 400,
      damping: 17,
    }}
  >
    {children}
  </motion.button>
);
