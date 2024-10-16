import MainMenuBoard from "./components/main-menu-board";
import { useGameStore } from "./stores/gameStore";
import CategoryPickBoard from "./components/category-pick-board";
import InGameBoard from "./components/in-game-board";
// import HowToPlayBoard from "./components/how-to-play-board";
// import InGameBoard from "./components/in-game-board";
// import MainMenuBoard from "./components/main-menu-board";

function App() {
  const isGameStarted = useGameStore((state) => state.isGameStarted);
  const selectedCategory = useGameStore((state) => state.selectedCategory);

  return (
    <section className="px-4">
      {isGameStarted ? (
        selectedCategory ? (
          <InGameBoard />
        ) : (
          <CategoryPickBoard />
        )
      ) : (
        <MainMenuBoard />
      )}
      {/* <CategoryPickBoard /> */}
      {/* <HowToPlayBoard /> */}
      {/* <InGameBoard /> */}
    </section>
  );
}

export default App;
