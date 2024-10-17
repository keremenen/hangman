import { clsx } from "clsx";
import { create } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";
import { HP_REDUCTION } from "../lib/const";
import { Categories, CategoryTree } from "../lib/types";

type GameStore = {
  isGameStarted: boolean;
  selectedCategory: Categories | null;
  isPaused: boolean;
  word: string | null;
  visibleLetters: boolean[];
  health: number; // should be between 0 and 100
  clickedLetters: string[];
  data: CategoryTree | null;

  setData: () => void;
  setNewWord: (word: string) => void;
  setCategory: (category: Categories) => void;
  togglePause: () => void;
  setVisibleLetters: (word: string) => void;
  updateVisibleLetters: (newVisibleLetters: boolean[]) => void;
  checkIfAllLettersAreVisible: () => boolean;
  updateClickedLetters: (letter: string) => void;
  checkIfHealthIsZero: () => boolean;
  checkIfGameIsOver: () => boolean;
  getAllCategories: () => string[];
  getRandomEntryFromCategory: () => string;
  startGameWithSelectedCategory: (category: Categories) => void;
  handleKeyboardClick: (letter: string) => void;
  getArrayOfLoweredLetters: (word: string) => string[];
  resetClickedLetters: () => void;
  setFullHealth: () => void;
};

export const useGameStore = create(
  persist(
    (set, get) => ({
      isGameStarted: false,
      selectedCategory: null,
      isPaused: false,
      health: 100,
      word: "",
      visibleLetters: [],
      clickedLetters: [],
      data: null,

      setData: async () => {
        try {
          const response = await fetch("/data/words.json");
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data: CategoryTree = await response.json();
          set({ data });
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      },

      // CATEGORY SECTION
      setCategory: (selectedCategory: Categories) => {
        set({ selectedCategory });
      },

      getAllCategories: () => {
        const data = get().data;
        if (!data) return [];
        return Object.keys(data) as string[];
      },

      // GLOBAL GAME STATE SECTION

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

      startGameWithSelectedCategory: (category: Categories) => {
        const {
          setCategory,
          getRandomEntryFromCategory,
          setNewWord,
          setVisibleLetters,
          resetClickedLetters,
          setFullHealth,
        } = get();
        setCategory(category);
        const newWord = getRandomEntryFromCategory();
        setNewWord(newWord);
        setVisibleLetters(newWord);
        resetClickedLetters();
        setFullHealth();
      },

      getRandomEntryFromCategory: (): string => {
        const { selectedCategory, data } = get();
        if (!selectedCategory || !data) return "";

        const words = data[selectedCategory];
        if (!words || words.length === 0) return "";

        const randomIndex = Math.floor(Math.random() * words.length);
        return words[randomIndex].name.toString();
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

      resetClickedLetters: () => {
        set({ clickedLetters: [] });
      },

      setFullHealth: () => {
        set({ health: 100 });
      },

      getArrayOfLoweredLetters: (word: string) => {
        return word
          .split(" ")
          .join("")
          .split("")
          .map((word) => word.toLowerCase());
      },

      handleKeyboardClick: (letter: string) => {
        const {
          visibleLetters,
          updateVisibleLetters,
          checkIfGameIsOver,
          updateClickedLetters,
          getArrayOfLoweredLetters,
          word,
        } = get();

        const loweredWord = getArrayOfLoweredLetters(word!);

        // If array from lowered icons doesn't include the letter, reduce health
        if (!loweredWord.includes(letter)) {
          set((state) => ({ health: state.health - HP_REDUCTION }));
        }

        // Hide pressed letter in the keyboard component
        const newVisibleLetters = [...visibleLetters];
        for (let i = 0; i < loweredWord.length; i++) {
          if (loweredWord[i].toLowerCase() === letter) {
            newVisibleLetters[i] = true;
          }
        }
        updateVisibleLetters(newVisibleLetters);
        updateClickedLetters(letter);

        // Check if the game is over
        if (checkIfGameIsOver()) {
          set({ isGameStarted: false });
          console.log("Game is over");
        }
      },
    }),
    {
      name: "game-store", // name of the item in the storage (must be unique)
      getStorage: () => sessionStorage, // use sessionStorage for persistence
    } as PersistOptions<GameStore>,
  ),
);

export default useGameStore;
