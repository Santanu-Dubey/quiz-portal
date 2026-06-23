import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

function Navbar() {
  const currentUser = JSON.parse(
    localStorage.getItem("currentUser")
  );

  return (
    <nav className="navbar">
      <h2>QuizMaster</h2>

      <div className="nav-links">
  <Link to="/">Home</Link>

  {currentUser && (
    <>
      <Link to="/categories">
        Categories
      </Link>

      <Link to="/history">
        History
      </Link>

      <Link to="/leaderboard">
        Leaderboard
      </Link>

      <Link to="/profile">
        Profile
      </Link>
    </>
  )}

  {!currentUser && (
    <>
      <Link to="/login">
        Login
      </Link>

      <Link to="/register">
        Register
      </Link>
    </>
  )}
</div>

      <div className="nav-right">
        {currentUser && (
       <span className="welcome-user">
  👋 Welcome, {currentUser.name}
</span>
        )}

        {currentUser && (
         <button
  className="logout-btn"
  onClick={() => {
    localStorage.removeItem(
      "currentUser"
    );
    window.location.href = "/";
  }}
>
  Logout
</button>
        )}

        <DarkModeToggle />
      </div>
    </nav>
  );
}

export default Navbar;