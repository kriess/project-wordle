import React from 'react';

function GuessInput({ guess, setGuess, guessList, setGuessList, answer }) {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.info({ guess });
    guessList.push(guess)
    setGuessList(guessList)
    setGuess('')
  }

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          value={guess}
          onChange={(e) => {
            setGuess(e.target.value)
          }}
        />
      </form>
    </>
  );
}

export default GuessInput;
