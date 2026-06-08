import { useState } from "react";
import Navbar from "../components/Navbar";

function Quiz() {
  const questions = [
    {
      question: "What is the capital of India?",
      options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
      answer: "Delhi",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: "Mars",
    },
    {
      question: "Who is known as the Father of Computers?",
      options: [
        "Charles Babbage",
        "Alan Turing",
        "Bill Gates",
        "Steve Jobs",
      ],
      answer: "Charles Babbage",
    },
  ];

 const [currentQuestion, setCurrentQuestion] = useState(0);
const [score, setScore] = useState(0);
const [selectedAnswer, setSelectedAnswer] = useState("");
const [quizFinished, setQuizFinished] = useState(false);
  
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
    setQuizFinished(true);
  }
}
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
  Percentage: {Math.round((score / questions.length) * 100)}%
</p>

        <button
          className="next-btn"
          onClick={() => window.location.reload()}
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
        <p>Score: {score}</p>

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
  onClick={() => setSelectedAnswer(option)}
>
  {option}
</button>
            )
          )}

          <button
            className="next-btn"
            onClick={handleNext}
          >
            Next Question
          </button>
        </div>
      </div>
    </>
  );
}

export default Quiz;