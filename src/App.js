import React from "react";
import renderTime from "./Countdown";
import Countdown from "react-countdown-now";
import "./App.css";

export const App = () => {
  return (
    <renderTime>
      <Countdown date={Date.now() + 31547000000} renderer={renderTime} />
      <div className="App vh-100" />
    </renderTime>
  );
};
