'use client';

import { useSpring, animated } from '@react-spring/web';
import { ReactNode } from 'react';

export const Btn1 = ({ children }: { children: ReactNode }) => {
  const [springs, api] = useSpring(() => ({
    scale: 1,
    config: {
      tension: 400,
      friction: 17,
    },
  }));

  return (
    <animated.button
      className="max-w-max bg-emerald-400 text-white font-semibold py-3 px-6 rounded-lg shadow-md"
      style={{
        ...springs,
      }}
      onMouseEnter={() => api.start({ scale: 1.05 })}
      onMouseLeave={() => api.start({ scale: 1 })}
      onMouseDown={() => api.start({ scale: 0.95 })}
      onMouseUp={() => api.start({ scale: 1 })}
    >
      {children}
    </animated.button>
  );
};
