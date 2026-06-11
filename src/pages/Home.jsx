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