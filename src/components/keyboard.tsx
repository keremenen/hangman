import { checkIfKeyIsLetter, cn } from "../lib/utils";
import { useGameStore } from "../stores/gameStore";
import { alphabet } from "../lib/const";
import { useEffect } from "react";

export default function Keyboard() {
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
    <section className="flex flex-wrap justify-center gap-x-2 gap-y-4">
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
        "flex items-center justify-center rounded-xl bg-white px-3 py-3 text-2xl text-dark-navy",
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
