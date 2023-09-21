import SecondaryButton from "./secondary.button";
import { statsType } from "./play.game";

interface PropsType {
  setShow: (arg: boolean) => void;
  restartGame: () => void;
  setStats: (arg: statsType) => void;
}

const RestartModal = ({ setShow, restartGame, setStats }: PropsType) => {
  const newStats = { xPlayer: 0, tie: 0, oPlayer: 0 };

  return (
    <div className="w-full min-h-screen bg-black/50 fixed z-50 left-0 top-0 flex justify-center items-center">
      <div className="w-full h-h266 bg-semiDarkNavy flex justify-center items-center">
        <div className="w-fit h-fit p-5 flex flex-col gap-8">
          <h1 className="text-4xl font-bold text-silver text-center w-full">
            RESTART GAME?
          </h1>
          <div className="flex justify-between gap-5 items-center">
            <SecondaryButton
              text={"NO, CANCEL"}
              color={"silver"}
              size={"p-4 w-fit h-fit"}
              icon={false}
              onClickHandler={() => setShow(false)}
            />
            <SecondaryButton
              text={"YES, RESTART"}
              color={"yellow"}
              size={"p-4 w-fit h-fit"}
              icon={false}
              onClickHandler={() => {
                restartGame(), setShow(false), setStats(newStats);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestartModal;
