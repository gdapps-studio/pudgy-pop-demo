import { Howl } from 'howler';
import { useEffect, useState } from 'react';

export const useMusic = () => {
  const [audio, setAudio] = useState<Howl | null>(null);

  useEffect(() => {
    const howl = new Howl({
      src: '/audios/game-music.mp3',
      onplayerror: (e, d) => {
        console.log(e, d);
        howl.once('unlock', () => {
          howl.play();
        });
      },
      loop: true,
      volume: 0.25,
      autoplay: true,
    });
    setAudio(howl);

    return () => {
      howl.unload();
    };
  }, []);

  return [audio] as const;
};
