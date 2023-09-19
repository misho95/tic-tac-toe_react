import MainButton from "./components/main.button";

function App() {
  return (
    <>
      <div className="w-full min-h-screen bg-darkNavy flex justify-center items-center">
        <div className="w-w460 flex flex-col gap-6 items-center">
          <div>Logo</div>
          <div className="w-w460 h-h205 bg-semiDarkNavy rounded-lg shadow-DSMainButton shadow-darkNavyShadow">
            Player Pick
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
