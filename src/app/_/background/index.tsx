'use client';

import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useEffect, useState } from 'react';

import { BackgroundSkyGradient } from './background-sky-gradient';
import { GameElements } from './game-elements';
import { useMusic } from './use-music';

const DialogDemo = () => {
  const [open, setOpen] = useState(true);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        aria-label="Click to Start"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            setOpen(false);
          }
        }}
        className="flex py-6 items-center justify-center cursor-pointer bg-emerald-500 font-bold text-white text-2xl"
      >
        Click on Enter or Start
      </DialogContent>
    </Dialog>
  );
};

const BackgroundImage = (props: { children: React.ReactNode }) => {
  const [audio] = useMusic();
  useEffect(() => {
    audio?.play();
  }, [audio]);
  return (
    <div className="relative bg-main min-h-dvh bg-[40%_-100px] md:bg-[50%_-150px] bg-[length:300%_100%] md:bg-cover bg-no-repeat">
      <DialogDemo />
      <BackgroundSkyGradient />
      <GameElements />
      {props.children}
    </div>
  );
};

export { BackgroundImage };
