import Logo from "../assets/logo.svg";
import Box from "./box";
import SecondaryButton from "./secondary.button";
import { useEffect, useState } from "react";

interface PropsType {
  gameType: number;
  playersMark: boolean;
}

interface gameBoxType {
  id: number;
  value: number;
}

const PlayGame = ({ gameType, playersMark }: PropsType) => {
  const newGame = Array.from({ length: 9 }, (_, index) => ({
    id: index + 1,
    value: 0,
  }));

  const [gameBox, setGameBox] = useState<gameBoxType[]>(newGame);
  const [turn, setTurn] = useState(true);
  const [endGame, setEndGame] = useState(false);

  const drawSymbol = (id: number) => {
    if (!endGame) {
      const checkIfIsEmpty = gameBox.find((x) => {
        if (x.id === id) return x;
      });

      if (checkIfIsEmpty?.value === 0) {
        const update = gameBox.map((x) => {
          if (x.id === id) return { ...x, value: turn ? 1 : 2 };
          else return x;
        });
        setGameBox(update);
        setTurn(!turn);
      }
    }
  };

  const cpuAi = () => {
    if (turn !== playersMark) {
      drawSymbol(calculateBestMove(gameBox, turn));
    }
  };

  const checkWinner = (gameBox: gameBoxType[], player: boolean) => {
    const winningCombinations = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9], // Rows
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9], // Columns
      [1, 5, 9],
      [3, 5, 7], // Diagonals
    ];

    // Convert 'X' to 1 and 'O' to 2 for the player argument
    const playerValue = player ? 1 : 2;

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        gameBox[a - 1].value === playerValue &&
        gameBox[b - 1].value === playerValue &&
        gameBox[c - 1].value === playerValue
      ) {
        return true;
      }
    }
    return false;
  };

  const calculateBestMove = (
    gameBox: gameBoxType[],
    currentPlayer: boolean
  ) => {
    // Check if the game is over or if it's the AI's turn
    if (checkWinner(gameBox, true) || checkWinner(gameBox, false)) {
      return -1; // Someone has already won
    } else if (gameBox.every((square) => square.value !== 0)) {
      return 0; // It's a draw
    }

    // Calculate the best move using the minimax algorithm
    let bestMove = -1;
    let bestScore = currentPlayer ? -Infinity : Infinity;

    for (let i = 0; i < gameBox.length; i++) {
      if (gameBox[i].value === 0) {
        gameBox[i].value = currentPlayer ? 1 : 2;
        let score = calculateBestMove(gameBox, !currentPlayer);
        gameBox[i].value = 0;

        if (
          (currentPlayer && score > bestScore) ||
          (!currentPlayer && score < bestScore)
        ) {
          bestScore = score;
          bestMove = gameBox[i].id;
        }
      }
    }

    return bestMove;
  };

  useEffect(() => {
    if (gameType === 1) {
      cpuAi();
    }
    const endGame = checkWinner(gameBox, !turn);

    if (endGame) {
      setEndGame(true);
    }
  }, [gameBox]);

  const restartGame = () => {
    setGameBox(newGame);
    setTurn(true);
    setEndGame(false);
  };

  return (
    <div className="w-w460 h-h623 flex flex-col gap-5">
      <div className="flex justify-between gap-5 items-center">
        <img src={Logo} />
        <div className="text-silver bg-semiDarkNavy w-w140 h-h52 rounded-lg shadow-DSSButton shadow-darkNavyShadow flex justify-center items-center gap-3 text-xl select-none">
          <span className="font-bold text-2xl">{turn ? "X" : "O"}</span>TURN
        </div>
        <SecondaryButton
          icon={true}
          text={`replay`}
          color="silver"
          size={"w-w52 h-h52"}
          onClickHandler={restartGame}
        />
      </div>
      <div className="flex flex-wrap gap-5">
        {gameBox.map((v) => {
          return (
            <Box
              key={v.id}
              id={v.id}
              value={v.value}
              turn={turn}
              drawSymbol={drawSymbol}
            />
          );
        })}
      </div>
      <div className="flex justify-between items-center gap-5">
        <div className="w-w140 h-h72 rounded-lg bg-lightBlue text-darkNavy flex flex-col gap-1 justify-center items-center select-none">
          <h1 className="text-sm">
            X (
            {gameType === 1
              ? playersMark
                ? "YOU"
                : "CPU"
              : playersMark
              ? "P1"
              : "P2"}
            )
          </h1>
          <span className="text-xl font-semibold">14</span>
        </div>
        <div className="w-w140 h-h72 rounded-lg bg-silver text-darkNavy flex flex-col gap-1 justify-center items-center select-none">
          <h1 className="text-sm">TIES</h1>
          <span className="text-xl font-semibold">32</span>
        </div>
        <div className="w-w140 h-h72 rounded-lg bg-lightYellow text-darkNavy flex flex-col gap-1 justify-center items-center select-none">
          <h1 className="text-sm">
            O (
            {gameType === 1
              ? !playersMark
                ? "YOU"
                : "CPU"
              : !playersMark
              ? "P1"
              : "P2"}
            )
          </h1>
          <span className="text-xl font-semibold">11</span>
        </div>
      </div>
    </div>
  );
};

export default PlayGame;
