import SecondaryButton from "./secondary.button";

interface PropsType {
  result: number;
  playersMark: boolean;
  gameType: number;
  restartGame: () => void;
  quitGame: () => void;
}

const Modal = ({
  result,
  restartGame,
  playersMark,
  gameType,
  quitGame,
}: PropsType) => {
  return (
    <div className="w-full min-h-screen bg-black/50 fixed z-50 left-0 top-0 flex justify-center items-center">
      <div className="w-full h-h266 bg-semiDarkNavy flex justify-center items-center">
        <div className="w-fit h-fit p-5 flex flex-col gap-8">
          <div className="text-center text-silver">
            {result !== 3 ? (
              gameType === 1 ? (
                <div>
                  {playersMark && result === 1
                    ? "YOU WON!"
                    : "OH NO, YOU LOST..."}
                </div>
              ) : (
                <div>
                  {playersMark
                    ? result === 1
                      ? "P1 Wins!"
                      : "P2 Wins!"
                    : result === 1
                    ? "P2 Wins!"
                    : "P1 Wins!"}
                </div>
              )
            ) : (
              ""
            )}
          </div>
          <h1
            className={`text-2xl sm:text-4xl ${
              result === 2
                ? "text-lightYellow"
                : result === 1
                ? "text-lightBlue"
                : "text-silver"
            } flex justify-center items-center gap-5`}
          >
            <span className="text-5xl font-bold">
              {result === 1 ? "X" : result === 2 ? "O" : "ROUND TIED"}
            </span>
            {result !== 3 && "TAKES THE ROUND"}
          </h1>
          <div className="flex justify-between gap-5 items-center">
            <SecondaryButton
              text={"QUIT"}
              color={"silver"}
              size={"p-4 w-fit h-fit"}
              icon={false}
              onClickHandler={quitGame}
            />
            <SecondaryButton
              text={"NEXT ROUND"}
              color={"yellow"}
              size={"p-4 w-fit h-fit"}
              icon={false}
              onClickHandler={restartGame}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
