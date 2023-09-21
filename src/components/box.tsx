interface PropsType {
  id: number;
  value: number;
  turn: boolean;
  drawSymbol: (id: number) => void;
}

const Box = ({ id, value, turn, drawSymbol }: PropsType) => {
  return (
    <div
      onClick={() => drawSymbol(id)}
      className="w-w96 sm:w-w140 h-h96 sm:h-h140 bg-semiDarkNavy rounded-lg shadow-DSSButton shadow-darkNavyShadow relative group"
    >
      <span className="flex justify-center items-center w-full h-full text-7xl font-bold select-none cursor-pointer">
        {value === 0 ? (
          ""
        ) : value === 1 ? (
          <span className="text-lightBlue">X</span>
        ) : (
          <span className="text-lightYellow">O</span>
        )}
      </span>
      {value === 0 && (
        <span className="absolute w-full h-full top-0 justify-center items-center select-none text-white/5 text-7xl hidden group-hover:flex">
          {turn ? "X" : "O"}
        </span>
      )}
    </div>
  );
};

export default Box;
