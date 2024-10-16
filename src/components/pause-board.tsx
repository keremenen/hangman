import Modal, { ModalContent, ModalHeader, ModalOptions } from "./modal";
import Heading from "./heading";
import Button from "./button";

export default function PauseModal() {
  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <Heading className="text-8xl">Paused</Heading>
        </ModalHeader>
        <ModalOptions>
          <Button>Continue</Button>
          <Button>New Category</Button>
          <Button variant="secondary">Quit Game</Button>
        </ModalOptions>
      </ModalContent>
    </Modal>
  );
}
