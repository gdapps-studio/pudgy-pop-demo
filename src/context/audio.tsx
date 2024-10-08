'use client';

import { Howl } from 'howler';
import React, { createContext, useContext, useEffect, useState } from 'react';

const BACKGROUND_MUSIC_VOLUME = 0.25;

interface AudioContextType {
  audio: Howl | null;
  togglePlay: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [audio, setAudio] = useState<Howl | null>(null);

  useEffect(() => {
    const howl = new Howl({
      src: '/audios/game-music.mp3',
      volume: BACKGROUND_MUSIC_VOLUME,
      html5: true,
      loop: true,
    });

    setAudio(howl);

    return () => {
      howl.unload();
    };
  }, []);

  const togglePlay = () => {
    if (audio) {
      if (audio.playing()) audio.pause();
      else audio.play();
    }
  };

  return <AudioContext.Provider value={{ audio, togglePlay }}>{children}</AudioContext.Provider>;
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};
