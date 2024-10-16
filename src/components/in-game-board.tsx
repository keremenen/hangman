import menuIcon from "../assets/images/icon-menu.svg";

import IconButton from "./icon-button";

import HeaderWrapper from "./header-wrapper";
import HealthBar from "./health-bar";
import HiddenLetters from "./hidden-letters";
import Keyboard from "./keyboard";
import { useGameStore } from "../stores/gameStore";

export default function InGameBoard() {
  const selectedCategory = useGameStore((state) => state.selectedCategory);

  return (
    <section className="mx-auto grid w-full max-w-sm gap-24 py-4">
      <HeaderWrapper>
        <div className="flex items-center gap-4">
          <IconButton icon={menuIcon} />
          <h1 className="text-4xl tracking-wide">{selectedCategory}</h1>
        </div>
        <HealthBar />
      </HeaderWrapper>

      <HiddenLetters />
      <Keyboard />
    </section>
  );
}
