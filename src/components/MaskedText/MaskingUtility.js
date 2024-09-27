/**
 *
 * @param {The word which is given as input and is expected to be guessed} originalWord
 * @param {Letters which are guessed by the user already} guessedLetters
 * Ex:
 * originalWord: HUMBLE
 * guessedLetters: ['H', 'M', 'E']
 *
 * return -> "H _ M _ _ E"
 */

export function getMaskedString(originalWord, guessedLetters) {
  guessedLetters = guessedLetters.map((letter) => letter.toUpperCase());

  const guessedLettersSet = new Set(guessedLetters);

  const result = originalWord
    .toUpperCase()
    .split("")
    .map((char) => {
      if (guessedLettersSet.has(char)) {
        return char;
      } else {
        return "_";
      }
    });

  return result;
}
