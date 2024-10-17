import MainMenuBoard from "./components/main-menu-board";
import CategoryPickBoard from "./components/category-pick-board";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameManualBoard from "./components/game-manual-board";
import InGameBoard from "./components/in-game-board";
import { useEffect } from "react";
import { useGameStore } from "./stores/gameStore";
import { getCategoryNameFromUrl, unslugify } from "./lib/utils";
import { Categories } from "./lib/types";

function App() {
  const setData = useGameStore((state) => state.setData);
  const data = useGameStore((state) => state.data);

  const startGameWithSelectedCategory = useGameStore(
    (state) => state.startGameWithSelectedCategory,
  );

  // Set data on app mount
  useEffect(() => {
    setData();
    // const category = unslugify(getCategoryNameFromUrl());
    // startGameWithSelectedCategory(category as Categories);
  }, [setData]);

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
          <Route path="/category" element={<CategoryPickBoard />} />
          <Route path="/app" element={<InGameBoard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
