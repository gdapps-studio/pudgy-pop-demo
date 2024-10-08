'use client';

import { useAudio } from '@/context/audio';
import { useAppStore } from '@/store';
import clsx from 'clsx';
import { Volume, VolumeX } from 'lucide-react';

export const Header = () => {
  const { backgroundMusicEnabled, toggleBackgroundMusic } = useAppStore();
  const { togglePlay } = useAudio();

  const toggleMusic = () => {
    togglePlay();
    toggleBackgroundMusic();
  };

  return (
    <header className={clsx('fixed h-18 w-full top-0 z-40 transition-transform duration-300 ease-in-out')}>
      <nav className="container mx-auto flex items-center justify-between gap-10 py-4 sm:py-5 md:py-6">
        <div></div>
        <button onClick={toggleMusic}>
          {backgroundMusicEnabled ? (
            <Volume className="cursor-pointer" size={24} />
          ) : (
            <VolumeX className="cursor-pointer" size={24} />
          )}
        </button>
      </nav>
    </header>
  );
};
