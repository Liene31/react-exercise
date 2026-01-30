import { useState } from "react";

export const Calculator = () => {
  const [userInput, setUserInput] = useState({
    number1: "",
    number2: "",
    operation: "plus",
  });

  const [total, setTotal] = useState();

  function handleField(e) {
    const name = e.target.name;
    const type = e.target.type;

    setUserInput((prev) => {
      const newUserInput = {
        ...prev,
        [name]: type === "checkbox" ? e.target.checked : e.target.value,
      };
      return newUserInput;
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const num1 = parseInt(userInput.number1);
    const num2 = parseInt(userInput.number2);

    setTotal(() => {
      if (userInput.operation === "plus") {
        return num1 + num2;
      }
      if (userInput.operation === "minus") {
        return num1 - num2;
      }
      if (userInput.operation === "multiplication") {
        return num1 * num2;
      }
      if (userInput.operation === "division") {
        if (num2 === 0) {
          return "Cannot divide by 0";
        }
        return num1 / num2;
      }
    });

    setUserInput({
      number1: "",
      number2: "",
      operation: "plus",
    });
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="number1">Nb1:</label>
        <input
          type="number"
          name="number1"
          id="number1"
          value={userInput.number1}
          onChange={handleField}
        />
        <select
          name="operation"
          value={userInput.operation}
          onChange={handleField}
        >
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
          onChange={handleField}
        />
        <button>Calculate</button>
      </form>
      <div className="total-field">{total}</div>
      {/* todo : afficher dans un input text readonly */}
    </div>
  );
};
