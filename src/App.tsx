import MainMenuBoard from "./components/main-menu-board";
import CategoryPickBoard from "./components/category-pick-board";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameManualBoard from "./components/game-manual-board";
import InGameBoard from "./components/in-game-board";
import { useEffect } from "react";
import { getCategoryNameFromUrl } from "./lib/utils";

function App() {
  useEffect(() => {
    // If there is a category in the URL, select it and start the game with it
    // [WIP] This is a work in progress
    const category = getCategoryNameFromUrl();
    console.log(category);
  }, []);

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
