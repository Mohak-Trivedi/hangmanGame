import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";

function PlayGame() {
  const { state } = useLocation();

  const [guessedLetters, setGuessedLetters] = useState([]);

  function handleLetterClick(letter) {
    setGuessedLetters([...guessedLetters, letter]);
  }

  return (
    <>
      <h1>Play Game</h1>

      <MaskedText text={state.wordSelected} guessedLetters={guessedLetters} />

      <div>
        <LetterButtons
          text={state.wordSelected}
          guessedLetters={guessedLetters}
          onLetterClick={handleLetterClick}
        />
      </div>

      <Link to="/start" className="text-blue-400">
        Start Page
      </Link>
    </>
  );
}

export default PlayGame;
