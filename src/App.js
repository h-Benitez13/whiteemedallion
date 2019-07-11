import React from "react";
import renderTime from "./Countdown";
import Countdown from "react-countdown-now";
import Video1 from "./Vids/vid.mov";
import "./App.css";

export const App = () => {
  return (
    <div>
      <renderTime>
        <Countdown
          date={new Date("Sat, 4 July 2020 09:30:00") + Date.now()}
          renderer={renderTime}
        />
      </renderTime>

      <div className="App vh-100">
        <video
          className="fr ph4 mt5 "
          src={Video1}
          width="300"
          height="400"
          controls
          autoPlay
          loop
        />
      </div>
    </div>
  );
};
