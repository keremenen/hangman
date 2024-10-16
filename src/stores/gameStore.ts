import { create } from "zustand";

type GameStore = {
  isGameStarted: boolean;
  selectedCategory: string | null;
  isPaused: boolean;
  health: number; // should be between 0 and 100

  selectNewCategory: (category: string) => void;
  togglePause: () => void;
};

export const useGameStore = create<GameStore>((set) => ({
  isGameStarted: false,
  selectedCategory: null,
  isPaused: false,
  health: 80,

  selectNewCategory: (category: string) => {
    set({ selectedCategory: category });
  },

  togglePause: () => {
    set((state) => ({ isPaused: !state.isPaused }));
  },
}));
