import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Categories() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="quiz-container">
        <h1>Select a Category</h1>

        <div className="category-grid">
          <button
            className="category-btn"
            onClick={() => navigate("/quiz")}
          >
            General Knowledge
          </button>

          <button
            className="category-btn"
            onClick={() => navigate("/quiz")}
          >
            Programming
          </button>

          <button
            className="category-btn"
            onClick={() => navigate("/quiz")}
          >
            Science
          </button>
        </div>
      </div>
    </>
  );
}

export default Categories;