import Navbar from "../components/Navbar";

function Categories() {
  return (
    <>
      <Navbar />

      <div className="quiz-container">
        <h1>Select a Category</h1>

        <div className="category-grid">
          <button className="category-btn">
            General Knowledge
          </button>

          <button className="category-btn">
            Programming
          </button>

          <button className="category-btn">
            Science
          </button>
        </div>
      </div>
    </>
  );
}

export default Categories;