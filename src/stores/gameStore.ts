import { create } from "zustand";

type GameStore = {
  isGameStarted: boolean;
  selectedCategory: string | null;
  isPaused: boolean;
  word: string | null;
  visibleLetters: boolean[];
  health: number; // should be between 0 and 100

  setNewWord: (word: string) => void;
  setNewCategory: (category: string) => void;
  togglePause: () => void;
  setVisibleLetters: (word: string) => void;
  updateVisibleLetters: (newVisibleLetters: boolean[]) => void;
  checkIfAllLettersAreVisible: () => boolean;
};

export const useGameStore = create<GameStore>((set, get) => ({
  isGameStarted: false,
  selectedCategory: null,
  isPaused: false,
  health: 80,
  word: "",
  visibleLetters: [],

  setNewCategory: (selectedCategory: string) => {
    set({ selectedCategory });
  },

  togglePause: () => {
    set((state) => ({ isPaused: !state.isPaused }));
  },

  setNewWord: (word: string) => {
    set({ word });
  },

  setVisibleLetters: (word: string) => {
    const visibleLetters = word
      .split(" ")
      .join("")
      .split("")
      .map(() => false);
    set({ visibleLetters });
  },

  updateVisibleLetters: (newVisibleLetters: boolean[]) => {
    set({ visibleLetters: newVisibleLetters });
  },

  checkIfAllLettersAreVisible: () => {
    const visibleLetters = get().visibleLetters;
    return visibleLetters.every((letter) => letter);
  },
}));
