import Modal, { ModalContent, ModalHeader, ModalOptions } from "./modal";
import Heading from "./heading";
import Button from "./button";
import { useGameStore } from "../stores/gameStore";
import { Link } from "react-router-dom";

type GameModalProps = {
  type: "Paused" | "You Win" | "You Lose";
};

export default function GameModal({ type }: GameModalProps) {
  const togglePause = useGameStore((state) => state.togglePause);
  const hangleSetNewCategoryButton = useGameStore(
    (state) => state.hangleSetNewCategoryButton,
  );
  const selectedCategory = useGameStore((state) => state.selectedCategory);
  const startGameWithSelectedCategory = useGameStore(
    (state) => state.startGameWithSelectedCategory,
  );
  const handleQuitGame = useGameStore((state) => state.handleQuitGame);

  return (
    <div className="text absolute left-0 top-0 flex min-h-screen w-full items-center justify-center bg-sky-950/70">
      <Modal>
        <ModalContent>
          <ModalHeader>
            <Heading className="text-8xl">{type}</Heading>
          </ModalHeader>
          <ModalOptions>
            {type === "Paused" && (
              <Button onClick={togglePause}>Continue</Button>
            )}
            {(type === "You Win" || type === "You Lose") && (
              <Button
                onClick={() => startGameWithSelectedCategory(selectedCategory!)}
              >
                Play Again
              </Button>
            )}
            <Link to="/categories">
              <Button onClick={hangleSetNewCategoryButton}>New Category</Button>
            </Link>
            <Link to="/">
              <Button variant="secondary" onClick={handleQuitGame}>
                Quit Game
              </Button>
            </Link>
          </ModalOptions>
        </ModalContent>
      </Modal>
    </div>
  );
}
