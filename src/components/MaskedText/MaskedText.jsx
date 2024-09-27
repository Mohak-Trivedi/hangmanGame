import { getMaskedString } from "./MaskingUtility";

/*
Each time the user types a character, guessedLetters gets updated.
So, this MaskedText component re-renders and new maskedString is generated and 
the UI for the same gets updated.
*/
function MaskedText({ text, guessedLetters }) {
  const maskedString = getMaskedString(text, guessedLetters);

  return maskedString.map((letter, idx) => {
    return (
      <span key={idx} className="mx-1">
        {letter}
      </span>
    );
  });
}

export default MaskedText;
