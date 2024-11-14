import { create } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";
import { HP_REDUCTION } from "../lib/const";
import { Categories, CategoryTree } from "../lib/types";
import { NavigateFunction } from "react-router-dom";

type GameStore = {
  isGameStarted: boolean;
  selectedCategory: Categories | null;
  isPaused: boolean;
  word: string | null;
  visibleLetters: boolean[];
  health: number; // should be between 0 and 100
  clickedLetters: string[];
  data: CategoryTree | null;
  isLose: boolean;
  isWon: boolean;
  instructions: { title: string; description: string }[] | null;

  setData: () => void;
  setInstructions: () => void;
  setNewWord: (word: string) => void;
  setCategory: (category: Categories) => void;
  togglePause: () => void;
  setVisibleLetters: (word: string) => void;
  updateVisibleLetters: (newVisibleLetters: boolean[]) => void;
  checkIfAllLettersAreVisible: () => boolean;
  updateClickedLetters: (letter: string) => void;
  checkIfHealthIsZero: () => boolean;
  checkIfGameIsOver: () => void;
  getAllCategories: () => Categories[];
  getRandomEntryFromCategory: (category: Categories) => string;
  startGameWithSelectedCategory: (category: Categories) => void;
  handleKeyboardClick: (letter: string) => void;
  getArrayOfLoweredLetters: (word: string) => string[];
  resetClickedLetters: () => void;
  setFullHealth: () => void;
  handleRedirectToCategoryPage: (navigate: NavigateFunction) => void;
  handleRedirectToMainMenu: (navigate: NavigateFunction) => void;
};

export const useGameStore = create(
  persist(
    (set, get) => ({
      isGameStarted: false,

      selectedCategory: null,
      isPaused: false,
      isLose: false,
      isWon: false,
      health: 100,
      word: "",
      visibleLetters: [],
      clickedLetters: [],
      data: null,
      instructions: null,

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

      setInstructions: async () => {
        try {
          const reponse = await fetch("data/game-instructions.json");
          if (!reponse.ok) {
            throw new Error("Network response was not ok");
          }
          const { instructions } = await reponse.json();
          set({ instructions });
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      },

      setCategory: (selectedCategory: Categories) => {
        set({ selectedCategory });
      },

      getAllCategories: () => {
        const data = get().data;
        if (!data) return [];
        return Object.keys(data) as string[];
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

      startGameWithSelectedCategory: (category: Categories) => {
        const {
          setCategory,
          getRandomEntryFromCategory,
          setNewWord,
          setVisibleLetters,
          resetClickedLetters,
          setFullHealth,
        } = get();

        set({ isLose: false, isWon: false, isGameStarted: true });
        setCategory(category);
        const newWord = getRandomEntryFromCategory(category);

        setNewWord(newWord);
        setVisibleLetters(newWord);
        resetClickedLetters();
        setFullHealth();
      },

      getRandomEntryFromCategory: (category: Categories): string => {
        const { data } = get();
        if (!data) return "";
        const words = data![category];
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

        if (isHealthZero) {
          set({ isLose: true, isGameStarted: false });
        }

        if (allLettersAreVisible) {
          set({ isWon: true });
        }
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

      // This is specific for modal component
      handleRedirectToCategoryPage: (navigate: NavigateFunction) => {
        set({
          isGameStarted: false,
          isWon: false,
          isLose: false,
          isPaused: false,
        });
        navigate("/categories");
      },

      handleRedirectToMainMenu: (navigate) => {
        set({
          isGameStarted: false,
          isWon: false,
          isLose: false,
          isPaused: false,
        });

        navigate("/");
      },

      handleKeyboardClick: (letter: string) => {
        const {
          visibleLetters,
          updateVisibleLetters,
          checkIfGameIsOver,
          updateClickedLetters,
          getArrayOfLoweredLetters,
          clickedLetters,
          isGameStarted,
          word,
          isPaused,
        } = get();

        if (isPaused) return;
        if (!isGameStarted) return;
        const loweredWord = getArrayOfLoweredLetters(word!);

        // If the letter was already clicked, return
        if (clickedLetters.includes(letter.toLowerCase())) return;

        // If array from lowered icons doesn't include the letter, reduce health
        if (!loweredWord.includes(letter.toLocaleLowerCase())) {
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
        checkIfGameIsOver();
      },
    }),
    {
      name: "game-store", // name of the item in the storage (must be unique)
      getStorage: () => sessionStorage, // use sessionStorage for persistence
    } as PersistOptions<GameStore>,
  ),
);

export default useGameStore;
