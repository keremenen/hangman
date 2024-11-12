import MenuIcon from "../assets/images/icon-menu.svg?react";
import HeaderWrapper from "./header-wrapper";
import IconButton from "./icon-button";
import HealthBar from "./health-bar";
import { useGameStore } from "../stores/gameStore";

export default function AppBar() {
  const togglePause = useGameStore((state) => state.togglePause);
  const selectedCategory = useGameStore((state) => state.selectedCategory);
  const health = useGameStore((state) => state.health);

  return (
    <HeaderWrapper className="sm:justify-between">
      <div className="flex items-center gap-4 sm:gap-8 lg:gap-[57px]">
        <IconButton
          icon={<MenuIcon />}
          onClick={togglePause}
          className="z-20"
        />
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
