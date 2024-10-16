import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function addLeadingZero(number: number) {
  return number < 10 ? `0${number}` : number;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugify(text: string) {
  return text.toLowerCase().replace(/\s/g, "-");
}
