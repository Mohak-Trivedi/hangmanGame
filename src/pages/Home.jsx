import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Button from "../components/Button/Button";
import { WordContext } from "../../context/WordsContext";

function Home() {
  const { setWordsList } = useContext(WordContext);
  const [word, setWord] = useState("");

  async function fetchWords() {
    const response = await fetch("http://localhost:3000/words");
    const data = await response.json();
    console.log(data);

    setWordsList([...data]);

    const randomIndex = Math.floor(Math.random() * data.length);
    console.log(data[randomIndex]);

    setWord(data[randomIndex].wordValue);
  }

  useEffect(() => {
    fetchWords();
  }, []);

  return (
    <>
      <Link to="/play" state={{ wordSelected: word }}>
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
