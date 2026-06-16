import Navbar from "../components/Navbar";

function Profile() {
  const user = JSON.parse(
    localStorage.getItem("currentUser")
  );

  const history =
    JSON.parse(
      localStorage.getItem("quizHistory")
    ) || [];

  const highScore =
    localStorage.getItem("highScore") || 0;

  const averageScore =
    history.length > 0
      ? Math.round(
          history.reduce(
            (sum, item) =>
              sum + item.percentage,
            0
          ) / history.length
        )
      : 0;

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
            🏆 High Score: {highScore}
          </p>

          <p>
            📝 Quizzes Taken:
            {history.length}
          </p>

          <p>
            📊 Average Score:
            {averageScore}%
          </p>
        </div>
      </div>
    </>
  );
}

export default Profile;