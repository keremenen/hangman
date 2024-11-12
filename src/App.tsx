import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getCategoryNameFromUrl, unslugify } from "./lib/utils";
import { useGameStore } from "./stores/gameStore";
import { Categories } from "./lib/types";
import { useEffect } from "react";

//Components

import GameModal from "./components/game-modal";
import MainMenuBoard from "./components/boards/main-menu-board";
import GameManualBoard from "./components/boards/game-manual-board";
import InGameBoard from "./components/boards/in-game-board";
import CategoryPickBoard from "./components/boards/category-pick-board";

function App() {
  const setData = useGameStore((state) => state.setData);
  const data = useGameStore((state) => state.data);

  const startGameWithSelectedCategory = useGameStore(
    (state) => state.startGameWithSelectedCategory,
  );
  const isPaused = useGameStore((state) => state.isPaused);
  const isWon = useGameStore((state) => state.isWon);
  const isLose = useGameStore((state) => state.isLose);

  // Set data on app mount
  useEffect(() => {
    setData();
  }, [setData]);

  // Start game with selected category from URL
  useEffect(() => {
    if (data) {
      const category = unslugify(getCategoryNameFromUrl());
      if (category) {
        startGameWithSelectedCategory(category as Categories);
      }
    }
  }, [data, startGameWithSelectedCategory]);

  return (
    <div className="px-[25px]">
      <Router>
        <Routes>
          <Route path="/" element={<MainMenuBoard />} />
          <Route path="/instructions" element={<GameManualBoard />} />
          <Route path="/categories" element={<CategoryPickBoard />} />
          <Route path="/app" element={<InGameBoard />} />
        </Routes>
        {isPaused && <GameModal type="Paused" />}
        {isWon && <GameModal type="You Win" />}
        {isLose && <GameModal type="You Lose" />}
      </Router>
    </div>
  );
}

export default App;
