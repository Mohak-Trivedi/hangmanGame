const ALPHABETS = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");

/*
Each time the user types a letter to guess the word, LetterButtons re-renders
and disables the guessed letter and also styles it as per correct / incorrect
guess.
*/
function LetterButtons({ text, guessedLetters, onLetterClick }) {
  const originalLettersSet = new Set(text.toUpperCase().split(""));
  const guessedLettersSet = new Set(guessedLetters);

  function buttonStyle(alphabet) {
    if (guessedLettersSet.has(alphabet)) {
      return `${
        originalLettersSet.has(alphabet) ? "bg-green-500" : "bg-red-500"
      }`;
    } else {
      return "bg-blue-500";
    }
  }

  function handleLetterClick(event) {
    const alphaOnButton = event.target.value;
    onLetterClick?.(alphaOnButton);
  }

  const buttons = ALPHABETS.map((alphabet) => {
    return (
      <button
        key={`btn-${alphabet}`}
        value={alphabet}
        onClick={handleLetterClick}
        disabled={guessedLettersSet.has(alphabet)}
        className={`h-12 w-12 m-1 text-white rounded-md ${buttonStyle(
          alphabet
        )}`}
      >
        {alphabet}
      </button>
    );
  });

  return <>{buttons}</>;
}

export default LetterButtons;
