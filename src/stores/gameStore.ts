import { create } from "zustand";
import categoriesData from "../data/words.json";
import { unslugify } from "../lib/utils";

type CategoryKeys = keyof typeof categoriesData.categories;

type GameStore = {
  isGameStarted: boolean;
  selectedCategory: string | null;
  isPaused: boolean;
  word: string | null;
  visibleLetters: boolean[];
  health: number; // should be between 0 and 100
  categories: string[] | null;

  // derived state
  getSelectedWordArray: () => string[] | null;

  loadCategories: () => void;
  setCategories: (categories: string[]) => void;
  selectNewCategory: (category: string) => void;
  togglePause: () => void;
  // revealLetter: (index: number) => void;
  handleSelectCategory: (category: string) => void;
  getRandomWordFromCategory(category: string): string | null;
  getVisibleLetters: () => boolean[];
};

export const useGameStore = create<GameStore>((set, get) => ({
  isGameStarted: false,
  selectedCategory: null,
  isPaused: false,
  health: 80,
  word: "",
  visibleLetters: [true, false, true, false, true, true, false, false],

  categories: null,

  selectNewCategory: (selectedCategory: string) => {
    set({ selectedCategory });
  },

  setCategories: (categories: string[]) => {
    set({ categories });
  },

  togglePause: () => {
    set((state) => ({ isPaused: !state.isPaused }));
  },

  // This returns array of words if current word has more than one word
  getSelectedWordArray: () => {
    const word = get().word;
    if (!word) return null;

    return word.split(" ");
  },
  // revealLetter: (index: number) => {
  //   set((state) => {
  //     const newVisibleLetters = [...state.visibleLetters];
  //     newVisibleLetters[index] = true;
  //     return { visibleLetters: newVisibleLetters };
  //   });
  getRandomWordFromCategory: (category: CategoryKeys) => {
    const words = categoriesData.categories[category];
    if (!words || words.length === 0) return null;

    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex].name;
  },

  loadCategories: () => {
    const categories = Object.keys(categoriesData.categories);
    set({ categories });
  },

  getVisibleLetters: () => {
    const word = get().word;
    console.log(`word in getVisibleLetters: ${word}`);
    console.log(word);
    if (!word) return [];

    return word.split("").map(() => false);
  },

  handleSelectCategory: async (category: string) => {
    set({
      selectedCategory: category,
      word: await get().getRandomWordFromCategory(unslugify(category)),
      visibleLetters: get().getVisibleLetters(),
    });
  },
}));
