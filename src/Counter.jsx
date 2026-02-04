import { useState, useEffect } from "react";

export const Counter = (props) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {}, []);

  function decreaseBtn() {
    setCounter((prev) => {
      return prev - 1;
    });
  }

  function increaseBtn() {
    setCounter((prev) => {
      return prev + 1;
    });
  }

  //RETURN
  return (
    <main>
      <div className="wrapper">
        <h2>{props.name}</h2>
        <button onClick={decreaseBtn}>-</button>
        <span>{counter}</span>
        <button onClick={increaseBtn}>+</button>
      </div>
      <button onClick={props.onClick}>Hide</button>
    </main>
  );
};
