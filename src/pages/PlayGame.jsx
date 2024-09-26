import { Link, useSearchParams } from "react-router-dom";

function PlayGame() {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("text"));
  return (
    <>
      <h1>Play Game</h1>
      <Link to="/start" className="text-blue-400">
        Start Page
      </Link>
    </>
  );
}

export default PlayGame;
