import HeaderWrapper from "./header-wrapper";
import IconButton from "./icon-button";
import HealthBar from "./health-bar";
import { useGameStore } from "../stores/gameStore";
import menuIcon from "../assets/images/icon-menu.svg";

export default function AppBar() {
  const togglePause = useGameStore((state) => state.togglePause);
  const selectedCategory = useGameStore((state) => state.selectedCategory);
  const health = useGameStore((state) => state.health);

  return (
    <HeaderWrapper className="sm:justify-between">
      <div className="flex items-center gap-4">
        <IconButton icon={menuIcon} onClick={togglePause} className="z-20" />
        {selectedCategory && (
          <h1 className="text-4xl capitalize sm:text-heading-m lg:text-heading-l">
            {selectedCategory}
          </h1>
        )}
      </div>

      <HealthBar currentHealth={health} />
    </HeaderWrapper>
  );
}
