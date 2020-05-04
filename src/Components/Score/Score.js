import React from "react";

import { ScoreItem } from "./style";

const Score = ({ guesses }) => {
  // todo: add id to guess for a key
  return (
    <>
      {guesses.map(guess => (
        <ScoreItem correct={guess.correct}>
          <span>Guessed {guess.guessedTemp} Was {guess.actualTemp}</span>
        </ScoreItem>
      ))}
    </>
  );
};

export default Score;
