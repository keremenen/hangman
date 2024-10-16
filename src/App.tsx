import MainMenuBoard from "./components/main-menu-board";
import CategoryPickBoard from "./components/category-pick-board";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameManual from "./components/game-manual";
import InGameBoard from "./components/in-game-board";
import { useEffect } from "react";
import { useGameStore } from "./stores/gameStore";

function App() {
  const handleSelectCategory = useGameStore(
    (state) => state.handleSelectCategory,
  );
  const loadCategories = useGameStore((state) => state.loadCategories);

  useEffect(() => {
    // If there is a category in the URL, select it
    loadCategories();
    const params = new URLSearchParams(location.search);
    const category = params.get("category");
    if (category) {
      handleSelectCategory(category);
    }

    // Load categories from JSON
  }, [handleSelectCategory, loadCategories]);

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
