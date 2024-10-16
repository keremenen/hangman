// import { cn } from "../lib/utils";
import { cn } from "../lib/utils";
import { useGameStore } from "../stores/gameStore";

export default function HiddenLetters() {
  const word = useGameStore((state) => state.word);
  console.log(`World in hiddenLetters: ${word}`);

  const visibleLetters = useGameStore((state) => state.visibleLetters);

  console.log(`Visible letters in hiddenLetters: ${visibleLetters}`);
  //Derived state
  const wordArray = word?.split(" ");
  let globalIndex = 0;

  return (
    <section className="flex flex-wrap justify-center gap-x-8 gap-y-4">
      {wordArray?.map((word, wordIndex) => (
        <section className="flex gap-x-3" key={wordIndex}>
          {word.split("").map((letter, letterIndex) => {
            const isVisible = visibleLetters[globalIndex];
            globalIndex++;
            return (
              <span
                key={letterIndex}
                className={cn(
                  "flex h-16 w-9 select-none items-center justify-center overflow-hidden rounded-xl bg-blue/100 text-4xl text-transparent text-white opacity-20 shadow-none",
                  { "text-white opacity-100": isVisible },
                )}
              >
                {letter}
              </span>
            );
          })}
        </section>
      ))}
    </section>
  );
}
