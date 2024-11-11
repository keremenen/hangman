import { cn } from "../lib/utils";
import { useGameStore } from "../stores/gameStore";

export default function HiddenLetters({ className }: { className?: string }) {
  const word = useGameStore((state) => state.word);
  const visibleLetters = useGameStore((state) => state.visibleLetters);

  // Create an array of words
  const wordArray = word?.split(" ");

  // // Global index to keep track of the letters
  let globalIndex = 0;

  return (
    <section
      className={cn("flex flex-wrap justify-center gap-x-8 gap-y-4", className)}
    >
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
        "flex h-[66px] w-[40px] select-none items-center justify-center overflow-hidden rounded-[12px] bg-blue text-[40px] uppercase text-transparent opacity-10 shadow-primary-button sm:h-[112px] sm:w-[88px] sm:rounded-[32px] lg:h-[128px] lg:w-[112px] lg:text-[64px]",
        { "text-white opacity-100": isVisible },
      )}
    >
      {letter}
    </span>
  );
}
