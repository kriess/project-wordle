import React, {useState} from 'react';
import HappyBanner from '../HappyBanner';
import SadBanner from '../SadBanner';

function GuessInput({ guess, setGuess, guessList, setGuessList, answer }) {
  const [gameState, setGameState] = useState('pre');
  const [isDisabled, setIsDisabled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    guessList.push(guess);
    setGuessList(guessList);
    setGuess('');
    checkIfWonOrLost();
  }

  const checkIfWonOrLost = () => {
    if (guessList.includes(answer.toLowerCase())) {
      setGameState('won');
      setIsDisabled(true);
    } else if (guessList.length > 5) {
      setGameState('lost');
      setIsDisabled(true);
    }
  }

  return (
    <>
      {gameState === 'won' && <HappyBanner numGuesses={guessList.length}></HappyBanner>}
      {gameState === 'lost' && <SadBanner answer={answer}></SadBanner>}
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          id="guess-input"
          type="text"
          value={guess}
          disabled={isDisabled}
          onChange={(e) => {
            setGuess(e.target.value)
          }}
        />
      </form>
    </>
  );
}

export default GuessInput;
