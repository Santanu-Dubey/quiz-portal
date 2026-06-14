import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import gkQuestions from "../data/gkQuestions";
import programmingQuestions from "../data/programmingQuestions";
import scienceQuestions from "../data/scienceQuestions";



function Quiz() {

    const location = useLocation();
const category = location.state?.category || "gk";

 let questions;

  if (category === "programming") {
    questions = programmingQuestions;
  } else if (category === "science") {
    questions = scienceQuestions;
  } else {
    questions = gkQuestions;
  }

const [currentQuestion, setCurrentQuestion] = useState(0);
const [score, setScore] = useState(0);
const [selectedAnswer, setSelectedAnswer] = useState("");
const [quizFinished, setQuizFinished] = useState(false);
const [timeLeft, setTimeLeft] = useState(60);
const [userAnswers, setUserAnswers] = useState([]);
const [showAnswer, setShowAnswer] = useState(false);


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
  setUserAnswers([]);
}
  
function handleNext() {
  if (
    selectedAnswer ===
    questions[currentQuestion].answer
  ) {
    setScore(score + 1);
  }

  setUserAnswers([
  ...userAnswers,
  {
    question: questions[currentQuestion].question,
    selected: selectedAnswer,
    correct: questions[currentQuestion].answer,
  },
]);

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

const history =
  JSON.parse(localStorage.getItem("quizHistory")) || [];

history.push({
  score: finalScore,
  total: questions.length,
  percentage: Math.round(
    (finalScore / questions.length) * 100
  ),
  date: new Date().toLocaleString(),
});

localStorage.setItem(
  "quizHistory",
  JSON.stringify(history)
);

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
<h2>Quiz Review</h2>

{userAnswers.map((item, index) => (
  <div key={index} className="review-card">
    <h3>
      {index + 1}. {item.question}
    </h3>

    <p>
      Your Answer:
      {" "}
      <span
        style={{
          color:
            item.selected === item.correct
              ? "green"
              : "red",
        }}
      >
        {item.selected}
      </span>
    </p>

    <p>
      Correct Answer:
      {" "}
      <span style={{ color: "green" }}>
        {item.correct}
      </span>
    </p>
  </div>
))}

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
       <h1>
  {category === "programming"
    ? "Programming Quiz"
    : category === "science"
    ? "Science Quiz"
    : "General Knowledge Quiz"}
</h1>
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
  className={`option-btn
${
  showAnswer &&
  option === questions[currentQuestion].answer
    ? "correct"
    : ""
}
${
  showAnswer &&
  option === selectedAnswer &&
  option !== questions[currentQuestion].answer
    ? "wrong"
    : ""
}`}
onClick={() => {
  if (!selectedAnswer) {
    setSelectedAnswer(option);
    setShowAnswer(true);
setTimeout(() => {
  setShowAnswer(false);
  handleNext();
}, 2000);
  }
}}
>
  {option}
</button>
            )
          )}

    {!showAnswer && (
  <button
    className="next-btn"
    onClick={handleNext}
    disabled={!selectedAnswer}
  >
    Next Question
  </button>
)}
        </div>
      </div>
    </>
  );
}

export default Quiz;