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

{!currentUser && (
  <>
    <Link to="/login">Login</Link>
    <Link to="/register">Register</Link>
  </>
)}

<Link to="/history">History</Link>
      </div>

      <div className="nav-right">
        {currentUser && (
          <span>
            Welcome, {currentUser.name}
          </span>
        )}

        {currentUser && (
          <button
            onClick={() => {
              localStorage.removeItem(
                "currentUser"
              );
              window.location.reload();
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