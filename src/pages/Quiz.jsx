import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import questions from "../data/questions";


function Quiz() {
  

 const [currentQuestion, setCurrentQuestion] = useState(0);
const [score, setScore] = useState(0);
const [selectedAnswer, setSelectedAnswer] = useState("");
const [quizFinished, setQuizFinished] = useState(false);
const [timeLeft, setTimeLeft] = useState(60);
useEffect(() => {
  if (timeLeft > 0 && !quizFinished) {
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }

  if (timeLeft === 0) {
    setQuizFinished(true);
  }
}, [timeLeft, quizFinished]);

function restartQuiz() {
  setCurrentQuestion(0);
  setScore(0);
  setSelectedAnswer("");
  setQuizFinished(false);
  setTimeLeft(60);
}
  
function handleNext() {
  if (
    selectedAnswer ===
    questions[currentQuestion].answer
  ) {
    setScore(score + 1);
  }

  setSelectedAnswer("");

  if (currentQuestion < questions.length - 1) {
    setCurrentQuestion(currentQuestion + 1);
  } else {
    const finalScore =
  selectedAnswer === questions[currentQuestion].answer
    ? score + 1
    : score;

const savedHighScore =
  Number(localStorage.getItem("highScore")) || 0;

if (finalScore > savedHighScore) {
  localStorage.setItem(
    "highScore",
    finalScore
  );
}

setQuizFinished(true);
  }
}
const highScore =
  localStorage.getItem("highScore") || 0;
if (quizFinished) {
  return (
    <>
      <Navbar />

      <div className="quiz-container">
        <h1>Quiz Completed 🎉</h1>

        <h2>
  Your Score: {score} / {questions.length}
</h2>
<p>
  {score === questions.length
    ? "🏆 Excellent!"
    : score >= questions.length / 2
    ? "👍 Good Job!"
    : "📚 Keep Practicing!"}
</p>

<p>
  Percentage: {Math.round((score / questions.length) * 100)}%
</p>
<p>
  High Score: {highScore}
</p>

        <button
          className="next-btn"
         onClick={restartQuiz}
        >
          Restart Quiz
        </button>
      </div>
    </>
  );
}

  return (
    <>
      <Navbar />

      <div className="quiz-container">
        <h1>General Knowledge Quiz</h1>
        <h3>Time Left: {timeLeft}s</h3>
        <p>Score: {score}</p>
        <p>
  Question {currentQuestion + 1} of {questions.length}
</p>

<div className="progress-bar">
  <div
    className="progress-fill"
    style={{
      width: `${
        ((currentQuestion + 1) / questions.length) * 100
      }%`,
    }}
  ></div>
</div>

        <div className="question-card">
          <h2>
            {currentQuestion + 1}.{" "}
            {questions[currentQuestion].question}
          </h2>

          {questions[currentQuestion].options.map(
            (option, index) => (
            <button
  key={index}
  className={`option-btn ${
    selectedAnswer === option ? "selected" : ""
  }`}
  onClick={() => {
  if (!selectedAnswer) {
    setSelectedAnswer(option);
  }
}}
>
  {option}
</button>
            )
          )}

          <button
  className="next-btn"
  onClick={handleNext}
  disabled={!selectedAnswer}
>
  Next Question
</button>
        </div>
      </div>
    </>
  );
}

export default Quiz;