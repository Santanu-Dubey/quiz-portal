import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

function Navbar() {
  return (
    <nav className="navbar">
      
      <h2>QuizMaster</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
        <DarkModeToggle />
    </nav>
  );
}

export default Navbar;