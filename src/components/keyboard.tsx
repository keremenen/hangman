import { useEffect } from "react";
import { alphabet } from "../lib/const";
import { cn } from "../lib/utils";

import { useGameStore } from "../stores/gameStore";

export default function Keyboard() {
  const handleKeyboardButtonClick = useGameStore(
    (state) => state.handleKeyboardButtonClick,
  );
  const clickedLetters = useGameStore((state) => state.clickedLetters);

  useEffect(() => {
    console.log(clickedLetters);
    const handleRealKeyboardButtonClick = (event: KeyboardEvent) => {
      const isLetter = /^[a-zA-Z]$/.test(event.key);
      if (isLetter) {
        if (clickedLetters.includes(event.key.toLowerCase())) return;
        handleKeyboardButtonClick(event.key.toLowerCase());
      }
    };

    window.addEventListener("keypress", handleRealKeyboardButtonClick);

    return () => {
      window.removeEventListener("keypress", handleRealKeyboardButtonClick);
    };
  }, [clickedLetters, handleKeyboardButtonClick]);

  return (
    <section className="flex flex-wrap justify-center gap-x-2 gap-y-4">
      {alphabet.map((letter, index) => (
        <button
          key={index}
          className={cn(
            "flex items-center justify-center rounded-xl bg-white px-3 py-3 text-2xl text-dark-navy",
            {
              "opacity-20": clickedLetters.includes(letter.toLowerCase()),
            },
          )}
          value={letter}
          disabled={clickedLetters.includes(letter.toLowerCase())}
          onClick={() => handleKeyboardButtonClick(letter.toLowerCase())}
          // add event listerenr to keyboard
          // onKeyPress={() => console.log("key pressed")}
        >
          {letter}
        </button>
      ))}
    </section>
  );
}
