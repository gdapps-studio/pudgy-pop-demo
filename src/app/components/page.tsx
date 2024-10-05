'use client';

import { motion } from 'framer-motion';
import { Medal } from 'lucide-react';
import Image from 'next/image';
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

function Bubble() {
  return (
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
}

const MemberCard = () => (
  <div className="flex items-center justify-between bg-white border border-gray-200 rounded-full p-1 pr-4 shadow-sm max-w-xs w-full hover:scale-105 transition-transform duration-300 ease-in-out">
    <div className="relative">
      <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center overflow-hidden">
        <Image src="/pinguine.png" alt="Profile avatar" width={48} height={48} className="w-12 h-12" />
      </div>
      <div className="absolute -top-1 -left-1 bg-yellow-400 rounded-full p-1">
        <Medal className="w-4 h-4 text-white" />
      </div>
    </div>
    <div className="ml-3">
      <div className="text-2xl font-bold text-black">18,125</div>
      <div className="text-xs font-bold text-black">7654 members</div>
    </div>
  </div>
);

function ComponentPage() {
  return (
    <main className="flex flex-col justify-center items-center h-screen space-y-6 relative overflow-hidden">
      <div className="flex gap-5 z-10">
        <Btn1>Play now</Btn1>
        <Btn2>Level Up!</Btn2>
      </div>

      <MemberCard></MemberCard>
      <div className="-z-50">
        {[...Array(10)].map((_, index) => (
          <Bubble key={index} />
        ))}
      </div>
    </main>
  );
}

export default ComponentPage;
