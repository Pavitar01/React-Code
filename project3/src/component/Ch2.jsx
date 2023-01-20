import React from "react";
function Time() {
  const date = new Date();
  var d = new Date().toLocaleDateString();
  var time = new Date().toLocaleTimeString();
  return (
    <>
      <div>
        <h1>{`date is ${d} and time is ${time} `}</h1>
      </div>
    </>
  );
}

export default Time;
