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
    title: "Guess letters",
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
    <section className="mx-auto flex w-full max-w-[324px] flex-col gap-y-[79px] pt-8 sm:max-w-[680px] sm:gap-y-[100px] sm:pt-[61px]">
      <HeaderWrapper>
        <Link to="/" className="sm:absolute sm:left-0">
          <IconButton icon={backIcon} />
        </Link>
        <Heading>How to Play</Heading>
      </HeaderWrapper>

      <section className="flex flex-col gap-6 sm:gap-8">
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
    <article className="grid-row-2 grid grid-cols-[auto_1fr] items-center gap-4 rounded-[20px] bg-white p-8 sm:gap-x-10 sm:rounded-[40px] sm:px-10">
      <p className="text-[24px] tracking-wider text-blue sm:row-span-2 sm:flex sm:items-center sm:justify-center sm:text-heading-l">
        {addLeadingZero(index + 1)}
      </p>
      <h3 className="text-[24px] uppercase leading-tight tracking-wider text-dark-navy sm:text-[40px]">
        {instruction.title}
      </h3>
      <p className="col-span-2 text-[16px] leading-[120%] tracking-wider text-violet sm:col-span-1 sm:text-[20px]">
        {instruction.description}
      </p>
    </article>
  );
}
