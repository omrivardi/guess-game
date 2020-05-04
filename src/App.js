import React from "react";
import { Provider } from "react-redux";
// import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";

import store from "./Reducers";
import GuessApp from "./Components/GuessApp";
// TODO: move to env file

function App() {
  return (
    <Provider store={store}>
      <GuessApp />
    </Provider>
  );
}

// T
export default App;
