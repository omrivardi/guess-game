// beacuse there are not many, i will leavr it all at the same file

export const actionTypes = {
  guess: "GUESS"
};

export const guess = (guessedTemp, actualTemp) => ({
  type: actionTypes.guess,
  payload: { guessedTemp, actualTemp }
});
