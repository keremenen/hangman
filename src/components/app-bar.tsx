import HeaderWrapper from "./header-wrapper";
import IconButton from "./icon-button";
import HealthBar from "./health-bar";
import { useGameStore } from "../stores/gameStore";
import menuIcon from "../assets/images/icon-menu.svg";
import PauseModal from "./pause-modal";
import { unslugify } from "../lib/utils";

export default function AppBar() {
  const togglePause = useGameStore((state) => state.togglePause);
  const selectedCategory = useGameStore((state) => state.selectedCategory);
  const isPaused = useGameStore((state) => state.isPaused);
  const health = useGameStore((state) => state.health);

  return (
    <HeaderWrapper>
      <div className="flex items-center gap-4">
        <IconButton icon={menuIcon} onClick={togglePause} className="z-20" />
        <h1 className="text-4xl tracking-wide">
          {selectedCategory && unslugify(selectedCategory)}
        </h1>
      </div>
      <HealthBar currentHealth={health} />

      {isPaused && <PauseModal />}
    </HeaderWrapper>
  );
}
