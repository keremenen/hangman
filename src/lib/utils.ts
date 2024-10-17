import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Categories } from "./types";

export function addLeadingZero(number: number) {
  return number < 10 ? `0${number}` : number;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugify(text: string) {
  if (!text) return "";
  return text.toLowerCase().replace(/\s/g, "-");
}

export const unslugify = (text: string) => {
  if (!text) return "";
  return text.replace(/-/g, " ");
};
// export const getAllCategories = (): Categories[] => {
//   if (!database.categories) return [];
//   return Object.keys(database.categories) as Categories[];
// };

// const getRandomWordFromCategory = (category: Categories): string => {
//   const words = database.categories[category];
//   if (!words || words.length === 0) {
//     throw new Error(`Category ${category} not found or empty`);
//   }

//   const randomIndex = Math.floor(Math.random() * words.length);
//   return words[randomIndex].name;
// };

// export const handleCategoryChoice = (category: CategoryKeys) => {
//   const setNewCategory = useGameStore.getState().setNewCategory;
//   const setNewWord = useGameStore.getState().setNewWord;
//   const setVisibleLetters = useGameStore.getState().setVisibleLetters;

//   const newWord = getRandomWordFromCategory(category);
//   setNewCategory(category);
//   setNewWord(newWord);
//   setVisibleLetters(newWord);
// };

export const cutWord = (word: string | null) => {
  if (!word) return [];
  return word.split(" ").join("").split("");
};

export const getCategoryNameFromUrl = (): Categories => {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category")?.toLowerCase();

  return category as Categories;
};

export const checkIfKeyIsLetter = (event: KeyboardEvent) => {
  return /^[a-zA-Z]$/.test(event.key);
};
