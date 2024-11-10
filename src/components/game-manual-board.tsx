import { Link } from "react-router-dom";
import { addLeadingZero } from "../lib/utils";
import HeaderWrapper from "./header-wrapper";
import IconButton from "./icon-button";
import Heading from "./heading";
import backIcon from "../assets/images/icon-back.svg";

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

export default function GameManualBoard() {
  return (
    <section className="mx-auto flex w-full max-w-sm flex-col gap-y-24 pt-8 sm:max-w-[680px] sm:pt-[61px]">
      <HeaderWrapper>
        <Link to="/" className="sm:absolute sm:left-0">
          <IconButton icon={backIcon} />
        </Link>
        <Heading>How to Play</Heading>
      </HeaderWrapper>
      <section className="flex flex-col gap-8">
        {hangmanGameInstructions.map((instruction, index) => (
          <SingleGameManual
            instruction={instruction}
            key={index}
            index={index}
          />
        ))}
      </section>
    </section>
  );
}

function SingleGameManual({ instruction, index }: SingleGameManualProps) {
  return (
    <article className="grid-row-2 grid grid-cols-[20px_1fr] gap-4 rounded-3xl bg-white p-8">
      <p className="text-2xl text-blue sm:row-span-2 sm:flex sm:items-center sm:justify-center sm:text-heading-l">
        {addLeadingZero(index + 1)}
      </p>
      <h3 className="text-2xl uppercase tracking-wide text-dark-navy">
        {instruction.title}
      </h3>
      <p className="col-span-2 tracking-wide text-violet sm:col-span-1">
        {instruction.description}
      </p>
    </article>
  );
}
