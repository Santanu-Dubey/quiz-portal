import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

 const handleLogin = async () => {
  try {
    const response = await fetch(
      "http://localhost:5000/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      alert(data.message);
      return;
    }

    localStorage.setItem(
      "token",
      data.token
    );

    localStorage.setItem(
      "currentUser",
      JSON.stringify(data.user)
    );

    alert("Login Successful");

    navigate("/categories");
  } catch (error) {
    console.error(error);

    alert(
      "Unable to connect to server"
    );
  }
};

  return (
    <>
      <Navbar />

      <div className="auth-container">
        <div className="auth-card">
          <h1>Login</h1>

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;