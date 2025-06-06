import { useCallback, useState } from "react";
import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]); //پاسخ کاربران رو در یک آرایه ذخیره کنیم

  const activeQustionIndex = userAnswers.length;
  const quizIsComplete = activeQustionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return (
      <Summary userAnswers={userAnswers} />
    );
  }

  return (
    <div id="quiz">
      <div id="question">
        <Question
          key={activeQustionIndex}
          index={activeQustionIndex}
          onSelectAnswer={handleSelectAnswer}
          onSkipAnswer={handleSkipAnswer}
        />
      </div>
    </div>
  );
}

export default Quiz;
