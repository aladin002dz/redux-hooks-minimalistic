import React from "react";
import { useDispatch } from "react-redux";

import { playPause } from "./myGlobalStore";

export default function PlayPauseButton() {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(playPause());
      }}
    >
      Play/Pause
    </button>
  );
}
