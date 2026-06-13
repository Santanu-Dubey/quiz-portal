import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="hero">
        <div className="hero-card">
          <h1>🚀 QuizMaster</h1>

          <h2>Challenge Your Knowledge</h2>

          <p>
            Test your skills in Programming, Science,
            and General Knowledge. Track your score,
            beat your high score, and keep learning.
          </p>

<div className="stats-grid">
  <div className="stat-card">
    <h3>
      {localStorage.getItem("highScore") || 0}
    </h3>
    <p>High Score</p>
  </div>

  <div className="stat-card">
    <h3>
      {
        (
          JSON.parse(
            localStorage.getItem("quizHistory")
          ) || []
        ).length
      }
    </h3>
    <p>Quizzes Taken</p>
  </div>

  <div className="stat-card">
    <h3>
      {(() => {
        const history =
          JSON.parse(
            localStorage.getItem("quizHistory")
          ) || [];

        if (history.length === 0) return 0;

        const avg =
          history.reduce(
            (sum, item) =>
              sum + item.percentage,
            0
          ) / history.length;

        return Math.round(avg);
      })()}
      %
    </h3>
    <p>Average Score</p>
  </div>
</div>

          <button
            className="hero-btn"
            onClick={() => navigate("/categories")}
          >
            Start Quiz
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;