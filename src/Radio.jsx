import { useState } from "react";

export const Radio = () => {
  const [answerSelected, setAnswerSelected] = useState();

  function handleAnswer(e) {
    setAnswerSelected(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(`Answer selected is ${answerSelected}`);
  }

  console.log(answerSelected);

  return (
    <section className="game-play">
      <div className="question-container">
        <h2>My Question</h2>
        <form>
          <input
            type="radio"
            id="one"
            name="answer"
            value="Answer 1"
            checked={answerSelected === "Answer 1"}
            onChange={handleAnswer}
          />
          <label htmlFor="one">Answer 1</label>

          <input
            type="radio"
            id="two"
            name="answer"
            value="Answer 2"
            checked={answerSelected === "Answer 2"}
            onChange={handleAnswer}
          />
          <label htmlFor="two">Answer 2</label>
          <button onClick={handleSubmit}>Check answers</button>
        </form>
      </div>
    </section>
  );
};
