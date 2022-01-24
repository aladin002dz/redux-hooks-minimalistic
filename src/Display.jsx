import React from "react";
import { useSelector } from "react-redux";

export default function Display() {
  const gameIsPlaying = useSelector((state) => state.playing);
  return <div>{gameIsPlaying ? "Playing" : "Pause"}</div>;
}
