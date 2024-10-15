import { addLeadingZero } from "../assets/lib/utils";

const hangmanGameInstructions = [
  {
    title: "Choose a category",
    description:
      "First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.",
  },
  {
    title: "Guess the letters",
    description:
      "Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it’s wrong, you lose some health, which empties after eight incorrect guesses.",
  },
  {
    title: "Solve the word",
    description:
      "You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose.",
  },
];

type SingleGameManualProps = {
  instruction: { title: string; description: string };
  index: number;
};

export default function GameManual() {
  return (
    <section className="flex flex-col items-center justify-center gap-6">
      {hangmanGameInstructions.map((instruction, index) => (
        <SingleGameManual instruction={instruction} key={index} index={index} />
      ))}
    </section>
  );
}

function SingleGameManual({ instruction, index }: SingleGameManualProps) {
  return (
    <article className="grid-row-2 grid grid-cols-[20px_1fr] gap-4 rounded-3xl bg-white p-8">
      <p className="text-blue text-2xl">{addLeadingZero(index + 1)}</p>
      <h3 className="text-dark-navy text-2xl uppercase tracking-wide">
        {instruction.title}
      </h3>
      <p className="text-violet col-span-2 tracking-wide">
        {instruction.description}
      </p>
    </article>
  );
}
