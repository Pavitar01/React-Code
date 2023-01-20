import React from "react";
import "./welcome.css";
function Welcome(props) {
  return (
    <>
      <br />
      {props.val}
    </>
  );
}
export default Welcome;
