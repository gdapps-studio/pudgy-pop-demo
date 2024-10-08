import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Store {
  backgroundMusicEnabled: boolean;
  toggleBackgroundMusic: () => void;
  musicIsPlayingDialogOpen: boolean;
  toggleMusicIsPlayingDialog: () => void;
}

export const BACKGROUND_MUSIC_VOLUME = 0.25;

export const useAppStore = create<Store>()(
  persist(
    (set, get) => ({
      backgroundMusicEnabled: true,
      toggleBackgroundMusic: () => {
        // check if musicIsPlayingDialogOpen is open, close it
        if (get().musicIsPlayingDialogOpen) set((state) => ({ musicIsPlayingDialogOpen: false }));
        set((state) => ({ backgroundMusicEnabled: !state.backgroundMusicEnabled }));
      },
      musicIsPlayingDialogOpen: true,
      toggleMusicIsPlayingDialog: () => {
        set((state) => ({ musicIsPlayingDialogOpen: !state.musicIsPlayingDialogOpen }));
      },
    }),
    {
      name: 'app.pudgypop',
      partialize: (state) => ({ backgroundMusicEnabled: state.backgroundMusicEnabled }),
    }
  )
);
