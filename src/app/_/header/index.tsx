'use client';

import clsx from 'clsx';
import { Volume, VolumeX } from 'lucide-react';
import { useState } from 'react';

export const Header = () => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying);
    // TODO: Implement actual music playback logic
  };

  return (
    <header className={clsx('fixed h-18 w-full top-0 z-40 transition-transform duration-300 ease-in-out')}>
      <nav className="container mx-auto flex items-center justify-between gap-10 py-4 sm:py-5 md:py-6">
        <div></div>
        <button onClick={toggleMusic}>
          {isMusicPlaying ? (
            <Volume className="cursor-pointer" size={24} />
          ) : (
            <VolumeX className="cursor-pointer" size={24} />
          )}
        </button>
      </nav>
    </header>
  );
};
