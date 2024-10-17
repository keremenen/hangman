import MainMenuBoard from "./components/main-menu-board";
import CategoryPickBoard from "./components/category-pick-board";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // redirect,
} from "react-router-dom";
import GameManualBoard from "./components/game-manual-board";
import InGameBoard from "./components/in-game-board";
import { useEffect } from "react";
// import { getCategoryNameFromUrl, handleCategoryChoice } from "./lib/utils";
import { useGameStore } from "./stores/gameStore";

function App() {
  const setData = useGameStore((state) => state.setData);

  // const data = useGameStore((state) => state.data);
  // Fetch data from .json file and set it to the store
  useEffect(() => {
    setData();
  }, [setData]);

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
