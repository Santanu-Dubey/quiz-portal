import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function History() {
  const [history, setHistory] =
    useState([]);

  useEffect(() => {
    const currentUser = JSON.parse(
      localStorage.getItem("currentUser")
    );

    if (!currentUser) return;

    fetch(
      `http://localhost:5000/api/results/user/${currentUser.id}`
    )
      .then((res) => res.json())
      .then((data) => setHistory(data))
      .catch((err) =>
        console.log(err)
      );
  }, []);

  return (
    <>
      <Navbar />

      <div className="quiz-container">
        <h1>📜 Quiz History</h1>

        {history.length === 0 ? (
          <p>No quiz attempts yet.</p>
        ) : (
          history.map((item) => (
            <div
              key={item._id}
              className="review-card"
            >
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

              <p>
                Date:
                {" "}
                {new Date(
                  item.createdAt
                ).toLocaleString()}
              </p>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default History;