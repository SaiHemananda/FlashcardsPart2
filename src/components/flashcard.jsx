import React, { useState } from "react";
const FlashCard = (props) => {
  const [isQuestion, setIsQuestions] = useState(true);
  function handleClick() {
    setIsQuestions((prev) => !prev);
  }

  return isQuestion ? (
    <div className="card" onClick={handleClick}>
      <div className="front">
        <h2>{props.question}</h2>
      </div>
    </div>
  ) : (
    <div className="cardflipped" onClick={handleClick}>
      <div className="back">
        <h2>{props.answer}</h2>
      </div>
    </div>
  );
};

export default FlashCard;
