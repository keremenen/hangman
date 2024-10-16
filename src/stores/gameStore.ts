import { create } from "zustand";

type GameStore = {
  isGameStarted: boolean;
  selectedCategory: string | null;
  isPaused: boolean;
  word: string | null;
  visibleLetters: boolean[];
  health: number; // should be between 0 and 100

  // derived state
  getSelectedWordArray: () => string[] | null;

  selectNewCategory: (category: string) => void;
  togglePause: () => void;
  setWord: (word: string) => void;
  revealLetter: (index: number) => void;
};

export const useGameStore = create<GameStore>((set, get) => ({
  isGameStarted: false,
  selectedCategory: null,
  isPaused: false,
  health: 80,
  word: "Domek las",
  visibleLetters: [true, false, true, false, true, true, false, false],

  // derived state
  getSelectedWordArray: () => {
    const word = get().word;
    if (!word) return null;

    return word.split(" ");
  },

  selectNewCategory: (category: string) => {
    set({ selectedCategory: category });
  },

  setWord: (word: string) => {
    set({
      word,
      visibleLetters: Array(word.length).fill(false), // Initialize visibility array
    });
  },

  togglePause: () => {
    set((state) => ({ isPaused: !state.isPaused }));
  },

  revealLetter: (index: number) => {
    set((state) => {
      const newVisibleLetters = [...state.visibleLetters];
      newVisibleLetters[index] = true;
      return { visibleLetters: newVisibleLetters };
    });
  },
}));
