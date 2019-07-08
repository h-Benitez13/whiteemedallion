import React from "react";
import renderTime from "./Countdown";
import Countdown from "react-countdown-now";
import Video1 from "./Vids/vid.mov";
import "./App.css";

export const App = () => {
  return (
    <renderTime>
      <Countdown date={Date.now() + 31621999999} renderer={renderTime} />

      <div className="App vh-100">
        <video
          className="fr-ns ph7 mt5 "
          src={Video1}
          width="300"
          height="400"
          controls
          autoPlay
          loop
        />
      </div>
    </renderTime>
  );
};
