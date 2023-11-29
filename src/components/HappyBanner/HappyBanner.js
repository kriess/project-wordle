import React from 'react';

function HappyBanner({ numGuesses }) {
  const guessText = numGuesses > 1 ? 'guesses' : 'guess';
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        {" "}
        <strong>{numGuesses} {guessText}</strong>.
      </p>
    </div>
  )
}

export default HappyBanner;
