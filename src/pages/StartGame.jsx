import { Link } from "react-router-dom";

function StartGame() {
  return (
    <>
      <h1>Start Game</h1>
      <Link to="/play" className="text-blue-400">
        Play Game
      </Link>
      {/* Your comment goes here. */}
    </>
  );
}

export default StartGame;
