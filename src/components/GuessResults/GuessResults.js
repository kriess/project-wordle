import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '/src/constants';
import { range } from "/src/utils.js"

function GuessResults({ guessList = [], answer }) {

  const getStatus = (answer, guess, index) => {
    answer = answer.toLowerCase();
    guess = guess.toLowerCase();
    if (!guess.length) {
      return '';
    }

    if (answer.charAt(index) === guess.charAt(index)) {
      return 'correct';
    } else if (answer.includes(guess.charAt(index))) {
      return 'misplaced';
    }

    return 'incorrect';
  }

  const checkGuess = (answer, guess = "", guessNumber) => {
    const guessInfo = [];
    for (let i = 0; i < answer.length; i++) {
      guessInfo.push({
        letter: guess.charAt(i), status: getStatus(answer, guess, i, guessNumber)
      })
    }
    return guessInfo
  }

  return (<>
    <div className="guess-results">
    {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
      <p className="guess" key={num}>
        {checkGuess(answer, guessList[num]).map((guess, index) => (
          <span className={`cell ${guess.status}`} key={index}>{guess.letter}</span>
        ))}
      </p>
    ))}
    </div>
  </>);
}

export default GuessResults;
