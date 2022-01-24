import { createStore } from "redux";
import produce from "immer";

const initialState = {
  playing: true,
};

export const playPause = () => ({ type: "playPause" });

const myReducer = (state, action) => {
  if (action.type === "playPause") {
    return produce(state, (draft) => {
      draft.playing = !draft.playing;
    });

    /*
    return {
      ...state,
      playing: !state.playing,
    };
    */
  }

  return state;
};

export const myStore = createStore(myReducer, initialState);
