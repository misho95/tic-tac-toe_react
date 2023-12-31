import MainButton from "../components/main.button";
import Logo from "../assets/logo.svg";
import { useEffect, useState } from "react";

interface PropsType {
  setGameType: (arg: number) => void;
  setPlayersMark: (arg: boolean) => void;
}

const GameMenu = ({ setGameType, setPlayersMark }: PropsType) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    setPlayersMark(active === 0 ? true : false);
  }, [active]);

  return (
    <div className="w-w327 sm:w-w460 flex flex-col gap-6 items-center">
      <div>
        <img src={Logo} className="select-none" />
      </div>
      <div className="w-w327 sm:w-w460 h-h205 bg-semiDarkNavy rounded-lg shadow-DSMainButton shadow-darkNavyShadow flex flex-col gap-3 justify-between p-6">
        <h1 className="text-xl text-silver text-center select-none">
          PICK PLAYER 1'S MARK
        </h1>
        <div className="bg-darkNavy rounded-lg w-w279 sm:w-w412 h-h72 flex justify-center items-center">
          <div
            onClick={() => setActive(0)}
            className={`w-w132 sm:w-w198 h-h54 ${
              active === 0
                ? "bg-silver text-darkNavy"
                : "bg-transparent text-silver"
            } rounded-lg text-5xl  text-center select-none cursor-pointer`}
          >
            X
          </div>
          <div
            onClick={() => setActive(1)}
            className={`w-w132 sm:w-w198 h-h54 ${
              active === 1
                ? "bg-silver text-darkNavy"
                : "bg-transparent text-silver"
            } rounded-lg text-5xl  text-center select-none cursor-pointer`}
          >
            O
          </div>
        </div>
        <h3 className="text-silver/50 text-center select-none">
          REMEMBER : X GOES FIRST
        </h3>
      </div>
      <div className="flex flex-col gap-3 justify-center items-center">
        <MainButton
          text={"NEW GAME (VS CPU)"}
          color={"yellow"}
          onClickHandler={() => setGameType(1)}
        />
        <MainButton
          text={"NEW GAME (VS PLAYER)"}
          color={"blue"}
          onClickHandler={() => setGameType(2)}
        />
      </div>
    </div>
  );
};

export default GameMenu;
