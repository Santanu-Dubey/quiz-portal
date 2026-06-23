import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function Profile() {
  const user = JSON.parse(
    localStorage.getItem("currentUser")
  );

  const [stats, setStats] = useState({
    totalQuizzes: 0,
    highestScore: 0,
    averageScore: 0,
  });

  useEffect(() => {
    if (!user) return;

    fetch(
      `http://localhost:5000/api/results/stats/${user.id}`
    )
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err) =>
        console.log(err)
      );
  }, [user]);

  return (
    <>
      <Navbar />

      <div className="quiz-container">
        <h1>👤 My Profile</h1>

        <div className="profile-card">
          <h2>{user?.name}</h2>

          <p>{user?.email}</p>

          <hr />

          <p>
            🏆 Highest Score:
            {" "}
            {stats.highestScore}
          </p>

          <p>
            📝 Quizzes Taken:
            {" "}
            {stats.totalQuizzes}
          </p>

          <p>
            📊 Average Score:
            {" "}
            {stats.averageScore}
          </p>
        </div>
      </div>
    </>
  );
}

export default Profile;