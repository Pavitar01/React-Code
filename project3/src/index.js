import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

//when we use render method and in render method we use html code
// that Element is html Element thats is jsx
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// var h1 = document.createElement("h1");
// h1.innerHTML = "Mikey negi";
// document.getElementById("root").appendChild(h1);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
