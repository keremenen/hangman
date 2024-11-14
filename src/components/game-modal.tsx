import Modal, { ModalContent, ModalHeader, ModalOptions } from "./modal";
import Heading from "./heading";
import Button from "./button";
import { useGameStore } from "../stores/gameStore";
import { Link } from "react-router-dom";

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

  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <Heading className="text-[94px] sm:text-[134px]">{type}</Heading>
        </ModalHeader>
        <ModalOptions>
          <p className="text-4xl">Password was: {word}</p>
          {type === "Pause" && <Button onClick={togglePause}>Continue</Button>}
          {(type === "Won" || type === "Lost") && (
            <Button
              onClick={() => startGameWithSelectedCategory(selectedCategory!)}
            >
              Play Again
            </Button>
          )}
          <Button
            onClick={hangleSetNewCategoryButton}
            as={Link}
            to="/categories"
          >
            New Category
          </Button>
          <Button variant="secondary" onClick={handleQuitGame} as={Link} to="/">
            Quit Game
          </Button>
        </ModalOptions>
      </ModalContent>
    </Modal>
  );
}
