import Modal, { ModalContent, ModalHeader, ModalOptions } from "./modal";
import Heading from "./heading";
import Button from "./button";
import { useGameStore } from "../stores/gameStore";
import { useNavigate } from "react-router-dom";
import ReactFocusLock from "react-focus-lock";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";

type GameModalProps = {
  type: "Pause" | "Won" | "Lost";
};

export default function GameModal({ type }: GameModalProps) {
  const MotionModalContent = motion(ModalContent);
  const navigate = useNavigate();
  const togglePause = useGameStore((state) => state.togglePause);
  const word = useGameStore((state) => state.word);
  const handleRedirectToCategoryPage = useGameStore(
    (state) => state.handleRedirectToCategoryPage,
  );
  const selectedCategory = useGameStore((state) => state.selectedCategory);
  const startGameWithSelectedCategory = useGameStore(
    (state) => state.startGameWithSelectedCategory,
  );
  const handleRedirectToMainMenu = useGameStore(
    (state) => state.handleRedirectToMainMenu,
  );

  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        togglePause();
      } else if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        e.preventDefault();
        const focusableElements = buttonRefs.current.filter(Boolean);
        const currentIndex = focusableElements.indexOf(
          document.activeElement as HTMLButtonElement,
        );
        let nextIndex = currentIndex;
        if (e.key === "ArrowUp") {
          nextIndex =
            (currentIndex - 1 + focusableElements.length) %
            focusableElements.length;
        } else if (e.key === "ArrowDown") {
          nextIndex = (currentIndex + 1) % focusableElements.length;
        }
        focusableElements[nextIndex]?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [togglePause]);

  return (
    <Modal>
      <ReactFocusLock returnFocus>
        <MotionModalContent
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
        >
          <ModalHeader>
            <Heading className="text-[94px] sm:text-[134px]">{type}</Heading>
          </ModalHeader>
          <ModalOptions>
            {type === "Pause" && (
              <Button
                ref={(el) => (buttonRefs.current[0] = el)}
                onClick={togglePause}
              >
                Continue
              </Button>
            )}
            {(type === "Won" || type === "Lost") && (
              <>
                <p className="text-4xl">Password was: {word}</p>
                <Button
                  ref={(el) => (buttonRefs.current[0] = el)}
                  onClick={() =>
                    startGameWithSelectedCategory(selectedCategory!)
                  }
                >
                  Play Again
                </Button>
              </>
            )}
            <Button
              ref={(el) => (buttonRefs.current[1] = el)}
              onClick={() => handleRedirectToCategoryPage(navigate)}
            >
              New Category
            </Button>
            <Button
              ref={(el) => (buttonRefs.current[2] = el)}
              variant="secondary"
              onClick={() => handleRedirectToMainMenu(navigate)}
            >
              Quit Game
            </Button>
          </ModalOptions>
        </MotionModalContent>
      </ReactFocusLock>
    </Modal>
  );
}
