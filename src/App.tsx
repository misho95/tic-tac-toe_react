import { useState } from "react";
import GameMenu from "./components/game.menu";
import PlayGame from "./components/play.game";

function App() {
  const [gameType, setGameType] = useState<number>(0);

  return (
    <div className="w-full min-h-screen bg-darkNavy flex justify-center items-center">
      {gameType === 0 && <GameMenu setGameType={setGameType} />}
      {gameType !== 0 && <PlayGame gameType={gameType} />}
    </div>
  );
}

export default App;
