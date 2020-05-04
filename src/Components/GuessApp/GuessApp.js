import React from "react";
import { useSelector } from "react-redux";

import MainBox from "../MainBox";
import Score from "../Score";
import { CenterDiv } from "./style";

const cities = {
  0: "London",
  1: "Haifa",
  2: "Tel Aviv",
  3: "Paris",
  4: "Lisbon"
};

const isWinner = guesses => {
  const totalWins = guesses.reduce(
    (winCount, currGuess) => (currGuess.correct ? winCount + 1 : winCount),
    0
  );

  return totalWins >= 3;
};
const GuessApp = () => {
  const guesses = useSelector(state => state.guesses);

  return (
    <CenterDiv>
      {guesses.length < 5 ? (
        <MainBox cityName={cities[guesses.length]} />
      ) : isWinner(guesses) ? (
        <p>You Win</p>
      ) : (
        <p>You Lost</p>
      )}
      <Score guesses={guesses} />
    </CenterDiv>
  );
};

export default GuessApp;
