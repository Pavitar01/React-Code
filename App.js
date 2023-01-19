import "./App.css";
import Welcome from "./GreetingMessage/Welcome";
import React, { useState } from "react";

function App() {
  const [fname, setFname] = useState(null);
  const [data, setData] = useState();
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => {
          setFname(e.target.value);
        }}
      ></input>
      <br />
      <button
        onClick={() => {
          setData([
            <h1>Hey ! &nbsp;{fname}</h1>,
            <h2>Welcome To The University</h2>,
          ]);
        }}
      >
        Login
      </button>
      <Welcome val={data} />
 
      <h5>Assignment done by Pavitar Singh 12007533</h5>
    </div>
  );
}

export default App;
