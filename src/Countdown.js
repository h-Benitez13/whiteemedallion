import React from "react";

const Completionist = () => <h1 className="black ma6 pa6"> WE LIVE BABY!</h1>;
function renderTime({ days, hours, minutes, seconds, completed }) {
  if (completed) {
    return <Completionist />;
  } else {
    return (
      <h1 className="black fl w-100 f1 mb3 ml6 pl4">
        {days}: {hours}: {minutes}: {seconds}
      </h1>
    );
  }
}

export default renderTime;
