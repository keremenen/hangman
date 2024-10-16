// import { cn } from "../lib/utils";
import { cn } from "../lib/utils";
import { useGameStore } from "../stores/gameStore";

export default function HiddenLetters() {
  const getSelectedWordArray = useGameStore(
    (state) => state.getSelectedWordArray,
  );
  const wordArray = getSelectedWordArray();
  const visibleLetters = useGameStore((state) => state.visibleLetters);
  let globalIndex = 0;
  // console.log(getSelectedWordArray());
  console.log(visibleLetters);

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
                  "flex h-16 w-9 select-none items-center justify-center overflow-hidden rounded-xl bg-blue/100 text-4xl text-transparent opacity-20 shadow-none",
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
