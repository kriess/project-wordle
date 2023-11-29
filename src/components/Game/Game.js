import React, {useState} from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = useState("");
  const [guessList, setGuessList] = useState([]);

  return (
  <>
    <GuessResults
      guessList={guessList}
      answer={answer}
      >
    </GuessResults>
    <GuessInput
      answer={answer}
      guess={guess}
      setGuess={setGuess}
      guessList={guessList}
      setGuessList={setGuessList}
    >
    </GuessInput>
  </>
  );
}

export default Game;
