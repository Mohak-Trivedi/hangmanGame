import { Link, useParams } from "react-router-dom";

function PlayGame() {
  const { text } = useParams();
  return (
    <>
      <h1>Play Game {text}</h1>
      <Link to="/start" className="text-blue-400">
        Start Page
      </Link>
    </>
  );
}

export default PlayGame;
