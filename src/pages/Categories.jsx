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
           onClick={() =>
  navigate("/quiz", {
    state: { category: "gk" },
  })
}
          >
             🧠 General Knowledge
          </button>

          <button
            className="category-btn"
           onClick={() =>
  navigate("/quiz", {
    state: { category: "programming" },
  })
}
          >
             💻 Programming
          </button>

          <button
            className="category-btn"
            onClick={() =>
  navigate("/quiz", {
    state: { category: "science" },
  })
}
          >
          🔬 Science
          </button>



        </div>
      </div>
    </>
  );
}

export default Categories;