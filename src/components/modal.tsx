import SecondaryButton from "./secondary.button";

interface PropsType {
  turn: boolean;
  restartGame: () => void;
}

const Modal = ({ turn, restartGame }: PropsType) => {
  return (
    <div className="w-full min-h-screen bg-black/50 fixed z-50 left-0 top-0 flex justify-center items-center">
      <div className="w-full h-h266 bg-semiDarkNavy flex justify-center items-center">
        <div className="w-fit h-fit p-5 flex flex-col gap-8">
          <p className="text-center text-silver">YOU WON!</p>
          <h1
            className={`text-4xl ${
              turn ? "text-lightYellow" : "text-lightBlue"
            } flex justify-center items-center gap-5`}
          >
            <span className="text-5xl font-bold">{turn ? "O" : "X"}</span>TAKES
            THE ROUND
          </h1>
          <div className="flex justify-between gap-5 items-center">
            <SecondaryButton
              text={"QUIT"}
              color={"silver"}
              size={"p-4 w-fit h-fit"}
              icon={false}
              onClickHandler={() => {}}
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
