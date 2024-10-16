import { create } from "zustand";

type GameStore = {
  isGameStarted: boolean;
  selectedCategory: string | null;

  selectNewCategory: (category: string) => void;
};

export const useGameStore = create<GameStore>((set) => ({
  isGameStarted: false,
  selectedCategory: null,

  selectNewCategory: (category: string) => {
    set({ selectedCategory: category });
  },
}));
