import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function Leaderboard() {
  const [leaderboard, setLeaderboard] =
    useState([]);

  useEffect(() => {
    fetch(
      "http://localhost:5000/api/leaderboard"
    )
      .then((res) => res.json())
      .then((data) =>
        setLeaderboard(data)
      )
      .catch((err) =>
        console.log(err)
      );
  }, []);

  return (
    <>
      <Navbar />

      <div className="quiz-container">
        <h1>🏆 Leaderboard</h1>

        {leaderboard.length === 0 ? (
          <p>No quiz attempts yet.</p>
        ) : (
          leaderboard.map(
            (item, index) => (
              <div
                key={item._id}
                className="leaderboard-card"
              >
                <h3>
                  #{index + 1}
                </h3>

                <p>
                  Name:
                  {" "}
                  {item.userId?.name}
                </p>

                <p>
                  Category:
                  {" "}
                  {item.category}
                </p>

                <p>
                  Score:
                  {" "}
                  {item.score}/
                  {item.totalQuestions}
                </p>
              </div>
            )
          )
        )}
      </div>
    </>
  );
}

export default Leaderboard;