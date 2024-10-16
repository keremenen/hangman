import { create } from "zustand";
import { HP_REDUCTION } from "../lib/const";

type GameStore = {
  isGameStarted: boolean;
  selectedCategory: string | null;
  isPaused: boolean;
  word: string | null;
  visibleLetters: boolean[];
  health: number; // should be between 0 and 100
  clickedLetters: string[];

  setNewWord: (word: string) => void;
  setNewCategory: (category: string) => void;
  togglePause: () => void;
  setVisibleLetters: (word: string) => void;
  updateVisibleLetters: (newVisibleLetters: boolean[]) => void;
  checkIfAllLettersAreVisible: () => boolean;
  handleKeyboardButtonClick: (letter: string) => void;
  updateClickedLetters: (letter: string) => void;
  checkIfHealthIsZero: () => boolean;
  checkIfGameIsOver: () => boolean;
};

export const useGameStore = create<GameStore>((set, get) => ({
  isGameStarted: true,
  selectedCategory: null,
  isPaused: false,
  health: 0,
  word: "",
  visibleLetters: [],
  clickedLetters: [],

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

  checkIfHealthIsZero: () => {
    const health = get().health;
    return health <= 0;
  },

  checkIfGameIsOver: () => {
    const { checkIfHealthIsZero, checkIfAllLettersAreVisible } = get();
    const isHealthZero = checkIfHealthIsZero();
    const allLettersAreVisible = checkIfAllLettersAreVisible();
    return isHealthZero || allLettersAreVisible;
  },

  updateClickedLetters: (letter: string) => {
    set((state) => ({ clickedLetters: [...state.clickedLetters, letter] }));
  },

  handleKeyboardButtonClick: (letter: string) => {
    const {
      visibleLetters,
      updateVisibleLetters,
      checkIfGameIsOver,
      updateClickedLetters,
      isGameStarted,
    } = get();

    if (!isGameStarted) return;
    const splittedWord = get().word!.split(" ").join("").split("");

    const loweredWord = splittedWord.map((word) => word.toLowerCase());
    if (!loweredWord.includes(letter)) {
      set((state) => ({ health: state.health - HP_REDUCTION }));
    }

    const newVisibleLetters = [...visibleLetters];
    for (let i = 0; i < splittedWord.length; i++) {
      if (splittedWord[i].toLowerCase() === letter) {
        newVisibleLetters[i] = true;
      }
    }
    updateVisibleLetters(newVisibleLetters);
    updateClickedLetters(letter);
    if (checkIfGameIsOver()) {
      set({ isGameStarted: false });
      console.log("Game is over");
    }
  },
}));
