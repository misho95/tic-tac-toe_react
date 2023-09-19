interface PropsType {
  text: string;
  color: string;
}

const SecondaryButton = ({ text, color }: PropsType) => {
  return (
    <button
      className={`w-w226 h-h52 rounded-lg shadow-DSMainButton font-semibold text-darkNavy ${
        color === "yellow"
          ? "bg-lightYellow  shadow-lightYellowShadow"
          : "bg-silver shadow-silverShadow"
      } ${
        color === "yellow"
          ? "active:bg-lightYellowHover"
          : "active:bg-silverHover"
      }`}
    >
      {text}
    </button>
  );
};

export default SecondaryButton;
