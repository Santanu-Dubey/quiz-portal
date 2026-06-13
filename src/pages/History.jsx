import Navbar from "../components/Navbar";

function History() {
  const history =
    JSON.parse(localStorage.getItem("quizHistory")) || [];

  return (
    <>
      <Navbar />

      <div className="quiz-container">
        <h1>🏆 Quiz History</h1>

        {history.length === 0 ? (
          <p>No quiz attempts yet.</p>
        ) : (
          history.map((item, index) => (
            <div
              key={index}
              className="review-card"
            >
              <p>
                Score: {item.score}/{item.total}
              </p>

              <p>
                Percentage: {item.percentage}%
              </p>

              <p>
                Date: {item.date}
              </p>
              <button
  className="next-btn"
  onClick={() => {
    localStorage.removeItem("quizHistory");
    window.location.reload();
  }}
>
  Clear History
</button>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default History;