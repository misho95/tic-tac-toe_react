import Logo from "../assets/logo.svg";
import Box from "./box";
import SecondaryButton from "./secondary.button";
import { useState } from "react";

interface PropsType {
  gameType: number;
}

interface gameBoxType {
  id: number;
  value: number;
}

const PlayGame = ({ gameType }: PropsType) => {
  const newGame = [
    {
      id: 1,
      value: 0,
    },
    {
      id: 2,
      value: 0,
    },
    {
      id: 3,
      value: 0,
    },
    {
      id: 4,
      value: 0,
    },
    {
      id: 5,
      value: 0,
    },
    {
      id: 6,
      value: 0,
    },
    {
      id: 7,
      value: 0,
    },
    {
      id: 8,
      value: 0,
    },
    {
      id: 9,
      value: 0,
    },
  ];
  const [gameBox, setGameBox] = useState<gameBoxType[]>(newGame);

  const [turn, setTurn] = useState(true);

  const drawSymbol = (id: number) => {
    const update = gameBox.map((x) => {
      if (x.id === id && x.value === 0) return { ...x, value: turn ? 1 : 2 };
      else return x;
    });
    setGameBox(update);
    setTurn(!turn);
  };

  console.log(gameType);
  return (
    <div className="w-w460 h-h623 flex flex-col gap-5">
      <div className="flex justify-between gap-5 items-center">
        <img src={Logo} />
        <div className="text-silver bg-semiDarkNavy w-w140 h-h52 rounded-lg shadow-DSSButton shadow-darkNavyShadow flex justify-center items-center gap-3 text-xl select-none">
          <span className="font-bold text-2xl">{turn}</span>TURN
        </div>
        <SecondaryButton
          icon={true}
          text={`replay`}
          color="silver"
          size={"w-w52 h-h52"}
          onClickHandler={() => setGameBox(newGame)}
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
          <h1 className="text-sm">X (YOU)</h1>
          <span className="text-xl font-semibold">14</span>
        </div>
        <div className="w-w140 h-h72 rounded-lg bg-silver text-darkNavy flex flex-col gap-1 justify-center items-center select-none">
          <h1 className="text-sm">TIES</h1>
          <span className="text-xl font-semibold">32</span>
        </div>
        <div className="w-w140 h-h72 rounded-lg bg-lightYellow text-darkNavy flex flex-col gap-1 justify-center items-center select-none">
          <h1 className="text-sm">O (CPU)</h1>
          <span className="text-xl font-semibold">11</span>
        </div>
      </div>
    </div>
  );
};

export default PlayGame;
