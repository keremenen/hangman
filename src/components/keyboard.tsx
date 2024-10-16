import { alphabet } from "../lib/const";

export default function Keyboard() {
  const hiddenPhrase = "United Kingdom";

  const handleKeyboardButtonClick = (letter: string) => {
    if (hiddenPhrase.toLowerCase().includes(letter)) {
      console.log(
        `Correct: letter ${letter} at indexes ${hiddenPhrase
          .toLowerCase()
          .split("")
          .map((l, i) => (l === letter ? i : null))
          .filter((i) => i !== null)}`,
      );
      return;
    } else {
      console.log("Incorrect");
      return;
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
