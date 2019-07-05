import React from "react";

function renderTime({ days, hours, minutes, seconds, completed }) {
  const Completionist = () => (
    <h1 className="fl w-100 f1 mb1 ml6 pl4"> WE LIVE BABY!</h1>
  );
  if (completed) {
    return <Completionist />;
  } else {
    return (
      <div>
        <h1 className="dib fl w-100 f1  ">
          {days}: {hours}: {minutes}: {seconds}
        </h1>
        <h1 className="dib fl w-100 f3  ">days hours minutes seconds</h1>
      </div>
    );
  }
}

export default renderTime;
