import { Link, useLocation } from "react-router-dom";

function PlayGame() {
  const { state } = useLocation();

  return (
    <>
      <h1>Play Game {state.wordSelected}</h1>
      <Link to="/start" className="text-blue-400">
        Start Page
      </Link>
    </>
  );
}

export default PlayGame;
