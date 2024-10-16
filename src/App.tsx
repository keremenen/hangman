import MainMenuBoard from "./components/main-menu-board";
import CategoryPickBoard from "./components/category-pick-board";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameManual from "./components/game-manual";
import InGameBoard from "./components/in-game-board";
import { useEffect } from "react";
import { handleCategoryChoice, unslugify } from "./lib/utils";

function App() {
  useEffect(() => {
    // If there is a category in the URL, select it
    const params = new URLSearchParams(location.search);
    const category = params.get("category");

    if (category) handleCategoryChoice(unslugify(category));
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
