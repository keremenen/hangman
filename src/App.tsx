import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getCategoryNameFromUrl, unslugify } from "./lib/utils";
import { useGameStore } from "./stores/gameStore";
import { Categories } from "./lib/types";
import { useEffect } from "react";

//Components
import CategoryPickBoard from "./components/category-pick-board";
import GameManualBoard from "./components/game-manual-board";
import MainMenuBoard from "./components/main-menu-board";
import InGameBoard from "./components/in-game-board";
import GameModal from "./components/game-modal";

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
  // This will generate a new word every page refresh ...
  /// ... and when user enter url with category
  useEffect(() => {
    if (data) {
      const category = unslugify(getCategoryNameFromUrl());
      if (category) {
        startGameWithSelectedCategory(category as Categories);
      }
    }
  }, [data, startGameWithSelectedCategory]);

  return (
    <div className="px-4">
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
