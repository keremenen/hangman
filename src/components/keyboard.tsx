import { alphabet } from "../lib/const";
import { cutWord } from "../lib/utils";
import { useGameStore } from "../stores/gameStore";

export default function Keyboard() {
  const word = cutWord(useGameStore((state) => state.word));
  const visibleLetters = useGameStore((state) => state.visibleLetters);
  const checkIfAllLettersAreVisible = useGameStore(
    (state) => state.checkIfAllLettersAreVisible,
  );

  const updateVisibleLetters = useGameStore(
    (state) => state.updateVisibleLetters,
  );

  const handleKeyboardButtonClick = (letter: string) => {
    const newVisibleLetters = [...visibleLetters];
    for (let i = 0; i < word.length; i++) {
      if (word[i].toLowerCase() === letter) {
        newVisibleLetters[i] = true;
      } else {
        console.log("missed");
      }
    }
    updateVisibleLetters(newVisibleLetters);
    checkIfAllLettersAreVisible();
    if (checkIfAllLettersAreVisible()) {
      console.log("Game won!");
    }
  };

  return (
    <section className="flex flex-wrap justify-center gap-x-2 gap-y-4">
      {alphabet.map((letter, index) => (
        <button
          key={index}
          className="flex items-center justify-center rounded-xl bg-white px-3 py-3 text-2xl text-dark-navy"
          value={letter}
          onClick={() => handleKeyboardButtonClick(letter.toLowerCase())}
        >
          {letter}
        </button>
      ))}
    </section>
  );
}
