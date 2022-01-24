import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { myStore } from "./myGlobalStore";

import PlayPauseButton from "./PlayPauseButton";
import Display from "./Display";

ReactDOM.render(
  <Provider store={myStore}>
    <React.StrictMode>
      <Display />
      <PlayPauseButton />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
