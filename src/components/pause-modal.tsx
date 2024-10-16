import Modal, { ModalContent, ModalHeader, ModalOptions } from "./modal";
import Heading from "./heading";
import Button from "./button";
import { useGameStore } from "../stores/gameStore";
import { Link } from "react-router-dom";

export default function PauseModal() {
  const togglePause = useGameStore((state) => state.togglePause);

  return (
    <div className="text absolute left-0 top-0 flex min-h-screen w-full items-center justify-center bg-sky-950/70">
      <Modal>
        <ModalContent>
          <ModalHeader>
            <Heading className="text-8xl">Paused</Heading>
          </ModalHeader>
          <ModalOptions>
            <Button onClick={togglePause}>Continue</Button>
            <Link to="/category">
              <Button onClick={togglePause}>New Category</Button>
            </Link>
            <Link to="/">
              <Button variant="secondary" onClick={togglePause}>
                Quit Game
              </Button>
            </Link>
          </ModalOptions>
        </ModalContent>
      </Modal>
    </div>
  );
}
