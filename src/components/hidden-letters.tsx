import { cn } from "../assets/lib/utils";

const hiddenPhrase = "United Kingdom";
const hiddenPhraseWordArray = hiddenPhrase.split(" ");

export default function HiddenLetters() {
  return (
    <section className="flex flex-wrap justify-center gap-y-4">
      {hiddenPhraseWordArray.map((word, wordIndex) => (
        <section key={wordIndex} className="flex gap-x-3">
          {word.split("").map((letter, letterIndex) => {
            const shouldHide = Math.random() < 0.5; // 50% chance to hide the letter
            return (
              <span
                key={letterIndex}
                className={cn(
                  "bg-blue/100 shadow-custom flex h-16 w-9 items-center justify-center overflow-hidden rounded-xl text-4xl",
                  shouldHide && "bg-blue/40 text-transparent shadow-none",
                )}
              >
                {letter.toUpperCase()}
              </span>
            );
          })}
        </section>
      ))}
    </section>
  );
}
