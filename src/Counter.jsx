import { useState, useEffect } from "react";

export const Counter = (props) => {
  //State variables
  const [counter, setCounter] = useState(0);

  // Props
  const { name, onClick } = props;

  //getting values from localStorage,
  //empty array since I want to fetch it once when page mounts
  useEffect(() => {
    const savedValues = JSON.parse(localStorage.getItem(name));
    if (savedValues) {
      setCounter(savedValues);
    }
  }, []);

  //setting values to localStorage
  useEffect(() => {
    localStorage.setItem(name, JSON.stringify(counter));
  }, [counter]);

  // localStorage.clear();

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
        <h2>{name}</h2>
        <button onClick={decreaseBtn}>-</button>
        <span>{counter}</span>
        <button onClick={increaseBtn}>+</button>
      </div>
      <button onClick={() => onClick(props.name)}>Hide</button>
    </main>
  );
};
