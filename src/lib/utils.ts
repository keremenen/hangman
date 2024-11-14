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

export const getCategoryNameFromUrl = (): Categories => {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category")?.toLowerCase();

  return category as Categories;
};

export const checkIfKeyIsLetter = (event: KeyboardEvent) => {
  return /^[a-zA-Z]$/.test(event.key);
};

export const handleEcapeToMainPageClick = (e: KeyboardEvent) => {
  if (e.key === "Escape") {
    window.location.href = "/";
  }
};

export const handleEcapeClickWithCallback = (
  e: KeyboardEvent,
  callback: () => void,
) => {
  if (e.key === "Escape") {
    console.log("should");
    callback();
  }
};
