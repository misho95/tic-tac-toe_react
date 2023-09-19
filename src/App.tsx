import MainButton from "./components/main.button";
import Logo from "./assets/logo.svg";
import { useState } from "react";

function App() {
  const [active, setActive] = useState(0);

  return (
    <>
      <div className="w-full min-h-screen bg-darkNavy flex justify-center items-center">
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
                } rounded-lg text-5xl  text-center select-none`}
              >
                X
              </div>
              <div
                onClick={() => setActive(1)}
                className={`w-w132 sm:w-w198 h-h54 ${
                  active === 1
                    ? "bg-silver text-darkNavy"
                    : "bg-transparent text-silver"
                } rounded-lg text-5xl  text-center select-none`}
              >
                O
              </div>
            </div>
            <h3 className="text-silver/50 text-center select-none">
              REMEMBER : X GOES FIRST
            </h3>
          </div>
          <div className="flex flex-col gap-3 justify-center items-center">
            <MainButton text={"NEW GAME (VS CPU)"} color={"yellow"} />
            <MainButton text={"NEW GAME (VS PLAYER)"} color={"blue"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
