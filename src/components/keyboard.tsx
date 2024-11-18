import { checkIfKeyIsLetter, cn } from "../lib/utils";
import { useGameStore } from "../stores/gameStore";
import { alphabet } from "../lib/const";
import { useEffect } from "react";

export default function Keyboard({ className }: { className?: string }) {
  const handleKeyboardClick = useGameStore(
    (state) => state.handleKeyboardClick,
  );
  const clickedLetters = useGameStore((state) => state.clickedLetters);

  // Handle real keyboard button click
  useEffect(() => {
    const handleRealKeyboardButtonClick = (event: KeyboardEvent) => {
      if (!checkIfKeyIsLetter(event)) return;
      handleKeyboardClick(event.key.toLowerCase());
    };
    window.addEventListener("keypress", handleRealKeyboardButtonClick);

    return () => {
      window.removeEventListener("keypress", handleRealKeyboardButtonClick);
    };
  }, [handleKeyboardClick]);

  return (
    <section
      className={cn(
        "grid w-full grid-cols-9 gap-x-2 gap-y-6 place-self-center lg:gap-x-4",
        className,
      )}
    >
      {alphabet.map((letter, index) => (
        <KeyboardTile
          key={index}
          letter={letter}
          onClick={() => handleKeyboardClick(letter.toLowerCase())}
          isDisabled={clickedLetters.includes(letter.toLowerCase())}
        />
      ))}
    </section>
  );
}

type KeyboardTileProps = {
  onClick: () => void;
  letter: string;
  disabled?: boolean;
  isDisabled: boolean;
};

function KeyboardTile({ onClick, letter, isDisabled }: KeyboardTileProps) {
  return (
    <button
      className={cn(
        "flex h-20 w-full items-center justify-center rounded-[8px] bg-white text-3xl text-dark-navy transition duration-100 hover:scale-105 focus-visible:scale-105 focus-visible:ring-0 sm:rounded-[24px] sm:text-5xl lg:aspect-square",
        {
          "opacity-20": isDisabled,
        },
      )}
      onClick={onClick}
      value={letter}
    >
      {letter}
    </button>
  );
}
