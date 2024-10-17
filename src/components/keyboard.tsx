// import { useEffect } from "react";
import { alphabet } from "../lib/const";
import { cn } from "../lib/utils";
import { useGameStore } from "../stores/gameStore";

export default function Keyboard() {
  const handleClickOnVirualKeyboard = useGameStore(
    (state) => state.handleClickOnVirualKeyboard,
  );
  const clickedLetters = useGameStore((state) => state.clickedLetters);
  console.log(`clicked letters: ${clickedLetters}`);

  // useEffect(() => {
  //   console.log(clickedLetters);
  //   const handleRealKeyboardButtonClick = (event: KeyboardEvent) => {
  //     const isLetter = /^[a-zA-Z]$/.test(event.key);
  //     if (isLetter) {
  //       if (clickedLetters.includes(event.key.toLowerCase())) return;
  //       handleKeyboardButtonClick(event.key.toLowerCase());
  //     }
  //   };

  //   window.addEventListener("keypress", handleRealKeyboardButtonClick);

  //   return () => {
  //     window.removeEventListener("keypress", handleRealKeyboardButtonClick);
  //   };
  // }, [clickedLetters, handleKeyboardButtonClick]);

  return (
    <section className="flex flex-wrap justify-center gap-x-2 gap-y-4">
      {alphabet.map((letter, index) => (
        <KeyboardTile
          key={index}
          letter={letter}
          onClick={() => handleClickOnVirualKeyboard(letter.toLowerCase())}
          isDisabled={clickedLetters.includes(letter.toLowerCase())}
        />
      ))}
    </section>
  );
}
// isabled={clickedLetters.includes(letter.toLowerCase())}
// onClick={() => handleKeyboardButtonClick(letter.toLowerCase())}

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
