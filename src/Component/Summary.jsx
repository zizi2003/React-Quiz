import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";

function Summary({ userAnswers }) {
  const skippedAnswered = userAnswers.filter((answer) => answer === null);
  const correctAnswered = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );
  const skippedAnsweredShare = Math.round(
    (skippedAnswered.length / userAnswers.length) * 100
  );
  const correctAnsweredShare = Math.round(
    (correctAnswered.length / userAnswers.length) * 100
  );
  const wrongAnsweredShare = 100 - skippedAnsweredShare - correctAnsweredShare;

  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Trophy icon" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnsweredShare}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnsweredShare}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnsweredShare}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let classes = "user-answer";

          if (answer === null) {
            classes += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            classes += " correct";
          } else {
            classes += " wrong";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={classes}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default Summary;
