import MainMenuBoard from "./components/main-menu-board";
// import { useGameStore } from "./stores/gameStore";
import CategoryPickBoard from "./components/category-pick-board";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameManual from "./components/game-manual";
import InGameBoard from "./components/in-game-board";
import { useEffect } from "react";
import { useGameStore } from "./stores/gameStore";
// import HowToPlayBoard from "./components/how-to-play-board";
// import MainMenuBoard from "./components/main-menu-board";

function App() {
  // const isGameStarted = useGameStore((state) => state.isGameStarted);
  // const selectedCategory = useGameStore((state) => state.selectedCategory);
  const selectNewCategory = useGameStore((state) => state.selectNewCategory);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get("category");
    if (category) {
      selectNewCategory(category);
    }
  }, [selectNewCategory]);

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

      {/* <CategoryPickBoard /> */}
      {/* <HowToPlayBoard /> */}
    </section>
  );
}

export default App;
