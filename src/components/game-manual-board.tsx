import { Link } from "react-router-dom";
import { addLeadingZero, cn } from "../lib/utils";
import HeaderWrapper from "./header-wrapper";
import IconButton from "./icon-button";
import Heading from "./heading";
import backIcon from "../assets/images/icon-back.svg";
import Container from "./container";
import FullPageContainer from "./full-page-container";

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
    title: "Win or lose",
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
    <FullPageContainer className="pt-[31px] md:pt-[61px] lg:pt-20">
      <Container className="px-[10px] md:max-w-[76rem]">
        <HeaderWrapper>
          <Link to="/" className="sm:absolute sm:left-0">
            <IconButton icon={backIcon} />
          </Link>
          <Heading>How to Play</Heading>
        </HeaderWrapper>

        <GameInstructions className="mt-[79px] md:mt-[69px]">
          {hangmanGameInstructions.map((instruction, index) => (
            <SingleGameInstruction
              instruction={instruction}
              key={index}
              index={index}
            />
          ))}
        </GameInstructions>
      </Container>
    </FullPageContainer>
  );
}

type GameInstructionsProps = {
  children: React.ReactNode;
  className?: string;
};

function GameInstructions({ children, className }: GameInstructionsProps) {
  return (
    <section
      className={cn("flex flex-col gap-6 sm:gap-8 lg:flex-row", className)}
    >
      {children}
    </section>
  );
}

function SingleGameInstruction({ instruction, index }: SingleGameManualProps) {
  return (
    <article className="grid grid-cols-[auto_1fr] grid-rows-[auto_auto] gap-4 rounded-[20px] bg-white p-8">
      {/* SEPAR */}
      <p className="text-[24px] leading-[1.20] tracking-wider text-blue">
        {addLeadingZero(index + 1)}
      </p>
      <h3 className="text-nowrap text-[24px] uppercase leading-[1.20] tracking-wider text-dark-navy">
        {instruction.title}
      </h3>
      <p className="col-span-2 text-[16px] leading-[1.20] tracking-wider text-violet">
        {instruction.description}
      </p>
    </article>
  );
}

// grid grid-cols-[auto_1fr] grid-rows-3 items-center gap-4 rounded-[20px] bg-white p-8 sm:gap-x-10 sm:rounded-[40px] sm:px-10 lg:h-[550px] lg:w-full lg:grid-cols-[1fr] lg:grid-rows-[auto_auto_auto] lg:gap-y-10 lg:px-12 lg:pt-[60px] lg:text-center
