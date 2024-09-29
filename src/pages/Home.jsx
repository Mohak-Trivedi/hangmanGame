import { Link } from "react-router-dom";
import Button from "../components/Button/Button";

function Home() {
  return (
    <>
      <Link to="/play" state={{ wordSelected: "MANGO" }}>
        <Button text="Single Player Button" />
      </Link>
      <Link to="/start">
        <div className="mt-4">
          <Button text="Multi-Player Button" styleType="secondary" />
        </div>
      </Link>
    </>
  );
}

export default Home;
