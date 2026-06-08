import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <Navbar />

      <div className="hero">
        <h1>Welcome to QuizMaster</h1>

        <p>
          Create quizzes, challenge friends, and test your knowledge.
        </p>

        <div className="quiz-card">
          <h2>General Knowledge Quiz</h2>

          <p>
            10 Questions • 10 Minutes • Beginner Level
          </p>

          <Link to="/quiz">
            <button className="hero-btn">
              Start Quiz
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;