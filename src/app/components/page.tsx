'use client';

import { motion } from 'framer-motion';
import { Medal } from 'lucide-react';
import Image from 'next/image';
import { ButtonHTMLAttributes, ReactNode } from 'react';

type BtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

const Btn1 = ({ children }: { children: ReactNode }) => (
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

const Btn2 = ({ children }: { children: ReactNode }) => (
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

const Btn3D = ({ children, ...props }: BtnProps) => (
  <button
    className="button w-40 h-16 bg-emerald-400 rounded-lg cursor-pointer select-none
    active:translate-y-2 active:[box-shadow:0_0px_0_0#20A77F,0_4px_0_0_#166534]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_10px_0_0_#20A77F,0_14px_0_0_#166534]
    border-4 border-green-800
  "
    {...props}
  >
    <span className="flex flex-col justify-center items-center h-full text-white font-bold text-lg ">{children}</span>
  </button>
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

const Btn4 = (props: BtnProps) => {
  return (
    <>
      <button className="max-w-max btn-3d bg-emerald-400 shadow-emerald-600/50" {...props}>
        {props.children}
      </button>
      <style jsx>{`
        .btn-3d {
          position: relative;
          padding: 1rem 2rem;
          font-weight: bold;
          color: white;
          border: none;
          border-radius: 0.5rem;
          transform: translateY(0);
          transition:
            transform 0.15s ease-out,
            box-shadow 0.15s ease-out;
          box-shadow:
            0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        .btn-3d::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 0.5rem;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease-out;
        }
        .btn-3d:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow:
            0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        .btn-3d:hover::before {
          transform: scaleX(1);
        }
        .btn-3d:active {
          transform: translateY(2px) scale(0.95);
          box-shadow:
            0 5px 10px -3px rgba(0, 0, 0, 0.1),
            0 1px 3px -1px rgba(0, 0, 0, 0.05);
        }
        .btn-3d:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
        }
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
        .btn-3d::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 5px;
          height: 5px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 0;
          border-radius: 100%;
          transform: scale(1, 1) translate(-50%);
          transform-origin: 50% 50%;
        }
        .btn-3d:focus:not(:active)::after {
          animation: ripple 0.6s linear;
        }
      `}</style>
    </>
  );
};

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

const Section = ({ children, title }: { children: ReactNode; title: string | undefined }) => (
  <div className="container mx-auto space-y-6">
    <h1 className="text-4xl font-bold">{title}</h1>
    {children}
  </div>
);

function ComponentPage() {
  return (
    <main className="flex flex-col justify-center items-center h-screen space-y-6 relative overflow-hidden">
      <Section title="Button Variations">
        <div className="flex flex-col md:flex-row gap-5">
          <Btn1>Button 1</Btn1>
          <Btn2>Button 2</Btn2>
          <Btn3D>3D Touch</Btn3D>
          <Btn4>Button 4</Btn4>
        </div>
      </Section>

      <Section title="Member Cards">
        <MemberCard />
      </Section>

      <div className="-z-50">
        {[...Array(40)].map((_, index) => (
          <Bubble key={index} />
        ))}
      </div>
    </main>
  );
}

export default ComponentPage;
