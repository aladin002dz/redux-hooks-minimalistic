import { createStore } from "redux";

const initialState = {
  playing: true,
};

export const playPause = () => ({ type: "playPause" });

const myReducer = (state, action) => {
  if (action.type === "playPause") {
    return {
      playing: !state.playing,
    };
  }
  return state;
};

export const myStore = createStore(myReducer, initialState);
