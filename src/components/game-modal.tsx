import Modal, { ModalContent, ModalHeader, ModalOptions } from "./modal";
import Heading from "./heading";
import Button from "./button";
import { useGameStore } from "../stores/gameStore";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

type GameModalProps = {
  type: "Pause" | "Won" | "Lost";
};

export default function GameModal({ type }: GameModalProps) {
  const togglePause = useGameStore((state) => state.togglePause);
  const word = useGameStore((state) => state.word);
  const hangleSetNewCategoryButton = useGameStore(
    (state) => state.hangleSetNewCategoryButton,
  );
  const selectedCategory = useGameStore((state) => state.selectedCategory);
  const startGameWithSelectedCategory = useGameStore(
    (state) => state.startGameWithSelectedCategory,
  );
  const handleQuitGame = useGameStore((state) => state.handleQuitGame);

  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        togglePause();
      } else if (
        e.key === "ArrowUp" ||
        e.key === "ArrowDown" ||
        e.key === "Tab"
      ) {
        e.preventDefault();
        const currentIndex = buttonRefs.current.findIndex(
          (button) => button === document.activeElement,
        );
        let nextIndex = currentIndex;
        if (e.key === "ArrowUp") {
          nextIndex =
            (currentIndex - 1 + buttonRefs.current.length) %
            buttonRefs.current.length;
        } else if (e.key === "ArrowDown" || e.key === "Tab") {
          nextIndex = (currentIndex + 1) % buttonRefs.current.length;
        }
        buttonRefs.current[nextIndex]?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [togglePause]);

  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <Heading className="text-[94px] sm:text-[134px]">{type}</Heading>
        </ModalHeader>
        <ModalOptions>
          <p className="text-4xl">Password was: {word}</p>
          {type === "Pause" && (
            <Button
              ref={(el) => (buttonRefs.current[0] = el)}
              onClick={togglePause}
            >
              Continue
            </Button>
          )}
          {(type === "Won" || type === "Lost") && (
            <Button
              ref={(el) => (buttonRefs.current[0] = el)}
              onClick={() => startGameWithSelectedCategory(selectedCategory!)}
            >
              Play Again
            </Button>
          )}
          <Button
            ref={(el) => (buttonRefs.current[1] = el)}
            onClick={hangleSetNewCategoryButton}
            as={Link}
            to="/categories"
          >
            New Category
          </Button>
          <Button
            ref={(el) => (buttonRefs.current[2] = el)}
            variant="secondary"
            onClick={handleQuitGame}
            as={Link}
            to="/"
          >
            Quit Game
          </Button>
        </ModalOptions>
      </ModalContent>
    </Modal>
  );
}
