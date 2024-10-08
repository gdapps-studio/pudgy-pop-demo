'use client';

import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { useAudio } from '@/context/audio';
import { useAppStore } from '@/store';

import { BackgroundSkyGradient } from './background-sky-gradient';
import { GameElements } from './game-elements';

const MusicIsPlayingDialog = () => {
  const { backgroundMusicEnabled, musicIsPlayingDialogOpen, toggleMusicIsPlayingDialog } = useAppStore();
  const { audio } = useAudio();

  const handleMusicOnCloseDialog = () => {
    if (!backgroundMusicEnabled) audio?.pause();
    else audio?.play();
    toggleMusicIsPlayingDialog();
  };
  return (
    <Dialog
      open={musicIsPlayingDialogOpen && backgroundMusicEnabled}
      onOpenChange={(open) => {
        if (!open) handleMusicOnCloseDialog();
      }}
    >
      <DialogContent
        aria-label="Click to Start"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') handleMusicOnCloseDialog();
        }}
        onClick={() => handleMusicOnCloseDialog()}
        className="flex items-center justify-center"
      >
        <DialogTitle className="w-full">
          <button className="bg-emerald-500 font-bold py-6 w-full px-10 rounded-lg text-white text-2xl">
            Music is Playing <br />
            Click on Enter or Start 🎶
          </button>
        </DialogTitle>
      </DialogContent>
    </Dialog>
  );
};

const Background = (props: { children: React.ReactNode }) => {
  return (
    <div className="relative bg-main min-h-dvh bg-[40%_-100px] md:bg-[50%_-150px] bg-[length:300%_100%] md:bg-cover bg-no-repeat">
      <MusicIsPlayingDialog />
      <BackgroundSkyGradient />
      <GameElements />
      {props.children}
    </div>
  );
};

export { Background };
