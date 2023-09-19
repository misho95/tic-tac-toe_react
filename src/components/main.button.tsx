interface PropsType {
  text: string;
  color: string;
  onClickHandler: () => void;
}

const MainButton = ({ text, color, onClickHandler }: PropsType) => {
  return (
    <button
      onClick={onClickHandler}
      className={`w-w327 sm:w-w410 h-h56 sm:h-h67 rounded-lg shadow-DSMainButton font-semibold text-darkNavy text-lg ${
        color === "yellow"
          ? "bg-lightYellow  shadow-lightYellowShadow"
          : "bg-lightBlue shadow-lightBlueShadow"
      } ${
        color === "yellow"
          ? "active:bg-lightYellowHover"
          : "active:bg-lightBlueHover"
      }`}
    >
      {text}
    </button>
  );
};

export default MainButton;
