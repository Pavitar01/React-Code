import React from "react";
function List() {
  const fname = "Pavi";
  const num = Math.random();
  const lname = "Negi";
  return (
    //if we want to use html inside js then it is done by jsx by importig React
    //and the call render by importing react-dom
    // If we want to use js inside html we use {} expression
    // we cant use statement inside {curly bracket}
    <>
      <h1>This is List {fname}</h1>
      <ol>
        <li>Mov-{num}</li>
        <li>Mov-{num}</li>
        <li>Mov-{num}</li>
        <li>Mov-{num}</li>
      </ol>

      <h1>{fname + lname}</h1>
      <h1 contentEditable="true">{`my first name is ${fname} and last name is  ${lname} <br/> literal symbol is called back-string `}</h1>

      <img src="https://picsum.photos/100/100" alt="random Image" />
      {/* self closing tag */}
    </>
  );
}

export default List;
