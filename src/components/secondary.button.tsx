interface PropsType {
  text: string;
  color: string;
  size: string;
  icon: boolean;
  onClickHandler: () => void;
}

const SecondaryButton = ({
  text,
  color,
  size,
  icon,
  onClickHandler,
}: PropsType) => {
  return (
    <button
      onClick={onClickHandler}
      className={`${size} rounded-lg shadow-DSSButton font-semibold text-darkNavy ${
        color === "yellow"
          ? "bg-lightYellow  shadow-lightYellowShadow"
          : "bg-silver shadow-silverShadow"
      } ${
        color === "yellow"
          ? "active:bg-lightYellowHover"
          : "active:bg-silverHover"
      }`}
    >
      {!icon && text}
      {icon && (
        <span className="material-symbols-outlined select-none">{text}</span>
      )}
    </button>
  );
};

export default SecondaryButton;
