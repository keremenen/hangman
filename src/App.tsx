import MainMenuBoard from "./components/main-menu-board";
import CategoryPickBoard from "./components/category-pick-board";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameManualBoard from "./components/game-manual-board";
import InGameBoard from "./components/in-game-board";
import { useEffect } from "react";
import { useGameStore } from "./stores/gameStore";
import { getCategoryNameFromUrl } from "./lib/utils";

function App() {
  const setData = useGameStore((state) => state.setData);

  const data = useGameStore((state) => state.data);
  const word = useGameStore((state) => state.word);
  const startGameWithSelectedCategory = useGameStore(
    (state) => state.startGameWithSelectedCategory,
  );

  const category = getCategoryNameFromUrl();

  console.log(`data: ${data}`);
  console.log(`word: ${word}`);

  // Set data on app mount
  useEffect(() => {
    const fetchData = async () => {
      await setData();
      if (!word) {
        console.log(`GÓWNO GÓWNO A CATEGORIA TO ${category}`);
        startGameWithSelectedCategory(category);
      }
    };

    fetchData();
  }, [setData, word, category]);

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
