'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type BTNProps = {
  children: ReactNode;
};

const Btn1 = ({ children }: BTNProps) => (
  <motion.button
    className="bg-emerald-400 text-white font-semibold py-3 px-6 rounded-lg shadow-md"
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

const Btn2 = ({ children }: BTNProps) => (
  <motion.button
    className="bg-purple-500 text-white font-bold py-4 px-8 rounded-full shadow-lg border-4 border-yellow-300"
    whileHover={{
      scale: 1.1,
      boxShadow: '0px 0px 8px rgb(250, 204, 21)',
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

function ComponentPage() {
  return (
    <main className="flex flex-col justify-center items-center h-screen space-y-6">
      <div className="flex gap-5">
        <Btn1>Play now</Btn1>
        <Btn2>Level Up!</Btn2>
      </div>
    </main>
  );
}

export default ComponentPage;
