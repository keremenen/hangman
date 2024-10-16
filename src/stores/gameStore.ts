import { create } from "zustand";

type GameStore = {
  isGameStarted: boolean;
  selectedCategory: string | null;
  isPaused: boolean;

  selectNewCategory: (category: string) => void;
  togglePause: () => void;
};

export const useGameStore = create<GameStore>((set) => ({
  isGameStarted: false,
  selectedCategory: null,
  isPaused: false,

  selectNewCategory: (category: string) => {
    set({ selectedCategory: category });
  },

  togglePause: () => {
    set((state) => ({ isPaused: !state.isPaused }));
  },
}));
