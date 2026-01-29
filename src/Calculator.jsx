import { useState } from "react";

export const Calculator = () => {
  const [userInput, setUserInput] = useState({
    number1: 0,
    number2: 0,
    operation: "plus",
  });

  const [total, setTotal] = useState();

  function handleSubmit(e) {
    e.preventDefault();

    console.log(e);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="number1">Nb1:</label>
        <input
          type="number"
          name="number1"
          id="number1"
          value={userInput.number1}
        />
        <select name="operation" value={userInput.operation}>
          <option value={"plus"}>+</option>
          <option value={"minus"}>-</option>
          <option value={"multiplication"}>*</option>
          <option value={"division"}>/</option>
        </select>
        <label htmlFor="number2">Nb2:</label>
        <input
          type="number"
          name="number2"
          id="number2"
          value={userInput.number2}
        />
        <button>Calculate</button>
        {/* should not be an input, it's an output */}
        <input type="number" />
      </form>
    </div>
  );
};
