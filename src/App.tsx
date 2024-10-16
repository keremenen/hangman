import MainMenuBoard from "./components/main-menu-board";
import CategoryPickBoard from "./components/category-pick-board";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameManual from "./components/game-manual";
import InGameBoard from "./components/in-game-board";
import { useEffect } from "react";
import { CategoryKeys, handleCategoryChoice, unslugify } from "./lib/utils";
import { useGameStore } from "./stores/gameStore";

function App() {
  const health = useGameStore((state) => state.health);
  console.log(health);

  useEffect(() => {
    // If there is a category in the URL, select it
    const params = new URLSearchParams(location.search);
    const category = params.get("category");

    if (category) handleCategoryChoice(unslugify(category) as CategoryKeys);
  }, []);

  return (
    <section className="px-4">
      <Router>
        <Routes>
          <Route path="/" element={<MainMenuBoard />} />
          <Route path="/instructions" element={<GameManual />} />
          <Route path="/category" element={<CategoryPickBoard />} />
          <Route path="/app" element={<InGameBoard />} />
        </Routes>
      </Router>
    </section>
  );
}

export default App;
