import { Link, useLocation } from "react-router-dom";
import { useState, useContext } from "react";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import HangMan from "../components/HangMan/HangMan";
import { WordContext } from "../../context/WordsContext.js";

function PlayGame() {
  const { state } = useLocation();
  const { wordsList } = useContext(WordContext);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [step, setStep] = useState(0);

  function handleLetterClick(letter) {
    if (state?.wordSelected?.toUpperCase().includes(letter)) {
      console.log("Correct Guess");
    } else {
      console.log("Wrong Guess");
      setStep(step + 1);
    }
    setGuessedLetters([...guessedLetters, letter]);
  }

  return (
    <>
      <h1>Play Game</h1>
      {wordsList.map((wordObj) => (
        <li key={wordObj.id}>{wordObj.wordValue}</li>
      ))}

      {state?.wordSelected && (
        <>
          <MaskedText
            text={state.wordSelected}
            guessedLetters={guessedLetters}
          />

          <div>
            <LetterButtons
              text={state.wordSelected}
              guessedLetters={guessedLetters}
              onLetterClick={handleLetterClick}
            />
          </div>

          <div>
            <HangMan step={step} />
          </div>

          <Link to="/start" className="text-blue-400">
            Start Page Link
          </Link>
        </>
      )}
    </>
  );
}

export default PlayGame;
