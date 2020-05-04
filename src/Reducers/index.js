import { createStore } from "redux";

import { actionTypes } from "../Actions";

const defaultState = {
  guesses: []
};

// TODO: change to obj map instead of switch
const reducer = (state = defaultState, action) => {
  const nextState = { ...state };
  switch (action.type) {
    case actionTypes.guess:
      const isCorrect =
        Math.abs(parseInt(action.payload.guessedTemp,10) - action.payload.actualTemp) <= 5;
      nextState.guesses = [
        ...state.guesses,
        { ...action.payload, correct: isCorrect }
      ];
      return nextState;
    default:
      return state;
  }
};

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
