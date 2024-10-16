import { alphabet } from "../lib/const";
import { cn } from "../lib/utils";

import { useGameStore } from "../stores/gameStore";

export default function Keyboard() {
  const handleKeyboardButtonClick = useGameStore(
    (state) => state.handleKeyboardButtonClick,
  );
  const clickedLetters = useGameStore((state) => state.clickedLetters);

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
        >
          {letter}
        </button>
      ))}
    </section>
  );
}
