import React from "react";
import renderTime from "./Countdown";
import Countdown from "react-countdown-now";
import Video1 from "./Vids/vid.mov";
import "./App.css";

export const App = () => {
  return (
    <renderTime>
      <Countdown date={Date.now() + 31547000000} renderer={renderTime} />
      <div className="App vh-100">
        <video
          className="fr mr6 mt3"
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
