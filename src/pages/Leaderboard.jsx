import Navbar from "../components/Navbar";

function Leaderboard() {
  const history =
    JSON.parse(
      localStorage.getItem("quizHistory")
    ) || [];

  const sortedHistory = [...history].sort(
    (a, b) => b.score - a.score
  );

  return (
    <>
      <Navbar />

      <div className="quiz-container">
        <h1>🏆 Leaderboard</h1>

        {sortedHistory.length === 0 ? (
          <p>No quiz attempts yet.</p>
        ) : (
          sortedHistory.map((item, index) => (
            <div
              key={index}
              className="leaderboard-card"
            >
              <h3>
                #{index + 1}
              </h3>

              <p>
                Score: {item.score}
              </p>

              <p>
                Percentage:
                {item.percentage}%
              </p>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Leaderboard;