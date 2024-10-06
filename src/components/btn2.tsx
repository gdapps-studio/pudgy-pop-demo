'use client';

import { useSpring, animated } from '@react-spring/web';
import { ReactNode } from 'react';

export const Btn2 = ({ children }: { children: ReactNode }) => {
  const [springs, api] = useSpring(() => ({
    scale: 1,
    rotate: 0,
    boxShadow: '0px 0px 0px rgba(52,211,153,0)',
    config: {
      tension: 300,
      friction: 10,
    },
  }));

  return (
    <animated.button
      className="max-w-max bg-emerald-400 text-white font-bold py-4 px-8 rounded-full shadow-lg border-4 border-green-800"
      style={{
        ...springs,
        transform: springs.scale.to(s => `scale(${s}) rotate(${springs.rotate.get()}deg)`),
      }}
      onMouseEnter={() => api.start({ scale: 1.1, boxShadow: '0px 0px 8px rgba(52,211,153,1)' })}
      onMouseLeave={() => api.start({ scale: 1, boxShadow: '0px 0px 0px rgba(52,211,153,0)' })}
      onMouseDown={() => api.start({ scale: 0.9, rotate: -5 })}
      onMouseUp={() => api.start({ scale: 1, rotate: 0 })}
    >
      {children}
    </animated.button>
  );
};
