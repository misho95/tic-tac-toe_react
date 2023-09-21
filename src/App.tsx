import { useState } from "react";
import GameMenu from "./components/game.menu";
import PlayGame from "./components/play.game";

function App() {
  const [gameType, setGameType] = useState<number>(0);
  const [playersMark, setPlayersMark] = useState<boolean>(true);

  return (
    <div className="w-full min-h-screen bg-darkNavy flex justify-center sm:items-center pt-20 sm:pt-0">
      {gameType === 0 && (
        <GameMenu setGameType={setGameType} setPlayersMark={setPlayersMark} />
      )}
      {gameType !== 0 && (
        <PlayGame
          gameType={gameType}
          setGameType={setGameType}
          playersMark={playersMark}
        />
      )}
    </div>
  );
}

export default App;
