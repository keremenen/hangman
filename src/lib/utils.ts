import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useGameStore } from "../stores/gameStore";
import database from "../data/words.json";

type CategoryKeys = keyof typeof database.categories;

export function addLeadingZero(number: number) {
  return number < 10 ? `0${number}` : number;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugify(text: string) {
  return text.toLowerCase().replace(/\s/g, "-");
}

export function unslugify(text: string) {
  return text
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

type Database = {
  categories: {
    [key: string]: { name: string }[];
  };
};

export const getAllCategories = (database: Database): string[] => {
  return Object.keys(database.categories);
};

const getRandomWordFromCategory = (category: CategoryKeys): string => {
  const words = database.categories[category];
  if (!words || words.length === 0) {
    throw new Error(`Category ${category} not found or empty`);
  }

  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex].name;
};

export const handleCategoryChoice = (category: CategoryKeys) => {
  const setNewCategory = useGameStore.getState().setNewCategory;
  const setNewWord = useGameStore.getState().setNewWord;
  const setVisibleLetters = useGameStore.getState().setVisibleLetters;

  const newWord = getRandomWordFromCategory(category);
  setNewCategory(category);
  setNewWord(newWord);
  setVisibleLetters(newWord);
};
