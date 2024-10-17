import { cn } from "../lib/utils";
import { useGameStore } from "../stores/gameStore";

export default function HiddenLetters() {
  const word = useGameStore((state) => state.word);
  const visibleLetters = useGameStore((state) => state.visibleLetters);

  // Create an array of words
  const wordArray = word?.split(" ");

  // // Global index to keep track of the letters
  let globalIndex = 0;

  return (
    <section className="flex flex-wrap justify-center gap-x-8 gap-y-4">
      {wordArray?.map((word, wordIndex) => (
        <div className="flex flex-wrap justify-center gap-x-1" key={wordIndex}>
          {word.split("").map((letter, letterIndex) => {
            const isVisible = visibleLetters[globalIndex];
            globalIndex++;
            return (
              <SingleLetterTile
                key={letterIndex}
                letter={letter}
                isVisible={isVisible}
              />
            );
          })}
        </div>
      ))}
    </section>
  );
}

type SingleLetterTileProps = {
  letter: string;
  isVisible: boolean;
};

function SingleLetterTile({ letter, isVisible }: SingleLetterTileProps) {
  return (
    <span
      className={cn(
        "flex h-16 w-7 select-none items-center justify-center overflow-hidden rounded-xl bg-blue/100 text-4xl text-transparent opacity-10 shadow-none",
        { "text-white opacity-100": isVisible },
      )}
    >
      {letter}
    </span>
  );
}
