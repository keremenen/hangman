import HiddenLetters from "./hidden-letters";
import Keyboard from "./keyboard";
import AppBar from "./app-bar";
// import PauseModal from "./pause-modal";
// import useGameStore from "../stores/gameStore";
// import { useEffect } from "react";
// import { getCategoryNameFromUrl, unslugify } from "../lib/utils";
// import { Categories } from "../lib/types";

export default function InGameBoard() {
  // const selectedCategory = useGameStore((state) => state.selectedCategory);
  // const word = useGameStore((state) => state.word);
  // const startGameWithSelectedCategory = useGame
  return (
    <section className="mx-auto grid w-full max-w-sm gap-24 py-4">
      <AppBar />
      <HiddenLetters />
      <Keyboard />
      {/* {isPaused && <PauseModal />} */}
    </section>
  );
}
