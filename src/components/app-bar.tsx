import menuIcon from "../assets/images/icon-menu.svg";
import { useGameStore } from "../stores/gameStore";
import IconButton from "./icon-button";

// Components
import HeaderWrapper from "./header-wrapper";
import HealthBar from "./health-bar";

export default function AppBar() {
  const togglePause = useGameStore((state) => state.togglePause);
  const selectedCategory = useGameStore((state) => state.selectedCategory);
  const health = useGameStore((state) => state.health);

  return (
    <HeaderWrapper>
      <div className="flex items-center gap-4">
        <IconButton icon={menuIcon} onClick={togglePause} className="z-20" />
        <h1 className="text-4xl capitalize">{selectedCategory}</h1>
      </div>

      <HealthBar currentHealth={health} />
    </HeaderWrapper>
  );
}
